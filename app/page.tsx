import Link from "next/link";
import ROICalculator from "./components/ROICalculator";
import ScrollReveal from "./components/ScrollReveal";
import NavBar from "./components/NavBar";
import DemoModalTrigger from "./components/DemoModalTrigger";
import FeatureNav from "./components/FeatureNav";
import basePath from "../lib/basePath";

/* ── SVG Icons ── */
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="var(--blue-cta)" fillOpacity="0.12"/>
    <path d="M5.5 9.5l2 2 5-5" stroke="var(--blue-cta)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CrossIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="#E8E8E8"/>
    <path d="M6 6l6 6M12 6l-6 6" stroke="var(--grey)" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const PartialIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <circle cx="9" cy="9" r="9" fill="var(--orange)" fillOpacity="0.15"/>
    <path d="M6 9h6" stroke="var(--orange)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* ══════════════════ NAVIGATION ══════════════════ */}
      <NavBar
        links={[
          { label: "Problem", href: "#pain-points" },
          { label: "Features", href: "#features" },
          { label: "ROI Calculator", href: "#roi-calculator" },
          { label: "Compare", href: "#comparison" },
          { label: "Blog", href: "/blog" },
        ]}
        ctaHref="#contact"
        ctaLabel="Contact Us"
      />

      {/* ══════════════════ HERO ══════════════════ */}
      <DemoModalTrigger />

      {/* ══════════════════ SOCIAL PROOF STATS ══════════════════ */}
      <section className="relative py-0 z-10" style={{ background: "var(--navy)" }}>
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { number: "23%", label: "of tickets are routed to the wrong team", source: "BMC", color: "#EC8546" },
            { number: "86%", label: "of self-service attempts fail without human intervention", source: "Gartner", color: "#7E7CDE" },
            { number: "9x", label: "the cost of an escalated ticket vs. a normally resolved one", source: "HDI", color: "#51A2E7" },
            { number: "67%", label: "of frustrated customers leave before their issue is resolved", source: "Qualtrics", color: "#C27EEA" },
          ].map((stat, i) => (
            <ScrollReveal key={stat.number} delay={i * 100}>
              <div className="py-10 px-6 md:px-8 text-center" style={{ borderRight: i < 3 ? "1px dashed rgba(255,255,255,0.1)" : "none" }}>
                <p className="text-3xl md:text-4xl font-bold tabular-nums" style={{ color: stat.color }}>{stat.number}</p>
                <p className="text-xs mt-2 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{stat.label}</p>
                <p className="text-[10px] mt-1.5 uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.25)" }}>{stat.source}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ══════════════════ PAIN POINTS ══════════════════ */}
      <section id="pain-points" className="py-20 md:py-28 geo-pattern">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full mb-6"
                    style={{ background: "rgba(43,46,216,0.08)", color: "var(--blue-cta)" }}>
                The Problem
              </span>
              <h2 style={{ color: "var(--navy)" }}>
                The Hidden Cost of
                <br />
                Your Portal.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ border: "1px dashed var(--border)" }}>
            {[
              {
                tag: "MISROUTING", tagColor: "#EC8546", hoverBg: "#EC8546",
                title: "Wrong Team, Every Time",
                stat: "$27K/yr wasted",
                desc: "23% of tickets land in the wrong queue. Each one wastes 45 minutes of agent time on rerouting, reclassification, and rework.",
                blogUrl: "/blog/ticket-misrouting-hidden-cost",
              },
              {
                tag: "INCOMPLETE", tagColor: "#7E7CDE", hoverBg: "#7E7CDE",
                title: "Garbage In, Delays Out",
                stat: "30% need clarification",
                desc: "Agents spend 15+ minutes per ticket chasing users for missing information. 80% of lost productivity comes from just 12.6% of tickets.",
                blogUrl: "/blog/incomplete-tickets-cost",
              },
              {
                tag: "ABANDONMENT", tagColor: "#C27EEA", hoverBg: "#C27EEA",
                title: "52% Just Give Up",
                stat: "Only 14% resolved",
                desc: "After 10 minutes of searching, half your users abandon the portal. They call, email, or use shadow IT, none of which you can track.",
                blogUrl: "/blog/portal-abandonment-crisis",
              },
              {
                tag: "LANGUAGE", tagColor: "#51A2E7", hoverBg: "#51A2E7",
                title: "$11M Lost to Barriers",
                stat: "49% of executives affected",
                desc: "Multilingual teams write tickets in broken English. Critical context is lost. Agents guess. Resolution times double.",
                blogUrl: "/blog/language-barriers-enterprise-cost",
              },
              {
                tag: "ESCALATION", tagColor: "#E25656", hoverBg: "#E25656",
                title: "9x More Expensive",
                stat: "67% churn silently",
                desc: "Every escalated ticket costs 9x more than a normally resolved one. Worse, 67% of frustrated customers don't escalate at all. They just leave.",
                blogUrl: "/blog/escalation-cost-analysis",
              },
              {
                tag: "LATE DETECTION", tagColor: "#1B9E6B", hoverBg: "#1B9E6B",
                title: "Agents See It Too Late",
                stat: "3 seconds vs. 3 days",
                desc: "By the time an agent notices a frustrated customer, the damage is done. AI can detect negative sentiment in 3 seconds. Most teams take 3 days.",
                blogUrl: "/blog/proactive-escalation-prevention",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.tag} delay={i * 100}>
                <div className="pain-card p-8 md:p-10 h-full group"
                  style={{
                    borderRight: (i % 3 !== 2) ? "1px dashed var(--border)" : "none",
                    borderBottom: i < 3 ? "1px dashed var(--border)" : "none",
                    "--card-color": card.tagColor,
                    "--card-hover-bg": card.hoverBg,
                  } as React.CSSProperties}>
                  <span className="pain-card__tag text-[11px] font-bold uppercase tracking-widest">{card.tag}</span>
                  <h3 className="pain-card__title mt-3 mb-2 font-bold">{card.title}</h3>
                  <p className="pain-card__stat text-sm font-semibold mb-3">{card.stat}</p>
                  <p className="pain-card__desc text-sm leading-relaxed">{card.desc}</p>
                  <Link href={card.blogUrl} className="pain-card__link inline-flex items-center gap-1.5 mt-5 text-xs font-semibold uppercase tracking-wider transition-colors">
                    Learn more
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ FEATURES ══════════════════ */}
      <section id="features" className="py-20 md:py-28 geo-pattern">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full mb-6"
                    style={{ background: "rgba(43,46,216,0.08)", color: "var(--blue-cta)" }}>
                Features
              </span>
              <h2 style={{ color: "var(--navy)" }}>
                Built for Enterprise
                <br />
                Service Management.
              </h2>
            </div>
          </ScrollReveal>

          {/* Feature quick-nav pills */}
          <ScrollReveal delay={50}>
            <FeatureNav />
          </ScrollReveal>

          {/* Feature 1 — Portal Assistant */}
          <ScrollReveal delay={100}>
            <div id="feat-portal" className="grid lg:grid-cols-2 gap-12 items-center py-16 mb-8 scroll-mt-24" style={{ borderBottom: "1px dashed var(--border)" }}>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#7E7CDE" }}>PORTAL ASSISTANT</span>
                <h2 className="mt-4 mb-5" style={{ color: "var(--navy)", fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  {"Chat. Describe.\nDone.".split("\n").map((line, i) => <span key={i}>{line}<br/></span>)}
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "var(--grey)" }}>
                  Users click the chat button and describe what they need in plain language. The AI identifies the right service desk, matches the request type, reads the exact field schema, and auto-fills everything. A perfectly structured ticket appears, ready to confirm.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Natural language in any language", "Auto-detects service desk & type", "Auto-fills required fields", "Confirm before creation"].map(h => (
                    <span key={h} className="flex items-center gap-2 text-sm" style={{ color: "var(--navy)" }}>
                      <CheckIcon /> {h}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="relative w-full min-h-[420px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(126,124,222,0.06), rgba(126,124,222,0.02))", borderRadius: 12 }}>
                  <div className="flex flex-col gap-3" style={{ width: 320 }}>
                    {/* Card 1: User Chats */}
                    <div className="rounded-xl p-4 shadow-lg" style={{ background: "white", border: "1px solid var(--border)" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <svg width="16" height="16" viewBox="0 0 48 48" fill="none">
                          <path d="M8 10h24a2 2 0 012 2v16a2 2 0 01-2 2H16l-6 6v-6H8a2 2 0 01-2-2V12a2 2 0 012-2z" stroke="#7E7CDE" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#7E7CDE" }}>User Chats</span>
                      </div>
                      <p className="text-[12px] italic leading-relaxed" style={{ color: "var(--navy)" }}>
                        &quot;My laptop can&apos;t connect to the VPN from home. I&apos;ve tried restarting.&quot;
                      </p>
                      <p className="text-[11px] mt-1" style={{ color: "var(--grey)" }}>Any language, any device</p>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M7 14l5 5 5-5" stroke="#7E7CDE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>

                    {/* Card 2: AI Understands */}
                    <div className="rounded-xl p-4 shadow-lg" style={{ background: "rgba(126,124,222,0.06)", border: "1px solid rgba(126,124,222,0.2)" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="6" stroke="#7E7CDE" strokeWidth="1.5" strokeDasharray="3 2"/>
                          <circle cx="7" cy="7" r="2" fill="#7E7CDE"/>
                        </svg>
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#7E7CDE" }}>AI Understands</span>
                      </div>
                      <p className="text-[11px] leading-relaxed" style={{ color: "var(--navy)" }}>
                        Desk: <strong>IT Support</strong> &bull; Type: <strong>VPN Issue</strong>
                      </p>
                      <p className="text-[11px] mt-1" style={{ color: "var(--grey)" }}>
                        Auto-filled: Summary, Description, Priority, Component
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M7 14l5 5 5-5" stroke="#7E7CDE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>

                    {/* Card 3: Perfect Ticket */}
                    <div className="rounded-xl p-4 shadow-lg" style={{ background: "white", border: "2px solid #1B7A3E" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="6" fill="rgba(27,122,62,0.1)"/>
                          <path d="M4 7l2.5 2.5L10 5" stroke="#1B7A3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#1B7A3E" }}>Perfect Ticket</span>
                      </div>
                      <p className="text-[13px] font-semibold" style={{ color: "var(--navy)" }}>IT-2847 Created</p>
                      <p className="text-[11px] mt-1" style={{ color: "var(--grey)" }}>
                        Correct desk, correct type, all required fields populated.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 2 — Dispatcher Agent */}
          <ScrollReveal delay={100}>
            <div id="feat-dispatcher" className="grid lg:grid-cols-2 gap-12 items-center py-16 mb-8 scroll-mt-24" style={{ borderBottom: "1px dashed var(--border)" }}>
              <div className="lg:order-2">
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#EC8546" }}>DISPATCHER AGENT</span>
                <h2 className="mt-4 mb-5" style={{ color: "var(--navy)", fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  {"Right Ticket.\nRight Person. Always.".split("\n").map((line, i) => <span key={i}>{line}<br/></span>)}
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "var(--grey)" }}>
                  AI reads every incoming ticket, matches it against your team structure and member skills, then assigns it to the right person and their team. Every assignment includes a routing comment explaining the decision. No more manual triage.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Skill-based routing", "Team + person assignment", "Routing explanation comment", "Fallback to project lead"].map(h => (
                    <span key={h} className="flex items-center gap-2 text-sm" style={{ color: "var(--navy)" }}>
                      <CheckIcon /> {h}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:order-1">
                <div className="relative w-full min-h-[420px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(236,133,70,0.06), rgba(236,133,70,0.02))", borderRadius: 12 }}>
                  <div className="flex flex-col gap-3" style={{ width: 320 }}>
                    {/* Card 1: Incoming Ticket */}
                    <div className="rounded-xl p-4 shadow-lg" style={{ background: "white", border: "1px solid var(--border)" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full" style={{ background: "#EC8546" }} />
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#EC8546" }}>Incoming Ticket</span>
                      </div>
                      <p className="text-[13px] font-semibold" style={{ color: "var(--navy)" }}>VPN not connecting from home office</p>
                      <p className="text-[11px] mt-1" style={{ color: "var(--grey)" }}>IT-2847 &bull; IT Support &bull; High Priority</p>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M7 14l5 5 5-5" stroke="#EC8546" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>

                    {/* Card 2: AI Analysis */}
                    <div className="rounded-xl p-4 shadow-lg" style={{ background: "rgba(236,133,70,0.06)", border: "1px solid rgba(236,133,70,0.2)" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="6" stroke="#EC8546" strokeWidth="1.5" strokeDasharray="3 2"/>
                          <circle cx="7" cy="7" r="2" fill="#EC8546"/>
                        </svg>
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#EC8546" }}>AI Analysis</span>
                      </div>
                      <p className="text-[11px] leading-relaxed" style={{ color: "var(--navy)" }}>
                        Skills matched: <strong>VPN, Networking, Remote Access</strong>
                      </p>
                      <p className="text-[11px] mt-1" style={{ color: "var(--grey)" }}>
                        Best match: Sarah Chen (92% skill match)
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M7 14l5 5 5-5" stroke="#EC8546" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>

                    {/* Card 3: Assignment Result */}
                    <div className="rounded-xl p-4 shadow-lg" style={{ background: "white", border: "2px solid #1B7A3E" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="6" fill="rgba(27,122,62,0.1)"/>
                          <path d="M4 7l2.5 2.5L10 5" stroke="#1B7A3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#1B7A3E" }}>Assigned</span>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-[13px] font-semibold" style={{ color: "var(--navy)" }}>Sarah Chen</p>
                        <span className="text-[9px] px-1.5 py-0.5 rounded font-semibold" style={{ background: "rgba(81,162,231,0.12)", color: "#51A2E7" }}>Network Team</span>
                      </div>
                      <p className="text-[11px] mt-1 italic" style={{ color: "var(--grey)" }}>
                        &quot;Assigned to Sarah (Network Team) based on VPN and networking expertise.&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 3 — Smart Escalation */}
          <ScrollReveal delay={100}>
            <div id="feat-escalation" className="grid lg:grid-cols-2 gap-12 items-center py-16 mb-8 scroll-mt-24" style={{ borderBottom: "1px dashed var(--border)" }}>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#E25656" }}>SMART ESCALATION</span>
                <h2 className="mt-4 mb-5" style={{ color: "var(--navy)", fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  {"Detect Frustration.\nBefore It Escalates.".split("\n").map((line, i) => <span key={i}>{line}<br/></span>)}
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "var(--grey)" }}>
                  AI analyzes every customer comment in real-time, detecting negative sentiment, urgency cues, and escalation risk. When frustration is detected, automatic actions fire instantly: reassignment to senior agents, team lead notifications, and internal analysis comments. All before the customer sends their next message.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Real-time sentiment analysis", "SLA-aware escalation risk", "Automatic reassignment", "Proactive watcher alerts"].map(h => (
                    <span key={h} className="flex items-center gap-2 text-sm" style={{ color: "var(--navy)" }}>
                      <CheckIcon /> {h}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="relative w-full min-h-[420px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(226,86,86,0.06), rgba(226,86,86,0.02))", borderRadius: 12 }}>
                  <div className="flex flex-col gap-3" style={{ width: 320 }}>
                    {/* Card 1: Customer Comment */}
                    <div className="rounded-xl p-4 shadow-lg" style={{ background: "white", border: "1px solid var(--border)" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full" style={{ background: "#E25656" }} />
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#E25656" }}>Customer Comment</span>
                      </div>
                      <p className="text-[12px] italic leading-relaxed" style={{ color: "var(--navy)" }}>
                        &quot;This is the third time I&apos;m reporting this. Nobody has responded in 3 days. Completely unacceptable.&quot;
                      </p>
                      <p className="text-[11px] mt-1.5" style={{ color: "var(--grey)" }}>IT-3847 &bull; VPN Issue &bull; SLA: 78% consumed</p>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M7 14l5 5 5-5" stroke="#E25656" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>

                    {/* Card 2: AI Sentiment Analysis */}
                    <div className="rounded-xl p-4 shadow-lg" style={{ background: "rgba(226,86,86,0.06)", border: "1px solid rgba(226,86,86,0.2)" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="6" stroke="#E25656" strokeWidth="1.5" strokeDasharray="3 2"/>
                          <circle cx="7" cy="7" r="2" fill="#E25656"/>
                        </svg>
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#E25656" }}>Sentiment Analysis</span>
                      </div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] px-2 py-0.5 rounded font-bold" style={{ background: "rgba(226,86,86,0.15)", color: "#E25656" }}>CRITICAL</span>
                        <span className="text-[10px]" style={{ color: "var(--grey)" }}>Score: 0.15</span>
                      </div>
                      <p className="text-[11px] leading-relaxed" style={{ color: "var(--navy)" }}>
                        Key phrases: <strong>&quot;third time&quot;</strong>, <strong>&quot;nobody responded&quot;</strong>, <strong>&quot;unacceptable&quot;</strong>
                      </p>
                      <p className="text-[11px] mt-1" style={{ color: "var(--grey)" }}>
                        Escalation risk: <strong style={{ color: "#E25656" }}>HIGH</strong> &bull; SLA pressure detected
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M7 14l5 5 5-5" stroke="#E25656" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>

                    {/* Card 3: Actions Triggered */}
                    <div className="rounded-xl p-4 shadow-lg" style={{ background: "white", border: "2px solid #1B7A3E" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="6" fill="rgba(27,122,62,0.1)"/>
                          <path d="M4 7l2.5 2.5L10 5" stroke="#1B7A3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#1B7A3E" }}>Actions Triggered</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded font-semibold ml-auto" style={{ background: "rgba(27,122,62,0.1)", color: "#1B7A3E" }}>3 seconds</span>
                      </div>
                      <div className="space-y-1.5">
                        {[
                          "Reassigned to Sarah Chen (Senior)",
                          "Team lead added as watcher",
                          "Internal analysis comment posted",
                          "Label: escalation-risk",
                        ].map((action) => (
                          <div key={action} className="flex items-center gap-2">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M3 6l2 2 4-4" stroke="#1B7A3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-[11px]" style={{ color: "var(--navy)" }}>{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 3b — Incident Detection */}
          <ScrollReveal delay={100}>
            <div id="feat-incident" className="grid lg:grid-cols-2 gap-12 items-center py-16 mb-8 scroll-mt-24" style={{ borderBottom: "1px dashed var(--border)" }}>
              <div className="lg:order-2">
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#F59E0B" }}>INCIDENT DETECTION</span>
                <h2 className="mt-4 mb-5" style={{ color: "var(--navy)", fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  {"Spot the Pattern.\nBefore It Becomes a Crisis.".split("\n").map((line, i) => <span key={i}>{line}<br/></span>)}
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "var(--grey)" }}>
                  AI continuously scans incoming tickets, clustering similar reports in real-time. When a surge of related issues is detected, it automatically creates a Major Incident, links all affected tickets, and flags the pattern. New tickets matching the incident are linked instantly as they arrive.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Automatic cluster detection", "Real-time issue linking", "Major Incident creation", "Per-desk configuration"].map(h => (
                    <span key={h} className="flex items-center gap-2 text-sm" style={{ color: "var(--navy)" }}>
                      <CheckIcon /> {h}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:order-1">
                <div className="relative w-full min-h-[420px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.06), rgba(245,158,11,0.02))", borderRadius: 12 }}>
                  <div className="flex flex-col gap-3" style={{ width: 320 }}>
                    {/* Card 1: Incoming Tickets */}
                    <div className="rounded-xl p-4 shadow-lg" style={{ background: "white", border: "1px solid var(--border)" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-2 h-2 rounded-full" style={{ background: "#F59E0B" }} />
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#F59E0B" }}>Incoming Tickets</span>
                        <span className="text-[9px] px-1.5 py-0.5 rounded font-semibold ml-auto" style={{ background: "rgba(245,158,11,0.12)", color: "#F59E0B" }}>12 tickets</span>
                      </div>
                      <div className="space-y-1">
                        {[
                          "VPN keeps disconnecting every 5 min",
                          "Cannot connect to corporate VPN",
                          "VPN drops during video calls",
                          "VPN outage affecting entire office",
                        ].map((t, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <span className="text-[10px] font-mono px-1 rounded" style={{ background: "var(--offwhite)", color: "var(--grey)" }}>FSM-{22 + i}</span>
                            <span className="text-[11px] truncate" style={{ color: "var(--navy)" }}>{t}</span>
                          </div>
                        ))}
                        <p className="text-[10px] italic" style={{ color: "var(--grey)" }}>+ 8 more similar tickets...</p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M7 14l5 5 5-5" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>

                    {/* Card 2: AI Clustering */}
                    <div className="rounded-xl p-4 shadow-lg" style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.2)" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="6" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="3 2"/>
                          <circle cx="7" cy="7" r="2" fill="#F59E0B"/>
                        </svg>
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#F59E0B" }}>Cluster Detected</span>
                      </div>
                      <p className="text-[11px] leading-relaxed mb-1.5" style={{ color: "var(--navy)" }}>
                        Topic: <strong>&quot;VPN connection dropping repeatedly&quot;</strong>
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] px-2 py-0.5 rounded font-bold" style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B" }}>7 TICKETS</span>
                        <span className="text-[10px]" style={{ color: "var(--grey)" }}>Threshold: 5 met</span>
                      </div>
                      <p className="text-[10px] mt-1.5" style={{ color: "var(--grey)" }}>
                        Principal: <strong style={{ color: "var(--navy)" }}>FSM-32</strong> &bull; Best description
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M7 14l5 5 5-5" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>

                    {/* Card 3: Major Incident Created */}
                    <div className="rounded-xl p-4 shadow-lg" style={{ background: "white", border: "2px solid #1B7A3E" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <circle cx="7" cy="7" r="6" fill="rgba(27,122,62,0.1)"/>
                          <path d="M4 7l2.5 2.5L10 5" stroke="#1B7A3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#1B7A3E" }}>Major Incident Created</span>
                      </div>
                      <div className="space-y-1.5">
                        {[
                          "FSM-32 flagged as Major Incident",
                          "6 related tickets linked automatically",
                          "New tickets auto-linked in real-time",
                          "Full audit trail logged",
                        ].map((action) => (
                          <div key={action} className="flex items-center gap-2">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M3 6l2 2 4-4" stroke="#1B7A3E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="text-[11px]" style={{ color: "var(--navy)" }}>{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 4 — Analytics */}
          <ScrollReveal delay={100}>
            <div id="feat-analytics" className="grid lg:grid-cols-2 gap-12 items-center py-16 mb-8 scroll-mt-24" style={{ borderBottom: "1px dashed var(--border)" }}>
              <div className="lg:order-2">
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#51A2E7" }}>ANALYTICS & BRANDING</span>
                <h2 className="mt-4 mb-5" style={{ color: "var(--navy)", fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  {"Your Brand.\nYour Insights.".split("\n").map((line, i) => <span key={i}>{line}<br/></span>)}
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "var(--grey)" }}>
                  Full white-label customization: custom colors, avatar, name. Real-time analytics dashboard tracking conversations, tickets, routings, and user satisfaction.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Custom colors & branding", "Real-time analytics", "Token cost tracking", "Feedback monitoring"].map(h => (
                    <span key={h} className="flex items-center gap-2 text-sm" style={{ color: "var(--navy)" }}>
                      <CheckIcon /> {h}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:order-1">
                <div className="relative w-full min-h-[420px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(81,162,231,0.06), rgba(81,162,231,0.02))", borderRadius: 12 }}>
                  <div className="rounded-xl shadow-2xl overflow-hidden" style={{ width: 360, background: "white", border: "1px solid var(--border)" }}>
                    {/* Header with period tabs */}
                    <div className="px-4 py-2.5 flex items-center gap-2" style={{ borderBottom: "1px solid var(--border)" }}>
                      <span className="text-[11px] font-bold" style={{ color: "var(--navy)" }}>Statistics</span>
                      <div className="ml-auto flex items-center gap-1">
                        {["Today", "Week", "Month"].map((p, i) => (
                          <span key={p} className="text-[9px] px-2 py-0.5 rounded cursor-pointer font-medium" style={i === 2 ? { background: "var(--blue-cta)", color: "white" } : { background: "var(--offwhite)", color: "var(--grey)" }}>{p}</span>
                        ))}
                      </div>
                    </div>
                    {/* KPI cards row */}
                    <div className="px-3 pt-3 grid grid-cols-5 gap-1.5">
                      {[
                        { label: "CONV.", value: "1,247", color: "#EC8546" },
                        { label: "TICKETS", value: "438", color: "#51A2E7" },
                        { label: "FEEDBACK", value: "\uD83D\uDC4D89 \uD83D\uDC4E4", color: "#2BC48A" },
                        { label: "TEAM", value: "52", color: "#7E7CDE" },
                        { label: "USER", value: "31", color: "#C27EEA" },
                      ].map(m => (
                        <div key={m.label} className="rounded p-1.5 text-center" style={{ border: "1px solid var(--border)", borderTop: `2px solid ${m.color}` }}>
                          <p className="text-[7px] font-bold tracking-wider leading-tight" style={{ color: "var(--grey)" }}>{m.label}</p>
                          <p className="text-[12px] font-bold mt-0.5" style={{ color: "var(--navy)" }}>{m.value}</p>
                        </div>
                      ))}
                    </div>
                    {/* Charts row: Donut + Top Assignees */}
                    <div className="px-3 pt-3 grid grid-cols-2 gap-2">
                      {/* Donut chart */}
                      <div className="rounded-lg p-2.5" style={{ border: "1px solid var(--border)" }}>
                        <p className="text-[9px] font-bold mb-2" style={{ color: "var(--navy)" }}>Team Distribution</p>
                        <div className="flex justify-center">
                          <svg width="80" height="80" viewBox="0 0 80 80">
                            <circle cx="40" cy="40" r="30" fill="none" stroke="var(--border)" strokeWidth="10"/>
                            <circle cx="40" cy="40" r="30" fill="none" stroke="#2B2ED8" strokeWidth="10" strokeDasharray="132 56" strokeDashoffset="0" transform="rotate(-90 40 40)"/>
                            <circle cx="40" cy="40" r="30" fill="none" stroke="#51A2E7" strokeWidth="10" strokeDasharray="38 150" strokeDashoffset="-132" transform="rotate(-90 40 40)"/>
                            <circle cx="40" cy="40" r="30" fill="none" stroke="#7E7CDE" strokeWidth="10" strokeDasharray="18 170" strokeDashoffset="-170" transform="rotate(-90 40 40)"/>
                          </svg>
                        </div>
                        <div className="flex justify-center gap-2 mt-2">
                          {[{ label: "Network", color: "#2B2ED8" }, { label: "DevOps", color: "#51A2E7" }, { label: "Security", color: "#7E7CDE" }].map(l => (
                            <span key={l.label} className="flex items-center gap-1 text-[7px]" style={{ color: "var(--grey)" }}>
                              <span className="w-1.5 h-1.5 rounded-full" style={{ background: l.color }} />
                              {l.label}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Top Assignees */}
                      <div className="rounded-lg p-2.5" style={{ border: "1px solid var(--border)" }}>
                        <p className="text-[9px] font-bold mb-2" style={{ color: "var(--navy)" }}>Top Assignees</p>
                        <div className="space-y-2">
                          {[
                            { name: "S. Chen", count: 47, pct: 100 },
                            { name: "M. Silva", count: 31, pct: 66 },
                            { name: "R. Bortolin", count: 18, pct: 38 },
                          ].map(a => (
                            <div key={a.name}>
                              <div className="flex items-center justify-between mb-0.5">
                                <span className="text-[9px] font-medium" style={{ color: "var(--navy)" }}>{a.name}</span>
                                <span className="text-[9px] font-bold" style={{ color: "var(--navy)" }}>{a.count}</span>
                              </div>
                              <div className="w-full h-1.5 rounded-full" style={{ background: "var(--border)" }}>
                                <div className="h-1.5 rounded-full" style={{ width: `${a.pct}%`, background: "#2B2ED8" }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Tickets Created bar chart */}
                    <div className="px-3 pt-3 pb-3">
                      <div className="rounded-lg p-2.5" style={{ border: "1px solid var(--border)" }}>
                        <p className="text-[9px] font-bold mb-2" style={{ color: "var(--navy)" }}>Tickets Created</p>
                        <div className="flex items-end gap-2" style={{ height: 56 }}>
                          {[
                            { week: "W49", h: 4 }, { week: "W51", h: 8 }, { week: "W01", h: 15 },
                            { week: "W03", h: 22 }, { week: "W04", h: 34 }, { week: "W05", h: 52 }, { week: "W06", h: 48 },
                          ].map(b => (
                            <div key={b.week} className="flex-1 flex flex-col items-center">
                              <div className="w-full rounded-t-sm" style={{ height: b.h, background: "#2B2ED8" }} />
                              <span className="text-[6px] mt-1" style={{ color: "var(--grey)" }}>{b.week}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 5 — Multi-Layer Instructions */}
          <ScrollReveal delay={100}>
            <div id="feat-instructions" className="grid lg:grid-cols-2 gap-12 items-center py-16 mb-8 scroll-mt-24" style={{ borderBottom: "1px dashed var(--border)" }}>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#7E7CDE" }}>MULTI-LAYER INSTRUCTIONS</span>
                <h2 className="mt-4 mb-5" style={{ color: "var(--navy)", fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  {"Granular AI Control.\nYour Rules.".split("\n").map((line, i) => <span key={i}>{line}<br/></span>)}
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "var(--grey)" }}>
                  Configure AI behavior at four levels: Company-wide rules, per-Service Desk, per-Request Type, and real-time Agent Prompts. Agents can set operational notices (via UI or API) that the AI uses immediately, with optional auto-expiry.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Global company rules", "Service desk overrides", "Request type specifics", "Real-time agent prompts"].map(h => (
                    <span key={h} className="flex items-center gap-2 text-sm" style={{ color: "var(--navy)" }}>
                      <CheckIcon /> {h}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="relative w-full flex items-center justify-center py-10" style={{ background: "linear-gradient(135deg, rgba(126,124,222,0.06), rgba(126,124,222,0.02))", borderRadius: 12 }}>
                  <div style={{ width: 300 }}>
                    <div className="relative flex flex-col gap-3" style={{ paddingLeft: 32 }}>
                      {/* Continuous vertical line behind circles */}
                      <div className="absolute" style={{ left: 9, top: 10, bottom: 10, width: 2, background: "linear-gradient(to bottom, rgba(126,124,222,0.3), rgba(236,133,70,0.4))" }} />
                      {[
                        { label: "Company", desc: "Global rules for all conversations", num: 1, circleColor: "#7E7CDE", bgOpacity: 0.08, borderOpacity: 0.25 },
                        { label: "Service Desk", desc: "Override rules per desk", num: 2, circleColor: "#7E7CDE", bgOpacity: 0.12, borderOpacity: 0.35 },
                        { label: "Request Type", desc: "Specific field & behavior rules", num: 3, circleColor: "#7E7CDE", bgOpacity: 0.18, borderOpacity: 0.5 },
                      ].map((layer) => (
                        <div key={layer.label} className="relative flex items-center gap-3">
                          <div className="absolute flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white" style={{ background: layer.circleColor, left: -32 + 2, zIndex: 1 }}>{layer.num}</div>
                          <div className="flex-1 rounded-lg px-3 py-2.5" style={{ background: `rgba(126,124,222,${layer.bgOpacity})`, border: `1px solid rgba(126,124,222,${layer.borderOpacity})` }}>
                            <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#7E7CDE" }}>{layer.label}</span>
                            <p className="text-[11px] mt-0.5" style={{ color: "var(--grey)" }}>{layer.desc}</p>
                          </div>
                        </div>
                      ))}
                      {/* Layer 4 - Agent Prompt (special) */}
                      <div className="relative flex items-center gap-3">
                        <div className="absolute flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold text-white" style={{ background: "#EC8546", left: -32 + 2, zIndex: 1 }}>4</div>
                        <div className="flex-1 rounded-lg px-3 py-3 shadow-md" style={{ background: "white", border: "2px solid #EC8546" }}>
                          <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#EC8546" }}>Agent Prompt</span>
                          <p className="text-[11px] mt-1" style={{ color: "var(--grey)" }}>
                            &quot;SAP is down until Feb 10. Inform users about this outage.&quot;
                          </p>
                          <span className="inline-block mt-1.5 text-[9px] px-2 py-0.5 rounded-full font-semibold" style={{ background: "rgba(236,133,70,0.12)", color: "#EC8546" }}>Real-time · UI or API · Auto-expires</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature 6 — Workflow Automation */}
          <ScrollReveal delay={100}>
            <div id="feat-workflow" className="grid lg:grid-cols-2 gap-12 items-center py-16 scroll-mt-24">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#2BC48A" }}>WORKFLOW AUTOMATION</span>
                <h2 className="mt-4 mb-5" style={{ color: "var(--navy)", fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  {"Scripts Are Dead.\nNatural Language Lives.".split("\n").map((line, i) => <span key={i}>{line}<br/></span>)}
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "var(--grey)" }}>
                  Replace complex scripting with plain English. Describe conditions in natural language and AI generates Jira Expressions automatically. Define validators and post-functions the same way. No scripting knowledge required.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Natural language to Jira Expressions", "Transition validators", "Post-function actions", "Zero scripting required"].map(h => (
                    <span key={h} className="flex items-center gap-2 text-sm" style={{ color: "var(--navy)" }}>
                      <CheckIcon /> {h}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="relative w-full flex items-center justify-center py-8" style={{ background: "linear-gradient(135deg, rgba(43,196,138,0.06), rgba(43,196,138,0.02))", borderRadius: 12 }}>
                  <div className="flex flex-col gap-3" style={{ width: 320 }}>
                    {/* Condition card */}
                    <div className="rounded-xl p-4 shadow-lg" style={{ background: "white", border: "1px solid var(--border)", borderLeft: "4px solid #2BC48A" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M7 1v4M7 9v4M1 7h4M9 7h4" stroke="#2BC48A" strokeWidth="1.5" strokeLinecap="round"/>
                          <circle cx="7" cy="7" r="2" stroke="#2BC48A" strokeWidth="1.5"/>
                        </svg>
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#2BC48A" }}>Condition</span>
                      </div>
                      <p className="text-[11px] mb-1.5" style={{ color: "var(--grey)" }}>You describe:</p>
                      <p className="text-[12px] italic" style={{ color: "var(--navy)" }}>
                        &quot;Only allow transition if priority is High and component is Backend&quot;
                      </p>
                      <p className="text-[11px] mt-2 mb-1" style={{ color: "var(--grey)" }}>AI generates Jira Expression:</p>
                      <div className="rounded px-2 py-1.5" style={{ background: "rgba(43,196,138,0.06)", border: "1px solid rgba(43,196,138,0.15)" }}>
                        <code className="text-[10px] leading-relaxed block" style={{ color: "#2BC48A", fontFamily: "'IBM Plex Mono', monospace" }}>
                          issue.priority.name == &quot;High&quot;<br/>&& issue.labels.includes(&quot;backend&quot;)
                        </code>
                      </div>
                    </div>

                    {/* Validator card */}
                    <div className="rounded-xl p-4 shadow-lg" style={{ background: "white", border: "1px solid var(--border)", borderLeft: "4px solid #51A2E7" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M3 7l3 3 5-5" stroke="#51A2E7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          <rect x="1" y="1" width="12" height="12" rx="2" stroke="#51A2E7" strokeWidth="1.5"/>
                        </svg>
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#51A2E7" }}>Validator</span>
                      </div>
                      <p className="text-[12px] italic" style={{ color: "var(--navy)" }}>
                        &quot;Ensure the description contains reproduction steps and expected behavior&quot;
                      </p>
                      <span className="inline-block mt-2 text-[9px] px-2 py-0.5 rounded-full font-semibold" style={{ background: "rgba(81,162,231,0.1)", color: "#51A2E7" }}>
                        Returns: pass / fail + message
                      </span>
                    </div>

                    {/* Post Function card */}
                    <div className="rounded-xl p-4 shadow-lg" style={{ background: "white", border: "1px solid var(--border)", borderLeft: "4px solid #7E7CDE" }}>
                      <div className="flex items-center gap-2 mb-2">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 3h10M2 7h10M2 11h6" stroke="#7E7CDE" strokeWidth="1.5" strokeLinecap="round"/>
                          <path d="M10 9l2 2-2 2" stroke="#7E7CDE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#7E7CDE" }}>Post Function</span>
                      </div>
                      <p className="text-[12px] italic" style={{ color: "var(--navy)" }}>
                        &quot;Summarize all changes and add a comment. If moving to Done, set the resolution field.&quot;
                      </p>
                      <span className="inline-block mt-2 text-[9px] px-2 py-0.5 rounded-full font-semibold" style={{ background: "rgba(126,124,222,0.1)", color: "#7E7CDE" }}>
                        Returns: action executed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════ ROI CALCULATOR ══════════════════ */}
      <ROICalculator />

      {/* ══════════════════ COMPARISON TABLE ══════════════════ */}
      <section id="comparison" className="py-20 md:py-28 geo-pattern">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full mb-6"
                    style={{ background: "rgba(43,46,216,0.08)", color: "var(--blue-cta)" }}>
                Comparison
              </span>
              <h2 style={{ color: "var(--navy)" }}>
                How Nexus AI
                <br />
                Stacks Up.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="rounded-xl overflow-hidden shadow-lg" style={{ border: "1px solid var(--border)" }}>
              <div className="overflow-x-auto">
                <table className="w-full text-xs md:text-sm" style={{ background: "white" }}>
                  <thead>
                    <tr style={{ background: "var(--navy)", color: "white" }}>
                      <th className="text-left px-2 py-3 md:p-4 font-semibold text-[10px] md:text-xs uppercase tracking-wider">Capability</th>
                      <th className="px-2 py-3 md:p-4 font-semibold text-[10px] md:text-xs uppercase tracking-wider text-center whitespace-nowrap"><span className="hidden md:inline">JSM Virtual Agent</span><span className="md:hidden">JSM</span></th>
                      <th className="px-2 py-3 md:p-4 font-semibold text-[10px] md:text-xs uppercase tracking-wider text-center whitespace-nowrap" style={{ background: "var(--blue-cta)" }}>Nexus AI</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      /* Both have */
                      { feature: "Natural Language Understanding", jsm: "check", ai: "check" },
                      { feature: "100+ Languages", jsm: "check", ai: "check" },
                      { feature: "Confluence KB Integration", jsm: "check", ai: "check" },
                      { feature: "Analytics Dashboard", jsm: "check", ai: "check" },
                      { feature: "Integrated in Jira Search Bar", jsm: "check", ai: "cross" },
                      /* JSM partial */
                      { feature: "Full White-Label Branding", jsm: "partial", ai: "check" },
                      /* Only Nexus AI */
                      { feature: "Ticket Creation Focus", jsm: "cross", ai: "check" },
                      { feature: "Required Fields Auto-Detection", jsm: "cross", ai: "check" },
                      { feature: "File Attachments in Chat", jsm: "cross", ai: "check" },
                      { feature: "Per-Request-Type Instructions", jsm: "cross", ai: "check" },
                      { feature: "Full Prompt Control (4 layers)", jsm: "cross", ai: "check" },
                      { feature: "Real-Time Agent Prompts (UI + API)", jsm: "cross", ai: "check" },
                      { feature: "Auto-Confirm Mode", jsm: "cross", ai: "check" },
                      { feature: "Dispatcher Agent", jsm: "cross", ai: "check" },
                      { feature: "Proactive Escalation Prevention", jsm: "cross", ai: "check" },
                      { feature: "AI Sentiment Analysis", jsm: "cross", ai: "check" },
                      { feature: "AI Workflow Conditions", jsm: "cross", ai: "check" },
                      { feature: "AI Workflow Validators", jsm: "cross", ai: "check" },
                      { feature: "AI Post-Functions", jsm: "cross", ai: "check" },
                      /* Meta */
                      { feature: "Cost", jsm: "Included*", ai: "Sub" },
                    ].map((row, i) => (
                      <tr key={row.feature} style={{ borderTop: "1px solid var(--border)", background: i % 2 === 0 ? "white" : "var(--offwhite)" }}>
                        <td className="px-2 py-2.5 md:p-4 font-medium" style={{ color: "var(--navy)" }}>{row.feature}</td>
                        {(["jsm", "ai"] as const).map((col) => {
                          const val = row[col];
                          return (
                            <td key={col} className="px-2 py-2.5 md:p-4 text-center" style={col === "ai" ? { background: "rgba(43,46,216,0.03)" } : {}}>
                              {val === "check" ? <span className="inline-flex justify-center"><CheckIcon /></span> :
                               val === "cross" ? <span className="inline-flex justify-center"><CrossIcon /></span> :
                               val === "partial" ? <span className="inline-flex justify-center"><PartialIcon /></span> :
                               <span className="text-xs" style={{ color: "var(--grey)" }}>{val}</span>}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-center mt-4" style={{ color: "var(--grey)" }}>
              * JSM Virtual Agent included in Premium/Enterprise plans.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════ CTA / CONTACT ══════════════════ */}
      <section id="contact" className="relative py-20 md:py-28" style={{ background: "var(--hero-gradient)" }}>
        <div className="absolute inset-0 mx-auto max-w-[1280px]" style={{ borderLeft: "1px dashed rgba(255,255,255,0.12)", borderRight: "1px dashed rgba(255,255,255,0.12)" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}/>

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="text-white mb-4">
              Calculate Your Savings.
              <br />
              <span style={{ color: "rgba(255,255,255,0.4)" }}>Deploy in 5 Minutes.</span>
            </h2>
            <p className="text-lg max-w-xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.5)" }}>
              Install Nexus AI on your JSM instance today. First AI-created ticket in under 2 minutes. ROI in the first week.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="max-w-lg mx-auto rounded-xl p-8 md:p-10" style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(20px)", border: "1px dashed rgba(255,255,255,0.15)" }}>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg text-sm outline-none placeholder:text-white/30" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }} />
                <input type="email" placeholder="Work Email" className="w-full px-4 py-3 rounded-lg text-sm outline-none placeholder:text-white/30" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }} />
                <input type="text" placeholder="Company Name" className="w-full px-4 py-3 rounded-lg text-sm outline-none placeholder:text-white/30" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "white" }} />
                <select className="w-full px-4 py-3 rounded-lg text-sm outline-none" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }} defaultValue="">
                  <option value="" disabled>Monthly Ticket Volume</option>
                  <option value="500">Less than 500</option>
                  <option value="1000">500 - 1,000</option>
                  <option value="5000">1,000 - 5,000</option>
                  <option value="10000">5,000 - 10,000</option>
                  <option value="10001">10,000+</option>
                </select>
                <button type="button" className="cta-button w-full justify-center !py-4" style={{ background: "white", color: "var(--navy)", borderColor: "white" }}>
                  Request a Demo <ArrowIcon />
                </button>
              </form>
              <p className="text-xs mt-5" style={{ color: "rgba(255,255,255,0.3)" }}>
                Free trial available. No credit card required. Powered by Atlassian Forge LLM. No API keys needed.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ══════════════════ FOOTER ══════════════════ */}
      <footer style={{ background: "var(--navy-deep)" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-4 gap-10 pb-12" style={{ borderBottom: "1px dashed rgba(255,255,255,0.1)" }}>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={`${basePath}/ai-portal-logo-200.png`} alt="Nexus AI" style={{ height: 22, opacity: 0.8 }} />
                <span className="font-bold text-white text-xs uppercase tracking-wider">Nexus AI</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
                AI-powered conversational interface for Jira Service Management. Built on Atlassian Forge.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Product</h4>
              <div className="space-y-2.5">
                {[
                  { label: "Features", href: "#features" },
                  { label: "ROI Calculator", href: "#roi-calculator" },
                ].map(l => (
                  <a key={l.label} href={l.href} className="block text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>{l.label}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Resources</h4>
              <div className="space-y-2.5">
                {[
                  { label: "Atlassian Marketplace", href: "#" },
                  { label: "Blog", href: "/blog" },
                ].map(l => (
                  <Link key={l.label} href={l.href} className="block text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>{l.label}</Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Company</h4>
              <div className="space-y-2.5">
                <Link href="/about" className="block text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>About</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-8">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
              &copy; 2026 Nexus AI. All rights reserved.
            </p>
            {/* Privacy Policy, Terms of Service, Cookie Settings - hidden for now */}
          </div>
        </div>
      </footer>
    </main>
  );
}
