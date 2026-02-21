import Link from "next/link";
import NavBar from "../components/NavBar";
import ScrollReveal from "../components/ScrollReveal";
import AnimatedStats from "../components/AnimatedStats";
import basePath from "../../lib/basePath";

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const metadata = {
  title: "About | Nexus AI for Jira Service Management",
  description: "Built by Atlassian consultants with over a decade of real-world ITSM implementations. Every feature in Nexus AI exists because we lived the pain firsthand.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <NavBar
        links={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "About", href: "/about", active: true },
        ]}
        ctaHref="/#contact"
        ctaLabel="Contact Us"
      />

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}/>
        <div className="absolute inset-0 mx-auto max-w-[1280px]" style={{ borderLeft: "1px dashed rgba(255,255,255,0.12)", borderRight: "1px dashed rgba(255,255,255,0.12)" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full mb-6"
                style={{ background: "rgba(126,124,222,0.15)", color: "#7E7CDE", border: "1px solid rgba(126,124,222,0.3)" }}>
            About Us
          </span>
          <h1 className="text-white mb-6" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.04em" }}>
            We Don&apos;t Guess
            <br />
            <span style={{ color: "rgba(255,255,255,0.4)" }}>What Your Problems Are.</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>
            We spent the last decade inside JSM implementations, triaging thousands of tickets, building workflows, and watching the same problems drain budgets year after year. Nexus AI is what we wished existed.
          </p>
        </div>
      </section>

      {/* ══════════════════ ORIGIN STORY ══════════════════ */}
      <section className="py-20 md:py-28 geo-pattern">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-16">
              <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#EC8546" }}>OUR ORIGIN</span>
              <h2 className="mt-4 mb-6" style={{ color: "var(--navy)", fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: "-0.03em" }}>
                Born From the Trenches, Not a Boardroom.
              </h2>
              <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--grey)" }}>
                <p>
                  We are Atlassian consultants. For over a decade, we implemented Jira Service Management for enterprises across industries. We configured service desks, designed ITIL-aligned processes, built custom workflows, developed plugins, and trained teams on ITSM best practices.
                </p>
                <p>
                  We watched the same patterns repeat in every engagement. Tickets misrouted because users picked the wrong category. Agents spending half their day chasing incomplete information. Portals that confused users so badly they picked up the phone instead. Escalations that could have been prevented if someone had noticed the frustration three days earlier.
                </p>
                <p>
                  We know these problems are not edge cases. They are systemic. And they cost real money. We have seen the spreadsheets, the SLA reports, the frustrated executives. Every number in our ROI calculator comes from implementations we lived through.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="rounded-xl p-8 md:p-10 mb-16" style={{ background: "rgba(43,46,216,0.04)", border: "1px dashed var(--border)" }}>
              <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--blue-cta)" }}>OUR TRACK RECORD</span>
              <AnimatedStats stats={[
                { target: 10, suffix: "+", label: "Years of Atlassian consulting" },
                { target: 200, suffix: "+", label: "JSM implementations delivered" },
                { target: 50, suffix: "+", label: "Enterprise clients served" },
              ]} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════ PHILOSOPHY ══════════════════ */}
      <section className="relative py-20 md:py-28" style={{ background: "var(--navy)" }}>
        <div className="absolute inset-0 mx-auto max-w-[1280px]" style={{ borderLeft: "1px dashed rgba(255,255,255,0.08)", borderRight: "1px dashed rgba(255,255,255,0.08)" }} />
        <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#7E7CDE" }}>OUR PHILOSOPHY</span>
            <h2 className="text-white mt-4 mb-10" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: "-0.03em" }}>
              Every Cent You Spend
              <br />
              <span style={{ color: "rgba(255,255,255,0.35)" }}>Must Be Justified.</span>
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "ROI-first, always",
                desc: "We do not ship features to pad a marketing page. Every capability in Nexus AI maps to a measurable cost reduction. If we cannot show the math, we do not build it.",
                color: "#EC8546",
              },
              {
                title: "No bloat, no noise",
                desc: "This is not another plugin that clutters your Jira with things you do not need. We obsess over doing fewer things exceptionally well. Every screen earns its place.",
                color: "#7E7CDE",
              },
              {
                title: "Built for your CFO",
                desc: "Our ROI calculator uses conservative estimates that survive scrutiny. We show our assumptions, our sources, and let you adjust every number. Transparency is not optional.",
                color: "#51A2E7",
              },
              {
                title: "Efficiency is the product",
                desc: "We are not selling AI for the sake of AI. We are selling hours back to your agents, money back to your budget, and sanity back to your users. AI is just the mechanism.",
                color: "#2BC48A",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 100}>
                <div className="rounded-xl p-8 h-full" style={{ background: "rgba(255,255,255,0.04)", border: "1px dashed rgba(255,255,255,0.1)" }}>
                  <div className="w-2 h-2 rounded-full mb-4" style={{ background: card.color }} />
                  <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ WHAT MAKES US DIFFERENT ══════════════════ */}
      <section className="relative py-20 md:py-28" style={{ background: "var(--hero-gradient)" }}>
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}/>
        <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#EC8546" }}>THE DIFFERENCE</span>
            <h2 className="text-white mt-4 mb-12" style={{ fontSize: "clamp(28px, 3.5vw, 44px)", lineHeight: 1.15, letterSpacing: "-0.03em" }}>
              We Built This for Ourselves First.
            </h2>
          </ScrollReveal>

          <div className="space-y-6">
            {[
              {
                contrast: ["Most AI plugins start with a technology and look for a problem.", "We started with a decade of problems and finally found the right technology."],
              },
              {
                contrast: ["Most vendors show you a demo and promise results.", "We show you a calculator with editable assumptions and let you verify every number."],
              },
              {
                contrast: ["Most plugins add complexity to your stack.", "We reduce the work your team does every single day. Fewer clicks, fewer mistakes, fewer escalations."],
              },
              {
                contrast: ["Most companies price per feature.", "We price for ROI. If you cannot justify the subscription in your first month, we failed."],
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-lg px-6 py-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px dashed rgba(255,255,255,0.1)" }}>
                    <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.3)" }}>Others</span>
                    <p className="text-sm mt-2 leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{item.contrast[0]}</p>
                  </div>
                  <div className="rounded-lg px-6 py-5" style={{ background: "rgba(43,46,216,0.3)", border: "1px solid rgba(43,46,216,0.5)" }}>
                    <span className="text-[9px] font-bold uppercase tracking-widest" style={{ color: "#7E7CDE" }}>Nexus AI</span>
                    <p className="text-sm mt-2 leading-relaxed text-white">{item.contrast[1]}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ PROMISE ══════════════════ */}
      <section className="py-20 md:py-28 geo-pattern">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="rounded-xl p-10 md:p-14 text-center" style={{ background: "white", border: "1px dashed var(--border)", boxShadow: "0 4px 40px rgba(0,0,0,0.04)" }}>
              <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#E25656" }}>OUR PROMISE</span>
              <h2 className="mt-4 mb-6" style={{ color: "var(--navy)", fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.2, letterSpacing: "-0.03em" }}>
                If You Cannot Measure It, We Will Not Sell It.
              </h2>
              <p className="text-base leading-relaxed max-w-xl mx-auto mb-8" style={{ color: "var(--grey)" }}>
                Every feature we build maps to a line item in your budget. We publish our ROI methodology, let you adjust every assumption, and stand behind the numbers. Your CFO should be as impressed as your IT team.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/#roi-calculator" className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-white px-7 py-3.5 rounded" style={{ background: "var(--blue-cta)" }}>
                  Calculate Your ROI <ArrowIcon />
                </Link>
                <Link href="/#contact" className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wider px-7 py-3.5 rounded" style={{ color: "var(--navy)", border: "1px solid var(--border)" }}>
                  Request a Demo <ArrowIcon />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════ FOOTER ══════════════════ */}
      <footer style={{ background: "var(--navy-deep)" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={`${basePath}/ai-portal-logo-200.png`} alt="Nexus AI" style={{ height: 20, opacity: 0.7 }} />
            <span className="font-bold text-white text-xs uppercase tracking-wider" style={{ opacity: 0.7 }}>Nexus AI</span>
          </div>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
            &copy; 2026 Nexus AI. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
