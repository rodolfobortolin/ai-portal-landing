"use client";

import { useState } from "react";
import Link from "next/link";
import basePath from "../../lib/basePath";

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

interface NavBarProps {
  links: NavLink[];
  ctaHref?: string;
  ctaLabel?: string;
}

export default function NavBar({ links, ctaHref = "/#contact", ctaLabel = "Contact Us" }: NavBarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={{ background: "rgba(23, 24, 87, 0.95)", backdropFilter: "blur(12px)" }}>
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 md:px-12 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src={`${basePath}/valiantys-logo-white.svg`} alt="Valiantys" className="hidden sm:block" style={{ height: 22 }} />
          <span className="hidden sm:inline" style={{ color: "rgba(255,255,255,0.3)", fontSize: 18, fontWeight: 300 }}>|</span>
          <img src={`${basePath}/ai-portal-logo.png`} alt="AI Portal" style={{ height: 28 }} />
          <span className="text-white font-bold text-sm uppercase tracking-wider">AI Portal</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            link.href.startsWith("/") ? (
              <Link key={link.href} href={link.href} className="text-sm font-semibold uppercase tracking-wider transition-colors hover:text-white" style={{ color: link.active ? "white" : "rgba(255,255,255,0.85)" }}>
                {link.label}
              </Link>
            ) : (
              <a key={link.href} href={link.href} className="text-sm font-semibold uppercase tracking-wider transition-colors hover:text-white" style={{ color: link.active ? "white" : "rgba(255,255,255,0.85)" }}>
                {link.label}
              </a>
            )
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* CTA button - hidden on small screens */}
          <a href={ctaHref} className="hidden sm:inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-white px-5 py-2.5 rounded transition-colors" style={{ background: "var(--blue-cta)" }}>
            {ctaLabel} <ArrowIcon />
          </a>

          {/* Hamburger button - visible on mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded"
            aria-label="Toggle menu"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            <span className="block w-5 h-0.5 bg-white rounded transition-all duration-300" style={{ transform: open ? "rotate(45deg) translateY(3px)" : "none" }} />
            <span className="block w-5 h-0.5 bg-white rounded mt-1 transition-all duration-300" style={{ opacity: open ? 0 : 1 }} />
            <span className="block w-5 h-0.5 bg-white rounded mt-1 transition-all duration-300" style={{ transform: open ? "rotate(-45deg) translateY(-3px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? `${links.length * 48 + 80}px` : "0",
          borderTop: open ? "1px solid rgba(255,255,255,0.1)" : "none",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-6 py-4 flex flex-col gap-1">
          {links.map((link) => (
            link.href.startsWith("/") ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-semibold uppercase tracking-wider py-2.5 transition-colors hover:text-white"
                style={{ color: link.active ? "white" : "rgba(255,255,255,0.7)" }}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-semibold uppercase tracking-wider py-2.5 transition-colors hover:text-white"
                style={{ color: link.active ? "white" : "rgba(255,255,255,0.7)" }}
              >
                {link.label}
              </a>
            )
          ))}
          <a
            href={ctaHref}
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-wider text-white px-5 py-3 rounded mt-2 sm:hidden"
            style={{ background: "var(--blue-cta)" }}
          >
            {ctaLabel} <ArrowIcon />
          </a>
        </div>
      </div>
    </nav>
  );
}
