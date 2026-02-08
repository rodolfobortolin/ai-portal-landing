import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  tagColor: string;
  readTime: string;
  content: string;
}

const posts: Omit<BlogPost, "content">[] = [
  {
    slug: "ticket-misrouting-hidden-cost",
    title: "23% of Your Tickets Go to the Wrong Team. Each One Wastes 109 Minutes.",
    subtitle: "The silent budget drain that no one tracks — but every support organization pays for.",
    tag: "MISROUTING",
    tagColor: "#EC8546",
    readTime: "8 min read",
  },
  {
    slug: "incomplete-tickets-cost",
    title: "80% of Your Lost Productivity Comes From Just 12.6% of Tickets.",
    subtitle: "The incomplete ticket problem is smaller than you think — and more expensive than you imagine.",
    tag: "INCOMPLETE",
    tagColor: "#7E7CDE",
    readTime: "7 min read",
  },
  {
    slug: "portal-abandonment-crisis",
    title: "Only 14% of Self-Service Issues Get Resolved. Your Portal Has a $104M Problem.",
    subtitle: "Gartner published the number. CIO Magazine quantified the fallout.",
    tag: "ABANDONMENT",
    tagColor: "#C27EEA",
    readTime: "9 min read",
  },
  {
    slug: "language-barriers-enterprise-cost",
    title: "Your Global Team Speaks 12 Languages. Your Portal Speaks One.",
    subtitle: "49% of global executives report annual losses of $8–11M from language barriers.",
    tag: "LANGUAGE",
    tagColor: "#51A2E7",
    readTime: "9 min read",
  },
];

export function getAllPosts(): BlogPost[] {
  return posts.map((post) => {
    const filePath = path.join(process.cwd(), "content", "blog", `${post.slug}.md`);
    const content = fs.readFileSync(filePath, "utf-8");
    // Remove the first H1 line and the subtitle line (already in metadata)
    const lines = content.split("\n");
    const bodyStart = lines.findIndex((l, i) => i > 0 && l.startsWith("---"));
    const body = bodyStart > 0 ? lines.slice(bodyStart + 1).join("\n").trim() : lines.slice(3).join("\n").trim();
    return { ...post, content: body };
  });
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const all = getAllPosts();
  return all.find((p) => p.slug === slug);
}

export function getPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}
