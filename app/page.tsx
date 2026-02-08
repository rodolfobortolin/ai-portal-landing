import ROICalculator from "./components/ROICalculator";
import ScrollReveal from "./components/ScrollReveal";

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
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ background: "rgba(23, 24, 87, 0.95)", backdropFilter: "blur(12px)" }}>
        <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 md:px-12 py-4">
          <div className="flex items-center gap-3">
            <img src="/valiantys-logo-white.svg" alt="Valiantys" style={{ height: 22 }} />
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 18, fontWeight: 300 }}>|</span>
            <span className="text-white font-bold text-sm uppercase tracking-wider">AI Portal</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {[
              ["Problem", "#pain-points"],
              ["How It Works", "#how-it-works"],
              ["Features", "#features"],
              ["ROI Calculator", "#roi-calculator"],
              ["Compare", "#comparison"],
            ].map(([label, href]) => (
              <a key={href} href={href} className="text-sm font-semibold uppercase tracking-wider transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.85)" }}>
                {label}
              </a>
            ))}
          </div>
          <a href="#contact" className="cta-button !py-2.5 !px-5 !text-xs">
            Contact Us <ArrowIcon />
          </a>
        </div>
      </nav>

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="absolute inset-0 mx-auto max-w-[1280px]" style={{ borderLeft: "1px dashed rgba(255,255,255,0.12)", borderRight: "1px dashed rgba(255,255,255,0.12)" }} />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }}/>
        <div className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #7E7CDE, transparent)", animation: "float 6s ease-in-out infinite" }} />
        <div className="absolute bottom-1/4 left-[5%] w-48 h-48 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #EC8546, transparent)", animation: "float 8s ease-in-out infinite 1s" }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 pt-32 pb-20">
          <div className="max-w-4xl">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full mb-8"
                    style={{ background: "rgba(236,133,70,0.15)", color: "#EC8546", border: "1px solid rgba(236,133,70,0.3)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                For Jira Service Management
              </span>
            </div>

            <h1 className="text-white mb-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              Stop Losing Money
              <br />
              <span style={{ color: "rgba(255,255,255,0.4)" }}>on Bad Tickets.</span>
            </h1>

            <p className="text-lg md:text-xl max-w-2xl mb-10 animate-fade-in-up" style={{ color: "rgba(255,255,255,0.55)", animationDelay: "0.6s", lineHeight: 1.7 }}>
              Your JSM portal costs <strong className="text-white">$156,000/year</strong> in misrouted tickets, incomplete forms, and abandoned submissions.
              AI Portal lets users describe what they need in <strong className="text-white">any language</strong> — and creates perfect tickets, every time.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
              <a href="#roi-calculator" className="cta-button">
                Calculate Your ROI <ArrowIcon />
              </a>
              <a href="#how-it-works" className="cta-button cta-button-outline">
                See How It Works <ArrowIcon />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 mt-14 pt-8 animate-fade-in-up" style={{ borderTop: "1px dashed rgba(255,255,255,0.12)", animationDelay: "1s" }}>
              {[
                "Runs on Atlassian Forge",
                "100+ Languages",
                "Voice & Text Input",
                "5-Minute Install",
              ].map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-xs font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ SOCIAL PROOF STATS ══════════════════ */}
      <section className="relative py-0" style={{ background: "var(--navy)" }}>
        <div className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4">
          {[
            { number: "23%", label: "of tickets misrouted", source: "BMC", color: "#EC8546" },
            { number: "14%", label: "self-service resolved", source: "Gartner", color: "#7E7CDE" },
            { number: "$22", label: "avg ticket cost", source: "MetricNet", color: "#51A2E7" },
            { number: "3.5x", label: "ROI on AI investment", source: "Freshworks", color: "#C27EEA" },
          ].map((stat, i) => (
            <ScrollReveal key={stat.number} delay={i * 100}>
              <div className="py-10 px-6 md:px-8 text-center" style={{ borderRight: i < 3 ? "1px dashed rgba(255,255,255,0.1)" : "none" }}>
                <p className="text-3xl md:text-4xl font-bold tabular-nums" style={{ color: stat.color }}>{stat.number}</p>
                <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>{stat.label}</p>
                <p className="text-[10px] mt-1 uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.2)" }}>{stat.source}</p>
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
                step: "01", color: "#EC8546", title: "User Speaks",
                desc: "Click the chat button. Type or speak in any language. Describe what you need — naturally, the way you'd tell a colleague.",
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <rect x="18" y="6" width="12" height="22" rx="6" stroke="#EC8546" strokeWidth="2.5"/>
                    <path d="M12 22v4a12 12 0 0024 0v-4" stroke="#EC8546" strokeWidth="2.5" strokeLinecap="round"/>
                    <line x1="24" y1="36" x2="24" y2="42" stroke="#EC8546" strokeWidth="2.5" strokeLinecap="round"/>
                    <line x1="18" y1="42" x2="30" y2="42" stroke="#EC8546" strokeWidth="2.5" strokeLinecap="round"/>
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

          {/* Feature 1 — Voice */}
          <ScrollReveal delay={100}>
            <div className="grid lg:grid-cols-2 gap-12 items-center py-16 mb-8" style={{ borderBottom: "1px dashed var(--border)" }}>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#EC8546" }}>VOICE INPUT</span>
                <h2 className="mt-4 mb-5" style={{ color: "var(--navy)", fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  {"Speak Any Language.\nGet Perfect Tickets.".split("\n").map((line, i) => <span key={i}>{line}<br/></span>)}
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "var(--grey)" }}>
                  Users tap the microphone and speak in their native language — Portuguese, Japanese, Arabic, anything. The AI transcribes, understands context, and creates structured tickets in whatever language your agents prefer.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["100+ languages supported", "Voice-to-ticket in seconds", "Auto-submit or review first", "Works on mobile"].map(h => (
                    <span key={h} className="flex items-center gap-2 text-sm" style={{ color: "var(--navy)" }}>
                      <CheckIcon /> {h}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="relative w-full min-h-[420px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(236,133,70,0.06), rgba(236,133,70,0.02))", borderRadius: 12 }}>
                  <div className="relative">
                    {/* Chat widget — matches real product */}
                    <div className="rounded-xl shadow-2xl overflow-hidden" style={{ width: 320, background: "white", border: "1px solid #E0E0E0" }}>
                      {/* Header bar */}
                      <div className="px-4 py-2.5 flex items-center gap-2.5" style={{ background: "#2B2ED8" }}>
                        <div className="w-7 h-7 rounded-full flex-shrink-0 overflow-hidden" style={{ border: "1.5px solid rgba(255,255,255,0.4)", background: "linear-gradient(135deg, #7E7CDE, #51A2E7)" }}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src="/avatar-valy.jpg" alt="Valy" width={28} height={28} className="w-full h-full object-cover" style={{ borderRadius: "50%" }} />
                        </div>
                        <span className="text-white text-sm font-bold flex-1">Valy</span>
                        <div className="flex items-center gap-2">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"/></svg>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 2l10 10M12 2L2 12" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round"/></svg>
                        </div>
                      </div>

                      {/* Messages area */}
                      <div className="px-4 py-4" style={{ background: "white", minHeight: 220 }}>
                        {/* Assistant welcome message */}
                        <div className="rounded-lg px-3.5 py-3 text-[13px] leading-relaxed mb-3" style={{ background: "#F0F4FF", color: "#1a1a2e" }}>
                          <p>Hi! How can I help you today? 😊</p>
                          <p className="mt-2 text-[12px]" style={{ color: "#555" }}>What area is your request about?</p>
                          <ul className="mt-1.5 text-[12px] space-y-0.5" style={{ color: "#444" }}>
                            <li>- IT (access, VPN, email, systems)</li>
                            <li>- HR (benefits, payroll, PTO)</li>
                            <li>- Facilities (maintenance, badges)</li>
                          </ul>
                        </div>
                        {/* User voice message */}
                        <div className="flex justify-end mb-3">
                          <div className="rounded-lg px-3.5 py-2.5 text-[13px] text-white" style={{ background: "#2B2ED8", maxWidth: "85%" }}>
                            <div className="flex items-center gap-1.5 mb-1">
                              <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><rect x="5" y="1" width="6" height="10" rx="3" fill="rgba(255,255,255,0.5)"/><path d="M3 8v1a5 5 0 0010 0V8" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/></svg>
                              <span className="text-[9px]" style={{ color: "rgba(255,255,255,0.5)" }}>Voice</span>
                            </div>
                            Minha VPN parou de funcionar desde ontem
                          </div>
                        </div>
                        {/* Assistant response */}
                        <div className="rounded-lg px-3.5 py-3 text-[13px] leading-relaxed" style={{ background: "#F0F4FF", color: "#1a1a2e" }}>
                          <span className="font-semibold" style={{ color: "#1B7A3E" }}>Ticket created!</span> VPN Reset → IT Support
                          <span className="block text-[11px] mt-1" style={{ color: "#888" }}>IT-2847 • Created just now</span>
                        </div>
                      </div>

                      {/* Input bar */}
                      <div className="px-3 py-2.5 flex items-center gap-2" style={{ borderTop: "1px solid #E8E8E8", background: "#FAFAFA" }}>
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 cursor-pointer">
                          <rect x="7" y="2" width="6" height="11" rx="3" stroke="#888" strokeWidth="1.5"/>
                          <path d="M4 10v1.5a6 6 0 0012 0V10" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/>
                          <line x1="10" y1="17" x2="10" y2="19" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 cursor-pointer">
                          <path d="M17 10.5V6a3 3 0 00-6 0v7a2 2 0 004 0V6.5" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <div className="flex-1 rounded-md px-3 py-1.5 text-[12px]" style={{ background: "white", border: "1px solid #DDD", color: "#AAA" }}>
                          Type your message...
                        </div>
                        <button className="px-3 py-1.5 rounded-md text-[12px] font-semibold text-white flex-shrink-0" style={{ background: "#2B2ED8" }}>
                          Send
                        </button>
                      </div>
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
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "#7E7CDE" }}>THREE-LAYER INSTRUCTIONS</span>
                <h2 className="mt-4 mb-5" style={{ color: "var(--navy)", fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
                  {"Granular AI Control.\nYour Rules, Always.".split("\n").map((line, i) => <span key={i}>{line}<br/></span>)}
                </h2>
                <p className="text-base leading-relaxed mb-6" style={{ color: "var(--grey)" }}>
                  Configure AI behavior at three levels: Company-wide rules, per-Service Desk rules, and per-Request Type rules. The AI always follows your organization&apos;s specific processes.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Global company rules", "Service desk overrides", "Request type specifics", "Priority cascading"].map(h => (
                    <span key={h} className="flex items-center gap-2 text-sm" style={{ color: "var(--navy)" }}>
                      <CheckIcon /> {h}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:order-1">
                <div className="relative w-full min-h-[340px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(126,124,222,0.06), rgba(126,124,222,0.02))", borderRadius: 12 }}>
                  <div className="relative" style={{ width: 260 }}>
                    <div className="absolute top-0 left-4 right-4 rounded-lg p-4 shadow-sm" style={{ background: "rgba(126,124,222,0.08)", border: "1px dashed rgba(126,124,222,0.3)", height: 80 }}>
                      <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#7E7CDE" }}>Layer 1 — Company</span>
                    </div>
                    <div className="absolute top-12 left-2 right-2 rounded-lg p-4 shadow-md" style={{ background: "rgba(126,124,222,0.12)", border: "1px dashed rgba(126,124,222,0.4)", height: 80 }}>
                      <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#7E7CDE" }}>Layer 2 — Service Desk</span>
                    </div>
                    <div className="relative top-24 rounded-lg p-5 shadow-xl" style={{ background: "white", border: "2px solid #7E7CDE" }}>
                      <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "#7E7CDE" }}>Layer 3 — Request Type</span>
                      <p className="text-xs mt-2" style={{ color: "var(--grey)" }}>
                        &quot;For laptop requests, always ask about preferred OS and RAM.&quot;
                      </p>
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
                  Full white-label customization: custom colors, avatar, name. Real-time analytics dashboard tracking conversations, tickets, token usage, voice adoption, and user satisfaction.
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
                <div className="relative w-full min-h-[340px] flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(81,162,231,0.06), rgba(81,162,231,0.02))", borderRadius: 12 }}>
                  <div className="rounded-xl shadow-2xl overflow-hidden" style={{ width: 300, background: "white", border: "1px solid var(--border)" }}>
                    <div className="px-4 py-2.5 flex items-center gap-2" style={{ borderBottom: "1px solid var(--border)" }}>
                      <span className="text-[11px] font-bold" style={{ color: "var(--navy)" }}>Analytics</span>
                      <span className="ml-auto text-[10px] px-2 py-0.5 rounded" style={{ background: "rgba(81,162,231,0.1)", color: "#51A2E7" }}>Live</span>
                    </div>
                    <div className="p-4 grid grid-cols-2 gap-3">
                      {[
                        { label: "Conversations", value: "2,847", color: "#51A2E7" },
                        { label: "Tickets", value: "1,923", color: "#7E7CDE" },
                        { label: "Satisfaction", value: "94%", color: "#1B4332" },
                        { label: "Voice Usage", value: "38%", color: "#EC8546" },
                      ].map(m => (
                        <div key={m.label} className="rounded-lg p-2.5" style={{ background: "var(--offwhite)" }}>
                          <p className="text-[10px]" style={{ color: "var(--grey)" }}>{m.label}</p>
                          <p className="text-lg font-bold" style={{ color: m.color }}>{m.value}</p>
                        </div>
                      ))}
                    </div>
                    <div className="px-4 pb-4 flex items-end gap-1.5 h-12">
                      {[35, 52, 48, 60, 45, 72, 68].map((h, j) => (
                        <div key={j} className="flex-1 rounded-t" style={{ height: `${h}%`, background: j === 5 ? "#51A2E7" : "rgba(81,162,231,0.15)" }} />
                      ))}
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
                      <th className="p-4 font-semibold text-xs uppercase tracking-wider text-center">Custom Build</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Natural Language Understanding", jsm: "partial", ai: "check", custom: "check" },
                      { feature: "Voice Input (any language)", jsm: "cross", ai: "check", custom: "partial" },
                      { feature: "100+ Languages", jsm: "partial", ai: "check", custom: "partial" },
                      { feature: "Per-Request-Type Instructions", jsm: "cross", ai: "check", custom: "check" },
                      { feature: "File Attachments in Chat", jsm: "cross", ai: "check", custom: "partial" },
                      { feature: "Full White-Label Branding", jsm: "partial", ai: "check", custom: "check" },
                      { feature: "Model Selection (9 models)", jsm: "cross", ai: "check", custom: "check" },
                      { feature: "Analytics Dashboard", jsm: "partial", ai: "check", custom: "partial" },
                      { feature: "Auto-Confirm Mode", jsm: "cross", ai: "check", custom: "check" },
                      { feature: "Install Time", jsm: "5 min", ai: "5 min", custom: "3-6 mo" },
                      { feature: "Cost", jsm: "Included*", ai: "Sub", custom: "$150K+" },
                    ].map((row, i) => (
                      <tr key={row.feature} style={{ borderTop: "1px solid var(--border)", background: i % 2 === 0 ? "white" : "var(--offwhite)" }}>
                        <td className="p-4 font-medium" style={{ color: "var(--navy)" }}>{row.feature}</td>
                        {(["jsm", "ai", "custom"] as const).map((col) => {
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
              * JSM Virtual Agent included in Premium/Enterprise plans with limited capabilities.
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
                Free trial available. No credit card required. BYOK (Bring Your Own OpenAI Key).
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
                <img src="/valiantys-logo-white.svg" alt="Valiantys" style={{ height: 18, opacity: 0.6 }} />
                <span style={{ color: "rgba(255,255,255,0.2)", fontSize: 16, fontWeight: 300 }}>|</span>
                <span className="font-bold text-white text-xs uppercase tracking-wider">AI Portal</span>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
                AI-powered conversational interface for Jira Service Management. Built on Atlassian Forge.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Product</h4>
              <div className="space-y-2.5">
                {["Features", "ROI Calculator", "Pricing", "Documentation"].map(l => (
                  <a key={l} href="#" className="block text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>{l}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Resources</h4>
              <div className="space-y-2.5">
                {["Atlassian Marketplace", "Case Studies", "Blog", "Support"].map(l => (
                  <a key={l} href="#" className="block text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>{l}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Company</h4>
              <div className="space-y-2.5">
                {["About Valiantys", "Partners", "Careers", "Contact"].map(l => (
                  <a key={l} href="#" className="block text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.35)" }}>{l}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-8">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
              &copy; 2026 Valiantys. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Cookie Settings"].map(l => (
                <a key={l} href="#" className="text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.2)" }}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
