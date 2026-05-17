"use client";

import { useState, useEffect, useRef } from "react";
import {
  User,
  Briefcase,
  Shield,
  ChevronDown,
  CheckCircle,
  AlertCircle,
  FileText,
} from "lucide-react";

interface FullyDressedUseCase {
  id: string;
  name: string;
  primaryActor: string;
  secondaryActors: string;
  description: string;
  preconditions: string[];
  postconditions: string[];
  trigger: string;
  successFlow: string[];
  extensions: string[];
}

const fullyDressedData: FullyDressedUseCase[] = [
  {
    id: "UC-1",
    name: "Create Account",
    primaryActor: "User (Client/Worker)",
    secondaryActors: "System, Database",
    description: "The user creates a new account in the Sevixo application by providing personal information such as name, phone number, location, and password. The system stores the information and creates a new user account.",
    preconditions: [
      "User must have access to the Sevixo application.",
      "User must have a valid phone number"
    ],
    postconditions: [
      "A new account is created in the system",
      "User data is stored in the database",
      "User can log in to the application"
    ],
    trigger: "User clicks on Create Account in the application.",
    successFlow: [
      "1 → User selects Create Account.",
      "2 ← System displays registration form.",
      "3 → User enters personal information (name, phone number, password, location).",
      "4 → User submits registration form.",
      "5 ← System validates entered data.",
      "6 ← System stores user information in database.",
      "7 ← System confirms successful account creation."
    ],
    extensions: [
      "User enters invalid or incomplete data:",
      "1. ← System detects missing or incorrect information.",
      "2. ← System displays error message.",
      "3. → User corrects the information and resubmits the form."
    ]
  },
  {
    id: "UC-2",
    name: "Search Service",
    primaryActor: "Client",
    secondaryActors: "System, Database",
    description: "The client searches for a service in the Sevixo application by selecting a service type such as plumbing, electricity, or carpentry. The system retrieves available workers or services related to the search.",
    preconditions: [
      "Client must be logged in.",
      "Services must exist in the system database."
    ],
    postconditions: [
      "A list of available services or workers is displayed.",
      "Client can select a service or worker."
    ],
    trigger: "Client enters a service name or selects a service category.",
    successFlow: [
      "1 → Client opens the search service page.",
      "2 ← System displays list of available service categories.",
      "3 → Client selects service type.",
      "4 ← System searches database for related services or workers.",
      "5 ← System displays available results."
    ],
    extensions: [
      "Service not found:",
      "1. ← System detects that no service matches the search.",
      "2. ← System displays message 'No services found.'",
      "",
      "User enters invalid or incomplete data:",
      "1. ← System detects missing or incorrect information.",
      "2. ← System displays error message.",
      "3. → User corrects the information and resubmits the form."
    ]
  },
  {
    id: "UC-3",
    name: "Post Service Request",
    primaryActor: "Client",
    secondaryActors: "System, Database, Workers",
    description: "The client creates and submits a new service request by entering service details such as service type, location, description, and preferred time. The system then publishes the request for available workers.",
    preconditions: [
      "System must be running.",
      "Client must be logged in."
    ],
    postconditions: [
      "Service request is stored in database.",
      "Request becomes visible to workers.",
      "Workers can send offers."
    ],
    trigger: "Client clicks on Post Service Request button.",
    successFlow: [
      "1. → Client selects Post Service Request option",
      "2. ← System displays service request form.",
      "3. → Client enters service details.",
      "4. → Client submits the request.",
      "5. ← System validates entered data.",
      "6. ← System stores request in database.",
      "7. ← System publishes request to workers."
    ],
    extensions: [
      "Client enters invalid data:",
      "← System detects missing or wrong data.",
      "← System displays error message.",
      "→ Client corrects data and resubmits."
    ]
  },
  {
    id: "UC-4",
    name: "Rate Worker",
    primaryActor: "Client",
    secondaryActors: "System, Database, Workers",
    description: "The client provides a rating and feedback for the worker after the service has been completed. The system stores the rating and updates the worker's overall evaluation.",
    preconditions: [
      "Service must be completed.",
      "Client must be logged in.",
      "Worker must be assigned to the service request."
    ],
    postconditions: [
      "Rating is stored in the database.",
      "Worker's average rating is updated",
      "Rating becomes visible to other clients."
    ],
    trigger: "Client clicks on Rate Worker after service completion.",
    successFlow: [
      "1. → Client selects completed service.",
      "2. → Client clicks Rate Worker.",
      "3. ← System displays rating form.",
      "4. → Client enters rating and feedback.",
      "5. → Client submits rating.",
      "6. ← System validates rating data.",
      "7. ← System stores rating in database.",
      "8. ← System updates worker average rating."
    ],
    extensions: [
      "Client enters invalid data:",
      "1. ← System detects missing or invalid rating.",
      "2. ← System displays error message.",
      "3. → Client corrects rating and resubmits."
    ]
  },
  {
    id: "UC-5",
    name: "View Available Requests for Worker",
    primaryActor: "Worker",
    secondaryActors: "System, Database, Clients",
    description: "The worker can view the available service requests posted by clients through the application. The system retrieves the requests from the database and displays them so the worker can choose suitable jobs.",
    preconditions: [
      "Worker must be logged in.",
      "Worker account must be active.",
      "There must be available service requests in the system."
    ],
    postconditions: [
      "Available requests are displayed to the worker.",
      "Worker can review the request details."
    ],
    trigger: "Worker clicks on View Available Requests.",
    successFlow: [
      "1. → Worker opens available requests page.",
      "2. ← System retrieves requests from database.",
      "3. ← System displays list of available requests.",
      "4. → Worker selects a request to view details."
    ],
    extensions: [
      "No available requests:",
      "1. ← System detects no available requests.",
      "2. ← System displays message 'No available requests at this time.'"
    ]
  },
  {
    id: "UC-6",
    name: "Manage Offers",
    primaryActor: "Worker",
    secondaryActors: "System, Database, Client",
    description: "The worker can manage service requests in their assigned category by accepting or rejecting them, modifying the price, and specifying the turnaround time.",
    preconditions: [
      "The worker must log in",
      "The worker adds his category work",
      "Check worker status"
    ],
    postconditions: [
      "The status of the offer is accurately updated in the system.",
      "The Worker is notified of the client's decision.",
      "If accepted, the offer is linked to an 'In-Progress' service."
    ],
    trigger: "The Worker selects the Manage Offers option from their dashboard or profile menu.",
    successFlow: [
      "1. Worker selects the 'Manage Offers' section from the dashboard.",
      "2. The System retrieves and displays a list of all offers submitted by the worker sorted by date.",
      "3. Worker clicks on a specific offer to view its details (Price, Proposed Time, and Service Description).",
      "4. The System displays the status of the offer (e.g., 'Pending Review').",
      "5. When a client accepts the offer, the System updates the status to 'Accepted' and sends a push notification to the Worker."
    ],
    extensions: [
      "a. No Offers Found:",
      "1. System detects the worker has no submitted offers.",
      "2. System displays a message: 'You haven't submitted any offers yet.'",
      "3. System provides a link to 'View Available Requests.'",
      "",
      "b. Rejected Offer:",
      "1. The Client rejects the offer.",
      "2. System updates the status to 'Rejected'.",
      "3. The Worker can view the rejection and has the option to archive the offer from their list.",
      "",
      "c. Worker Withdraws Offer:",
      "1. Before the Client accepts, the Worker selects the 'Withdraw/Cancel Offer' option.",
      "2. System asks for confirmation."
    ]
  }
];

const actorColors: Record<string, string> = {
  "Client": "#3b82f6",
  "Worker": "#22c55e",
  "User (Client/Worker)": "#8b5cf6",
  "Admin": "#ef4444",
};

const actorIcons: Record<string, React.ElementType> = {
  "Client": User,
  "Worker": Briefcase,
  "User (Client/Worker)": User,
  "Admin": Shield,
};

export default function UseCasesFullyDressed() {
  const [expandedId, setExpandedId] = useState<string | null>("UC-1");
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

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // Function to render success flow with arrows properly
  const renderSuccessFlow = (step: string, index: number) => {
    // Extract the arrow direction
    const hasArrow = step.includes("→") || step.includes("←");
    const arrow = step.includes("→") ? "→" : step.includes("←") ? "←" : "";
    const text = step.replace(/[→←]/g, "").trim();
    const direction = step.includes("→") ? "to-system" : step.includes("←") ? "from-system" : "";
    
    return (
      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-glass">
        <span className="w-6 h-6 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center shrink-0 font-mono">
          {index + 1}
        </span>
        <span className={`text-sm ${direction === "to-system" ? "text-accent" : "text-muted"}`}>
          {arrow && <span className="font-mono mr-2">{arrow}</span>}
          {text}
        </span>
      </div>
    );
  };

  // Function to render extensions with proper formatting
  const renderExtensions = (extension: string, idx: number) => {
    // Check if it's a section header (ends with colon or starts with letter.)
    const isHeader = extension.endsWith(":") || /^[a-z]\./.test(extension);
    
    if (isHeader) {
      return (
        <h5 key={idx} className="text-sm font-medium text-amber-400 mt-3 first:mt-0 mb-2">
          {extension}
        </h5>
      );
    }
    
    // Check if it's a numbered step (starts with number.)
    const isNumbered = /^\d+\./.test(extension);
    
    if (isNumbered) {
      return (
        <li key={idx} className="text-sm text-muted flex items-start gap-2 ml-4">
          <span className="text-amber-400 mt-1">•</span>
          {extension}
        </li>
      );
    }
    
    // Regular line
    if (extension.trim() === "") return null;
    
    return (
      <li key={idx} className="text-sm text-muted flex items-start gap-2">
        <span className="text-amber-400 mt-1">•</span>
        {extension}
      </li>
    );
  };

  return (
    <section id="usecases-fully" ref={sectionRef} className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="reveal inline-block text-xs text-accent tracking-widest uppercase mb-4">
            Detailed Specifications
          </span>
          <h2 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Fully Dressed <span className="text-accent">Use Cases</span>
          </h2>
          <p className="reveal text-muted mt-4 max-w-2xl mx-auto">
            Complete detailed use case specifications with pre/post conditions, triggers, flows, and extensions
          </p>
        </div>

        {/* Use Cases List */}
        <div className="space-y-4">
          {fullyDressedData.map((uc, i) => {
            const isExpanded = expandedId === uc.id;
            const ActorIcon = actorIcons[uc.primaryActor] || FileText;
            const actorColor = actorColors[uc.primaryActor] || "#06b6d4";

            return (
              <div
                key={uc.id}
                className="reveal"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <button
                  onClick={() => toggleExpand(uc.id)}
                  className={`w-full glass-card p-5 flex items-center gap-4 text-left transition-all ${
                    isExpanded ? "border-accent/30" : ""
                  }`}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${actorColor}15`,
                      border: `1px solid ${actorColor}30`,
                    }}
                  >
                    <ActorIcon size={20} style={{ color: actorColor }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-xs font-mono text-accent">{uc.id}</span>
                      <h3 className="font-semibold truncate">{uc.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${actorColor}15`,
                          color: actorColor,
                        }}
                      >
                        Primary: {uc.primaryActor}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-400">
                        Secondary: {uc.secondaryActors}
                      </span>
                    </div>
                  </div>

                  <ChevronDown
                    size={20}
                    className={`text-muted transition-transform shrink-0 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isExpanded && (
                  <div className="glass-card mt-2 p-6 border-t-0 rounded-t-none">
                    {/* Description */}
                    <p className="text-muted mb-6 leading-relaxed">
                      {uc.description}
                    </p>

                    {/* Preconditions & Postconditions */}
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle size={14} className="text-accent" />
                          Preconditions
                        </h4>
                        <ul className="space-y-2">
                          {uc.preconditions.map((pre, j) => (
                            <li key={j} className="text-sm text-muted flex items-start gap-2">
                              <span className="text-accent mt-1">•</span>
                              {pre}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                          <CheckCircle size={14} className="text-green-400" />
                          Postconditions
                        </h4>
                        <ul className="space-y-2">
                          {uc.postconditions.map((post, j) => (
                            <li key={j} className="text-sm text-muted flex items-start gap-2">
                              <span className="text-green-400 mt-1">•</span>
                              {post}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Trigger */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-2">Trigger</h4>
                      <p className="text-sm text-muted bg-glass p-3 rounded-lg">
                        {uc.trigger}
                      </p>
                    </div>

                    {/* Success Flow with Arrows */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3">Flow of Events for Success Scenario</h4>
                      <div className="space-y-2">
                        {uc.successFlow.map((step, j) => renderSuccessFlow(step, j))}
                      </div>
                    </div>

                    {/* Extensions */}
                    {uc.extensions.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                          <AlertCircle size={14} className="text-amber-400" />
                          Flow of Events for Extensions
                        </h4>
                        <div className="p-4 rounded-lg border border-amber-500/20 bg-amber-500/5">
                          <div className="space-y-1">
                            {uc.extensions.map((ext, k) => renderExtensions(ext, k))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}