"use client";

import { useEffect, useRef } from "react";
import {
  businessRequirements,
  systemRequirements,
  clientRequirements,
  workerRequirements,
  adminRequirements,
  nonFunctionalRequirements,
  keyChallenges,
  platformSolution
} from "../data/requirementsData";

export default function Requirements() {
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
    <section id="requirements" ref={sectionRef} style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
        
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span className="reveal" style={{ display: "inline-block", fontSize: "12px", color: "#06b6d4", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
            System Analysis
          </span>
          <h2 className="reveal" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: "800", letterSpacing: "-0.02em", lineHeight: "1" }}>
            Requirements <span style={{ color: "#06b6d4" }}>Specification</span>
          </h2>
        </div>

        {/* Key Challenges & Platform Solution */}
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px", marginBottom: "48px" }}>
          
          {/* Key Challenges */}
          <div style={{ background: "rgba(239, 68, 68, 0.05)", border: "1px solid rgba(239, 68, 68, 0.2)", borderRadius: "24px", padding: "32px" }}>
            <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "24px", color: "#ef4444" }}>⚠️ Key Challenges</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {keyChallenges.map((challenge: string, i: number) => (
                <li key={i} style={{ padding: "12px 0", borderBottom: "1px solid rgba(239, 68, 68, 0.1)", fontSize: "15px", color: "#e5e5e5", display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "#ef4444", fontSize: "18px" }}>●</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          {/* Platform Solution */}
          <div style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid rgba(34, 197, 94, 0.2)", borderRadius: "24px", padding: "32px" }}>
            <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "24px", color: "#22c55e" }}>✅ Platform Solution</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {platformSolution.map((solution: string, i: number) => (
                <li key={i} style={{ padding: "12px 0", borderBottom: "1px solid rgba(34, 197, 94, 0.1)", fontSize: "15px", color: "#e5e5e5", display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "#22c55e", fontSize: "18px" }}>✓</span>
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Business & System Requirements */}
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px", marginBottom: "48px" }}>
          
          <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "24px", padding: "32px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "20px", color: "#f59e0b" }}>🏢 Business Requirements</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {businessRequirements.map((req: string, i: number) => (
                <li key={i} style={{ padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "14px", color: "#d4d4d8", lineHeight: "1.5" }}>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "24px", padding: "32px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "20px", color: "#8b5cf6" }}>🖥️ System Requirements</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {systemRequirements.map((req: string, i: number) => (
                <li key={i} style={{ padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "14px", color: "#d4d4d8", lineHeight: "1.5" }}>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Client, Worker, Admin Requirements */}
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "24px", marginBottom: "48px" }}>
          
          <div style={{ background: "rgba(59, 130, 246, 0.05)", border: "1px solid rgba(59, 130, 246, 0.2)", borderRadius: "24px", padding: "32px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "20px", color: "#3b82f6" }}>👤 Client Requirements</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {clientRequirements.map((req: string, i: number) => (
                <li key={i} style={{ padding: "10px 0", borderBottom: "1px solid rgba(59, 130, 246, 0.1)", fontSize: "14px", color: "#d4d4d8", lineHeight: "1.5" }}>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: "rgba(34, 197, 94, 0.05)", border: "1px solid rgba(34, 197, 94, 0.2)", borderRadius: "24px", padding: "32px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "20px", color: "#22c55e" }}>🛠️ Worker Requirements</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {workerRequirements.map((req: string, i: number) => (
                <li key={i} style={{ padding: "10px 0", borderBottom: "1px solid rgba(34, 197, 94, 0.1)", fontSize: "14px", color: "#d4d4d8", lineHeight: "1.5" }}>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <div style={{ background: "rgba(139, 92, 246, 0.05)", border: "1px solid rgba(139, 92, 246, 0.2)", borderRadius: "24px", padding: "32px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "20px", color: "#8b5cf6" }}>👑 Admin Requirements</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {adminRequirements.map((req: string, i: number) => (
                <li key={i} style={{ padding: "10px 0", borderBottom: "1px solid rgba(139, 92, 246, 0.1)", fontSize: "14px", color: "#d4d4d8", lineHeight: "1.5" }}>
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Non-Functional Requirements */}
        <div className="reveal" style={{ background: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "24px", padding: "32px", marginBottom: "48px" }}>
          <h3 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "32px", textAlign: "center", color: "#06b6d4" }}>📋 Non-Functional Requirements</h3>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
            
            <div>
              <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "16px", color: "#f59e0b" }}>⚙️ Operational Requirements</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {nonFunctionalRequirements.operational.map((req: string, i: number) => (
                  <li key={i} style={{ padding: "8px 0", fontSize: "13px", color: "#a1a1aa", lineHeight: "1.5" }}>• {req}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "16px", color: "#f59e0b" }}>⚡ Performance Requirements</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {nonFunctionalRequirements.performance.map((req: string, i: number) => (
                  <li key={i} style={{ padding: "8px 0", fontSize: "13px", color: "#a1a1aa", lineHeight: "1.5" }}>• {req}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "16px", color: "#f59e0b" }}>🔒 Security Requirements</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {nonFunctionalRequirements.security.map((req: string, i: number) => (
                  <li key={i} style={{ padding: "8px 0", fontSize: "13px", color: "#a1a1aa", lineHeight: "1.5" }}>• {req}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "16px", color: "#f59e0b" }}>🌍 Cultural & Political Requirements</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {nonFunctionalRequirements.cultural.map((req: string, i: number) => (
                  <li key={i} style={{ padding: "8px 0", fontSize: "13px", color: "#a1a1aa", lineHeight: "1.5" }}>• {req}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "16px", color: "#f59e0b" }}>🎯 Usability Requirements</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {nonFunctionalRequirements.usability.map((req: string, i: number) => (
                  <li key={i} style={{ padding: "8px 0", fontSize: "13px", color: "#a1a1aa", lineHeight: "1.5" }}>• {req}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}