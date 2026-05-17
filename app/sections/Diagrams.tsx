"use client";

import { useState, useEffect, useRef } from "react";
import {
  ZoomIn,
  Download,
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
  Network,
  Activity,
  GitBranch,
  FileText,
  FileCheck,
} from "lucide-react";

interface Diagram {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  pdfFile: string;
  icon: React.ElementType;
  category: string;
}

const diagrams: Diagram[] = [
  {
    id: "dfd-0",
    title: "DFD Level 0",
    subtitle: "Context Level Data Flow",
    description:
      "Context-level data flow diagram showing the system as a single process and its interactions with external entities",
    image: "/diagrams/DFD-Level-0.png",
    pdfFile: "/diagrams/DFD-Level-0.pdf",
    icon: Network,
    category: "System Analysis",
  },
  {
    id: "dfd-1",
    title: "DFD Level 1",
    subtitle: "Detailed Process Decomposition",
    description:
      "Detailed level data flow diagram showing subsystems, processes, and data stores within the system",
    image: "/diagrams/DFD-Level-1.png",
    pdfFile: "/diagrams/DFD-Level-1.pdf",
    icon: Network,
    category: "System Analysis",
  },
  {
    id: "feasability",
    title: "Feasibility Study",
    subtitle: "Project Feasibility Analysis",
    description:
      "Comprehensive feasibility analysis covering technical, economic, operational, and scheduling aspects",
    image: "/diagrams/fesability.png",
    pdfFile: "/diagrams/fesability.pdf",
    icon: FileCheck,
    category: "Documentation",
  },
  {
    id: "context",
    title: "Context Diagram",
    subtitle: "System Boundaries & External Entities",
    description:
      "High-level view showing Servixo system interactions with Clients, Workers, and Admin entities",
    image: "/diagrams/context-diagram.png",
    pdfFile: "/diagrams/context-diagram.pdf",
    icon: Network,
    category: "System Analysis",
  },
  {
    id: "usecase",
    title: "Use Case Diagram",
    subtitle: "13 Use Cases Across 3 Actors",
    description:
      "Complete use case model showing Client, Worker, and Admin interactions with the system",
    image: "/diagrams/use-case-diagram.png",
    pdfFile: "/diagrams/use-case.pdf",
    icon: Layers,
    category: "Requirements",
  },
  {
    id: "activity",
    title: "Activity Diagram",
    subtitle: "Workflow & Process Flow",
    description:
      "Detailed activity flow showing Client, Worker, and Admin processes with decision points",
    image: "/diagrams/activity-diagram.png",
    pdfFile: "/diagrams/activity-diagram.pdf",
    icon: Activity,
    category: "Process Modeling",
  },
  {
    id: "casual-1",
    title: "Casual Descriptions (1/3)",
    subtitle: "UC-1 to UC-4",
    description:
      "Create Account, Search Service, Post Service Request, Rate Worker",
    image: "/diagrams/casual-page-1.png",
    pdfFile: "/diagrams/casual-descriptions.pdf",
    icon: FileText,
    category: "Documentation",
  },
  {
    id: "casual-2",
    title: "Casual Descriptions (2/3)",
    subtitle: "UC-5 to UC-8",
    description:
      "Manage Offers, View Available Requests, View Rating, Manage Services",
    image: "/diagrams/casual-page-2.png",
    pdfFile: "/diagrams/casual-descriptions.pdf",
    icon: FileText,
    category: "Documentation",
  },
  {
    id: "casual-3",
    title: "Casual Descriptions (3/3)",
    subtitle: "UC-9 to UC-13",
    description:
      "Monitor System, Manage User Accounts, Handle Complaints, Select Worker, Make Payment",
    image: "/diagrams/casual-page-3.png",
    pdfFile: "/diagrams/casual-descriptions.pdf",
    icon: FileText,
    category: "Documentation",
  },
];

const useCases = [
  { id: "uc1", name: "Create Account", actor: "Client/Worker", icon: "👤" },
  { id: "uc2", name: "Search Service", actor: "Client", icon: "🔍" },
  { id: "uc3", name: "Post Service Request", actor: "Client", icon: "📋" },
  { id: "uc4", name: "Rate Worker", actor: "Client", icon: "⭐" },
  { id: "uc5", name: "Manage Offers", actor: "Worker", icon: "📊" },
  { id: "uc6", name: "View Requests", actor: "Worker", icon: "📬" },
  { id: "uc7", name: "View Rating", actor: "Worker", icon: "🏆" },
  { id: "uc8", name: "Manage Services", actor: "Admin", icon: "⚙️" },
  { id: "uc9", name: "Monitor System", actor: "Admin", icon: "📈" },
  { id: "uc10", name: "Manage Accounts", actor: "Admin", icon: "🔐" },
  { id: "uc11", name: "Handle Complaints", actor: "Admin", icon: "🛡️" },
  { id: "uc12", name: "Select Worker", actor: "Client", icon: "✅" },
  { id: "uc13", name: "Make Payment", actor: "Client", icon: "💳" },
];

export default function Diagrams() {
  const [selectedDiagram, setSelectedDiagram] = useState<Diagram | null>(null);
  const [activeUseCase, setActiveUseCase] = useState(0);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
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

  const nextUseCase = () => setActiveUseCase((p) => (p + 1) % useCases.length);
  const prevUseCase = () =>
    setActiveUseCase((p) => (p - 1 + useCases.length) % useCases.length);

  const handleImageError = (id: string) => {
    setImageErrors((prev) => new Set(prev).add(id));
  };

  const handleDownload = (file: string, name: string) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="diagrams" ref={sectionRef} className="section-padding relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="reveal inline-block text-xs text-accent tracking-widest uppercase mb-4">
            System Analysis
          </span>
          <h2 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            System <span className="text-accent">Diagrams</span>
          </h2>
          <p className="reveal text-muted mt-4 max-w-2xl mx-auto">
            Comprehensive visual analysis of the Servixo system architecture and design
          </p>
        </div>

        {/* Main Diagrams Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {diagrams.map((diagram, i) => (
            <div
              key={diagram.id}
              className="reveal glass-card group cursor-pointer overflow-hidden"
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setSelectedDiagram(diagram)}
            >
              {/* Image Preview */}
              <div className="relative h-56 overflow-hidden bg-glass">
                {!imageErrors.has(diagram.id) ? (
                  <img
                    src={diagram.image}
                    alt={diagram.title}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    onError={() => handleImageError(diagram.id)}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <diagram.icon size={48} className="text-accent/30 mb-2" />
                    <span className="text-xs text-muted">{diagram.title}</span>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-2 text-accent">
                    <ZoomIn size={20} />
                    <span className="text-sm font-medium">Click to Expand</span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-glass-border text-xs">
                  {diagram.category}
                </div>

                {/* Download Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(diagram.pdfFile, `${diagram.title}.pdf`);
                  }}
                  className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-sm border border-glass-border flex items-center justify-center hover:border-accent/50 transition-colors"
                >
                  <Download size={14} className="text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1">{diagram.title}</h3>
                <p className="text-sm text-accent mb-3">{diagram.subtitle}</p>
                <p className="text-sm text-muted">{diagram.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Use Cases Carousel */}
        <div className="reveal glass-card p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold">Use Cases</h3>
              <p className="text-sm text-muted mt-1">
                13 use cases across 3 actor types
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={prevUseCase}
                className="w-10 h-10 rounded-lg border border-glass-border flex items-center justify-center hover:border-accent/50 transition-colors magnetic"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextUseCase}
                className="w-10 h-10 rounded-lg border border-glass-border flex items-center justify-center hover:border-accent/50 transition-colors magnetic"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Active Use Case Display */}
          <div className="text-center py-12">
            <span className="text-6xl mb-4 block animate-float">
              {useCases[activeUseCase].icon}
            </span>
            <h4 className="text-2xl font-bold mb-2">
              {useCases[activeUseCase].name}
            </h4>
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm">
              {useCases[activeUseCase].actor}
            </span>
            <p className="text-muted mt-4 text-sm font-mono">
              UC-{String(activeUseCase + 1).padStart(2, "0")}
            </p>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {useCases.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveUseCase(i)}
                className={`h-2 rounded-full transition-all ${
                  i === activeUseCase
                    ? "w-8 bg-accent"
                    : "w-2 bg-glass-border hover:bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedDiagram && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedDiagram(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full border border-glass-border flex items-center justify-center hover:border-accent/50 transition-colors magnetic"
            onClick={() => setSelectedDiagram(null)}
          >
            <X size={20} />
          </button>

          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold">{selectedDiagram.title}</h3>
                <p className="text-muted">{selectedDiagram.subtitle}</p>
              </div>
              <button 
                onClick={() => handleDownload(selectedDiagram.pdfFile, `${selectedDiagram.title}.pdf`)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-glass-border hover:border-accent/50 transition-colors text-sm magnetic"
              >
                <Download size={14} />
                <span>Download PDF</span>
              </button>
            </div>

            <div className="glass-card p-4 overflow-auto max-h-[70vh]">
              {!imageErrors.has(selectedDiagram.id) ? (
                <img
                  src={selectedDiagram.image}
                  alt={selectedDiagram.title}
                  className="w-full h-auto rounded-lg"
                  onError={() => handleImageError(selectedDiagram.id)}
                />
              ) : (
                <div className="min-h-[500px] flex flex-col items-center justify-center">
                  <selectedDiagram.icon size={120} className="text-accent/30 mb-4" />
                  <p className="text-muted">Image not available</p>
                  <p className="text-sm text-muted mt-2">Place {selectedDiagram.image} in /public/diagrams/</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
