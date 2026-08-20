import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/app/data/articles";
import ArticleLayout from "@/app/components/ArticleLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} | Ashar Aamer`,
    description: article.excerpt,
  };
}

function renderMarkdownLinks(text: string) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    const [fullMatch, label, href] = match;
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <Link
        key={match.index}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#ed6b4e] transition-colors hover:underline"
      >
        {label}
      </Link>
    );
    lastIndex = match.index + fullMatch.length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
}

export default async function DesignThoughtPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <ArticleLayout
      title={article.title}
      date={article.date}
      readTime={article.readTime}
      image={article.image}
    >
      {article.content.split("\n\n").map((paragraph, index) => {
        const isHeading = paragraph.length < 80 && !paragraph.includes(".");
        if (isHeading) {
          return (
            <h2
              key={index}
              className="mb-4 mt-10 text-2xl font-bold text-white"
            >
              {paragraph}
            </h2>
          );
        }

        // Handle list items like "Templyo — ..." or "PostWing — ..."
        if (paragraph.includes("\n")) {
          const lines = paragraph.split("\n");
          return (
            <div key={index} className="mb-6">
              {lines.map((line, lineIndex) => {
                if (line.includes(" — ")) {
                  const [name, ...restParts] = line.split(" — ");
                  const rest = restParts.join(" — ");
                  return (
                    <p key={lineIndex} className="mb-2 text-[#b0b0b0]">
                      <strong className="text-white">{name}</strong> —{" "}
                      {renderMarkdownLinks(rest)}
                    </p>
                  );
                }
                return (
                  <p key={lineIndex} className="mb-2 text-[#b0b0b0]">
                    {renderMarkdownLinks(line)}
                  </p>
                );
              })}
            </div>
          );
        }

        return (
          <p key={index} className="mb-6 text-[#b0b0b0]">
            {renderMarkdownLinks(paragraph)}
          </p>
        );
      })}
    </ArticleLayout>
  );
}
