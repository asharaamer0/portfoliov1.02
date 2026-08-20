import { NextResponse } from "next/server";
import { Resend } from "resend";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const recipient = process.env.CONTACT_EMAIL;
  const sender = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !recipient || !sender) {
    console.error("Contact form email configuration is incomplete.");
    return NextResponse.json(
      { error: "Email delivery is not configured." },
      { status: 503 },
    );
  }

  let payload: {
    name?: unknown;
    email?: unknown;
    budget?: unknown;
    message?: unknown;
  };

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const budget = typeof payload.budget === "string" ? payload.budget.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";

  if (
    !name ||
    !email ||
    !emailPattern.test(email) ||
    !budget ||
    !message
  ) {
    return NextResponse.json(
      { error: "Please complete all fields with valid information." },
      { status: 400 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: sender,
      to: recipient,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Budget: ${budget}`,
        "",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend rejected contact form email:", error);
      return NextResponse.json(
        { error: "The message could not be delivered. Please try again." },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Contact form email delivery failed:", error);
    return NextResponse.json(
      { error: "The message could not be delivered. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
