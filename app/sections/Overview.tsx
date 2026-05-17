"use client";

import { useEffect, useRef } from "react";
import {
  Users,
  Shield,
  Star,
  FileCheck,
  Download,
  GraduationCap,
  UserCheck,
  Calendar,
  Presentation,
  Crown,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Client-Worker Connection",
    description:
      "Seamless matching system connecting service seekers with verified skilled workers",
  },
  {
    icon: Shield,
    title: "Transparent Pricing",
    description:
      "Clear cost structure before service — no hidden fees or exploitation",
  },
  {
    icon: Star,
    title: "Rating System",
    description:
      "Trust-based worker evaluation helping clients make informed decisions",
  },
  {
    icon: FileCheck,
    title: "Documented Transactions",
    description:
      "Full service history and records for accountability and trust",
  },
];

const metadata = [
  { label: "System", value: "Servixo — Service Marketplace", icon: null },
  { label: "Course", value: "System Analysis", icon: GraduationCap },
  { label: "Supervisor", value: "Dr. Nesma Ibrahim", icon: UserCheck },
  { label: "TA", value: "Eng. Menna El-Zawawy", icon: UserCheck },
  { label: "Team Leader", value: "El-Sayed Helmy", icon: Crown },
  { label: "Presentation", value: "Ahmed Ezzat", icon: Presentation },
  {
    label: "Team",
    value: "Ahmed Ezzat, El-Sayed Helmy, Khaled Abou Khalifa, Raneem Eissa, Rowan El-Khatib, Shahd Lotfy",
    icon: Users,
  },
  { label: "Year", value: "2025-2026", icon: Calendar },
];

// PDF files for download
const pdfFiles = [
  { name: "Context Diagram", file: "/diagrams/context-diagram.pdf" },
  { name: "Use Case Diagram", file: "/diagrams/use-case.pdf" },
  { name: "Activity Diagram", file: "/diagrams/activity-diagram.pdf" },
  { name: "Casual Descriptions (1/3)", file: "/diagrams/casual-page-1.pdf" },
  { name: "Casual Descriptions (2/3)", file: "/diagrams/casual-page-2.pdf" },
  { name: "Casual Descriptions (3/3)", file: "/diagrams/casual-page-3.pdf" },
  { name: "SDLC Document", file: "/diagrams/sdlc-document.pdf" },
];

export default function Overview() {
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

  const handleDownload = (filePath: string, fileName: string) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="overview" ref={sectionRef} className="section-padding relative">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="reveal inline-block text-xs text-accent tracking-widest uppercase mb-4">
            Project Overview
          </span>
          <h2 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            System <span className="text-accent">Overview</span>
          </h2>
          <p className="reveal text-muted mt-4 max-w-2xl mx-auto">
            A comprehensive solution digitizing the informal home service market
            through a centralized platform enabling transparent, secure transactions
            between clients and skilled workers with full accountability and trust
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Metadata Card */}
          <div className="lg:col-span-2">
            <div className="reveal glass-card p-8 h-full shimmer">
              <h3 className="text-lg font-semibold mb-6">Project Metadata</h3>
              <div className="space-y-4">
                {metadata.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 pb-4 border-b border-glass-border last:border-0 last:pb-0"
                  >
                    {item.icon && (
                      <item.icon size={16} className="text-accent mt-1 shrink-0" />
                    )}
                    <div>
                      <span className="text-xs text-muted uppercase tracking-wider">
                        {item.label}
                      </span>
                      <p className="text-sm mt-1">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <div
                key={i}
                className="reveal glass-card p-6 group gradient-border"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors pulse-ring">
                  <feature.icon size={20} className="text-accent" />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="reveal mt-16">
          <div className="glass-card p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold">Project Documentation</h3>
                <p className="text-sm text-muted mt-1">
                  Download all diagrams and specifications as PDF
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                <Download size={20} className="text-accent" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {pdfFiles.map((pdf, i) => (
                <button
                  key={i}
                  onClick={() => handleDownload(pdf.file, `${pdf.name}.pdf`)}
                  className="flex items-center gap-3 p-4 rounded-lg border border-glass-border hover:border-accent/50 hover:bg-accent/5 transition-all group text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-colors">
                    <span className="text-red-400 text-xs font-bold">PDF</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium truncate">{pdf.name}</p>
                    <p className="text-xs text-muted">Click to download</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
