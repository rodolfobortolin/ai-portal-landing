"use client";

const features = [
  { label: "Portal Assistant", href: "#feat-portal", color: "#7E7CDE" },
  { label: "Dispatcher", href: "#feat-dispatcher", color: "#EC8546" },
  { label: "Escalation", href: "#feat-escalation", color: "#E25656" },
  { label: "Incident Linking", href: "#feat-incident", color: "#F59E0B" },
  { label: "Analytics", href: "#feat-analytics", color: "#51A2E7" },
  { label: "Instructions", href: "#feat-instructions", color: "#7E7CDE" },
  { label: "Workflow", href: "#feat-workflow", color: "#2BC48A" },
];

export default function FeatureNav() {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-16">
      {features.map((f) => (
        <a
          key={f.label}
          href={f.href}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(f.href)?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="feature-nav-pill"
          style={{
            border: `1.5px solid ${f.color}30`,
            color: f.color,
            background: `${f.color}08`,
            ["--pill-color" as string]: f.color,
          }}
        >
          {f.label}
        </a>
      ))}
    </div>
  );
}
