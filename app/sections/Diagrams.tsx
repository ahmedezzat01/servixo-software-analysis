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
  FileText,
  FileCheck,
  FileCode,
  FileJson,
  Layout,
  Workflow,
  GitBranch,
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
  isDocument?: boolean;
}

const diagrams: Diagram[] = [
  // PNG Images (تظهر مباشرة)
  {
    id: "dfd-0",
    title: "DFD Level 0",
    subtitle: "Context Level Data Flow",
    description: "Context-level data flow diagram showing the system as a single process",
    image: "/diagrams/DFD-Level-0.png",
    pdfFile: "/diagrams/DFD-Level-0.png",
    icon: Network,
    category: "Analysis",
  },
  {
    id: "dfd-1",
    title: "DFD Level 1",
    subtitle: "Detailed Process Decomposition",
    description: "Detailed level data flow diagram showing subsystems and processes",
    image: "/diagrams/DFD-Level-1.png",
    pdfFile: "/diagrams/DFD-Level-1.png",
    icon: Network,
    category: "Analysis",
  },
  {
    id: "context",
    title: "Context Diagram",
    subtitle: "System Boundaries",
    description: "System interactions with Clients, Workers, and Admin",
    image: "/diagrams/context-diagram.png",
    pdfFile: "/diagrams/context-diagram.png",
    icon: Network,
    category: "Analysis",
  },
  {
    id: "usecase",
    title: "Use Case Diagram",
    subtitle: "13 Use Cases",
    description: "Complete use case model with 3 actors",
    image: "/diagrams/use-case-diagram.png",
    pdfFile: "/diagrams/use-case-diagram.png",
    icon: Layers,
    category: "Requirements",
  },
  {
    id: "activity",
    title: "Activity Diagram",
    subtitle: "Workflow & Process Flow",
    description: "Activity flow showing Client, Worker, and Admin processes",
    image: "/diagrams/activity-diagram.png",
    pdfFile: "/diagrams/activity-diagram.png",
    icon: Activity,
    category: "Process",
  },
  {
    id: "casual-1",
    title: "Casual Descriptions (1/3)",
    subtitle: "UC-1 to UC-4",
    description: "Create Account, Search Service, Post Request, Rate Worker",
    image: "/diagrams/casual-page-1.png",
    pdfFile: "/diagrams/casual-page-1.png",
    icon: FileText,
    category: "Use Cases",
  },
  {
    id: "casual-2",
    title: "Casual Descriptions (2/3)",
    subtitle: "UC-5 to UC-8",
    description: "Manage Offers, View Requests, View Rating, Manage Services",
    image: "/diagrams/casual-page-2.png",
    pdfFile: "/diagrams/casual-page-2.png",
    icon: FileText,
    category: "Use Cases",
  },
  {
    id: "casual-3",
    title: "Casual Descriptions (3/3)",
    subtitle: "UC-9 to UC-13",
    description: "Monitor System, Manage Accounts, Handle Complaints, Select Worker, Pay",
    image: "/diagrams/casual-page-3.png",
    pdfFile: "/diagrams/casual-page-3.png",
    icon: FileText,
    category: "Use Cases",
  },
  {
    id: "feasability",
    title: "Feasibility Study",
    subtitle: "Project Feasibility Analysis",
    description: "Technical, economic, operational, and scheduling aspects",
    image: "/diagrams/fesability.png",
    pdfFile: "/diagrams/fesability.png",
    icon: FileCheck,
    category: "Documentation",
  },

  // SVG and Documents (تطلب تحميل فقط)
  {
    id: "system-arch",
    title: "System Architecture",
    subtitle: "High-Level System Design",
    description: "Complete system architecture diagram - Click Download to view",
    image: "/diagrams/fesability.png",
    pdfFile: "/diagrams/svg/servicio_system_architecture.svg",
    icon: Layout,
    category: "Architecture",
    isDocument: true,
  },
  {
    id: "booking-sequence",
    title: "Regular Booking Sequence",
    subtitle: "Standard Booking Flow",
    description: "Sequence diagram showing the regular booking process - Click Download to view",
    image: "/diagrams/fesability.png",
    pdfFile: "/diagrams/svg/servicio_regular_booking_sequence.svg",
    icon: GitBranch,
    category: "Sequence",
    isDocument: true,
  },
  {
    id: "emergency-sequence",
    title: "Emergency Booking Sequence",
    subtitle: "Emergency Service Flow",
    description: "Sequence diagram for emergency booking - Click Download to view",
    image: "/diagrams/fesability.png",
    pdfFile: "/diagrams/sequence/servixo_sequence_diagram_2_emergency_booking.svg",
    icon: Workflow,
    category: "Sequence",
    isDocument: true,
  },
  {
    id: "rating-sequence",
    title: "Rating & Review Sequence",
    subtitle: "Feedback Flow",
    description: "Sequence diagram for rating and review - Click Download to view",
    image: "/diagrams/fesability.png",
    pdfFile: "/diagrams/sequence/servixo_sequence_diagram_3_rating_review.svg",
    icon: Activity,
    category: "Sequence",
    isDocument: true,
  },
  {
    id: "literature-review",
    title: "Literature Review",
    subtitle: "Academic Research Review",
    description: "Literature review of service marketplace platforms - Click Download to view",
    image: "/diagrams/fesability.png",
    pdfFile: "/diagrams/Servicio_Literature_Review.docx",
    icon: FileText,
    category: "Documentation",
    isDocument: true,
  },
  {
    id: "implementation-plan",
    title: "Implementation & Testing Plan",
    subtitle: "Development Roadmap",
    description: "Implementation plan with testing strategies - Click Download to view",
    image: "/diagrams/fesability.png",
    pdfFile: "/diagrams/Servicio_Implementation_Testing_Plan.docx",
    icon: FileCode,
    category: "Documentation",
    isDocument: true,
  },
  {
    id: "pdf-guide",
    title: "PDF Guide",
    subtitle: "Documentation Guide",
    description: "Complete PDF guide for project documentation - Click Download to view",
    image: "/diagrams/fesability.png",
    pdfFile: "/diagrams/PDF_GUIDE.md",
    icon: FileJson,
    category: "Documentation",
    isDocument: true,
  },
  {
    id: "ui-screens",
    title: "UI Screens Design",
    subtitle: "User Interface Mockups",
    description: "Complete UI screens for client, worker, and admin - Click Download to view",
    image: "/diagrams/fesability.png",
    pdfFile: "/diagrams/servicio-ui-screens.jsx",
    icon: Layout,
    category: "UI/UX",
    isDocument: true,
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
  const prevUseCase = () => setActiveUseCase((p) => (p - 1 + useCases.length) % useCases.length);

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

  const getFileExtension = (filename: string) => {
    return filename.split('.').pop()?.toLowerCase() || '';
  };

  const getFileIcon = (ext: string) => {
    switch(ext) {
      case 'svg': return '📐';
      case 'docx': return '📄';
      case 'md': return '📝';
      case 'jsx': return '⚛️';
      default: return '📁';
    }
  };

  const renderModalContent = () => {
    if (!selectedDiagram) return null;

    const ext = getFileExtension(selectedDiagram.pdfFile);
    const isImage = ['png', 'jpg', 'jpeg', 'gif', 'webp'].includes(ext);

    // Images - show directly
    if (isImage && !imageErrors.has(selectedDiagram.id)) {
      return (
        <img
          src={selectedDiagram.image}
          alt={selectedDiagram.title}
          className="w-full h-auto rounded-lg"
          onError={() => handleImageError(selectedDiagram.id)}
        />
      );
    }

    // Documents - show download prompt
    return (
      <div className="text-center py-16">
        <selectedDiagram.icon size={100} className="text-accent/30 mx-auto mb-6" />
        <p className="text-2xl text-muted mb-2">{selectedDiagram.title}</p>
        <p className="text-muted mb-6">{selectedDiagram.subtitle}</p>
        <div className="bg-glass rounded-xl p-6 max-w-md mx-auto">
          <p className="text-sm text-muted mb-4">
            File type: <span className="text-accent uppercase">{ext}</span>
          </p>
          <p className="text-sm text-muted mb-6">
            {ext === 'svg' && 'SVG diagram file'}
            {ext === 'docx' && 'Microsoft Word document'}
            {ext === 'md' && 'Markdown documentation file'}
            {ext === 'jsx' && 'React component file'}
          </p>
          <button
            onClick={() => handleDownload(selectedDiagram.pdfFile, `${selectedDiagram.title}.${ext}`)}
            className="px-8 py-3 bg-accent/20 hover:bg-accent/30 rounded-xl text-accent transition-colors text-lg flex items-center gap-3 mx-auto"
          >
            <Download size={20} />
            Download {ext.toUpperCase()} File
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="diagrams" ref={sectionRef} className="section-padding relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="reveal inline-block text-xs text-accent tracking-widest uppercase mb-4">
            Software Analysis and Design
          </span>
          <h2 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            System <span className="text-accent">Diagrams</span>
          </h2>
          <p className="reveal text-muted mt-4 max-w-2xl mx-auto">
            Comprehensive visual analysis of the Servixo system architecture and design
          </p>
        </div>

        {/* Diagrams Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {diagrams.map((diagram, i) => {
            const ext = getFileExtension(diagram.pdfFile);
            const isDirectImage = ['png', 'jpg', 'jpeg'].includes(ext);
            
            return (
              <div
                key={diagram.id}
                className="reveal glass-card group cursor-pointer overflow-hidden"
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => setSelectedDiagram(diagram)}
              >
                {/* Preview */}
                <div className="relative h-48 overflow-hidden bg-glass">
                  {isDirectImage && !imageErrors.has(diagram.id) ? (
                    <img
                      src={diagram.image}
                      alt={diagram.title}
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      onError={() => handleImageError(diagram.id)}
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <diagram.icon size={48} className="text-accent/30 mb-3" />
                      <span className="text-lg mb-1">{getFileIcon(ext)}</span>
                      <span className="text-xs text-muted text-center px-4 uppercase">{ext} file</span>
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex items-center gap-2 text-accent">
                      <ZoomIn size={20} />
                      <span className="text-sm font-medium">
                        {diagram.isDocument ? "Click to Download" : "Click to View"}
                      </span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-sm border border-glass-border text-xs">
                    {diagram.category}
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(diagram.pdfFile, `${diagram.title}.${ext}`);
                    }}
                    className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-black/60 backdrop-blur-sm border border-glass-border flex items-center justify-center hover:border-accent/50 transition-colors"
                  >
                    <Download size={12} className="text-white" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-base mb-0.5">{diagram.title}</h3>
                  <p className="text-xs text-accent mb-2">{diagram.subtitle}</p>
                  <p className="text-xs text-muted line-clamp-2">{diagram.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Use Cases Carousel */}
        <div className="reveal glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold">Use Cases</h3>
              <p className="text-xs text-muted mt-0.5">13 use cases across 3 actor types</p>
            </div>
            <div className="flex gap-2">
              <button onClick={prevUseCase} className="w-8 h-8 rounded-lg border border-glass-border flex items-center justify-center hover:border-accent/50 transition-colors">
                <ChevronLeft size={16} />
              </button>
              <button onClick={nextUseCase} className="w-8 h-8 rounded-lg border border-glass-border flex items-center justify-center hover:border-accent/50 transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="text-center py-8">
            <span className="text-5xl mb-3 block animate-float">{useCases[activeUseCase].icon}</span>
            <h4 className="text-xl font-bold mb-1">{useCases[activeUseCase].name}</h4>
            <span className="inline-block px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs">
              {useCases[activeUseCase].actor}
            </span>
            <p className="text-muted mt-3 text-xs font-mono">UC-{String(activeUseCase + 1).padStart(2, "0")}</p>
          </div>

          <div className="flex justify-center gap-1.5 mt-4">
            {useCases.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveUseCase(i)}
                className={`h-1.5 rounded-full transition-all ${i === activeUseCase ? "w-6 bg-accent" : "w-1.5 bg-glass-border hover:bg-muted"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedDiagram && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4" onClick={() => setSelectedDiagram(null)}>
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full border border-glass-border flex items-center justify-center hover:border-accent/50 transition-colors"
            onClick={() => setSelectedDiagram(null)}
          >
            <X size={18} />
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">{selectedDiagram.title}</h3>
                <p className="text-sm text-muted">{selectedDiagram.subtitle}</p>
              </div>
              <button
                onClick={() => {
                  const ext = getFileExtension(selectedDiagram.pdfFile);
                  handleDownload(selectedDiagram.pdfFile, `${selectedDiagram.title}.${ext}`);
                }}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-glass-border hover:border-accent/50 transition-colors text-sm"
              >
                <Download size={14} />
                <span>Download</span>
              </button>
            </div>

            <div className="glass-card p-3 overflow-auto max-h-[75vh]">
              {renderModalContent()}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}