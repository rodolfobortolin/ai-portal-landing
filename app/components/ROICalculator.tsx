"use client";

import { useState, useEffect, useRef, useCallback } from "react";

function useAnimatedNumber(target: number, duration = 600) {
  const [display, setDisplay] = useState(target);
  const frameRef = useRef<number>(0);
  const startRef = useRef(target);
  const startTimeRef = useRef(0);

  useEffect(() => {
    startRef.current = display;
    startTimeRef.current = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(startRef.current + (target - startRef.current) * eased));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [target, duration]);

  return display;
}

function formatCurrency(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n.toLocaleString()}`;
}

export default function ROICalculator() {
  const [tickets, setTickets] = useState(1000);
  const [agentCost, setAgentCost] = useState(45);
  const [misrouteRate, setMisrouteRate] = useState(23);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // ROI calculations from SALES.md
  const misrouteWaste = (tickets * (misrouteRate / 100) * 45 * (agentCost / 60)) * 12;
  const clarificationWaste = (tickets * 0.30 * 15 * (agentCost / 60)) * 12;
  const abandonmentWaste = (tickets * 0.10 * 25 * (agentCost / 60)) * 12;
  const totalAnnualWaste = misrouteWaste + clarificationWaste + abandonmentWaste;

  const misrouteSaved = misrouteWaste * 0.90;
  const clarificationSaved = clarificationWaste * 0.80;
  const abandonmentSaved = abandonmentWaste * 0.70;
  const trainingSaved = 6000;
  const totalSavings = misrouteSaved + clarificationSaved + abandonmentSaved + trainingSaved;

  const subscriptionCost = 5000;
  const roiMultiplier = totalSavings / subscriptionCost;
  const paybackDays = Math.round((subscriptionCost / totalSavings) * 365);

  const animatedWaste = useAnimatedNumber(Math.round(totalAnnualWaste));
  const animatedSavings = useAnimatedNumber(Math.round(totalSavings));
  const animatedROI = useAnimatedNumber(Math.round(roiMultiplier * 10));
  const animatedPayback = useAnimatedNumber(paybackDays);

  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setIsVisible(true);
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [observerCallback]);

  return (
    <section
      ref={sectionRef}
      id="roi-calculator"
      className="relative py-24 md:py-32"
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Dashed frame */}
      <div className="absolute inset-0 mx-auto max-w-[1280px] border-l border-r border-dashed" style={{ borderColor: "rgba(255,255,255,0.15)" }} />

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest rounded-full mb-6"
                style={{ background: "rgba(236,133,70,0.15)", color: "#EC8546", border: "1px solid rgba(236,133,70,0.3)" }}>
            ROI Calculator
          </span>
          <h2 className="text-white mb-4" style={{ letterSpacing: "-0.05em" }}>
            Calculate Your
            <br />
            Annual Savings
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Adjust the sliders to match your organization. See exactly what bad tickets cost you — and what AI Portal saves.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Sliders Panel */}
          <div className={`rounded-xl p-8 md:p-10 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
               style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(20px)", border: "1px dashed rgba(255,255,255,0.15)" }}>

            <div className="mb-10">
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Monthly Tickets
                </label>
                <span className="text-2xl font-bold text-white tabular-nums">{tickets.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={100}
                max={10000}
                step={100}
                value={tickets}
                onChange={e => setTickets(Number(e.target.value))}
                className="w-full"
                style={{
                  background: `linear-gradient(to right, var(--blue-cta) 0%, var(--blue-cta) ${((tickets - 100) / (10000 - 100)) * 100}%, rgba(255,255,255,0.15) ${((tickets - 100) / (10000 - 100)) * 100}%, rgba(255,255,255,0.15) 100%)`
                }}
              />
              <div className="flex justify-between text-xs mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                <span>100</span><span>10,000</span>
              </div>
            </div>

            <div className="mb-10">
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Avg Agent Cost / Hour
                </label>
                <span className="text-2xl font-bold text-white tabular-nums">${agentCost}</span>
              </div>
              <input
                type="range"
                min={30}
                max={80}
                step={5}
                value={agentCost}
                onChange={e => setAgentCost(Number(e.target.value))}
                className="w-full"
                style={{
                  background: `linear-gradient(to right, var(--blue-cta) 0%, var(--blue-cta) ${((agentCost - 30) / (80 - 30)) * 100}%, rgba(255,255,255,0.15) ${((agentCost - 30) / (80 - 30)) * 100}%, rgba(255,255,255,0.15) 100%)`
                }}
              />
              <div className="flex justify-between text-xs mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                <span>$30</span><span>$80</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Ticket Misroute Rate
                </label>
                <span className="text-2xl font-bold text-white tabular-nums">{misrouteRate}%</span>
              </div>
              <input
                type="range"
                min={10}
                max={40}
                step={1}
                value={misrouteRate}
                onChange={e => setMisrouteRate(Number(e.target.value))}
                className="w-full"
                style={{
                  background: `linear-gradient(to right, var(--blue-cta) 0%, var(--blue-cta) ${((misrouteRate - 10) / (40 - 10)) * 100}%, rgba(255,255,255,0.15) ${((misrouteRate - 10) / (40 - 10)) * 100}%, rgba(255,255,255,0.15) 100%)`
                }}
              />
              <div className="flex justify-between text-xs mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
                <span>10%</span><span>40% <span className="opacity-50">(industry avg: 23%)</span></span>
              </div>
            </div>

            {/* Source note */}
            <p className="mt-8 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              Based on benchmarks from BMC, MetricNet, HDI, and HappySignals research.
            </p>
          </div>

          {/* Results Panel */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {/* Waste card */}
            <div className="rounded-xl p-8 mb-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px dashed rgba(255,255,255,0.1)" }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                Your Annual Waste
              </p>
              <p className="text-5xl md:text-6xl font-bold tabular-nums" style={{ color: "#EC8546" }}>
                {formatCurrency(animatedWaste)}
              </p>
              <p className="text-sm mt-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                Lost to misrouting, clarification loops, and portal abandonment every year.
              </p>
            </div>

            {/* Savings card */}
            <div className="rounded-xl p-8 mb-4" style={{ background: "rgba(43,46,216,0.2)", border: "1px solid rgba(43,46,216,0.4)" }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                Annual Savings with AI Portal
              </p>
              <p className="text-5xl md:text-6xl font-bold tabular-nums text-white">
                {formatCurrency(animatedSavings)}
              </p>
              <div className="grid grid-cols-3 gap-4 mt-5 pt-5" style={{ borderTop: "1px dashed rgba(255,255,255,0.15)" }}>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>Misrouting</p>
                  <p className="text-sm font-bold text-white">-90%</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>Clarification</p>
                  <p className="text-sm font-bold text-white">-80%</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>Abandonment</p>
                  <p className="text-sm font-bold text-white">-70%</p>
                </div>
              </div>
            </div>

            {/* ROI metrics row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl p-6 text-center" style={{ background: "rgba(255,255,255,0.06)", border: "1px dashed rgba(255,255,255,0.1)" }}>
                <p className="text-4xl font-bold text-white tabular-nums">{(animatedROI / 10).toFixed(1)}x</p>
                <p className="text-xs uppercase tracking-widest mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>ROI Return</p>
              </div>
              <div className="rounded-xl p-6 text-center" style={{ background: "rgba(255,255,255,0.06)", border: "1px dashed rgba(255,255,255,0.1)" }}>
                <p className="text-4xl font-bold tabular-nums" style={{ color: "#7E7CDE" }}>{animatedPayback} days</p>
                <p className="text-xs uppercase tracking-widest mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>Payback Period</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a href="#contact" className="cta-button" style={{ background: "white", color: "var(--navy)", borderColor: "white" }}>
            Get AI Portal Now
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
