import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, getPostSlugs } from "../data";
import BlogContent from "./BlogContent";
import NavBar from "../../components/NavBar";
import basePath from "../../../lib/basePath";

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // We need to handle the async params for Next.js 16
  // For static generation, this works synchronously in practice
  return {
    title: "Blog | AI Portal",
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const allPosts = getAllPosts().filter((p) => p.slug !== slug);

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <NavBar
        links={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
        ctaHref="/#contact"
        ctaLabel="Contact Us"
      />

      {/* Hero */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16" style={{ background: "var(--hero-gradient)" }}>
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-8 transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: post.tagColor }}>
              {post.tag}
            </span>
            <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>{post.readTime}</span>
          </div>
          <h1 className="text-white mb-4" style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
            {post.title}
          </h1>
          <p className="text-base" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
            {post.subtitle}
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 md:py-16">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <BlogContent content={post.content} tagColor={post.tagColor} />
        </div>
      </section>

      {/* Related posts */}
      <section className="py-12 md:py-16 geo-pattern" style={{ borderTop: "1px dashed var(--border)" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <h2 className="font-bold mb-8" style={{ color: "var(--navy)", fontSize: 24, letterSpacing: "-0.02em" }}>Continue Reading</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {allPosts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                <article className="h-full rounded-lg p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg"
                  style={{ background: "white", border: "1px dashed var(--border)" }}>
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: p.tagColor }}>{p.tag}</span>
                  <h3 className="text-sm font-bold mt-2 mb-2 transition-colors group-hover:text-[var(--blue-cta)]" style={{ color: "var(--navy)", lineHeight: 1.3 }}>
                    {p.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider" style={{ color: p.tagColor }}>
                    Read <ArrowIcon />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "var(--navy-deep)" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={`${basePath}/valiantys-logo-white.svg`} alt="Valiantys" style={{ height: 16, opacity: 0.5 }} />
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 14, fontWeight: 300 }}>|</span>
            <img src={`${basePath}/ai-portal-logo.png`} alt="AI Portal" style={{ height: 20, opacity: 0.7 }} />
            <span className="font-bold text-white text-xs uppercase tracking-wider" style={{ opacity: 0.7 }}>AI Portal</span>
          </div>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>&copy; 2026 Valiantys. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
