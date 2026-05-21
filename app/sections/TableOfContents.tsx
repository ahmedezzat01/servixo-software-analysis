"use client";

import { useEffect, useRef } from "react";
import { FileText, Layers, Network, Users, Zap, BarChart3 } from "lucide-react";

const tocItems = [
  {
    id: "overview",
    title: "Overview",
    description: "Software Analysis and Design and project metadata",
    icon: FileText,
    color: "from-blue-500 to-blue-600",
  },
  {
    id: "diagrams",
    title: "System Diagrams",
    description: "DFD, Use Cases, Activity, Context",
    icon: Network,
    color: "from-cyan-500 to-cyan-600",
  },
  {
    id: "sdlc",
    title: "SDLC & Design",
    description: "Development lifecycle and architecture",
    icon: Zap,
    color: "from-purple-500 to-purple-600",
  },
  {
    id: "usecases",
    title: "Use Cases",
    description: "13 use cases across 3 actors",
    icon: Layers,
    color: "from-pink-500 to-pink-600",
  },
  {
    id: "team",
    title: "Team & Contact",
    description: "Project team and supervisors",
    icon: Users,
    color: "from-green-500 to-green-600",
  },
];

export default function TableOfContents() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const scrollTo = (id: string) => {
    const el = document.querySelector(`#${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="section-padding relative">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="reveal inline-block text-xs text-accent tracking-widest uppercase mb-4">
            Quick Navigation
          </span>
          <h2 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Table of <span className="text-accent">Contents</span>
          </h2>
          <p className="reveal text-muted mt-4 max-w-2xl mx-auto">
            Navigate through the project documentation with our interactive guide
          </p>
        </div>

        {/* TOC Grid */}
        <div
          ref={containerRef}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {tocItems.map((item, i) => (
            <div
              key={item.id}
              className="reveal group cursor-pointer"
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => scrollTo(item.id)}
            >
              <div className={`glass-card p-6 h-full hover:shadow-lg transition-all duration-300 border border-glass-border group-hover:border-accent/50 group-hover:scale-105`}>
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}
                >
                  <item.icon size={20} className="text-white" />
                </div>
                <h3 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted group-hover:text-muted transition-colors">
                  {item.description}
                </p>
                <div className="mt-4 pt-4 border-t border-glass-border opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs text-accent font-medium">Click to jump →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 3D-like info card */}
        <div className="reveal mt-12 glass-card p-8 border border-accent/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 pointer-events-none" />
          <div className="relative">
            <h3 className="text-lg font-semibold mb-3">📋 Project Overview</h3>
            <p className="text-muted text-sm leading-relaxed">
              Servixo is a comprehensive Software Analysis and Design project documenting a service marketplace 
              platform. This interactive guide helps you navigate through all project components including 
              system diagrams (DFD, Use Cases, Activity flows), SDLC documentation, team information, and 
              feasibility studies. Click on any section above to jump directly to that part of the documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
