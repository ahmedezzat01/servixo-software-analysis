"use client";

import { useEffect, useRef } from "react";
import { Github, Linkedin, Mail, Crown, Presentation, User } from "lucide-react";

const teamMembers = [
  {
    name: "Ahmed Ezzat",
    role: "Presentation Lead",
    id: "812724087",
    contribution: "Penetration Tester",
    initials: "AE",
    color: "#3b82f6",
    links: { 
      github: "https://github.com/ahmedezzat01", 
      linkedin: "https://www.linkedin.com/in/ahmed-ezzat01/", 
      email: "ahmednabhan854@gmail.com" 
    },
  },
  {
    name: "El-Sayed Helmy",
    role: "Team Leader",
    id: "812705402",
    contribution: "Mobile App Developer",
    initials: "EH",
    color: "#22c55e",
    links: {  
      linkedin: "https://www.linkedin.com/in/sayedhelmey19/", 
      email: "elsayed.helmey198@gmail.com" 
    },
  },
  {
    name: "Khaled Abou Khalifa",
    role: "Member",
    id: "812733076",
    contribution: "Network & CyberSec Enthusiast",
    initials: "KA",
    color: "#f59e0b",
    links: { 
      linkedin: "https://www.linkedin.com/in/khaled-abukhalifa/", 
      email: "khaled2014.com@gmail.com" 
    },
  },
  {
    name: "Raneem Eissa",
    role: "Member",
    id: "812708230",
    contribution: "UI & UX Designer",
    initials: "RE",
    color: "#ec4899",
    links: {
      linkedin: "https://www.linkedin.com/in/ranim-eissa-web-developer/", 
      email: "rneemeissa@gmail.com" 
    },
  },
  {
    name: "Rowan El-Khatib",
    role: "Member",
    id: "812735197",
    contribution: "Team Member",
    initials: "RK",
    color: "#8b5cf6",
    links: {},
  },
  {
    name: "Shahd Lotfy",
    role: "Member",
    id: "812710250",
    contribution: "Team Member",
    initials: "SL",
    color: "#06b6d4",
    links: { 
      linkedin: "https://www.linkedin.com/in/shahd-lotfy-473a89378/"
    },
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
            The People Behind
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
            Team 6 — System Analysis Project 2025-2026
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

              {/* Role Badge */}
              {member.role === "Team Leader" && (
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  background: "rgba(234, 179, 8, 0.1)",
                  border: "1px solid rgba(234, 179, 8, 0.2)",
                  color: "#eab308",
                  fontSize: "12px",
                  marginBottom: "8px"
                }}>
                  <Crown size={10} />
                  <span>Team Leader</span>
                </div>
              )}
              {member.role === "Presentation Lead" && (
                <div style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  background: "rgba(59, 130, 246, 0.1)",
                  border: "1px solid rgba(59, 130, 246, 0.2)",
                  color: "#3b82f6",
                  fontSize: "12px",
                  marginBottom: "8px"
                }}>
                  <Presentation size={10} />
                  <span>Presentation Lead</span>
                </div>
              )}
              {member.role === "Member" && (
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
              )}

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
              <span
                style={{
                  display: "inline-block",
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  fontSize: "12px",
                  backgroundColor: `${member.color}15`,
                  color: member.color,
                  marginBottom: "8px"
                }}
              >
                {member.contribution}
              </span>

              {/* Social Links */}
              <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "16px" }}>
                {member.links?.github && (
                  <a
                    href={member.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      textDecoration: "none"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.5)";
                      e.currentTarget.style.background = "rgba(6, 182, 212, 0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <Github size={14} style={{ color: "#a1a1aa" }} />
                  </a>
                )}
                {member.links?.linkedin && (
                  <a
                    href={member.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      textDecoration: "none"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.5)";
                      e.currentTarget.style.background = "rgba(6, 182, 212, 0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <Linkedin size={14} style={{ color: "#a1a1aa" }} />
                  </a>
                )}
                {member.links?.email && (
                  <a
                    href={`mailto:${member.links.email}`}
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "8px",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      textDecoration: "none"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(6, 182, 212, 0.5)";
                      e.currentTarget.style.background = "rgba(6, 182, 212, 0.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    <Mail size={14} style={{ color: "#a1a1aa" }} />
                  </a>
                )}
              </div>

              {/* No links placeholder */}
              {(!member.links?.github && !member.links?.linkedin && !member.links?.email) && (
                <p style={{ fontSize: "12px", color: "#a1a1aa", marginTop: "12px", opacity: 0.5 }}>
                  Links coming soon
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Supervisors */}
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
          <h3 style={{ fontSize: "12px", color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "24px" }}>
            Under Supervision
          </h3>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
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
                <span style={{ color: "#06b6d4", fontWeight: "700" }}>NI</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <h4 style={{ fontWeight: "600" }}>Dr. Nesma Ibrahim</h4>
                <p style={{ fontSize: "14px", color: "#a1a1aa" }}>Course Supervisor</p>
              </div>
            </div>

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
                <span style={{ color: "#06b6d4", fontWeight: "700" }}>MZ</span>
              </div>
              <div style={{ textAlign: "center" }}>
                <h4 style={{ fontWeight: "600" }}>Eng. Menna El-Zawawy</h4>
                <p style={{ fontSize: "14px", color: "#a1a1aa" }}>Teaching Assistant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
