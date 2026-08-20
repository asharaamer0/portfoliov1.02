export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

export const articles: Article[] = [
  {
    slug: "starting-and-growing-a-career-in-web-design",
    title: "Starting and Growing a Career in Web Design",
    excerpt:
      "As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development.",
    date: "Apr 8, 2022",
    readTime: "6min read",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    content: `As the internet continues to develop and grow exponentially, jobs related to the industry do too, particularly those that relate to web design and development. The prediction is that by 2029, the job outlook for these two fields will grow by 8%—significantly faster than average. Whether you're seeking salaried employment or aiming to work in a freelance capacity, a career in web design can offer a variety of employment arrangements, competitive salaries, and opportunities to utilize both technical and creative skill sets.

What does a career in web design involve?
A career in website design can involve the design, creation, and coding of a range of website types. Other tasks will typically include liaising with clients and discussing website specifications, incorporating feedback, working on graphic design and image editing, and enabling multimedia features such as audio and video. Requiring a range of creative and technical skills, web designers may be involved in work across a range of industries, including software companies, IT consultancies, web design companies, corporate organizations, and more.

In contrast with web developers, web designers tend to play a more creative role, crafting the overall vision and design of a site, and determining how to best incorporate the necessary functionality. However, there can be significant overlap between the roles.

Full-stack, back-end, and front-end web development
The U.S. Bureau of Labor Statistics (BLS) Occupational Outlook Handbook tends to group web developers and digital designers into one category. However, they define them separately, stating that web developers create and maintain websites and are responsible for the technical aspects including performance and capacity. Web or digital designers, on the other hand, are responsible for the look and functionality of websites and interfaces. They develop, create, and test the layout, functions, and navigation for usability.

Web developers can focus on the back-end, front-end, or full-stack development, and typically utilize a range of programming languages, libraries, and frameworks to do so. Web designers may work more closely with front-end engineers to establish the user-end functionality and appearance of a site.

Are web designers in demand?
In our ever-increasingly digital environment, there is a constant need for websites—and therefore for web designers and developers. With 17.4 billion websites in existence as of January 2020, the demand for web developers is only expected to rise. Web designers with significant coding experience are typically in higher demand and can usually expect a higher salary. Like all jobs, there are likely to be a range of opportunities, some of which are better paid than others.

If you're interested in pursuing a career in web design or starting a freelance business, having a professional portfolio website is essential. You can explore ready-made web design templates tailored for showcasing your work and impressing potential clients at Templyo. These templates make it easier to create stunning websites without the need for extensive coding knowledge.

Starting Your Web Design Career Online
A strong career in web design needs two things working together: a portfolio that impresses and a presence that keeps you visible.

[Templyo](https://templyo.com) — ready-made Framer templates to build a professional portfolio without starting from scratch.

[PostWing](https://postwing.io) — schedule and manage social posts across 8 platforms from one dashboard.

Your site shows what you can build. Your social channels show you're active, credible, and worth hiring — consistently, not just when you remember to post.`,
  },
  {
    slug: "create-a-landing-page-that-performs-great",
    title: "Create a Landing Page That Performs Great",
    excerpt:
      "Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page.",
    date: "Mar 15, 2022",
    readTime: "6min read",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80",
    content: `Whether you work in marketing, sales, or product design, you understand the importance of a quality landing page. Landing pages are standalone websites used to generate leads or sales—in other words they help you increase your revenue.

A great landing page starts with a clear value proposition. Visitors should immediately understand what you offer and why it matters to them. Keep the headline concise, the supporting copy focused, and the call-to-action prominent.

Design also plays a critical role. Use plenty of white space, choose a readable typeface, and make sure your primary button stands out. Visual hierarchy guides the eye toward the most important elements and reduces friction for the user.

Finally, test and iterate. Small changes to headlines, buttons, and imagery can have a big impact on conversion rates. Use analytics and user feedback to keep improving your page over time.`,
  },
  {
    slug: "how-can-designers-prepare-for-the-future",
    title: "How Can Designers Prepare for the Future?",
    excerpt:
      "Design is constantly evolving. Here is how you can stay ahead of the curve and future-proof your creative career.",
    date: "Feb 28, 2022",
    readTime: "6min read",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
    content: `Design is constantly evolving. Here is how you can stay ahead of the curve and future-proof your creative career.

First, keep learning. New tools, frameworks, and design patterns emerge every year. Set aside time to experiment with them, even if they are not part of your day-to-day work.

Second, build a strong foundation. Trends come and go, but principles like typography, color theory, and user psychology remain valuable. Mastering the basics will help you adapt to any new medium.

Third, collaborate across disciplines. The best designers understand development, marketing, and product strategy. The more you can speak the language of your teammates, the more impactful your work will be.

Finally, share what you know. Teaching, writing, and speaking not only help others, they also sharpen your own thinking and open up new opportunities.`,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}
