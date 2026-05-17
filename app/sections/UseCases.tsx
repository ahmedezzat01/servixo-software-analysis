"use client";

import { useState, useEffect, useRef } from "react";
import {
  User,
  Briefcase,
  Shield,
  ChevronDown,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface UseCase {
  id: string;
  name: string;
  actor: string;
  description: string;
  preconditions: string[];
  postconditions: string[];
  flow: string[];
  extensions: { title: string; steps: string[] }[];
}

const useCasesData: UseCase[] = [
  {
    id: "UC-1",
    name: "Create Account",
    actor: "User (Client/Worker)",
    description:
      "The user creates a new account in the Servixo application by providing personal information such as name, phone number, location, and password.",
    preconditions: [
      "User must have access to the Servixo application",
      "User must have a valid phone number",
    ],
    postconditions: [
      "A new account is created in the system",
      "User data is stored in the database",
      "User can log in to the application",
    ],
    flow: [
      "User selects Create Account",
      "System displays registration form",
      "User enters personal information (name, phone number, password, location)",
      "User submits registration form",
      "System validates entered data",
      "System stores user information in database",
      "System confirms successful account creation",
    ],
    extensions: [
      {
        title: "User enters invalid or incomplete data",
        steps: [
          "System detects missing or incorrect information",
          "System displays error message",
          "User corrects the information and resubmits the form",
        ],
      },
    ],
  },
  {
    id: "UC-2",
    name: "Search Service",
    actor: "Client",
    description:
      "The client searches for a service in the Servixo application by selecting a service type such as plumbing, electricity, or carpentry.",
    preconditions: [
      "Client must be logged in",
      "Services must exist in the system database",
    ],
    postconditions: [
      "A list of available services or workers is displayed",
      "Client can select a service or worker",
    ],
    flow: [
      "Client opens the search service page",
      "System displays list of available service categories",
      "Client selects service type",
      "System searches database for related services or workers",
      "System displays available results",
    ],
    extensions: [
      {
        title: "Service not found",
        steps: [
          'System detects that no service matches the search',
          'System displays message "No services found."',
        ],
      },
      {
        title: "User enters invalid or incomplete data",
        steps: [
          "System detects missing or incorrect information",
          "System displays error message",
          "User corrects the information and resubmits the form",
        ],
      },
    ],
  },
  {
    id: "UC-3",
    name: "Post Service Request",
    actor: "Client",
    description:
      "The client creates and submits a new service request by entering service details such as service type, location, description, and preferred time.",
    preconditions: [
      "System must be running",
      "Client must be logged in",
    ],
    postconditions: [
      "Service request is stored in database",
      "Request becomes visible to workers",
      "Workers can send offers",
    ],
    flow: [
      "Client selects Post Service Request option",
      "System displays service request form",
      "Client enters service details",
      "Client submits the request",
      "System validates entered data",
      "System stores request in database",
      "System publishes request to workers",
    ],
    extensions: [
      {
        title: "Client enters invalid data",
        steps: [
          "System detects missing or wrong data",
          "System displays error message",
          "Client corrects data and resubmits",
        ],
      },
    ],
  },
  {
    id: "UC-4",
    name: "Rate Worker",
    actor: "Client",
    description:
      "The client provides a rating and feedback for the worker after the service has been completed.",
    preconditions: [
      "Service must be completed",
      "Client must be logged in",
      "Worker must be assigned to the service request",
    ],
    postconditions: [
      "Rating is stored in the database",
      "Worker's average rating is updated",
      "Rating becomes visible to other clients",
    ],
    flow: [
      "Client selects completed service",
      "Client clicks Rate Worker",
      "System displays rating form",
      "Client enters rating and feedback",
      "Client submits rating",
      "System validates rating data",
      "System stores rating in database",
      "System updates worker average rating",
    ],
    extensions: [
      {
        title: "Client enters invalid data",
        steps: [
          "System detects missing or invalid rating",
          "System displays error message",
          "Client corrects rating and resubmits",
        ],
      },
    ],
  },
  {
    id: "UC-5",
    name: "Manage Offers",
    actor: "Worker",
    description:
      "The worker can manage service requests in their assigned category by accepting or rejecting them, modifying the price, and specifying the turnaround time.",
    preconditions: [
      "The worker must log in",
      "The worker adds his category work",
      "Check worker status",
    ],
    postconditions: [
      "The status of the offer is accurately updated in the system",
      "The Worker is notified of the client's decision",
      'If accepted, the offer is linked to an "In-Progress" service',
    ],
    flow: [
      'Worker selects the "Manage Offers" section from the dashboard',
      "The System retrieves and displays a list of all offers submitted by the worker, sorted by date",
      "Worker clicks on a specific offer to view its details (Price, Proposed Time, and Service Description)",
      'The System displays the status of the offer (e.g., "Pending Review")',
      'When a client accepts the offer, the System updates the status to "Accepted" and sends a push notification to the Worker',
    ],
    extensions: [
      {
        title: "No Offers Found",
        steps: [
          "System detects the worker has no submitted offers",
          "System displays a message: \"You haven\'t submitted any offers yet.\"",
          "System provides a link to \"View Available Requests.\"",
        ],
      },
      {
        title: "Rejected Offer",
        steps: [
          "The Client rejects the offer",
          "System updates the status to \"Rejected\"",
          "The Worker can view the rejection and has the option to archive the offer from their list",
        ],
      },
      {
        title: "Worker Withdraws Offer",
        steps: [
          "Before the Client accepts, the Worker selects the \"Withdraw/Cancel Offer\" option",
          "System asks for confirmation",
          "System removes the offer from the Client\'s view and updates the Worker\'s list",
        ],
      },
    ],
  },
  {
    id: "UC-6",
    name: "View Available Requests",
    actor: "Worker",
    description:
      "The worker can view a list of available service requests posted by clients through the application.",
    preconditions: ["Worker must be logged in", "Service requests must exist in the system"],
    postconditions: [
      "Worker can view request details",
      "Worker can choose suitable requests",
    ],
    flow: [
      "Worker navigates to Available Requests section",
      "System displays list of open service requests",
      "Worker filters by category or location",
      "Worker selects a request to view details",
      "System displays full request information",
    ],
    extensions: [],
  },
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

export default function UseCases() {
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

  return (
    <section id="usecases" ref={sectionRef} className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="reveal inline-block text-xs text-accent tracking-widest uppercase mb-4">
            Requirements
          </span>
          <h2 className="reveal text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Use Case <span className="text-accent">Specifications</span>
          </h2>
          <p className="reveal text-muted mt-4 max-w-2xl mx-auto">
            Detailed specifications for each system use case
          </p>
        </div>

        {/* Use Cases List */}
        <div className="space-y-4">
          {useCasesData.map((uc, i) => {
            const isExpanded = expandedId === uc.id;
            const ActorIcon = actorIcons[uc.actor] || User;
            const actorColor = actorColors[uc.actor] || "#06b6d4";

            return (
              <div
                key={uc.id}
                className="reveal"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {/* Header */}
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
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${actorColor}15`,
                        color: actorColor,
                      }}
                    >
                      {uc.actor}
                    </span>
                  </div>

                  <ChevronDown
                    size={20}
                    className={`text-muted transition-transform shrink-0 ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="glass-card mt-2 p-6 border-t-0 rounded-t-none animate-in slide-in-from-top-2">
                    <p className="text-muted mb-6 leading-relaxed">
                      {uc.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      {/* Preconditions */}
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

                      {/* Postconditions */}
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

                    {/* Main Flow */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3">Main Flow</h4>
                      <div className="space-y-2">
                        {uc.flow.map((step, j) => (
                          <div
                            key={j}
                            className="flex items-start gap-3 p-3 rounded-lg bg-glass"
                          >
                            <span className="w-6 h-6 rounded-full bg-accent/20 text-accent text-xs flex items-center justify-center shrink-0 font-mono">
                              {j + 1}
                            </span>
                            <span className="text-sm">{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Extensions */}
                    {uc.extensions.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold mb-3 flex items-center gap-2">
                          <AlertCircle size={14} className="text-amber-400" />
                          Extensions
                        </h4>
                        <div className="space-y-4">
                          {uc.extensions.map((ext, j) => (
                            <div key={j} className="p-4 rounded-lg border border-amber-500/20 bg-amber-500/5">
                              <h5 className="text-sm font-medium text-amber-400 mb-2">
                                {ext.title}
                              </h5>
                              <ul className="space-y-1">
                                {ext.steps.map((step, k) => (
                                  <li key={k} className="text-sm text-muted flex items-start gap-2">
                                    <span className="text-amber-400 mt-1">•</span>
                                    {step}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
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
