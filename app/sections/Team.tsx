"use client";

import { useEffect, useRef } from "react";
import { User } from "lucide-react";

const teamMembers = [
  {
    name: "Durar Ahmad Al-Qarni",
    id: "446031623",
    initials: "DA",
    color: "#f97316",
  },
  {
    name: "Balqees Yahya Alzahrani",
    id: "446001384",
    initials: "BY",
    color: "#a855f7",
  },
  {
    name: "Rawan Saleh Alghamdi",
    id: "446026943",
    initials: "RS",
    color: "#ef4444",
  },
  {
    name: "Rimas Abdulrahman Almuntashiri",
    id: "446005376",
    initials: "RA",
    color: "#14b8a6",
  },
  {
    name: "Tala Nader Alghamdi",
    id: "4466016482",
    initials: "TA",
    color: "#eab308",
  },
];

export default function Team() {
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
    <section id="team" ref={sectionRef} style={{ padding: "120px 24px" }}>
      <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <span 
            className="reveal"
            style={{ 
              display: "inline-block", 
              fontSize: "12px", 
              color: "#06b6d4", 
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "16px"
            }}
          >
            Software Analysis and Design
          </span>
          <h2 
            className="reveal"
            style={{ 
              fontSize: "clamp(2.5rem, 5vw, 4rem)", 
              fontWeight: "800",
              letterSpacing: "-0.02em",
              lineHeight: "1"
            }}
          >
            Our <span style={{ color: "#06b6d4" }}>Team</span>
          </h2>
          <p 
            className="reveal"
            style={{ 
              color: "#a1a1aa", 
              marginTop: "16px",
              maxWidth: "500px",
              margin: "16px auto 0"
            }}
          >
            Team Members — Software Analysis and Design Project 2025-2026
          </p>
        </div>

        {/* Team Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px"
        }}>
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="reveal"
              style={{ 
                transitionDelay: `${i * 100}ms`,
                background: "rgba(255, 255, 255, 0.03)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                padding: "24px",
                textAlign: "center",
                transition: "all 0.4s ease",
                cursor: "default"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.3)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 0 40px rgba(6, 182, 212, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "16px",
                  margin: "0 auto 16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  fontWeight: "bold",
                  backgroundColor: `${member.color}20`,
                  border: `2px solid ${member.color}40`,
                  color: member.color,
                  transition: "transform 0.3s ease"
                }}
                className="group-avatar"
              >
                {member.initials}
              </div>

              {/* Role Badge - Member */}
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                padding: "4px 12px",
                borderRadius: "9999px",
                background: "rgba(107, 114, 128, 0.1)",
                border: "1px solid rgba(107, 114, 128, 0.2)",
                color: "#9ca3af",
                fontSize: "12px",
                marginBottom: "8px"
              }}>
                <User size={10} />
                <span>Member</span>
              </div>

              {/* Info */}
              <h3 style={{ fontWeight: "600", fontSize: "18px", marginBottom: "4px" }}>
                {member.name}
              </h3>
              <span style={{ 
                fontSize: "12px", 
                color: "#a1a1aa",
                fontFamily: "monospace",
                display: "block",
                marginBottom: "8px"
              }}>
                ID: {member.id}
              </span>
            </div>
          ))}
        </div>

        {/* Supervisor */}
        <div 
          className="reveal"
          style={{
            marginTop: "64px",
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "16px",
            padding: "32px",
            textAlign: "center"
          }}
        >
          <h3 style={{ fontSize: "14px", color: "#06b6d4", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>
            Software Analysis and Design
          </h3>
          <p style={{ fontSize: "12px", color: "#a1a1aa", marginBottom: "24px" }}>
            Course Information
          </p>
          
          <p style={{ fontSize: "13px", color: "#f59e0b", marginBottom: "16px", letterSpacing: "0.05em" }}>
            Under Supervision of
          </p>
          
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <div style={{
                width: "56px",
                height: "56px",
                borderRadius: "12px",
                background: "rgba(6, 182, 212, 0.1)",
                border: "1px solid rgba(6, 182, 212, 0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <span style={{ color: "#06b6d4", fontWeight: "700" }}>YI</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <h4 style={{ fontWeight: "600" }}>Dr. Youmna Ibrahim</h4>
                <p style={{ fontSize: "14px", color: "#a1a1aa" }}>Course Instructor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}