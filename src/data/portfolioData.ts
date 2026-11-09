export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keyCapabilities: string[];
  technologies: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  backendUrl?: string;
  apiDocsUrl?: string;
  featured?: boolean;
  accuracyNote?: string;
  themeColor: string;
  badge: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  filePath: string;
  verifyUrl?: string;
  skillsLearned: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  score: string;
  location: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  color: string;
  skills: { name: string; level?: string }[];
}

export const PERSONAL_INFO = {
  name: "Prince Kumar Jha",
  roles: [
    "Computer Science Engineering Student",
    "AI Developer & Engineer",
    "Full Stack Developer",
  ],
  headline: "Building Intelligent Experiences Through AI, Code & Creativity.",
  bioParagraphs: [
    "I am a Computer Science Engineering student passionate about Artificial Intelligence, Machine Learning, and Full Stack Development. I enjoy building practical applications that solve real-world problems through intelligent technologies and modern web experiences.",
    "My interests include Python development, AI-powered applications, Retrieval-Augmented Generation (RAG), machine learning, backend development, and interactive frontend experiences.",
    "I continuously work on improving my programming, problem-solving, and software development skills through practical projects and learning."
  ],
  availability: "Open to Software Developer, Python & AI/ML Opportunities",
  portfolioUrl: "https://portfolio-nine-weld-72jhkxrcug.vercel.app/",
  email: "princekumarjhacse2027@gmail.com",
  phone: "+91 9798097579",
  github: "https://github.com/princekumarjha83-oss",
  linkedin: "https://www.linkedin.com/in/princekumar-jha-5a3007425/",
  leetcode: "https://leetcode.com/u/jha_kumar_123/",
  resumePath: "/Prince_Kumar_Jha_Resume.pdf",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "ARTIFICIAL INTELLIGENCE",
    description: "Generative AI, conversational systems & vector retrieval",
    color: "#00f0ff",
    skills: [
      { name: "LLMs" },
      { name: "Multimodal AI" },
      { name: "RAG" },
      { name: "Embeddings" },
      { name: "Semantic Search" },
      { name: "Vector Search" }
    ]
  },
  {
    category: "MACHINE LEARNING",
    description: "Statistical modeling, NLP & visual feature extraction",
    color: "#3b82f6",
    skills: [
      { name: "Scikit-learn" },
      { name: "Random Forest" },
      { name: "NLP" },
      { name: "Data Preprocessing" },
      { name: "OCR" }
    ]
  },
  {
    category: "PROGRAMMING",
    description: "Core programming languages & software logic",
    color: "#8b5cf6",
    skills: [
      { name: "Python" },
      { name: "Java (Basic)" },
      { name: "JavaScript (Basic)" }
    ]
  },
  {
    category: "BACKEND",
    description: "High-performance APIs, asynchronous services & routing",
    color: "#10b981",
    skills: [
      { name: "FastAPI" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "REST APIs" }
    ]
  },
  {
    category: "FRONTEND",
    description: "Immersive 3D interfaces, reactive UI & modern styling",
    color: "#ec4899",
    skills: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "React" },
      { name: "Vite" },
      { name: "Three.js" }
    ]
  },
  {
    category: "DATABASES",
    description: "Relational persistence, vector storage & document stores",
    color: "#f59e0b",
    skills: [
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "PostgreSQL" },
      { name: "SQLite" }
    ]
  },
  {
    category: "TOOLS & LIBRARIES",
    description: "Developer tooling, containerization & document automation",
    color: "#6366f1",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Docker" },
      { name: "PyMuPDF" },
      { name: "python-docx" },
      { name: "OpenPyXL" },
      { name: "Pillow" }
    ]
  },
  {
    category: "CORE CONCEPTS",
    description: "Foundational computer science principles & problem solving",
    color: "#14b8a6",
    skills: [
      { name: "Data Structures & Algorithms" },
      { name: "Object-Oriented Programming" },
      { name: "Problem Solving" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "population-iq",
    title: "POPULATION•IQ",
    subtitle: "Interactive Global Population Explorer & 3D Analytics",
    badge: "3D Earth & Analytics",
    description: "An interactive population exploration and visualization platform designed to present demographic information through an immersive 3D Earth experience.",
    keyCapabilities: [
      "Interactive 3D Earth globe with custom shaders & rotation controls",
      "Population analytics dashboard with demographic trend charts",
      "Country explorer with profiles & comparative growth visualizations",
      "Ask IQ interface designed for conversational demographic queries",
      "Interactive data filtering, regional breakdowns & zoom levels"
    ],
    technologies: ["Next.js", "TypeScript", "Three.js", "React Three Fiber", "Tailwind CSS", "Recharts"],
    githubUrl: "https://github.com/princekumarjha83-oss/population",
    liveDemoUrl: "https://population-div6.vercel.app/",
    backendUrl: "https://population-iq-api1.onrender.com",
    featured: true,
    accuracyNote: "Built as an exploration prototype with interactive 3D visualizations, structured mock demographic datasets, and an Ask IQ interface shell.",
    themeColor: "#00f0ff"
  },
  {
    id: "scamshield-ai",
    title: "ScamShield AI",
    subtitle: "Intelligent Phishing & Online Scam Detection Platform",
    badge: "AI Cybersecurity",
    description: "An AI-powered security application designed to analyze suspicious messages, URLs, screenshots, and emails to identify potential phishing attempts and online scams.",
    keyCapabilities: [
      "Multimodal suspicious-content analysis across text, URLs and screenshots",
      "OCR-based screenshot text extraction & parsing",
      "Machine-learning URL classification powered by Random Forest",
      "FastAPI REST endpoints with threat scoring & explainability",
      "Rule-based phishing heuristic checks & audit logging"
    ],
    technologies: ["Python", "FastAPI", "React", "Vite", "Scikit-learn", "Random Forest", "Three.js", "MongoDB"],
    githubUrl: "https://github.com/princekumarjha83-oss/SCAMFIELD",
    liveDemoUrl: "https://scamfield-9pin.vercel.app",
    featured: true,
    themeColor: "#3b82f6"
  },
  {
    id: "documind-ai",
    title: "DocuMind AI",
    subtitle: "Intelligent Document Processing & RAG Assistant",
    badge: "Generative AI & RAG",
    description: "An intelligent document assistant designed to process diverse document formats and support conversational question answering using Retrieval-Augmented Generation.",
    keyCapabilities: [
      "Multi-format document ingestion: PDF, DOCX, XLSX, and PPTX",
      "Semantic chunking and embedding generation for deep context",
      "Hybrid keyword and vector similarity retrieval",
      "Context-aware LLM answers with verbatim source citations via Groq",
      "User authentication, document collections, and state management"
    ],
    technologies: ["Python", "FastAPI", "React", "Vite", "RAG", "Embeddings", "PostgreSQL", "SQLite", "Groq"],
    githubUrl: "https://github.com/princekumarjha83-oss/DocuMind-Ai",
    liveDemoUrl: "https://prince-kumar-jha-12.vercel.app/",
    featured: true,
    themeColor: "#8b5cf6"
  },
  {
    id: "agrivision-ai",
    title: "AgriVision AI",
    subtitle: "Intelligent Agricultural Assistance & Advisory Platform",
    badge: "Agritech AI",
    description: "An AI-powered agricultural assistance platform designed to provide farmers with useful agricultural information, disease diagnostics, and intelligent advisory tools.",
    keyCapabilities: [
      "Multilingual Krishi AI assistant for natural farmer queries",
      "Crop disease detection & symptom analysis",
      "Mandi market price intelligence & crop trend tracking",
      "Weather forecast feeds & automated spray advisory alerts",
      "Crop activity calendar, government schemes & subsidies guide"
    ],
    technologies: ["React 19", "TypeScript", "Vite", "FastAPI", "Python", "Groq", "Qwen", "MongoDB"],
    githubUrl: "https://github.com/princekumarjha83-oss/agroai",
    liveDemoUrl: "https://agroai-iota.vercel.app/",
    backendUrl: "https://agroai-6be2.onrender.com",
    apiDocsUrl: "https://agroai-6be2.onrender.com/docs",
    featured: false,
    accuracyNote: "Deployed microservice architecture on Render with frontend client on Vercel.",
    themeColor: "#10b981"
  },
  {
    id: "eduverse-ai",
    title: "EduVerse AI",
    subtitle: "AI-Powered Academic Learning Platform",
    badge: "EdTech & Learning",
    description: "An AI-powered academic learning platform designed to help students learn and study more effectively with automated study aids and practice modules.",
    keyCapabilities: [
      "Automated AI-generated concise notes, mind maps & flashcards",
      "Dynamic interactive quizzes & concept self-assessment",
      "PDF-based study assistance with contextual question answering",
      "Coding interview practice modules and algorithmic reviews",
      "Node.js/Express REST APIs with Groq multi-model fallback"
    ],
    technologies: ["Node.js", "Express", "APIs", "LLMs", "PDF-Parse", "Git"],
    githubUrl: "https://github.com/princekumarjha83-oss/EduVerseAI",
    liveDemoUrl: "https://edu-verse-ai-nqng.vercel.app",
    featured: false,
    themeColor: "#f59e0b"
  }
];

export const CERTIFICATIONS: Certificate[] = [
  {
    id: "cisco-python-1",
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    issueDate: "October 2026",
    filePath: "/certificates/cisco-python-essentials-1.pdf",
    skillsLearned: ["Python Syntax", "Data Structures", "Control Flow", "Functions", "Algorithmic Thinking"]
  },
  {
    id: "intro-cyber-security",
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    issueDate: "October 2026",
    filePath: "/certificates/intro-cyber-security.pdf",
    skillsLearned: ["Cyber Threats", "Confidentiality & Integrity", "Vulnerability Assessment", "Network Defense"]
  },
  {
    id: "google-cloud-trust-security",
    title: "Trust and Security with Google Cloud",
    issuer: "Google Cloud",
    issueDate: "October 2026",
    filePath: "/certificates/google-cloud-trust-security.pdf",
    skillsLearned: ["Cloud Security Architecture", "Identity & Access Management (IAM)", "Data Encryption", "Compliance Standards"]
  },
  {
    id: "ey-microsoft-ai-passport",
    title: "AI Skills Passport",
    issuer: "EY & Microsoft",
    issueDate: "2026",
    filePath: "/certificates/ey-microsoft-ai-skills-passport.pdf",
    skillsLearned: ["Responsible AI", "Generative AI Fundamentals", "Azure AI Services", "Enterprise AI Strategy"]
  },
  {
    id: "forage-genai-analytics",
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    issueDate: "October 2026",
    filePath: "/certificates/forage-genai-data-analytics.pdf",
    skillsLearned: ["Data Analytics Pipelines", "Generative AI in Analytics", "Insight Synthesis", "Executive Presentation"]
  },
  {
    id: "cisco-networking-basics",
    title: "Networking Basics",
    issuer: "Cisco Networking Academy / EdCreate Foundation",
    issueDate: "October 2025",
    filePath: "/certificates/cisco-networking-basics.pdf",
    skillsLearned: ["TCP/IP Protocols", "Subnetting & Addressing", "Routing & Switching", "Network Topologies"]
  },
  {
    id: "tcs-ion-career-edge",
    title: "TCS iON Career Edge — Young Professional",
    issuer: "Tata Consultancy Services",
    issueDate: "October 2026",
    filePath: "/certificates/tcs-ion-career-edge.pdf",
    skillsLearned: ["Business Etiquette", "Communication & Collaboration", "Presentation Skills", "Agile Mindset"]
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "oxford-college",
    institution: "The Oxford College of Engineering",
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    period: "2023 – 2027",
    score: "CGPA: 7.07 / 10",
    location: "Bengaluru, India",
    highlights: [
      "Rigorous core curriculum in Algorithms, Database Systems, Operating Systems & Computer Networks",
      "Specialized focus on Artificial Intelligence, Machine Learning & Intelligent Distributed Systems",
      "Active developer building practical full-stack AI applications and web prototypes"
    ]
  },
  {
    id: "new-s-public-school",
    institution: "New S Public School",
    degree: "Higher Secondary Education (CBSE Class XII)",
    period: "Completed 2023",
    score: "Percentage: 67%",
    location: "India",
    highlights: [
      "Science stream coursework with Mathematics, Physics, Chemistry & Computer Science",
      "Strong foundation in logical problem-solving and structured scientific inquiry"
    ]
  }
];

