"use client";

import { useState } from "react";
import { HeroWordReveal, HeroBlurIn } from "./HeroReveal";
import basePath from "../../lib/basePath";

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function HeroSection() {
  const [headingDone, setHeadingDone] = useState(false);
  const [subheadDone, setSubheadDone] = useState(false);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Dashed vertical borders */}
      <div
        className="absolute inset-0 mx-auto max-w-[1280px]"
        style={{ borderLeft: "1px dashed rgba(255,255,255,0.12)", borderRight: "1px dashed rgba(255,255,255,0.12)" }}
      />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Floating orbs */}
      <div
        className="absolute top-1/4 right-[10%] w-64 h-64 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #7E7CDE, transparent)", animation: "float 6s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-1/4 left-[5%] w-48 h-48 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #EC8546, transparent)", animation: "float 8s ease-in-out infinite 1s" }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <HeroBlurIn delayMs={200}>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full mb-8"
              style={{ background: "rgba(236,133,70,0.15)", color: "#EC8546", border: "1px solid rgba(236,133,70,0.3)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              For Jira Service Management
            </span>
          </HeroBlurIn>

          {/* Heading — word-by-word blur reveal */}
          <h1 className="text-white mb-6">
            <HeroWordReveal delayMs={600} staggerMs={140} onComplete={() => setHeadingDone(true)}>
              {"Stop Losing Money"}
            </HeroWordReveal>
            <br />
            <HeroWordReveal
              delayMs={600 + 3 * 140 + 100}
              staggerMs={140}
              onComplete={() => setSubheadDone(true)}
              className="hero-heading-dim"
            >
              {"on Bad Tickets."}
            </HeroWordReveal>
          </h1>

          {/* Paragraph */}
          <HeroBlurIn delayMs={0} trigger={subheadDone}>
            <p
              className="text-lg md:text-xl max-w-2xl mb-10"
              style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}
            >
              Misrouted tickets, incomplete forms, and abandoned submissions are silently draining your support team.
              AI Portal lets users describe what they need in <strong className="text-white">any language</strong> and creates perfectly structured tickets, every time.
            </p>
          </HeroBlurIn>

          {/* CTA Buttons */}
          <HeroBlurIn delayMs={200} trigger={subheadDone}>
            <div className="flex flex-wrap gap-4">
              <a href="#roi-calculator" className="cta-button">
                Calculate Your ROI <ArrowIcon />
              </a>
              <a href="#how-it-works" className="cta-button cta-button-outline">
                See How It Works <ArrowIcon />
              </a>
            </div>
          </HeroBlurIn>

          {/* Badges */}
          <HeroBlurIn delayMs={400} trigger={subheadDone}>
            <div
              className="flex flex-wrap items-center gap-6 mt-14 pt-8"
              style={{ borderTop: "1px dashed rgba(255,255,255,0.12)" }}
            >
              {["Runs on Atlassian Forge", "100+ Languages", "Voice & Text Input", "5-Minute Install"].map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-xs font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {badge}
                </span>
              ))}
            </div>
          </HeroBlurIn>
        </div>
      </div>
    </section>
  );
}
