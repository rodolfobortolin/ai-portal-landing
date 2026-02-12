import Link from "next/link";
import ROICalculator from "./components/ROICalculator";
import ScrollReveal from "./components/ScrollReveal";
import NavBar from "./components/NavBar";
import DemoModalTrigger from "./components/DemoModalTrigger";
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
          { label: "How It Works", href: "#how-it-works" },
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
            { number: "23%", label: "of tickets go to the wrong team, wasting 45 min each", source: "BMC", color: "#EC8546" },
            { number: "86%", label: "of self-service issues fail to resolve without human help", source: "Gartner", color: "#7E7CDE" },
            { number: "$22", label: "average cost per L1 ticket. Misrouted ones cost 2-3x more", source: "MetricNet", color: "#51A2E7" },
            { number: "3.5x", label: "return for every $1 invested in AI-powered support", source: "Freshworks", color: "#C27EEA" },
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4" style={{ border: "1px dashed var(--border)" }}>
            {[
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="transition-colors duration-300">
                    <path d="M6 16h20M16 6v20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M8 8l16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
                  </svg>
                ),
                tag: "MISROUTING", tagColor: "#EC8546", hoverBg: "#EC8546",
                title: "Wrong Team, Every Time",
                stat: "$27K/yr wasted",
                desc: "23% of tickets land in the wrong queue. Each one wastes 45 minutes of agent time on rerouting, reclassification, and rework.",
                blogUrl: "/blog/ticket-misrouting-hidden-cost",
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="transition-colors duration-300">
                    <rect x="6" y="8" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M10 14h12M10 18h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                    <path d="M22 12l-4 4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                tag: "INCOMPLETE", tagColor: "#7E7CDE", hoverBg: "#7E7CDE",
                title: "Garbage In, Delays Out",
                stat: "30% need clarification",
                desc: "Agents spend 15+ minutes per ticket chasing users for missing information. 80% of lost productivity comes from just 12.6% of tickets.",
                blogUrl: "/blog/incomplete-tickets-cost",
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="transition-colors duration-300">
                    <path d="M16 6v12l8 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
                    <path d="M20 22l4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                  </svg>
                ),
                tag: "ABANDONMENT", tagColor: "#C27EEA", hoverBg: "#C27EEA",
                title: "52% Just Give Up",
                stat: "Only 14% resolved",
                desc: "After 10 minutes of searching, half your users abandon the portal. They call, email, or use shadow IT — none of which you can track.",
                blogUrl: "/blog/portal-abandonment-crisis",
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="transition-colors duration-300">
                    <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="2" opacity="0.4"/>
                    <path d="M10 16a6 6 0 0112 0" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="13" cy="14" r="1" fill="currentColor"/>
                    <circle cx="19" cy="14" r="1" fill="currentColor"/>
                    <path d="M12 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
                tag: "LANGUAGE", tagColor: "#51A2E7", hoverBg: "#51A2E7",
                title: "$11M Lost to Barriers",
                stat: "49% of executives affected",
                desc: "Multilingual teams write tickets in broken English. Critical context is lost. Agents guess. Resolution times double.",
                blogUrl: "/blog/language-barriers-enterprise-cost",
              },
            ].map((card, i) => (
              <ScrollReveal key={card.tag} delay={i * 100}>
                <div className="pain-card p-8 md:p-10 h-full group"
                  style={{ borderRight: i < 3 ? "1px dashed var(--border)" : "none", "--card-color": card.tagColor, "--card-hover-bg": card.hoverBg } as React.CSSProperties}>
                  <div className="mb-5 pain-card__icon">{card.icon}</div>
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

      {/* ══════════════════ HOW IT WORKS ══════════════════ */}
      <section id="how-it-works" className="py-20 md:py-28" style={{ background: "var(--navy)" }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full mb-6"
                    style={{ background: "rgba(126,124,222,0.15)", color: "#7E7CDE", border: "1px solid rgba(126,124,222,0.3)" }}>
                How It Works
              </span>
              <h2 className="text-white">
                Three Steps.
                <br />
                <span style={{ color: "rgba(255,255,255,0.35)" }}>Zero Training.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-0">
            {[
              {
                step: "01", color: "#EC8546", title: "User Chats",
                desc: "Click the chat button. Type in any language. Describe what you need naturally, the way you'd tell a colleague.",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <path d="M8 10h24a2 2 0 012 2v16a2 2 0 01-2 2H16l-6 6v-6H8a2 2 0 01-2-2V12a2 2 0 012-2z" stroke="#EC8546" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="16" cy="20" r="1.5" fill="#EC8546"/>
                    <circle cx="24" cy="20" r="1.5" fill="#EC8546"/>
                    <circle cx="32" cy="20" r="1.5" fill="#EC8546"/>
                    <path d="M38 18h2a2 2 0 012 2v16a2 2 0 01-2 2h-2v6l-6-6H20a2 2 0 01-2-2v-2" stroke="#EC8546" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
                  </svg>
                ),
              },
              {
                step: "02", color: "#7E7CDE", title: "AI Understands",
                desc: "The AI identifies the right service desk, matches the request type, reads the exact field schema, and auto-fills everything it can.",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="16" stroke="#7E7CDE" strokeWidth="2.5" strokeDasharray="4 3"/>
                    <circle cx="24" cy="24" r="8" stroke="#7E7CDE" strokeWidth="2"/>
                    <circle cx="24" cy="24" r="2" fill="#7E7CDE"/>
                    <path d="M24 8v4M24 36v4M8 24h4M36 24h4" stroke="#7E7CDE" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
              },
              {
                step: "03", color: "#51A2E7", title: "Perfect Ticket",
                desc: "A perfectly structured ticket appears — correct desk, correct type, all required fields populated. Written like a trained agent did it.",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="10" y="8" width="28" height="32" rx="3" stroke="#51A2E7" strokeWidth="2.5"/>
                    <path d="M16 18h16M16 24h12M16 30h8" stroke="#51A2E7" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                    <path d="M30 28l4 4 8-10" stroke="#51A2E7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 150}>
                <div className="relative p-10 md:p-12" style={{ borderRight: i < 2 ? "1px dashed rgba(255,255,255,0.1)" : "none" }}>
                  <span className="text-7xl font-bold absolute top-6 right-8 tabular-nums" style={{ color: "rgba(255,255,255,0.04)", fontFamily: "'IBM Plex Mono', monospace" }}>
                    {item.step}
                  </span>
                  <div className="relative z-10">
                    <div className="mb-6">{item.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{item.desc}</p>
                  </div>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 z-20" style={{ color: item.color }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  )}
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

          {/* Feature 1 — AI Dispatcher */}
          <ScrollReveal delay={100}>
            <div className="grid lg:grid-cols-2 gap-12 items-center py-16 mb-8" style={{ borderBottom: "1px dashed var(--border)" }}>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#EC8546" }}>AI DISPATCHER</span>
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
              <div>
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

          {/* Feature 2 — Instructions */}
          <ScrollReveal delay={100}>
            <div className="grid lg:grid-cols-2 gap-12 items-center py-16 mb-8" style={{ borderBottom: "1px dashed var(--border)" }}>
              <div className="lg:order-2">
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
              <div className="lg:order-1">
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

          {/* Feature 3 — Analytics */}
          <ScrollReveal delay={100}>
            <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#51A2E7" }}>ANALYTICS & BRANDING</span>
                <h2 className="mt-4 mb-5" style={{ color: "var(--navy)", fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  {"Your Brand.\nYour Insights.".split("\n").map((line, i) => <span key={i}>{line}<br/></span>)}
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "var(--grey)" }}>
                  Full white-label customization: custom colors, avatar, name. Real-time analytics dashboard tracking conversations, tickets, token usage, routing efficiency, and user satisfaction.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Custom colors & branding", "Real-time analytics", "Token cost tracking", "Feedback monitoring"].map(h => (
                    <span key={h} className="flex items-center gap-2 text-sm" style={{ color: "var(--navy)" }}>
                      <CheckIcon /> {h}
                    </span>
                  ))}
                </div>
              </div>
              <div>
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

          {/* Feature 4 — Workflow Automation */}
          <ScrollReveal delay={100}>
            <div className="grid lg:grid-cols-2 gap-12 items-center py-16" style={{ borderTop: "1px dashed var(--border)" }}>
              <div className="lg:order-2">
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
              <div className="lg:order-1">
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
                How AI Portal
                <br />
                Stacks Up.
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="rounded-xl overflow-hidden shadow-lg" style={{ border: "1px solid var(--border)" }}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm" style={{ background: "white", minWidth: 600 }}>
                  <thead>
                    <tr style={{ background: "var(--navy)", color: "white" }}>
                      <th className="text-left p-4 font-semibold text-xs uppercase tracking-wider">Capability</th>
                      <th className="p-4 font-semibold text-xs uppercase tracking-wider text-center">JSM Virtual Agent</th>
                      <th className="p-4 font-semibold text-xs uppercase tracking-wider text-center" style={{ background: "var(--blue-cta)" }}>AI Portal</th>
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
                      /* Only AI Portal */
                      { feature: "Ticket Creation Focus", jsm: "cross", ai: "check" },
                      { feature: "Required Fields Auto-Detection", jsm: "cross", ai: "check" },
                      { feature: "File Attachments in Chat", jsm: "cross", ai: "check" },
                      { feature: "Per-Request-Type Instructions", jsm: "cross", ai: "check" },
                      { feature: "Full Prompt Control (4 layers)", jsm: "cross", ai: "check" },
                      { feature: "Real-Time Agent Prompts (UI + API)", jsm: "cross", ai: "check" },
                      { feature: "Auto-Confirm Mode", jsm: "cross", ai: "check" },
                      { feature: "AI Ticket Dispatcher", jsm: "cross", ai: "check" },
                      { feature: "AI Workflow Conditions", jsm: "cross", ai: "check" },
                      { feature: "AI Workflow Validators", jsm: "cross", ai: "check" },
                      { feature: "AI Post-Functions", jsm: "cross", ai: "check" },
                      /* Meta */
                      { feature: "Cost", jsm: "Included*", ai: "Sub" },
                    ].map((row, i) => (
                      <tr key={row.feature} style={{ borderTop: "1px solid var(--border)", background: i % 2 === 0 ? "white" : "var(--offwhite)" }}>
                        <td className="p-4 font-medium" style={{ color: "var(--navy)" }}>{row.feature}</td>
                        {(["jsm", "ai"] as const).map((col) => {
                          const val = row[col];
                          return (
                            <td key={col} className="p-4 text-center" style={col === "ai" ? { background: "rgba(43,46,216,0.03)" } : {}}>
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
              Install AI Portal on your JSM instance today. First AI-created ticket in under 2 minutes. ROI in the first week.
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
                <img src={`${basePath}/valiantys-logo-white.svg`} alt="Valiantys" style={{ height: 18, opacity: 0.6 }} />
                <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 16, fontWeight: 300 }}>|</span>
                <img src={`${basePath}/ai-portal-logo.png`} alt="AI Portal" style={{ height: 22, opacity: 0.8 }} />
                <span className="font-bold text-white text-xs uppercase tracking-wider">AI Portal</span>
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
                  <a key={l.label} href={l.href} className="block text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>{l.label}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Company</h4>
              <div className="space-y-2.5">
                <a href="https://valiantys.com" target="_blank" rel="noopener noreferrer" className="block text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>About Valiantys</a>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-8">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
              &copy; 2026 Valiantys. All rights reserved.
            </p>
            {/* Privacy Policy, Terms of Service, Cookie Settings - hidden for now */}
          </div>
        </div>
      </footer>
    </main>
  );
}
