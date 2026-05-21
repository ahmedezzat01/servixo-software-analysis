"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import Worker3D from "../components/Worker3D";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      const elements = textRef.current.querySelectorAll(".reveal");
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/5 blur-[100px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-[120px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "1s" }} />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={textRef} className="relative z-10">
            {/* Badge */}
            <div className="reveal inline-flex items-center gap-2 px-4 py-2 rounded-full border border-glass-border bg-glass mb-8 hover:border-accent/30 transition-colors">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs text-muted tracking-wider uppercase">
                Software Analysis and Design Project
              </span>
            </div>

            {/* Main Title */}
            <h1 className="reveal text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-6">
              <span className="block text-white">Srvixo</span>
              <span
                className="block text-transparent bg-clip-text glow-text"
                style={{
                  backgroundImage: "linear-gradient(135deg, #06b6d4, #22d3ee, #8b5cf6)",
                }}
              >
                Software Analysis and Design
              </span>
            </h1>

            {/* Subtitle */}
            <p className="reveal text-xl md:text-2xl text-muted font-light mb-4">
              Service Marketplace Platform
            </p>

            {/* Description */}
            <p className="reveal text-muted leading-relaxed max-w-lg mb-8">
              A centralized digital platform connecting clients with skilled workers — 
              ensuring transparency, documented transactions, and trust-based 
              service delivery.
            </p>

            {/* Team Info */}
            <div className="reveal glass-card p-4 mb-8 inline-block">
              <div className="flex flex-col gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-muted">Team Leader:</span>
                  <span className="text-accent font-medium">Durar Ahmad Al-Qarni</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted">Presentation:</span>
                  <span className="text-accent font-medium">Balqees Yahya Alzahrani</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted">Supervisor:</span>
                  <span className="text-white">Dr. Youmna Ibrahim</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="reveal flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#diagrams")}
                className="group flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-accent hover:text-white transition-all duration-300 magnetic-btn"
              >
                <span>Explore System</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => scrollTo("#diagrams")}
                className="flex items-center gap-2 px-6 py-3 border border-glass-border rounded-lg text-muted hover:text-white hover:border-accent/50 transition-all duration-300 magnetic-btn"
              >
                <span>View Diagrams</span>
                <ExternalLink size={16} />
              </button>
            </div>

            {/* Tech Stack Pills */}
            <div className="reveal flex flex-wrap gap-2 mt-12">
              {["React", "Node.js", "Three.js", "R3F", "GSAP", "Tailwind"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs rounded-full border border-glass-border text-muted hover:border-accent/30 hover:text-accent transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right - 3D Worker */}
          <div className="relative h-screen flex items-center justify-center">
            <div className="absolute top-1/3 left-0 right-0">
              <Worker3D />

              {/* Decorative elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-accent/5 pointer-events-none animate-pulse-glow" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-accent/10 pointer-events-none animate-pulse-glow" style={{ animationDelay: "0.5s" }} />

              {/* Floating labels */}
              <div className="absolute top-10 right-10 glass-card px-3 py-2 text-xs text-accent animate-float">
                Interactive 3D
              </div>
              <div className="absolute bottom-20 left-10 glass-card px-3 py-2 text-xs text-muted animate-float" style={{ animationDelay: "1s" }}>
                Move your cursor
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}