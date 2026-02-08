import Link from "next/link";
import { getAllPosts } from "./data";

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const metadata = {
  title: "Blog | AI Portal for Jira Service Management",
  description: "Data-driven insights on IT service desk costs, ticket quality, portal abandonment, and language barriers in enterprise support.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(23, 24, 87, 0.95)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 md:px-12 py-4">
          <Link href="/" className="flex items-center gap-3">
            <img src="/valiantys-logo-white.svg" alt="Valiantys" style={{ height: 22 }} />
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 18, fontWeight: 300 }}>|</span>
            <span className="text-white font-bold text-sm uppercase tracking-wider">AI Portal</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#pain-points" className="text-sm font-semibold uppercase tracking-wider transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.85)" }}>Home</Link>
            <span className="text-sm font-semibold uppercase tracking-wider text-white">Blog</span>
          </div>
          <Link href="/#contact" className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-white px-5 py-2.5 rounded" style={{ background: "var(--blue-cta)" }}>
            Contact Us <ArrowIcon />
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20" style={{ background: "var(--hero-gradient)" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full mb-6"
                style={{ background: "rgba(236,133,70,0.15)", color: "#EC8546", border: "1px solid rgba(236,133,70,0.3)" }}>
            Research & Insights
          </span>
          <h1 className="text-white mb-4" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.04em" }}>
            The Hidden Costs of
            <br />
            <span style={{ color: "rgba(255,255,255,0.4)" }}>Your Service Portal.</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
            Data-driven analysis of the four most expensive problems in enterprise IT service management — backed by research from Gartner, MetricNet, HappySignals, and more.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 md:py-24 geo-pattern">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <article className="h-full rounded-xl p-8 md:p-10 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl"
                  style={{ background: "white", border: "1px dashed var(--border)" }}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: post.tagColor }}>
                      {post.tag}
                    </span>
                    <span className="text-[11px]" style={{ color: "var(--grey)" }}>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold mb-3 transition-colors group-hover:text-[var(--blue-cta)]" style={{ color: "var(--navy)", fontSize: "clamp(18px, 2vw, 22px)", lineHeight: 1.25, letterSpacing: "-0.02em" }}>
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--grey)" }}>
                    {post.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-colors group-hover:gap-2.5" style={{ color: post.tagColor }}>
                    Read article <ArrowIcon />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: "var(--navy)" }}>
        <div className="max-w-[800px] mx-auto px-6 md:px-12 text-center">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4" style={{ letterSpacing: "-0.03em" }}>
            Ready to Eliminate These Costs?
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
            AI Portal fixes misrouting, incomplete tickets, portal abandonment, and language barriers — all from a single conversational interface on your JSM portal.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/#roi-calculator" className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-white px-7 py-3.5 rounded" style={{ background: "var(--blue-cta)" }}>
              Calculate Your ROI <ArrowIcon />
            </Link>
            <Link href="/#contact" className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-white px-7 py-3.5 rounded" style={{ border: "1px solid rgba(255,255,255,0.3)" }}>
              Request a Demo <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "var(--navy-deep)" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/valiantys-logo-white.svg" alt="Valiantys" style={{ height: 16, opacity: 0.5 }} />
            <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 14, fontWeight: 300 }}>|</span>
            <span className="font-bold text-white text-xs uppercase tracking-wider" style={{ opacity: 0.7 }}>AI Portal</span>
          </div>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            &copy; 2026 Valiantys. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
