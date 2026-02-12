// Mock data for Ajay Parihar's portfolio
import profileImage from "./ajay.jpg";
import familyTreeImage from "./family_tree.png";
export const portfolioData = {
  personal: {
    name: "Ajay Parihar",
    role: "Software Developer",
    tagline: "Building Scalable Backend Solutions & AI-Powered Systems",
    location: "Neemuch, Madhya Pradesh, India",
    experience: "2+ Years",
    email: "ajayparihar876@gmail.com",
    profileImage: profileImage,
    heroBackground: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3l8ZW58MHx8fHwxNzcwMTQ0ODE0fDA&ixlib=rb-4.1.0&q=85"
  },
  
  about: {
    descriptionIntro: "Passionate Software Developer with 2+ years of experience specializing in backend development, microservices architecture, and AI agent systems. Currently working at ",
    companyName: "Thoughtwin IT Solutions",
    companyUrl: "https://thoughtwin.com/",
    descriptionOutro: ", contributing to cutting-edge AI-powered projects. I love building scalable, efficient solutions and exploring new technologies.",
    highlight1: "2+ years of professional experience in backend development",
    highlight2: "Expertise in Python frameworks: Django, Flask, FastAPI",
    highlight3: "Working on AI Agent systems with advanced technologies",
    highlight4: "Strong focus on microservices and scalable architecture"
  },
  
  skills: {
    categories: [
      {
        title: "Backend Development",
        items: [
          "Python – Core backend programming, business logic, services",
          "Django – Secure, scalable backend applications",
          "Django REST Framework (DRF) – RESTful APIs, authentication, permissions",
          "FastAPI – High-performance, async APIs",
          "Flask – Lightweight services and microservices"
        ]
      },
      {
        title: "Databases & Storage",
        items: [
          "PostgreSQL – Relational, transactional data modeling",
          "MongoDB – NoSQL, unstructured and flexible data",
          "Redis – Caching, session management, locking",
          "ElasticSearch – High-performance search and filtering"
        ]
      },
      {
        title: "Asynchronous & Background Processing",
        items: [
          "Celery – Background jobs, scheduled tasks",
          "Message Queues – Asynchronous workflows (SQS)",
          "Real-time & Near Real-time Processing – Price updates, notifications"
        ]
      },
      {
        title: "Cloud & DevOps",
        items: [
          "AWS – S3, ECS, SES, SQS",
          "Google Cloud Platform – App Engine, Analytics services",
          "Docker – Containerization",
          "Nginx / Apache – Web servers & reverse proxy",
          "CI/CD Pipelines – Automated build & deployment"
        ]
      },
      {
        title: "Integrations & APIs",
        items: [
          "Payment Gateways – Stripe, PayPal",
          "Messaging & Notifications – Twilio, MSG91",
          "E-commerce – Shopify APIs",
          "Blockchain / Web3 APIs – Crypto price feeds, transaction verification, wallet validation",
          "Media & Streaming – Wowza",
          "Analytics – Google Analytics"
        ]
      },
      {
        title: "Security & Authentication",
        items: [
          "Authentication & Authorization (JWT, role-based access)",
          "Secure API design",
          "Session management & timeout handling",
          "Production issue handling & monitoring"
        ]
      },
      {
        title: "Architecture & System Design",
        items: [
          "REST API design",
          "Database schema design",
          "Scalable backend architecture",
          "Multi-role systems (Admin, User, Advisor)",
          "High-availability & performance-oriented systems"
        ]
      },
      {
        title: "Tools & Development Process",
        items: [
          "Git – GitHub, Bitbucket",
          "Agile / Scrum – Sprint planning, delivery",
          "Code reviews & team mentoring",
          "Production support & debugging"
        ]
      },
      {
        title: "Domains",
        items: [
          "FinTech",
          "Crypto / Blockchain",
          "IoT Platforms",
          "Marketplaces",
          "Media & Streaming Applications"
        ]
      }
    ]
  },
  
  experience: [
    {
      id: 1,
      company: "Thoughtwin IT Solutions",
      role: "Software Developer",
      duration: "2+ Years",
      location: "Neemuch, Madhya Pradesh",
      current: true,
      description: "Working on AI Agent-based projects utilizing cutting-edge technologies",
      responsibilities: [
        "Developing scalable backend systems using Python and microservices architecture",
        "Implementing AI Agent systems with MCP server and gRPC communication",
        "Working with voice/speech processing using Deepgram",
        "Building and maintaining schedulers for automated workflows",
        "Designing and optimizing database schemas across PostgreSQL, MongoDB, and Neo4j"
      ],
      technologies: ["Python", "FastAPI", "gRPC", "MCP Server", "Deepgram", "Microservices", "AI Agents"]
    }
  ],
  
  projects: [
    {
      id: 1,
      name: "Pidhi",
      url: "https://pidhi.in",
      status: "In Development",
      type: "Personal Project",
      description: "A passion project being developed from scratch with a focus on backend architecture, scalability, and clean design principles.",
      highlights: [
        "Built entirely from the ground up",
        "Emphasis on scalable architecture patterns",
        "Clean code and design principles",
        "Modern backend technologies"
      ],
      technologies: ["Python", "Backend Architecture", "Scalable Systems"],
      image: familyTreeImage
    }
  ],
  
  education: [
    {
      id: 1,
      degree: "Master of Computer Applications",
      abbreviation: "MCA",
      institution: "Gyanodaya Institute of Professional Studies",
      location: "Neemuch",
      cgpa: "8.3",
      duration: "Completed"
    }
  ],
  
  social: {
    github: "https://github.com/iajayparihar",
    linkedin: "https://www.linkedin.com/in/iajayparihar/",
    instagram: "https://www.instagram.com/ajay_parihar876?igsh=cTlmODAwMGM4cW1m"
  }
};
