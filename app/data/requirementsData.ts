// Functional Requirements - Business Requirements
export const businessRequirements = [
  "Reduce Time and Effort: The system shall reduce the time and effort required to find trusted workers.",
  "Create Job Opportunities: The system shall create job opportunities for freelance workers.",
  "Generate Revenue: The system shall generate revenue through service commission or premium subscriptions (future scope).",
  "Improve Service Quality: The system shall improve service quality through a rating and review mechanism.",
  "Support Business Growth: The system shall support business growth by allowing expansion to multiple cities."
];

// System Requirements
export const systemRequirements = [
  "Backend Server: The system shall use a backend server to manage requests and data.",
  "Relational Database: The system shall use a relational database to store users, services, requests, offers, and ratings.",
  "Security Mechanisms: The system shall implement secure MFA and authorization mechanisms.",
  "Real-time Notifications: The system shall support real-time notifications."
];

// Client Requirements
export const clientRequirements = [
  "Create Account: Users register with personal details.",
  "Search Service: Users find desired services by type and location.",
  "Post Request: Users submit detailed service requests.",
  "View Offers: Users review offers from workers.",
  "Select Worker: Users choose a worker for the service.",
  "Make Payment: Users pay for the requested service.",
  "Rate Worker: Users rate the worker after service completion.",
  "View History: Users track their past requests and statuses."
];

// Worker Requirements
export const workerRequirements = [
  "Create Account & Login: Users enter personal information and select services.",
  "View Available Requests: Users see nearby requests based on their location.",
  "Submit Offer: Users enter proposed price and completion time.",
  "Manage Offers: Users check if their offer is accepted or rejected.",
  "View Ratings: Users see average rating and client reviews."
];

// Admin Requirements
export const adminRequirements = [
  "User Management: Managing user accounts, including adding, editing, and deleting.",
  "Service Management: Adding, modifying, and deleting services offered in the marketplace.",
  "System Monitoring: Monitoring active requests to ensure system stability and efficiency.",
  "Reports & Analysis: Generating reports and analyzing service usage to inform future decisions."
];

// Non-Functional Requirements
export const nonFunctionalRequirements = {
  operational: [
    "The system shall operate on mobile applications (Android & iOS).",
    "The system requires internet connectivity.",
    "The system shall support multiple cities and regions."
  ],
  performance: [
    "System response time shall not exceed 3 seconds.",
    "The system shall support a large number of concurrent users.",
    "Fast loading of worker listings and offers."
  ],
  security: [
    "User passwords shall be encrypted.",
    "Secure authentication mechanism shall be implemented.",
    "Role-based access control (Client / Worker / Admin).",
    "Regular data backup must be maintained."
  ],
  cultural: [
    "The system shall support the Arabic language.",
    "The system must comply with data privacy and protection regulations."
  ],
  usability: [
    "Simple and user-friendly interface.",
    "Clear and large buttons.",
    "Suitable design for different age groups.",
    "Worker ratings displayed clearly."
  ]
};

// Key Challenges & Platform Solution
export const keyChallenges = [
  "Accessibility barriers",
  "No post-service accountability",
  "Limited visibility",
  "Income instability",
  "Risk of non-payment",
  "Difficulty finding providers"
];

export const platformSolution = [
  "Verified profiles",
  "Accessibility-oriented interface",
  "Transparent pricing",
  "Smart comparison tools",
  "Structured review system",
  "Fast-response emergency",
  "Location-based matching",
  "Follow-up support",
  "Digital portfolio showcase",
  "Consistent job flow",
  "Secure payment processing"
];

// Casual Use Cases
export const casualUseCases = [
  {
    id: "UC-1",
    title: "Create Account",
    description: "The user registers in the Sevixo application by entering personal information such as name, phone number, location, and password. The system verifies the data and stores it in the database, allowing the user to access the application and use its services."
  },
  {
    id: "UC-2",
    title: "Search Service",
    description: "The client searches for a specific service in the Sevixo application by selecting a category or entering a service name. The system retrieves the available services and displays relevant workers who can provide the requested service."
  },
  {
    id: "UC-3",
    title: "Posting Service Request",
    description: "The client can create and submit a new service request through the application by entering the required service details such as service type, location, description, and preferred time. After submitting the request, the system publishes it to available workers who can view the request and send their offers. This allows the client to receive multiple offers and choose the most suitable worker."
  },
  {
    id: "UC-4",
    title: "Rating Worker",
    description: "After the service is completed, the client can rate the worker through the application by providing a numerical rating and optional feedback. The system stores the rating and updates the worker's overall evaluation, which helps other clients make better decisions when selecting workers in the future."
  },
  {
    id: "UC-5",
    title: "Manage Offers",
    description: "Once the client requests a service, the order is routed to the relevant service provider. They can then accept the request and modify details such as pricing, notes, and estimated completion time. Additionally, they can specify any tools required before arrival or opt to cancel the order."
  },
  {
    id: "UC-6",
    title: "View Available Requests",
    description: "The worker can view a list of available service requests posted by clients through the application. The system displays request details such as service type, location, description, and preferred time. This allows the worker to choose suitable requests based on his skills and availability."
  },
  {
    id: "UC-7",
    title: "View Rating",
    description: "The worker can view ratings and feedback given by clients after completing services. This helps the worker understand his performance level and improve service quality."
  },
  {
    id: "UC-8",
    title: "Manage Services",
    description: "The admin can manage platform services by adding new services, updating existing ones, or removing unnecessary services to keep the system organized."
  },
  {
    id: "UC-9",
    title: "Monitor System",
    description: "The admin can monitor system performance and user activities to ensure smooth operation and detect technical issues or abnormal behavior."
  },
  {
    id: "UC-10",
    title: "Manage User Accounts",
    description: "The admin can manage user accounts by activating, suspending, or updating user information to maintain platform security and integrity."
  },
  {
    id: "UC-11",
    title: "Handle Complaints",
    description: "The admin can review complaints submitted by clients or workers and take appropriate actions to resolve problems and improve user satisfaction."
  },
  {
    id: "UC-12",
    title: "Select Worker",
    description: "The client can select a suitable worker from the list of received offers after posting a service request. The system displays worker details such as price, experience, and ratings to help the client choose the best worker. After selection, the system confirms the service request for both the client and the worker."
  },
  {
    id: "UC-13",
    title: "Make Payment",
    description: "The client can pay for the requested service using the available payment methods in the application. Once the payment is completed successfully, the system records the transaction and updates the service status."
  }
];

// Fully Dressed Use Cases
export const fullyDressedUseCases = [
  {
    id: "UC-1",
    name: "Create account",
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
    name: "Search service",
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