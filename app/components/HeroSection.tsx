"use client";

import { useState, useEffect, useRef } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;

      // When container bottom enters viewport → progress starts
      // progress 0 = image fully hidden below, 1 = image fully revealed
      const progress = Math.min(
        Math.max((windowH - rect.top) / (windowH * 0.7), 0),
        1
      );

      // Image slides from 100% down to 0%
      const translateY = (1 - progress) * 100;
      img.style.transform = `translateY(${translateY}%)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <section
      className="relative flex flex-col overflow-hidden"
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

      {/* Hero text content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12 pt-32 pb-8">
        <div className="max-w-4xl">
          <HeroBlurIn delayMs={200}>
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full mb-8"
              style={{ background: "rgba(236,133,70,0.15)", color: "#EC8546", border: "1px solid rgba(236,133,70,0.3)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              For Jira Service Management
            </span>
          </HeroBlurIn>

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

          <HeroBlurIn delayMs={0} trigger={subheadDone}>
            <p
              className="text-lg md:text-xl max-w-2xl mb-10"
              style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}
            >
              Misrouted tickets, incomplete forms, and abandoned submissions are silently draining your support team.
              AI Portal <strong className="text-white">creates perfectly structured tickets</strong> and <strong className="text-white">routes them to the right person</strong>, in any language.
            </p>
          </HeroBlurIn>

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

          <HeroBlurIn delayMs={400} trigger={subheadDone}>
            <div
              className="flex flex-wrap items-center gap-6 mt-10 pt-6"
              style={{ borderTop: "1px dashed rgba(255,255,255,0.12)" }}
            >
              {/* Trust badges */}
              {[
                {
                  label: "Runs on Atlassian",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M7.57471 0.781006L14.2041 4.94319L7.57471 9.10538L0.945292 4.94319L7.57471 0.781006Z" fill="currentColor"/>
                      <path d="M13.1 6.7104L7.5 10.2263L1.9 6.7104L0.500001 7.58937L7.5 11.9842L14.5 7.58937L13.1 6.7104Z" fill="currentColor"/>
                      <path d="M13.1 9.50715L7.5 13.023L1.9 9.50715L0.500001 10.3861L7.5 14.781L14.5 10.3861L13.1 9.50715Z" fill="currentColor"/>
                    </svg>
                  ),
                },
                {
                  label: "Built on Forge",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1L2 4v4c0 3.5 2.5 6.5 6 8 3.5-1.5 6-4.5 6-8V4L8 1z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" fill="none"/>
                      <path d="M5.5 8l2 2 3.5-4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
                {
                  label: "Powered by Forge LLM",
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.3" strokeDasharray="3 2"/>
                      <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.3"/>
                      <circle cx="8" cy="8" r="0.8" fill="currentColor"/>
                    </svg>
                  ),
                },
              ].map((badge, i) => (
                <span
                  key={badge.label}
                  className="hero-trust-badge flex items-center gap-2.5 text-xs font-semibold tracking-wide"
                  style={{
                    color: "rgba(255,255,255,0.6)",
                    padding: "8px 16px",
                    borderRadius: 6,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    animationDelay: `${i * 2}s`,
                  }}
                >
                  {badge.icon}
                  {badge.label}
                </span>
              ))}
            </div>
          </HeroBlurIn>
        </div>
      </div>

      {/* Screenshot — "card under the door" effect */}
      <div
        ref={containerRef}
        className="relative z-10 max-w-[900px] mx-auto w-full px-6 md:px-12 overflow-hidden"
        style={{ height: 380 }}
      >
        <div ref={imgRef} className="relative will-change-transform" style={{ transform: "translateY(100%)" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}/app-screenshot.png`}
            alt="AI Portal - Help Center with AI Assistant"
            className="w-full block"
            style={{
              borderRadius: "16px 16px 0 0",
              boxShadow: "0 -4px 40px rgba(0,0,0,0.25)",
              objectFit: "cover",
              objectPosition: "top",
              height: 380,
            }}
          />
          {/* Bottom border line full width */}
        </div>
      </div>

    </section>
    {/* Full-width border line (edge to edge) */}
    <div
      className="w-full"
      style={{ height: 1, background: "rgba(255,255,255,0.25)" }}
    />
    </>
  );
}
