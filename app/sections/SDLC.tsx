"use client";

import { useEffect, useRef } from "react";
import {
  Lightbulb,
  Search,
  PenTool,
  Code,
  Wrench,
  CheckCircle,
} from "lucide-react";

const phases = [
  {
    icon: Lightbulb,
    title: "Planning",
    period: "Week 1-2",
    deliverables: [
      "Project prioritization & scope definition",
      "System architecture design",
      "Work plan with timeline & milestones",
      "Team role assignment",
      "Business case documentation",
    ],
    color: "#f59e0b",
  },
  {
    icon: Search,
    title: "Analysis",
    period: "Week 3-4",
    deliverables: [
      "Current Software Analysis and Design",
      "Problem identification",
      "Functional requirements (13 use cases)",
      "Non-functional requirements",
      "Solution evaluation & selection",
    ],
    color: "#3b82f6",
  },
  {
    icon: PenTool,
    title: "Design",
    period: "Week 5-6",
    deliverables: [
      "Functional design (inputs, processes, outputs)",
      "Database design (relational schema)",
      "UI/UX screen designs",
      "Technical specifications",
      "Security architecture",
    ],
    color: "#8b5cf6",
  },
  {
    icon: Code,
    title: "Implementation",
    period: "Week 7-10",
    deliverables: [
      "Database implementation",
      "Core module development",
      "Authentication system",
      "Testing (unit & functional)",
      "Technical documentation",
    ],
    color: "#06b6d4",
  },
  {
    icon: Wrench,
    title: "Maintenance",
    period: "Ongoing",
    deliverables: [
      "Performance monitoring",
      "Bug fixes & corrections",
      "Periodic updates",
      "User feedback integration",
      "Future enhancement planning",
    ],
    color: "#22c55e",
  },
];

export default function SDLC() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionRef.current.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sdlc" ref={sectionRef} className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="reveal inline-block text-xs text-accent tracking-widest uppercase mb-4">
            Development Process
          </span>
          <h2 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            SDLC <span className="text-accent">Timeline</span>
          </h2>
          <p className="reveal text-muted mt-4 max-w-2xl mx-auto">
            The structured approach behind building the Servixo platform
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden md:block" />

          {phases.map((phase, i) => (
            <div
              key={i}
              className={`reveal relative flex items-center gap-8 mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Content Card */}
              <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="glass-card p-6 inline-block">
                  {/* Header */}
                  <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${phase.color}15`, border: `1px solid ${phase.color}30` }}
                    >
                      <phase.icon size={18} style={{ color: phase.color }} />
                    </div>
                    <div className={i % 2 === 0 ? "md:text-right" : ""}>
                      <h3 className="font-semibold">{phase.title}</h3>
                      <span className="text-xs text-muted">{phase.period}</span>
                    </div>
                  </div>

                  {/* Deliverables */}
                  <ul className="space-y-2">
                    {phase.deliverables.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <CheckCircle
                          size={14}
                          className="mt-0.5 shrink-0"
                          style={{ color: phase.color }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Center Dot */}
              <div className="hidden md:flex items-center justify-center relative z-10">
                <div
                  className="w-4 h-4 rounded-full border-2"
                  style={{
                    backgroundColor: phase.color,
                    borderColor: phase.color,
                    boxShadow: `0 0 20px ${phase.color}50`,
                  }}
                />
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
