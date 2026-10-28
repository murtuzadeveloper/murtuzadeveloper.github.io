import React from 'react';
import {
    Terminal, Code2, Globe, ShieldCheck, MessageSquare, Briefcase,
    Layers, Menu, X, Phone, Lock, BarChart3, Zap, Activity, Star,
    ChevronRight, History, WifiOff, Headphones, Linkedin, Github,
    Server, Award, BrainCircuit, Workflow, Cpu, ShieldAlert, Bot,
    MousePointer2, Sparkles, Binary, Smartphone, Database, CheckCircle2,
    Mail, PhoneCall, GraduationCap
} from 'lucide-react';

export const tabs = [
    { name: 'Contact', icon: <Phone size={18} />, color: 'blue' },
    { name: 'Projects', icon: <Cpu size={18} />, color: 'cyan' },
    { name: 'Education', icon: <GraduationCap size={18} />, color: 'yellow' },
    { name: 'Experience', icon: <Briefcase size={18} />, color: 'indigo' },
    { name: 'Skills', icon: <Code2 size={18} />, color: 'cyan' },
    { name: 'Services', icon: <Layers size={18} />, color: 'orange' },
    { name: 'Industries', icon: <Globe size={18} />, color: 'emerald' },
    { name: 'AI Solutions', icon: <BrainCircuit size={18} />, color: 'purple' },
    { name: 'Cyber Security', icon: <ShieldAlert size={18} />, color: 'red' },
    { name: 'AI Security', icon: <Lock size={18} />, color: 'rose' },
    { name: 'AGI Anti-Terror', icon: <Bot size={18} />, color: 'teal' }
];

export const contactData = {
    phone: "+923060824762",
    email: "murtuzadeveloper@gmail.com",
    roles: "Mobile Development | Backend Development | Desktop Development | Web Development\nAI Engineering | Agentic AI | AI Agents | AGI Systems | Full Stack Developer | Solution Architect | Data Scientist | QA Audit | Cloud Engineer | Offensive Cybersecurity Engineer",
    bio: "Results-driven Full Stack Developer specializing in Mobile, Desktop, Web, Backend, and AI Solutions, with extensive experience building enterprise-grade native and cross-platform applications. Skilled in developing intuitive, high-performance user experiences and architecting secure, scalable backend systems using Node.js, Django, FastAPI, Flask, WebSockets, and modern microservices architectures powered by SNS, SQS, and Kafka. Proficient in designing and integrating gRPC, RESTful, and GraphQL APIs, as well as managing databases including MySQL, PostgreSQL, MongoDB, Firebase, Pinecone, Weaviate, and FAISS. Experienced in deploying cloud-native applications on AWS, GCP, Docker, and various hosting platforms while implementing CI/CD pipelines using SonarQube, Gemini, and DevOps best practices. Passionate about Artificial Intelligence, Agentic AI, and Autonomous AI Systems, with hands-on experience developing AI Agents, Multi-Agent Workflows, RAG (Retrieval-Augmented Generation) systems, LLM-powered applications, AI automation platforms, and intelligent SaaS solutions. Skilled in integrating, fine-tuning, and orchestrating Large Language Models (LLMs), vector databases, AI toolchains, and agent frameworks to create autonomous systems capable of reasoning, planning, decision-making, and task execution. Committed to continuous learning and leveraging emerging technologies to deliver innovative, scalable, and future-ready digital products."
};

export const educationData = {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institution: "Usman Institute of Technology (UIT), Karachi",
    date: "2012 – 2016"
};

export const googleBadges = [
    { title: "Learned to create AI evaluations", date: "June 2026", desc: "Learned how to create AI evaluations on developer.chrome.com. You can now create a key feedback loop to ship your AI features with confidence." },
    { title: "NYC Cloud Engineer's AI Toolkit", date: "June 2026", desc: "Learned practical skills and architectural patterns needed to deploy secure and scalable AI on GKE and integrate applied AI solutions across Google's Data Cloud." },
    { title: "Austin Cloud Engineer's AI Toolkit", date: "June 2026", desc: "Learned practical skills and architectural patterns needed to deploy secure and scalable AI on GKE and integrate applied AI solutions across Google's Data Cloud." },
    { title: "Sunnyvale Cloud Engineer's AI Toolkit", date: "June 2026", desc: "Learned practical skills and architectural patterns needed to deploy secure and scalable AI on GKE and integrate applied AI solutions across Google's Data Cloud" },
    { title: "Seattle Cloud Engineer's AI Toolkit", date: "June 2026", desc: "Learned practical skills and architectural patterns needed to deploy secure and scalable AI on GKE and integrate applied AI solutions across Google's Data Cloud" },
    { title: "Google I/O 2026 Member", date: "April 2026", desc: "The GooGoogle Maps Platform Innovators is a community program that offers developers and enthusiasts technical resources to expand their learning and growth. With access to technical content, webinars, and opportunities for early product access, Google Maps Platform Innovators is a developer's guide to mapping the future." },
    { title: "Google Maps Platform Innovator Member", date: "Sept 2025", desc: "Advancing geospatial solutions and Map SDK integration." },
    { title: "Google Cloud & NVIDIA community Member", date: "Aug 2025", desc: "Google Cloud and NVIDIA have partnered to create this community for developers, data scientists, AI/ML engineers, and technical practitioners focused on leveraging NVIDIA and Google Cloud technologies for their development." },
    { title: "Google Cloud Innovator Member", date: "Aug 2025", desc: "Member of elite cloud architecture feedback group." },
    { title: "Firebase Studio Developer Member", date: "Aug 2025", desc: "Firebase Studio helps you build and ship full-stack traditional and AI-infused apps. Get started quickly right from your browser, increase efficiency with AI assistance throughout the SDLC, and test and iterate to ship high-quality and secure apps" },
    { title: "Gemini Code Assist Private Preview", date: "Aug 2025", desc: "Selected for closed beta of Google's AI coding agents." },
    { title: "Android Studio - Quail releases", date: "Jun 2026", desc: "Accelerate your productivity in the official IDE for Android app development.." },
    { title: "Android Studio - Panda releases", date: "Feb 2026", desc: "Accelerate your productivity in the official IDE for Android app development." },
    { title: "Android Studio Canary Member", date: "Jun 2023", desc: "Testing and providing feedback on bleeding-edge IDE features." },
    { title: "Android SDK Platform Tools", date: "Sept 2022", desc: "Certified competency in high-level Android debug tools and Vulnerbilities." },
    { title: "Google Developer Group discovery", date: "Sept 2025", desc: "Meet local developers with similar interests in technology, attend talks on a wide range of technical topics, and learn new skills through hands-on workshops." },
    { title: "Completed 1+ Codelab", date: "Oct 2020", desc: "Actively expanding my technical toolkit by completing hands-on Google Codelabs. Focused on mastering cutting-edge frameworks, optimizing mobile/web performance, and implementing cloud-native architecture solutions through practical, real-world guided implementations." },
    { title: "Google Developer Program", date: "Oct 2020", desc: "Official verification in the global Google ecosystem." }
];

export const experienceData = [
    { role: 'Flutter Python Fast API Websockets AI Developer', company: 'RoboFlex.AI', date: 'Nov 2025 – Present' },
    { role: 'React Native Developer & Flutter Python Fast API Websockets AI Developer', company: 'London Clothing Company', date: 'Nov 2021 – Present' },
    { role: 'React Native & Flutter Python Fast API Websockets AI Developer', company: 'HBL Innovative Centre (Banking)', date: 'Dec 2023 – Jan 2025' },
    { role: 'React Native & Flutter Python Fast API Websockets AI Developer', company: 'Logiciel Services (FinTech)', date: 'May 2022 – Nov 2023' },
    { role: 'React Native & Flutter Python Fast API Websockets AI Developer', company: 'KASB KTRADE BLOCKTECH (FinTech)', date: 'Aug 2021 – May 2022' },
    { role: 'React Native & Flutter Python Fast API Websockets AI Developer', company: 'Tech Resource (Software Industry)', date: 'Nov 2019 – Aug 2021' }
];

export const skillsData = [
    {
        category: "Agentic AI & AI Systems Engineering",
        skills: ["LLM Orchestration (Core Skill): Prompt engineering (advanced), tool/function calling, multi-step reasoning pipelines, structured outputs (JSON/schemas), context management and long memory handling", "Tools & Frameworks for Orchestration: LangChain, LlamaIndex, OpenAI/Anthropic tool APIs, Semantic Kernel", "Agent Architecture Design (MOST IMPORTANT): single-agent vs multi-agent systems, planner–executor patterns, ReAct (Reason + Act loop), Reflexion/self-improving agents, task decomposition systems", "Core Agent Design Capability: designing AI systems that break goals into steps, plan execution, use tools, evaluate results, and retry intelligently", "Tool Integration & API Engineering: REST/GraphQL APIs, web scraping (Playwright, Selenium), database integration (SQL/NoSQL), external tools (search, email, WhatsApp, CRMs), code execution environments", "Memory Systems (High Demand): short-term vs long-term memory, vector databases (Pinecone, Weaviate, FAISS), embeddings & semantic search, conversation history compression", "Multi-Agent Systems (2026 Hot Skill): agent collaboration protocols, role-based agents (planner, coder, tester, reviewer), swarm intelligence systems, task voting and consensus models", "LLM Fine-Tuning & Model Adaptation: LoRA, QLoRA fine-tuning, instruction tuning, dataset creation for agents, evaluation datasets", "Evaluation & Reliability Engineering (High Value Skill Gap): agent benchmarking, hallucination detection, self-checking systems, unit tests for AI outputs, guardrails and output validation", "Python & Backend Engineering (Mandatory): FastAPI/Flask, async programming, microservices architecture, Docker & deployment, queue systems (Celery, Redis)", "Workflow Automation Skills: Zapier, Make.com, n8n, CRM automation, business process automation, AI-powered pipelines", "Advanced Prompt & System Design Thinking: designing AI behavior like software architecture, failure handling strategies, cost optimization (token efficiency), latency optimization", "Bonus – Elite Future Skills: AI agent debugging (reasoning-level debugging), autonomous coding agents (Devin-like systems), RLHF basics, self-improving agents (Reflexion-style systems)"]
    },

    {
        category: "Advanced Computer Science & High-Demand Engineering Skills",
        skills: [
            "Distributed Systems Engineering: microservices architecture, consensus algorithms (Raft/Paxos), fault tolerance, horizontal scaling, distributed caching systems",

            "Cloud-Native Engineering: AWS, Azure, GCP, serverless computing, Kubernetes, Docker orchestration, infrastructure as code (Terraform, Pulumi)",

            "System Design (High-Level Architecture): scalable backend design, load balancing, CAP theorem, API gateway design, event-driven systems, high-traffic system optimization",

            "Cybersecurity & Ethical Hacking: penetration testing, OWASP Top 10, network security, API security, zero-trust architecture, encryption systems",

            "Data Engineering & Big Data Systems: Apache Spark, Kafka, Hadoop, real-time streaming pipelines, ETL/ELT architecture, data lakes and warehouses",

            "Low-Level Programming & Performance Engineering: C/C++, memory management, multithreading, concurrency, GPU optimization, system-level debugging",

            "Operating Systems & Kernel Concepts: process scheduling, memory management, file systems, Linux internals, virtualization and containerization",

            "Computer Networks: TCP/IP, HTTP/3, DNS, load balancing strategies, CDN architecture, network latency optimization",

            "Database Engineering: SQL optimization, indexing strategies, distributed databases, NoSQL systems (MongoDB, Cassandra), query planning and tuning",

            "Software Architecture Patterns: MVC, Clean Architecture, Hexagonal Architecture, Domain-Driven Design (DDD), event sourcing",

            "DevOps & Site Reliability Engineering (SRE): CI/CD pipelines, monitoring (Prometheus, Grafana), incident response, system observability, uptime engineering",

            "Artificial Intelligence Systems Engineering: LLM orchestration, agent frameworks, vector databases, model deployment pipelines, inference optimization",

            "Parallel & Concurrent Programming: multithreading, multiprocessing, async programming, GPU computing (CUDA basics), race conditions handling",

            "Blockchain & Distributed Ledger Systems: smart contracts, Ethereum, consensus mechanisms, decentralized applications (DApps)",

            "Compiler Design & Programming Languages: lexical analysis, parsing, AST generation, interpreter design, language runtime systems",

            "Human-Computer Interaction (HCI): UX engineering, usability systems, interface optimization, accessibility design",

            "Quantum Computing Fundamentals (Emerging): qubits, quantum gates, quantum algorithms, cryptography implications"
        ]
    },



    {
        category: "Mobile Development",
        skills: [
            "Android (Kotlin/Java): MVVM, MVI, Clean Architecture, Jetpack Compose, Material Design, Room DB, Retrofit, Koin DI, Kotlin Multiplatform",
            "Cross-Platform: Flutter (Provider, Bloc), React Native (JavaScript/TypeScript, native modules, Expo)",
            "Integrations: Firebase, Stripe, Jazz Cash, Open Banking APIs, RESTful APIs, WebSocket for real-time data",
            "Security & Compliance: Encryption, authentication, PCI-DSS, GDPR, ISO 27001",
            "Performance & QA: Coroutines, background services, CI/CD pipelines, automated testing (Jest, Detox), QA audits"
        ]
    },
    {
        category: "Web & Frontend Development",
        skills: [
            "Frameworks: React.js, Next.js",
            "State Management: Redux, MobX, Recoil, Context API",
            "UI/UX Collaboration: Agile workflows, responsive design, component-driven architecture"
        ]
    },
    {
        category: "Backend Development",
        skills: [
            "Languages & Frameworks: Python (Flask), Node.js, Django, FastAPI",
            "API Development: RESTful APIs with JWT, OAuth, API Keys",
            "Database Management: PostgreSQL, MySQL, MongoDB; query optimization, Alembic migrations",
            "Security & Performance: Input validation, CORS, rate limiting, scalable architecture"
        ]
    },
    {
        category: "DevOps & Cloud Infrastructure",
        skills: [
            "Platforms: AWS, Google Cloud, Hostinger",
            "Tools: Docker, GitHub Actions, Jenkins",
            "Operations: CI/CD automation, performance monitoring, debugging, scalable deployment"
        ]
    },
    {
        category: "AI & Data Science",
        skills: [
            "Math & Stats: Linear algebra, probability, Bayesian inference, statistical modeling",
            "Data Processing: Pandas, NumPy, Polars, Dask",
            "Visualization: Matplotlib, Seaborn, Plotly, Power BI, Tableau",
            "SaaS-Based API Frameworks: Open-source frameworks, SaaS API Platforms",
            "Vector Databaee: FAISS ,Weaviate, Pinecone",
            "ML/DL Frameworks: TensorFlow, PyTorch (OPEN VINO, Tensor RT), JAX, scikit-learn, Hugging Face Transformers",
            "Model Types: Regression, clustering, CNNs, RNNs, LSTMs, Transformers, GANs, autoencoders",
            "NLP & CV & AI Models: BERT, GPT, LLaMA, Falcon, Gemma, Qwen, Phi4, Granite, OImocr, Open AI, RAG, YOLO, Detectron2, OpenCV",
            "Training & MLOps: Optuna, Ray Tune, AMP, PyTorch Lightning, Horovod, SHAP, LIME, MLflow, DVC, Kubeflow, Airflow",
            "Deployment: REST/gRPC model serving, model compression (quantization, pruning, distillation)"
        ]
    },
    {
        category: "QA, Testing & Code Quality",
        skills: [
            "Static Analysis: SonarQube, custom quality gates",
            "Automated Testing: Unit, integration, E2E tests with Jest, Flutter test, Selenium, Cypress, Playwright",
            "AI-Driven QA: Gemini QA for test coverage, risk scoring, predictive defect detection",
            "Security Audits: SAST, OWASP Dependency-Check, Snyk, TruffleHog, GitGuardian",
            "Performance Testing: Locust, JMeter, k6; real-time monitoring",
            "CI/CD QA Integration: GitHub Actions, GitLab CI, Jenkins"
        ]
    },
    {
        category: "Python API Development",
        skills: [
            "Core Python/Frameworks: OOP, data structures, Flask, FastAPI, Django REST Framework (DRF)",
            "Auth & Validation: JWT, OAuth 2.0, Pydantic, Marshmallow, DRF serializers",
            "Async & Background: FastAPI, asyncio, WebSockets, Redis Pub/Sub, Celery, RabbitMQ, Kafka",
            "Architecture: Microservices (gRPC, Kafka), GraphQL (Graphene, Ariadne, Strawberry)"
        ]
    },
    {
        category: "AI Developer & Data Scientist",
        skills: [
            "Generative AI & LLMs: GPT-4/5, LLaMA, Falcon, multimodal models",
            "Autonomous AI Agents: LangChain, AutoGPT, CrewAI",
            "Edge Computing & OSINT: Real-time analytics on IoT, Maltego, Shodan, SpiderFoot",
            "Automated ML: DataRobot, H2O.ai, Google AutoML"
        ]
    },
    {
        category: "Cloud & Cybersecurity Engineer",
        skills: [
            "Infrastructure: AWS, Azure, GCP, Terraform, Pulumi, Ansible",
            "Offensive Cyber: Reverse Engineering (Ghidra, IDA Pro), Red Teaming (MITRE ATT&CK)",
            "Zero Trust: IAM automation, container security"
        ]
    },
    {
        category: "Operating Systems & Tools",
        skills: [
            "Linux/Ubuntu: Enterprise servers, Kubernetes, Metasploit, Burp Suite",
            "Windows: 11 25H2 & Server Editions, Active Directory",
            "macOS: iOS/Swift development, creative design",
            "Graphics: Adobe Photoshop 2025, UI/UX Mockups"
        ]
    }
];

export const servicesData = [
    {
        title: "Digital Transformation, Cloud, DevOps & Enterprise Scaling",
        points: [
            "Cloud Strategy, Architecture Design & Migration (AWS, Azure, GCP)",
            "Hybrid & Multi-Cloud Systems with High Availability (HA) Design",
            "Cloud-Native Engineering (Microservices, Kubernetes, Serverless)",
            "Infrastructure as Code (Terraform, Pulumi, CloudFormation)",
            "DevOps & CI/CD Automation Pipelines (GitHub Actions, GitLab CI)",
            "Site Reliability Engineering (SRE) & System Observability",
            "AI-Optimized Cloud Infrastructure (GPU scaling, LLM hosting)",
            "Enterprise Cybersecurity (Zero-Trust, IAM, Threat Modeling)",
            "Disaster Recovery & Business Continuity Systems",
            "Finance Systems: High-frequency transaction platforms, fraud prevention systems",
            "Media Systems: CDN optimization, live streaming infrastructure, edge delivery networks",
            "IoT & Edge Systems: Real-time device monitoring, distributed processing systems"
        ]
    },

    {
        title: "Data Engineering, AI, ML & Intelligent Analytics",
        points: [
            "Enterprise Data Strategy & AI Transformation Roadmaps",
            "Big Data Engineering (Spark, Kafka, Hadoop, Flink)",
            "Real-Time Streaming Data Architectures",
            "Data Lake & Data Warehouse Design (Snowflake, BigQuery, Redshift)",
            "ETL/ELT Pipeline Automation & Data Orchestration (Airflow, dbt)",
            "Advanced Machine Learning Systems for Prediction & Optimization",
            "AI-Powered Decision Support Systems for Enterprises",
            "Healthcare AI: Diagnosis support, patient risk prediction, hospital optimization",
            "Finance AI: Credit scoring, fraud detection, algorithmic risk modeling",
            "Retail AI: Recommendation engines, dynamic pricing, customer segmentation",
            "Supply Chain AI: Demand forecasting, logistics optimization, inventory intelligence",
            "Marketing AI: Campaign automation, user behavior prediction, personalization engines",
            "NLP Systems: Sentiment analysis, document intelligence, chatbot intelligence layers"
        ]
    },

    {
        title: "Full Stack Engineering, Product Development & SaaS Platforms",
        points: [
            "Modern Web Development (React, Next.js, Vue, Angular)",
            "Scalable Backend Engineering (Node.js, Python FastAPI, Go)",
            "API Development & Microservices Architecture Design",
            "Real-Time Applications (Chat systems, dashboards, tracking systems)",
            "Progressive Web Apps (PWA) & Mobile App Development (Flutter, React Native)",
            "SaaS Product Development (Multi-tenant architecture, billing systems)",
            "Authentication & Authorization Systems (OAuth2, JWT, SSO)",
            "Healthcare Platforms: Telemedicine, EHR systems, AI-assisted diagnostics",
            "Education Platforms: LMS, AI tutors, adaptive learning systems",
            "Finance Platforms: Fintech apps, banking systems, payment gateways",
            "E-Commerce Systems: Marketplace platforms, AR shopping, smart checkout systems",
            "Startup MVP Development & Rapid Prototyping Systems"
        ]
    },

    {
        title: "AI Agents, Automation & Autonomous Systems (High Demand)",
        points: [
            "Autonomous AI Agents for Task Execution & Workflow Automation",
            "Multi-Agent Systems (Planner, Coder, Tester, Reviewer AI roles)",
            "Agentic AI Architecture (ReAct, Planner-Executor, Reflexion loops)",
            "Enterprise Automation Systems (HR, CRM, Sales, Operations automation)",
            "AI Chatbots & Voice Agents (WhatsApp, Web, Call center automation)",
            "Workflow Automation (n8n, Zapier, Make.com integrations)",
            "LLM Orchestration Systems (LangChain, LlamaIndex, Semantic Kernel)",
            "Vector Memory Systems (FAISS, Pinecone, Weaviate, ChromaDB)",
            "AI API Integration Systems (tools, browsers, databases, CRMs)",
            "Self-Learning AI Systems (feedback loops, self-improving agents)",
            "AI Document Processing (invoices, contracts, legal automation)",
            "AI Debugging & Evaluation Systems (hallucination control, benchmarking)"
        ]
    },

    {
        title: "Cybersecurity, Ethical Hacking & Secure Systems Engineering",
        points: [
            "Penetration Testing & Vulnerability Assessment",
            "Web & API Security (OWASP Top 10 mitigation)",
            "Cloud Security & Zero-Trust Architecture",
            "Network Security & Intrusion Detection Systems",
            "Identity & Access Management (IAM, SSO, OAuth security)",
            "Secure Software Development Lifecycle (SSDLC)",
            "Encryption Systems & Data Protection Architecture",
            "Threat Modeling & Security Audits",
            "SOC (Security Operations Center) Systems & Monitoring",
            "Incident Response & Disaster Recovery Security Systems"
        ]
    },

    {
        title: "Blockchain, Web3 & Decentralized Systems",
        points: [
            "Smart Contract Development (Solidity, Ethereum, EVM)",
            "Decentralized Applications (DApps) Architecture",
            "DeFi Systems (lending, staking, liquidity protocols)",
            "NFT Platforms & Marketplace Engineering",
            "Blockchain Infrastructure & Node Systems",
            "Consensus Mechanisms (PoW, PoS, DPoS)",
            "Crypto Wallet & Payment Systems",
            "Web3 Authentication Systems",
            "Tokenomics Design & Blockchain Business Models"
        ]
    },

    {
        title: "Emerging Technologies & Advanced Computing",
        points: [
            "Quantum Computing Fundamentals & Algorithms",
            "Edge Computing & Distributed Intelligence Systems",
            "Computer Vision Systems (object detection, recognition AI)",
            "Speech Processing & Voice AI Systems",
            "AR/VR Development (Metaverse applications, immersive systems)",
            "Digital Twin Systems (real-world simulation models)",
            "Robotics Software Systems (automation + AI integration)",
            "GPU Computing & Parallel Processing (CUDA, performance engineering)",
            "Compiler Design & Language Runtime Systems",
            "Advanced Operating Systems & Kernel Concepts"
        ]
    }
];

export const industriesData = [
    {
        title: "Banking and Finance",
        desc: "AI Solutions boosting efficiency, fraud protection & personalized insights.",
        details: [
            "Fraud Protection: Real-time transaction monitoring, anomaly detection, reducing billions in losses annually",
            "Loan & Credit Scoring: AI-driven risk assessment, instant approvals, alternative credit scoring models",
            "Customer Service: AI chatbots, virtual financial advisors, 24/7 personalized banking support",
            "Risk Management: Automated compliance, regulatory reporting, AML detection systems",
            "Algorithmic Trading: AI-driven market prediction and automated trading systems",
            "Solutions: Fraud detection engines, AI dashboards, financial intelligence systems"
        ]
    },

    {
        title: "Manufacturing & Industrial Automation",
        desc: "Driving efficiency, predictive intelligence & smart factories.",
        details: [
            "Predictive Maintenance: Machine failure prediction using IoT sensor data",
            "Quality Control: Computer vision inspection systems with real-time defect detection",
            "Smart Factory Automation: Robotics, AI-driven production optimization",
            "Supply Chain Intelligence: Demand forecasting, logistics optimization, inventory tracking",
            "Digital Twin Systems: Real-time simulation of manufacturing processes",
            "Energy Optimization: AI-based resource consumption reduction systems"
        ]
    },

    {
        title: "Healthcare & Life Sciences",
        desc: "AI-powered healthcare systems improving diagnosis, treatment & operations.",
        details: [
            "Clinical Decision Support Systems: AI-assisted diagnosis and treatment recommendations",
            "Medical Imaging AI: X-ray, MRI, CT scan analysis using deep learning models",
            "Patient Monitoring Systems: Real-time health tracking using IoT & wearable devices",
            "Hospital Automation: Billing, scheduling, and patient record management systems",
            "Drug Discovery AI: Accelerated pharmaceutical research using ML models",
            "Telemedicine Platforms: Remote consultations with AI assistants"
        ]
    },

    {
        title: "Retail & E-Commerce",
        desc: "Hyper-personalized shopping experiences and revenue optimization.",
        details: [
            "AI Recommendation Engines: Personalized product suggestions increasing conversions",
            "Dynamic Pricing Systems: Real-time pricing optimization based on demand",
            "Inventory Forecasting: AI-driven stock prediction and supply optimization",
            "Customer Behavior Analytics: Purchase prediction and segmentation systems",
            "Fraud Detection Systems: Secure payment and transaction monitoring",
            "AI Chatbots: Customer support automation and sales assistance"
        ]
    },

    {
        title: "Education & E-Learning",
        desc: "AI-driven personalized education and smart learning systems.",
        details: [
            "Adaptive Learning Systems: Personalized learning paths for students",
            "AI Tutors: Intelligent assistants for 24/7 student support",
            "Virtual Classrooms: Real-time interactive learning platforms",
            "Automated Assessment Systems: AI-based grading and evaluation",
            "Skill Recommendation Engines: Career path and course suggestions",
            "Learning Analytics: Student performance prediction systems"
        ]
    },

    {
        title: "Logistics & Supply Chain",
        desc: "Smart logistics powered by AI and real-time optimization.",
        details: [
            "Route Optimization: AI-powered delivery path optimization",
            "Warehouse Automation: Robotics and inventory intelligence systems",
            "Demand Forecasting: Predictive models for supply chain planning",
            "Fleet Management Systems: Real-time vehicle tracking & optimization",
            "Cold Chain Monitoring: IoT-based temperature-controlled logistics",
            "Last-Mile Delivery Optimization: Efficient urban delivery systems"
        ]
    },

    {
        title: "Real Estate & Construction",
        desc: "Digital transformation of property and infrastructure systems.",
        details: [
            "AI Property Valuation: Automated pricing prediction models",
            "Virtual Property Tours: 3D/AR/VR real estate experiences",
            "Construction Planning AI: Project timeline and cost optimization",
            "Smart Building Systems: IoT-based energy and security management",
            "Lead Generation Systems: AI-driven property buyer matching",
            "Market Trend Prediction: Real estate investment forecasting"
        ]
    },

    {
        title: "Media, Entertainment & Gaming",
        desc: "AI-powered content creation, streaming & interactive experiences.",
        details: [
            "Content Recommendation Engines: Personalized streaming experiences",
            "AI Video & Image Generation: Automated content creation systems",
            "Game AI Systems: Intelligent NPCs and adaptive gameplay",
            "Streaming Optimization: CDN and real-time content delivery",
            "Audience Analytics: Viewer behavior prediction systems",
            "Digital Content Automation: AI-based editing and production tools"
        ]
    },

    {
        title: "Energy, Oil & Utilities",
        desc: "Smart energy systems for efficiency and sustainability.",
        details: [
            "Smart Grid Systems: AI-based electricity distribution optimization",
            "Energy Consumption Forecasting: Predictive usage models",
            "Equipment Maintenance: Predictive failure detection systems",
            "Renewable Energy Optimization: Solar and wind efficiency AI",
            "IoT Monitoring Systems: Real-time energy tracking",
            "Carbon Emission Tracking: Sustainability analytics systems"
        ]
    },

    {
        title: "Cybersecurity & Defense Systems",
        desc: "Advanced protection systems for digital infrastructure.",
        details: [
            "Threat Detection Systems: Real-time anomaly detection AI",
            "SOC Automation: Security operations center automation",
            "Penetration Testing AI: Automated vulnerability scanning",
            "Zero Trust Architecture: Identity-based access control systems",
            "Incident Response Automation: AI-driven security recovery systems",
            "Dark Web Monitoring: Threat intelligence and tracking systems"
        ]
    },

    {
        title: "Telecommunications",
        desc: "AI-driven network optimization and communication systems.",
        details: [
            "Network Optimization: AI-based traffic management systems",
            "5G Infrastructure Intelligence: Real-time network performance optimization",
            "Customer Support Automation: AI chatbots and virtual assistants",
            "Predictive Network Maintenance: Fault detection before outages",
            "Bandwidth Optimization: Intelligent resource allocation",
            "Fraud Detection in Telecom: SIM and call fraud prevention systems"
        ]
    }
];
export const aiSolutionsData = [
    {
        title: "Chat Genie",
        subtitle: "AI-Driven Enterprise Intelligence, Analytics & Decision Systems",
        points: [
            "Dynamic Data Integration with Multi-Source Enterprise Systems (APIs, Databases, IoT)",
            "Advanced Natural Language Query Engine for Business Intelligence",
            "AI-Powered Dashboard Generation with Real-Time KPIs & Metrics",
            "Predictive Analytics for Sales, Finance, Operations & Risk Management",
            "Automated Reporting Systems for Executive Decision Making",
            "Anomaly Detection in Business Data (fraud, inefficiency, operational risks)",
            "Supply Chain Intelligence: Demand forecasting, logistics optimization",
            "Marketing Intelligence: Campaign optimization, customer segmentation insights",
            "Financial Intelligence: Revenue forecasting, cashflow optimization, risk scoring",
            "Self-Serve Analytics Platform for Non-Technical Users (no BI dependency)"
        ]
    },

    {
        title: "App Pilot",
        subtitle: "AI Knowledge Management System with Intelligent 3D Avatar Interface",
        points: [
            "AI-Powered 3D Interactive Avatars with Natural Language Understanding",
            "Voice-Controlled Enterprise Knowledge Assistant (hands-free operations)",
            "Enterprise Knowledge Graph Construction & Semantic Search Engine",
            "Context-Aware AI Assistant for Legal, Finance, HR & Operations Teams",
            "Legal Automation: Contract analysis, compliance checking, litigation support",
            "HR Automation: Employee onboarding, policy assistance, training systems",
            "Instant Retrieval of Enterprise Documents, Policies & Procedures",
            "Multi-Language AI Communication System for Global Enterprises",
            "Integration with CRM, ERP, and internal enterprise tools",
            "Personalized Knowledge Delivery based on user role & behavior"
        ]
    },

    {
        title: "xVision",
        subtitle: "Advanced Computer Vision, Surveillance & Industrial Intelligence Platform",
        points: [
            "Real-Time Object Detection, Tracking & Recognition Systems",
            "AI-Powered Surveillance for Security & Threat Prevention",
            "Facial Recognition for High-Security Access Control Systems",
            "Behavior Analysis for Anomaly Detection in Public & Private Spaces",
            "Retail Intelligence: Shelf monitoring, customer behavior tracking",
            "Manufacturing Quality Control: Defect detection using deep vision models",
            "Banking Security: Suspicious activity detection in ATM & branch systems",
            "Smart City Monitoring: Traffic analysis, crowd management systems",
            "Industrial Safety Systems: Hazard detection and workplace compliance monitoring",
            "Edge AI Deployment for Real-Time Low-Latency Vision Processing"
        ]
    },

    {
        title: "AgentFlow AI",
        subtitle: "Autonomous AI Agent System for Business Process Automation",
        points: [
            "Multi-Agent AI Architecture (Planner, Executor, Validator, Optimizer agents)",
            "End-to-End Business Workflow Automation (HR, Sales, Support, Operations)",
            "Self-Executing AI Agents with Tool Calling & API Integration",
            "AI Decision-Making Systems with Feedback Loops & Self-Improvement",
            "CRM Automation: Lead management, customer follow-ups, pipeline tracking",
            "E-Commerce Automation: Order processing, support, inventory updates",
            "Finance Automation: Invoice processing, reconciliation, reporting systems",
            "AI Email & Communication Agents (autonomous replies & scheduling)",
            "Integration with Enterprise APIs, Databases & External Tools",
            "Self-Healing Workflows that detect and fix process failures automatically"
        ]
    },

    {
        title: "VisionEdge AI",
        subtitle: "Edge AI + IoT Intelligence for Real-Time Industrial Systems",
        points: [
            "Real-Time Edge AI Processing for Low-Latency Decision Making",
            "IoT Sensor Data Processing & Predictive Maintenance Systems",
            "Smart Factory Automation with AI-Driven Robotics Integration",
            "Energy Optimization Systems for Industrial Infrastructure",
            "Remote Device Monitoring with AI Anomaly Detection",
            "Autonomous Drone Vision Systems for Inspection & Surveillance",
            "Smart Agriculture Systems (crop monitoring, irrigation optimization)",
            "Oil & Gas Pipeline Monitoring with Predictive Failure Detection",
            "Offline AI Models for Remote Locations with Limited Connectivity",
            "Distributed Edge AI Networks for Scalable Industrial Deployment"
        ]
    },

    {
        title: "SecureMind AI",
        subtitle: "Enterprise AI Security, Threat Intelligence & Compliance Platform",
        points: [
            "AI-Based Cyber Threat Detection & Prevention Systems",
            "Real-Time Network Traffic Analysis & Intrusion Detection",
            "Zero-Trust Security Architecture Implementation",
            "Automated Penetration Testing & Vulnerability Scanning",
            "Dark Web Monitoring for Brand & Data Breach Detection",
            "Identity & Access Management (IAM) Automation Systems",
            "Regulatory Compliance Automation (GDPR, HIPAA, ISO)",
            "AI Security Operations Center (SOC) Automation",
            "Fraud Detection Systems for Banking & Fintech Platforms",
            "Incident Response Automation with AI Recovery Systems"
        ]
    },

    {
        title: "InsightForge AI",
        subtitle: "Advanced Predictive Intelligence & Decision Support Engine",
        points: [
            "Predictive Business Intelligence for Strategic Decision Making",
            "Market Trend Forecasting using Machine Learning Models",
            "Customer Lifetime Value Prediction & Retention Analysis",
            "AI-Based Risk Scoring for Financial & Operational Decisions",
            "Demand Forecasting Systems for Retail & Supply Chain",
            "Real-Time KPI Monitoring with AI Alerts & Recommendations",
            "Simulation-Based Decision Modeling for Enterprises",
            "Revenue Optimization Systems using AI Pricing Models",
            "Behavioral Analytics for Customer & User Insights",
            "Automated Executive Decision Dashboards"
        ]
    }
];
export const cyberSecurityData = [
    {
        title: "Reveal Vulnerabilities Before They Become Threats",
        desc: "Enterprise-grade cybersecurity solutions focused on proactive defense, threat intelligence, and continuous security validation across cloud, applications, and infrastructure.",
        points: [
            "Vulnerability Assessment & Penetration Testing (Web, Mobile, API, Cloud)",
            "Advanced Threat Detection using AI-based anomaly detection systems",
            "Security Operations Center (SOC) Services with real-time monitoring",
            "Application Security (SAST, DAST, IAST) for secure SDLC integration",
            "Cloud Security Architecture (AWS, Azure, GCP security hardening)",
            "Zero-Day Vulnerability Detection and proactive patch management",
            "Red Team / Blue Team Simulations for enterprise security testing",
            "API Security Auditing and authentication vulnerability analysis",
            "DevSecOps Integration in CI/CD pipelines for continuous security",
            "Endpoint Detection & Response (EDR) and network security monitoring"
        ]
    },

    {
        title: "Protection by Industry",
        list: [
            "Fintech: Payment gateway security, fraud prevention systems, PCI-DSS compliance, transaction anomaly detection",
            "Healthcare: HIPAA-compliant systems, patient data encryption, ransomware protection, secure EHR systems",
            "Telecommunications: 5G security, SON protection, network intrusion detection, SIM fraud prevention",
            "Banking & Financial Services: Core banking security, AML systems, AI model hardening, fraud detection engines",
            "Oil & Gas: Industrial control system (ICS/SCADA) security, pipeline monitoring protection, edge anomaly detection",
            "E-Commerce: Secure checkout systems, bot protection, anti-scraping systems, identity fraud prevention",
            "Government Systems: Critical infrastructure protection, national cybersecurity frameworks, threat intelligence systems",
            "Education Platforms: LMS security, student data protection, anti-cheating systems",
            "Manufacturing: IoT device security, smart factory protection, supply chain cybersecurity",
            "Media & SaaS: DDoS protection, CDN security, cloud workload protection"
        ]
    },

    {
        title: "The Cybersecurity Journey (End-to-End Security Lifecycle)",
        desc: "A complete enterprise security lifecycle covering discovery, testing, monitoring, mitigation, and compliance reporting for global standards like ISO 27001, SOC 2, and NIST.",
        points: [
            "Discovery Phase: Asset mapping, attack surface analysis, digital footprint identification",
            "Assessment Phase: Vulnerability scanning, SAST/DAST testing, penetration testing, risk scoring",
            "Control Phase: Firewall configuration, access control policies, encryption implementation",
            "Hardening Phase: Cloud security hardening, OS hardening, API security enforcement",
            "Monitoring Phase: SIEM systems, SOC monitoring, real-time threat intelligence feeds",
            "Response Phase: Incident response automation, breach containment, forensic investigation",
            "Reporting Phase: Compliance reporting (ISO 27001, SOC 2, GDPR, HIPAA)",
            "Continuous Security: Automated security testing integrated into CI/CD pipelines",
            "Threat Intelligence Integration: Dark web monitoring, global threat databases",
            "Security Automation: AI-driven alert triage and remediation workflows"
        ]
    },

    {
        title: "Advanced Cyber Defense Systems (Modern Enterprise Security)",
        points: [
            "AI-Powered Threat Detection & Behavioral Analysis Systems",
            "Extended Detection & Response (XDR) Platforms",
            "Security Information and Event Management (SIEM) Solutions",
            "Identity & Access Management (IAM) with Zero Trust Architecture",
            "Privileged Access Management (PAM) for enterprise systems",
            "Cloud Security Posture Management (CSPM)",
            "Container & Kubernetes Security (K8s workload protection)",
            "Runtime Application Self-Protection (RASP)",
            "Insider Threat Detection Systems using behavioral analytics",
            "Automated Malware Analysis & Sandbox Environments"
        ]
    },

    {
        title: "Offensive Security & Ethical Hacking Services",
        points: [
            "Advanced Penetration Testing (Web, Mobile, API, Network)",
            "Red Team Operations & Adversary Simulation",
            "Social Engineering & Phishing Simulation Campaigns",
            "Wireless Network Security Testing (WiFi, IoT devices)",
            "Exploit Development & Zero-Day Research",
            "Bug Bounty Program Design & Management",
            "Source Code Security Audits",
            "Dark Web Exposure & Credential Leak Detection",
            "Reverse Engineering & Malware Analysis",
            "Exploit Chain Simulation for enterprise readiness"
        ]
    },

    {
        title: "Cloud & Infrastructure Security Engineering",
        points: [
            "Multi-Cloud Security Architecture (AWS, Azure, GCP)",
            "Infrastructure as Code (IaC) Security Validation (Terraform, CloudFormation)",
            "Container Security (Docker & Kubernetes hardening)",
            "Cloud Workload Protection Platforms (CWPP)",
            "Serverless Security Architecture Design",
            "Network Segmentation & Micro-Segmentation Strategies",
            "API Gateway Security & Rate Limiting Systems",
            "DDoS Protection & Traffic Filtering Systems",
            "Secure DevOps (DevSecOps) Pipeline Integration",
            "Hybrid Cloud Security Governance Models"
        ]
    }
];

export const aiSecurityData = [
    {
        title: "Building Trust in AI",
        desc: "AI Will Shape The World, Security Will Shape AI. Enterprise-grade AI security ensuring safe, reliable, and compliant AI systems across LLMs, agents, and multimodal AI pipelines.",
        points: [
            "AI Red Teaming for LLMs, Agents & Multimodal AI Systems",
            "Prompt Injection Attack Detection & Prevention Systems",
            "Jailbreak Resistance Testing for Large Language Models",
            "Model Behavior Auditing & Safety Alignment Evaluation",
            "AI Governance Frameworks (ISO 42001, NIST AI RMF Compliance)",
            "Data Leakage Prevention in AI Pipelines (PII, secrets, tokens)",
            "Secure AI Deployment Pipelines (DevSecAI / MLOps Security)",
            "Model Access Control & API Security Hardening",
            "Adversarial Attack Simulation for AI Models",
            "Continuous AI Risk Monitoring & Safety Scoring Systems"
        ]
    },

    {
        title: "Defending AI Systems (LLM + Agent Security)",
        list: [
            "LLM-Based Chatbot Hardening: prompt injection prevention, jailbreak mitigation, context isolation strategies",
            "Retrieval-Augmented Generation (RAG) Security: preventing data poisoning, vector DB attacks, retrieval manipulation",
            "AI Agent Security: controlling tool access, preventing unauthorized API execution, sandboxing agent actions",
            "AI Red Teaming: adversarial prompt testing, model stress testing, behavior manipulation detection",
            "AI SOC Integration: real-time monitoring of AI logs, anomaly detection in prompt behavior",
            "Model Context Integrity: protection against context leakage and memory poisoning attacks",
            "Multimodal AI Security: securing image, audio, and video-based AI models from adversarial inputs",
            "API-Level AI Security: rate limiting, abuse detection, and inference endpoint protection",
            "Enterprise AI Firewall Systems: blocking malicious prompts and unsafe outputs",
            "Autonomous AI Threat Detection: self-monitoring AI systems identifying abnormal behavior"
        ]
    },

    {
        title: "AI Security Journey (End-to-End Protection Lifecycle)",
        desc: "A structured lifecycle for securing enterprise AI systems from design to deployment and continuous monitoring under global compliance standards.",
        points: [
            "AI Asset Inventory: mapping all LLMs, agents, APIs, and AI pipelines",
            "Threat Modeling for AI Systems: identifying prompt injection, poisoning, and adversarial risks",
            "Security Assessment: evaluating model robustness, jailbreak resistance, and data leakage risks",
            "Data Protection Layer: PII masking, encryption, and secure dataset handling",
            "RAG Security Hardening: vector DB protection, embedding integrity checks",
            "Inference Security: input validation, output filtering, and hallucination control",
            "Deployment Security: secure AI APIs, authentication, and access control layers",
            "Monitoring Layer: AI SOC dashboards with real-time anomaly detection",
            "Incident Response: automated mitigation for AI misuse or data leakage",
            "Compliance & Governance: ISO 42001, NIST AI RMF, GDPR AI compliance reporting"
        ]
    },

    {
        title: "Enterprise AI Governance & Compliance Security",
        points: [
            "AI Risk Management Framework (NIST AI RMF implementation)",
            "ISO 42001 AI Management System Compliance",
            "AI Ethics & Responsible AI Implementation",
            "Bias Detection & Fairness Auditing in AI Models",
            "Explainability & Transparency Systems (XAI frameworks)",
            "Audit Trails for AI Decisions (fully traceable model outputs)",
            "Regulatory Compliance for AI Systems (GDPR, HIPAA, SOC 2)",
            "Model Version Control & Governance Pipelines",
            "AI Policy Enforcement Systems (enterprise-wide governance rules)",
            "Human-in-the-Loop Validation Systems for critical AI decisions"
        ]
    },

    {
        title: "AI Red Teaming & Offensive AI Security",
        points: [
            "LLM Jailbreak Simulation & Exploit Testing",
            "Prompt Injection Attack Simulation (direct & indirect attacks)",
            "Adversarial Example Generation for AI models",
            "AI Agent Exploitation Testing (tool misuse, API abuse scenarios)",
            "Data Poisoning Attack Simulation on training datasets",
            "Model Extraction & Inversion Attack Testing",
            "RAG System Penetration Testing (vector DB manipulation)",
            "Multimodal Attack Testing (image/audio/text adversarial inputs)",
            "AI Security Stress Testing for enterprise-grade resilience",
            "Automated Red Teaming Pipelines for continuous AI testing"
        ]
    },

    {
        title: "AI SOC (Security Operations Center for AI)",
        points: [
            "Real-Time Monitoring of LLM Prompts & Outputs",
            "AI Threat Detection Dashboards (behavioral anomaly tracking)",
            "Model Abuse Detection Systems (spam, manipulation, extraction attempts)",
            "AI Incident Response Automation (auto-block unsafe queries)",
            "Log Analysis for AI Agents & API Calls",
            "Behavioral Baseline Modeling for AI systems",
            "Alerting Systems for Prompt Injection Attempts",
            "Security Telemetry for AI Pipelines",
            "Cross-System AI Threat Intelligence Integration",
            "Autonomous AI Security Agents for monitoring & response"
        ]
    }
];

export const antiTerrorData = {
    title: "AI-Based Public Safety & Anti-Terror Monitoring System (Concept)",
    goal: {
        title: "Project Goal",
        desc: "Build an AI-powered integrated security system using: Autonomous drones, Ground robots, Smart CCTV, AI threat detection, Real-time command & control",
        purpose: ["Detect suspicious activities", "Monitor crowd safety", "Prevent terror incidents", "Assist law enforcement response"],
        important: "Detecting \"physical address of each person\" is illegal without court-approved government access. Instead, system should detect threat behavior, not private identity data."
    },
    architecture: [
        { title: "AI Surveillance Layer", items: ["Smart CCTV with edge AI", "Drone-based aerial monitoring", "Mobile patrol robots"] },
        { title: "AI Detection Models", items: ["Weapon detection (guns, explosives)", "Abandoned object detection", "Suspicious behavior detection", "Crowd density analysis", "Anomaly detection"] },
        { title: "Command & Control Center", items: ["Real-time dashboard", "Heatmap of risk zones", "Threat level scoring", "Emergency alert automation"] }
    ],
    components: [
        {
            title: "Autonomous Drones",
            models: "Use drones similar to DJI industrial models, Skydio autonomous drones",
            capabilities: ["Live 4K video feed", "Night vision (thermal camera)", "AI onboard detection (YOLOv8)", "GPS mapping", "Auto patrol routes"],
            aiModels: ["Object Detection (YOLOv8)", "Pose Estimation", "Weapon Detection CNN", "Crowd abnormal motion detection (LSTM)"]
        },
        {
            title: "Ground Patrol Robots",
            models: "Similar to Boston Dynamics (Spot robot)",
            features: ["Face detection (not identification unless legal)", "Loudspeaker alerts", "Crowd communication", "Bomb detection sensors", "Gas detection sensors"]
        }
    ],
    intelligenceModules: [
        { title: "Suspicious Behavior Detection", items: ["Running against crowd flow", "Sudden aggressive motion", "Object handover pattern", "Hidden face in restricted zone"], models: "CNN + LSTM, Transformer-based action recognition" },
        { title: "Weapon & Explosive Detection", items: ["Bounding box detection", "Confidence score", "Auto-alert"], dataset: "Open Images Dataset, Custom Pakistani environment dataset" },
        { title: "Crowd Intelligence", items: ["Density estimation", "Panic detection", "Stampede prediction", "Violence detection"] }
    ],
    legalHandling: {
        title: "Address & Identity Handling (Legal Version)",
        use: ["National ID integration (only with government access)", "Facial recognition ONLY for wanted database", "License plate recognition (LPR)", "Geo-tagging of suspicious activity"],
        never: ["Track normal citizens without warrant", "Store personal private data without consent"]
    },
    deploymentAreas: ["Airports", "Railway stations", "Public rallies", "Religious gatherings", "Sensitive zones"],
    techStack: [
        { category: "Backend", items: "FastAPI, Node.js, Kafka, PostgreSQL + TimescaleDB" },
        { category: "AI", items: "PyTorch, TensorFlow, OpenCV, YOLOv8, Detectron2" },
        { category: "Edge AI & Cloud", items: "NVIDIA Jetson, Coral TPU, AWS GovCloud, Local secure server" }
    ],
    securityLayer: ["AES-256 Encryption", "Blockchain logging", "Multi-layer auth", "Zero trust architecture"],
    riskScoring: ["Threat score (0–100)", "Location risk multiplier", "Behavior anomaly index", "Crowd sensitivity factor"],
    riskActions: ["Alert police", "Send nearest drone", "Activate robot patrol", "Lock entry gates"],
    advancedFeatures: ["AI suspect sketch", "Thermal weapon detection", "Drone swarm coordination", "AI predictive hotspot mapping"],
    requirements: ["Universal Act for peace", "Data privacy laws", "Human rights regulations", "Judicial oversight"],
    startup: ["Government contract", "Smart city security solution", "SaaS AI monitoring platform", "Export to Middle East"]
};

export const projectsData = [
    {
        "id": "autonomous-ai-engineer",
        "number": "01",
        "title": "Autonomous AI Software Engineer",
        "tagline": "Multi-agent autonomous software delivery pipeline from spec to cloud deployment",
        "category": "Agentic AI",
        "color": "cyan",
        "image": "/projects/1. Autonomous AI Software Engineer.png",
        "description": "An end-to-end autonomous AI engineering platform where specialized agents collaborate in an orchestrated loop to turn natural language requirements into tested, secured, containerized, and deployed applications.",
        "workflowType": "sequential-loop",
        "workflowSteps": [
            {
                "step": "01",
                "role": "Product Manager Agent",
                "action": "Requirement Analysis & User Story Extraction",
                "icon": "Bot"
            },
            {
                "step": "02",
                "role": "Architect Agent",
                "action": "System Design, Schema & API Contract Generation",
                "icon": "Workflow"
            },
            {
                "step": "03",
                "role": "Developer Agent",
                "action": "Full-Stack Code Synthesis & AST Verification",
                "icon": "Code2"
            },
            {
                "step": "04",
                "role": "Code Review Agent",
                "action": "Linter, Style & Pattern Correctness Audit",
                "icon": "CheckCircle2"
            },
            {
                "step": "05",
                "role": "QA Agent",
                "action": "Automated Test Generation & Regression Suites",
                "icon": "Activity"
            },
            {
                "step": "06",
                "role": "Security Agent",
                "action": "SAST, Secrets Detection & Dependency Scan",
                "icon": "ShieldAlert"
            },
            {
                "step": "07",
                "role": "DevOps Agent",
                "action": "Dockerfile, Kubernetes Manifests & CI/CD Pipelines",
                "icon": "Layers"
            },
            {
                "step": "08",
                "role": "Cloud Deployment",
                "action": "Live Container Rollout & Health Probing",
                "icon": "Globe"
            }
        ],
        "features": [
            "Requirement analysis & functional decomposition",
            "Architecture generation with Mermaid / OpenAPI specs",
            "Multi-file code generation with AST validation",
            "Autonomous repository & branch management",
            "Automated unit, integration & regression testing",
            "Continuous peer code review & refactoring loop",
            "Automated security scanning & SBOM generation",
            "Self-updating documentation & API catalogs",
            "Docker multi-stage builds & container optimization",
            "Automated GitHub Actions CI/CD pipelines",
            "Human-in-the-loop approval checkpoints",
            "Long-term agent episodic memory & vector state",
            "RAG over project documentation & codebases"
        ],
        "techStack": [
            "Python",
            "LangGraph",
            "CrewAI",
            "FastAPI",
            "Docker",
            "Kubernetes",
            "Qdrant",
            "GitHub Actions",
            "Claude 3.5 Sonnet",
            "GPT-4o"
        ],
        "schema": "User Requirement\n       ↓\nProduct Manager Agent\n       ↓\nArchitect Agent\n       ↓\nDeveloper Agent\n       ↓\nCode Review Agent\n       ↓\nQA Agent\n       ↓\nSecurity Agent\n       ↓\nDevOps Agent\n       ↓\nDocker / Cloud Deployment"
    },
    {
        "id": "enterprise-multi-agent-platform",
        "number": "02",
        "title": "Enterprise Multi-Agent Business Platform",
        "tagline": "Orchestrated AI workforce for cross-department enterprise autonomy",
        "category": "Enterprise AI",
        "color": "purple",
        "image": "/projects/2. Enterprise Multi-Agent Business Platform.png",
        "description": "A centralized multi-tenant agentic operating system where business departments (Sales, Finance, HR) run specialized agent clusters coordinated by an intelligent AI Orchestrator with enterprise governance.",
        "workflowType": "hub-spoke",
        "workflowSteps": [
            {
                "step": "Hub",
                "role": "AI Orchestrator",
                "action": "Intent Routing, Task Delegation & Context Sharing",
                "icon": "BrainCircuit"
            },
            {
                "step": "Node A",
                "role": "Sales Agent",
                "action": "CRM Automation, Lead Scoring & Email Outreach",
                "icon": "MessageSquare"
            },
            {
                "step": "Node B",
                "role": "Finance Agent",
                "action": "Report Generation, DB Reconciliation & Anomaly Flagging",
                "icon": "BarChart3"
            },
            {
                "step": "Node C",
                "role": "HR Agent",
                "action": "Document Ingestion, Policy Search & Onboarding Workflows",
                "icon": "Briefcase"
            }
        ],
        "capabilities": [
            "Read and understand complex enterprise documents (PDF, DOCX, CSV)",
            "Analyze tabular financial data and live database streams",
            "Generate compliant business reports with executive summaries",
            "Semantic search across proprietary internal knowledge bases",
            "Execute bidirectional tool calling and external API integrations",
            "Coordinate complex cross-departmental multi-agent workflows",
            "Inter-agent messaging via asynchronous event bus",
            "Enforce human-in-the-loop approval workflows for high-stakes actions"
        ],
        "features": [
            "Agentic AI orchestrator with dynamic planning",
            "Hierarchical multi-agent architecture",
            "Fine-grained Role-Based Access Control (RBAC)",
            "Enterprise OAuth 2.0 & SAML SSO integration",
            "REST, GraphQL & gRPC API integration layer",
            "Event-driven architecture powered by Kafka / RabbitMQ",
            "Background worker queues (Celery / BullMQ)",
            "Real-time status updates over WebSockets",
            "Immutable audit logging & compliance tracing",
            "Strict multi-tenant workspace isolation"
        ],
        "techStack": [
            "Python / TypeScript",
            "LangChain",
            "FastAPI",
            "WebSockets",
            "Kafka",
            "Redis",
            "PostgreSQL",
            "Docker",
            "OAuth 2.0",
            "OpenAI"
        ],
        "schema": "                    AI Orchestrator\n                           │\n       ┌───────────────────┼──────────────────┐\n       ↓                   ↓                  ↓\n   Sales Agent        Finance Agent       HR Agent\n       │                   │                  │\n       ↓                   ↓                  ↓\n CRM / Email          Reports / DB       Documents"
    },
    {
        "id": "ai-saas-platform-builder",
        "number": "03",
        "title": "AI-Powered SaaS Platform Builder",
        "tagline": "Instant mini AI SaaS factory turning single prompts into complete software products",
        "category": "AI Factory",
        "color": "emerald",
        "image": "/projects/3. AI-Powered SaaS Platform Builder.png",
        "description": "An autonomous SaaS generator that transforms high-level product descriptions (e.g. \"Create an appointment-management SaaS for dentists\") into fully functional, customizable multi-tenant applications with databases, authentication, dashboards, and deployment configs.",
        "workflowType": "generator-pipeline",
        "examplePrompt": "Create an appointment-management SaaS for dentists.",
        "generatedArtifacts": [
            {
                "name": "Database Schema",
                "desc": "Normalized PostgreSQL / Prisma models with relations and indexing",
                "icon": "Database"
            },
            {
                "name": "Backend APIs",
                "desc": "Secure REST & GraphQL endpoints with validation & middleware",
                "icon": "Server"
            },
            {
                "name": "Frontend UI",
                "desc": "Responsive, accessible modern React / Next.js interface with Tailwind",
                "icon": "Layers"
            },
            {
                "name": "Authentication",
                "desc": "Multi-tenant auth, session management, and RBAC guards",
                "icon": "Lock"
            },
            {
                "name": "Admin Dashboard",
                "desc": "Analytics charts, user management, and tenant metrics",
                "icon": "BarChart3"
            },
            {
                "name": "Documentation",
                "desc": "Auto-generated OpenAPI Swagger specs & onboarding guides",
                "icon": "Terminal"
            },
            {
                "name": "Automated Tests",
                "desc": "Unit, integration, and E2E testing suite with mock seed data",
                "icon": "CheckCircle2"
            },
            {
                "name": "Docker & Cloud",
                "desc": "Production Dockerfile, Compose, and Kubernetes Helm charts",
                "icon": "Globe"
            }
        ],
        "features": [
            "Prompt-to-full-stack software generation",
            "Interactive live sandbox preview & code modifier",
            "Automated database migrations & relational schema synthesis",
            "Secure multi-tenant customer separation",
            "Stripe subscription billing & webhook integration",
            "Instant Git repository scaffolding & deployment to Vercel/AWS"
        ],
        "techStack": [
            "Next.js",
            "React",
            "Node.js / FastAPI",
            "Prisma ORM",
            "PostgreSQL",
            "Docker",
            "Stripe API",
            "Tailwind CSS",
            "Claude 3.5 Sonnet"
        ],
        "schema": "Prompt: \"Create an appointment-management SaaS for dentists.\"\n  ↓\n┌─────────────────────────────────────────────────────────────┐\n│ Database Schema │ Backend APIs │ Frontend UI │ Auth & RBAC   │\n├─────────────────────────────────────────────────────────────┤\n│ Admin Dashboard │ API Docs     │ Test Suite  │ Docker/Deploy │\n└─────────────────────────────────────────────────────────────┘\n  ↓\nLive Multi-Tenant SaaS Platform"
    },
    {
        "id": "cloud-native-ecommerce-microservices",
        "number": "04",
        "title": "Cloud-Native E-Commerce Microservices",
        "tagline": "High-throughput event-driven distributed system for enterprise commerce",
        "category": "Microservices",
        "color": "blue",
        "image": "/projects/4. Cloud-Native E-Commerce Microservices.png",
        "description": "A production-grade distributed microservices architecture implementing CQRS, Saga orchestration, asynchronous messaging via Apache Kafka, and distributed state persistence across isolated datastores.",
        "workflowType": "distributed-gateway",
        "workflowSteps": [
            {
                "step": "Edge",
                "role": "API Gateway",
                "action": "Reverse Proxy, Rate Limiting & Auth Validation",
                "icon": "Globe"
            },
            {
                "step": "Core 1",
                "role": "User Service",
                "action": "Identity, Profile & JWT Management",
                "icon": "Lock"
            },
            {
                "step": "Core 2",
                "role": "Product Service",
                "action": "Catalog, Inventory & Elastic Search",
                "icon": "Layers"
            },
            {
                "step": "Core 3",
                "role": "Order Service",
                "action": "Saga Coordinator & Checkout Pipeline",
                "icon": "Workflow"
            },
            {
                "step": "Broker",
                "role": "Kafka Event Bus",
                "action": "Distributed Event Streaming & Topic Routing",
                "icon": "Activity"
            },
            {
                "step": "Async 1",
                "role": "Payment Service",
                "action": "Stripe Gateway & Idempotent Settlements",
                "icon": "Zap"
            },
            {
                "step": "Async 2",
                "role": "Notification Service",
                "action": "Transactional Email, SMS & Push Dispatches",
                "icon": "MessageSquare"
            },
            {
                "step": "Async 3",
                "role": "Analytics Service",
                "action": "Clickstream Tracking & Real-Time Aggregation",
                "icon": "BarChart3"
            }
        ],
        "features": [
            "API Gateway with JWT authentication, throttling & SSL termination",
            "Decoupled microservices architecture with independent databases",
            "Asynchronous event-driven messaging with Apache Kafka",
            "Distributed transactions via the Saga Orchestration pattern",
            "PostgreSQL relational persistence with connection pooling",
            "Redis distributed caching & session clustering",
            "OpenTelemetry distributed tracing (Jaeger) and Prometheus metrics",
            "Resilience patterns: Circuit Breakers, Retries, and Fallbacks",
            "Dockerized container topology deployed via Kubernetes Helm"
        ],
        "techStack": [
            "Node.js / Go",
            "Apache Kafka",
            "PostgreSQL",
            "Redis",
            "Docker",
            "Kubernetes",
            "Envoy Gateway",
            "Prometheus",
            "Grafana"
        ],
        "schema": "                    API Gateway\n                         │\n       ┌─────────────────┼─────────────────┐\n       ↓                 ↓                 ↓\n   User Service     Product Service    Order Service\n       │                 │                 │\n       └────────────┬────┴────────────┬─────┘\n                    ↓                 ↓\n                 Kafka            PostgreSQL\n                    │\n          ┌─────────┼─────────┐\n          ↓         ↓         ↓\n      Payment   Notification  Analytics"
    },
    {
        "id": "realtime-collaboration-platform",
        "number": "05",
        "title": "Real-Time Collaboration Platform",
        "tagline": "Next-gen hybrid workspace combining Slack, Google Docs, Notion, and Discord",
        "category": "Real-Time Systems",
        "color": "indigo",
        "image": "/projects/5. Real-Time Collaboration Platform.png",
        "description": "A unified real-time collaboration environment featuring conflict-free multi-user document editing, instant low-latency messaging, voice/video conferencing, and background AI meeting summarization.",
        "workflowType": "realtime-mesh",
        "features": [
            "Real-time instant messaging with channel hierarchies & threads",
            "Live presence detection and user heartbeat status",
            "Real-time typing indicators with debounce optimization",
            "Secure multi-format file sharing with CDN streaming",
            "Instant multi-channel push & desktop notifications",
            "Low-latency voice & video rooms powered by WebRTC",
            "Conflict-free collaborative rich text editing using CRDTs (Yjs)",
            "High-definition screen sharing with low bandwidth overhead",
            "Blazing fast full-text semantic search across messages & documents",
            "Automated AI meeting transcription & action-item summaries"
        ],
        "techStack": [
            "React",
            "Node.js",
            "WebSockets",
            "WebRTC (LiveKit)",
            "CRDTs (Yjs)",
            "Redis Pub/Sub",
            "PostgreSQL",
            "Tailwind CSS",
            "OpenAI Whisper"
        ],
        "schema": "┌─────────────────────────────────────────────────────────────┐\n│               Real-Time Collaboration Mesh                  │\n├─────────────────┬─────────────────┬─────────────────────────┤\n│ Messaging Hub   │ Presence & Chat │ Voice / Video (WebRTC)  │\n├─────────────────┼─────────────────┼─────────────────────────┤\n│ Docs (CRDT/Yjs) │ Screen Sharing  │ AI Meeting Summarizer   │\n└─────────────────┴─────────────────┴─────────────────────────┘"
    },
    {
        "id": "ai-data-analyst-bi-agent",
        "number": "06",
        "title": "AI Data Analyst & BI Agent",
        "tagline": "Autonomous natural-language-to-insights engine for enterprise data lakes",
        "category": "Data & Analytics",
        "color": "sky",
        "image": "/projects/6. AI Data Analyst & BI Agent.png",
        "description": "An intelligent conversational data scientist that connects directly to relational databases and cloud data warehouses, automatically translates human business questions into optimized SQL, executes analytics, generates charts, and explains key findings.",
        "workflowType": "analytics-pipeline",
        "exampleQuery": "Show me why revenue decreased last quarter.",
        "workflowSteps": [
            {
                "step": "01",
                "role": "User Question",
                "action": "\"Show me why revenue decreased last quarter.\"",
                "icon": "MessageSquare"
            },
            {
                "step": "02",
                "role": "Intent Analysis",
                "action": "Extract Metrics, Dimensions & Time Window Constraints",
                "icon": "BrainCircuit"
            },
            {
                "step": "03",
                "role": "Database Discovery",
                "action": "Inspect Schema, Indexes, Foreign Keys & Table Catalogs",
                "icon": "Database"
            },
            {
                "step": "04",
                "role": "SQL Generation",
                "action": "Synthesize Optimized Aggregations, Joins & Filters",
                "icon": "Code2"
            },
            {
                "step": "05",
                "role": "SQL Validation",
                "action": "Syntax Safety Checking, Read-Only Guardrails & Cost Estimation",
                "icon": "ShieldCheck"
            },
            {
                "step": "06",
                "role": "Query Execution",
                "action": "Run on Target Database (PostgreSQL / Snowflake / DuckDB)",
                "icon": "Activity"
            },
            {
                "step": "07",
                "role": "Statistical Analysis",
                "action": "Anomaly Detection, Variance Calculations & Trend Profiling",
                "icon": "BarChart3"
            },
            {
                "step": "08",
                "role": "Visualization",
                "action": "Generate Interactive Plotly / ECharts Charts & Graphs",
                "icon": "Layers"
            },
            {
                "step": "09",
                "role": "Business Explanation",
                "action": "Deliver Actionable Plain-English Executive Insights",
                "icon": "Zap"
            }
        ],
        "features": [
            "Natural-language-to-SQL synthesis with high accuracy",
            "Automatic interactive visualization & chart generation",
            "Automated statistical data profiling & schema discovery",
            "Statistical anomaly detection & trend deviation alerts",
            "Time-series forecasting & predictive modeling",
            "Regression, correlation & distribution analysis",
            "Automated executive summary & exportable PDF reports",
            "Direct Excel / CSV file ingestion & spreadsheet analysis",
            "Universal database connectors (PostgreSQL, MySQL, Snowflake, BigQuery)",
            "Conversational memory for iterative data exploration"
        ],
        "techStack": [
            "Python",
            "DuckDB",
            "Pandas",
            "SQLAlchemy",
            "Plotly",
            "FastAPI",
            "Streamlit / React",
            "PostgreSQL",
            "Snowflake",
            "GPT-4o"
        ],
        "schema": "Question\n   ↓\nIntent Analysis\n   ↓\nDatabase Discovery\n   ↓\nSQL Generation\n   ↓\nSQL Validation\n   ↓\nQuery Execution\n   ↓\nStatistical Analysis\n   ↓\nVisualization\n   ↓\nBusiness Explanation"
    },
    {
        "id": "enterprise-rag-intelligence-system",
        "number": "07",
        "title": "Enterprise RAG Knowledge Intelligence System",
        "tagline": "Multi-source hybrid search & reranked question-answering with verifiable citations",
        "category": "Enterprise RAG",
        "color": "teal",
        "image": "/projects/7. Enterprise RAG Knowledge Intelligence System.png",
        "description": "An enterprise-grade Knowledge Intelligence System that ingests multi-format documentation, applies chunking & metadata enrichment, executes hybrid vector+lexical search with Cross-Encoder reranking, and generates hallucinations-free answers with precise citations.",
        "workflowType": "rag-pipeline",
        "supportedSources": [
            "PDF Reports",
            "DOCX Docs",
            "PPTX Slides",
            "CSV / Tabular",
            "Web Pages",
            "Git Repositories",
            "Database Records"
        ],
        "workflowSteps": [
            {
                "step": "01",
                "role": "Ingestion",
                "action": "Extract text, structure & metadata from 7+ document formats",
                "icon": "Layers"
            },
            {
                "step": "02",
                "role": "Parsing & Chunking",
                "action": "Context-aware semantic boundary chunking",
                "icon": "Workflow"
            },
            {
                "step": "03",
                "role": "Metadata Extraction",
                "action": "Tag source, author, timestamp, department & access level",
                "icon": "Binary"
            },
            {
                "step": "04",
                "role": "Embeddings",
                "action": "Generate dense vectors via OpenAI / BAAI / Cohere",
                "icon": "BrainCircuit"
            },
            {
                "step": "05",
                "role": "Vector DB Indexing",
                "action": "Store & index in HNSW / IVF vector graphs",
                "icon": "Database"
            },
            {
                "step": "06",
                "role": "Hybrid Search",
                "action": "Merge dense semantic vectors with BM25 sparse keyword search",
                "icon": "Zap"
            },
            {
                "step": "07",
                "role": "Reranking",
                "action": "Reorder top-K chunks using Cross-Encoder models (Cohere / BGE)",
                "icon": "BarChart3"
            },
            {
                "step": "08",
                "role": "LLM Generation",
                "action": "Synthesize grounded answers strictly within retrieved context",
                "icon": "Bot"
            },
            {
                "step": "09",
                "role": "Answer + Citations",
                "action": "Return verified response with clickable source page citations",
                "icon": "CheckCircle2"
            }
        ],
        "vectorDbComparison": [
            {
                "name": "FAISS",
                "type": "In-Memory / Library",
                "searchSpeed": "Ultra Fast (<15ms)",
                "scalability": "Moderate",
                "bestFor": "High-speed local search & prototyping"
            },
            {
                "name": "Qdrant",
                "type": "Distributed Engine",
                "searchSpeed": "Very Fast (<30ms)",
                "scalability": "High (Billions)",
                "bestFor": "Production payload filtering & scale"
            },
            {
                "name": "Weaviate",
                "type": "Managed / OSS",
                "searchSpeed": "Fast (<40ms)",
                "scalability": "High",
                "bestFor": "Multi-modal & GraphQL enterprise search"
            },
            {
                "name": "Pinecone",
                "type": "Fully Managed Cloud",
                "searchSpeed": "Fast (<45ms)",
                "scalability": "Infinite Serverless",
                "bestFor": "Zero-ops enterprise cloud deployment"
            }
        ],
        "features": [
            "Hybrid search combining Dense Semantic Vectors + Sparse BM25",
            "Cross-Encoder reranking for top-tier relevance ranking",
            "Multi-turn query rewriting and sub-query decomposition",
            "Document-level access control & permission mapping (RBAC)",
            "Exact source citation tracking with page/paragraph attribution",
            "Automated RAG evaluation pipeline (Ragas / TruLens metrics)",
            "Real-time hallucination detection & groundedness guardrails",
            "Persistent conversation memory with semantic compression",
            "Multi-tenant tenant-isolated vector indexing"
        ],
        "techStack": [
            "Python",
            "LangChain / LlamaIndex",
            "Qdrant",
            "Pinecone",
            "FAISS",
            "Weaviate",
            "Cohere Rerank",
            "FastAPI",
            "React",
            "OpenAI"
        ],
        "schema": "Documents (PDF, DOCX, PPTX, CSV, Web, Git, DB)\n    ↓\nParsing → Chunking → Metadata Extraction\n    ↓\nEmbeddings → Vector Database\n    ↓\nHybrid Search (Vector + BM25)\n    ↓\nReranking (Cross-Encoder)\n    ↓\nLLM Grounded Synthesis\n    ↓\nAnswer + Verified Citations"
    },
    {
        "id": "devsecops-ai-security-platform",
        "number": "08",
        "title": "DevSecOps AI Security Platform",
        "tagline": "Automated repository & CI/CD security intelligence with AI auto-remediation",
        "category": "DevSecOps",
        "color": "red",
        "image": "/projects/8. DevSecOps AI Security Platform.png",
        "description": "An automated Shift-Left security platform that deeply analyzes Git repositories and CI/CD pipelines across SAST, SCA, Secrets, Containers, and IaC, employing AI to contextualize risks and generate automated code remediation PRs.",
        "workflowType": "security-matrix",
        "scanningEngines": [
            {
                "name": "SAST",
                "label": "Static Application Security Testing",
                "desc": "Analyzes source code for OWASP Top 10, SQLi, XSS, and dangerous patterns",
                "icon": "Code2"
            },
            {
                "name": "SCA",
                "label": "Software Composition Analysis",
                "desc": "Detects vulnerable dependencies, outdated packages & license violations",
                "icon": "Layers"
            },
            {
                "name": "Secrets Detection",
                "label": "Credential & Token Protection",
                "desc": "Finds exposed API keys, private certificates, tokens & passwords in commits",
                "icon": "Lock"
            },
            {
                "name": "Container Security",
                "label": "Image & Docker Vulnerability Scan",
                "desc": "Inspects base images, OS packages & misconfigurations (Trivy / Clair)",
                "icon": "Globe"
            },
            {
                "name": "IaC Security",
                "label": "Infrastructure as Code Audit",
                "desc": "Evaluates Terraform, CloudFormation, K8s manifests for security gaps",
                "icon": "Server"
            },
            {
                "name": "API Security Testing",
                "label": "Endpoint Fuzzing & Auth Audits",
                "desc": "Validates API auth, rate limits, schema compliance & data leaks",
                "icon": "Activity"
            }
        ],
        "features": [
            "Automated Git repository & pull request security scanning",
            "CI/CD pipeline security gates (fail build on critical CVEs)",
            "Deep SAST static code analysis across multiple languages",
            "SCA dependency scanning with CVE database cross-referencing",
            "High-entropy secrets detection with zero false-positive filters",
            "Container image vulnerability scanning & base-image patching",
            "IaC Terraform, CloudFormation, and Kubernetes misconfiguration detection",
            "OWASP Top 10 API security testing & parameter fuzzing",
            "Software Bill of Materials (SBOM) generation (CycloneDX / SPDX)",
            "Real-time unified vulnerability management dashboard",
            "AI-generated remediation suggestions & automated fix Pull Requests",
            "Executive security posture & compliance reports (SOC2, ISO 27001)"
        ],
        "techStack": [
            "Python / Go",
            "Trivy",
            "Semgrep",
            "Gitleaks",
            "Checkov",
            "FastAPI",
            "Docker",
            "Kubernetes",
            "GitHub Actions",
            "OpenAI"
        ],
        "schema": "Git Repository\n      ↓\nCI/CD Pipeline\n      ↓\n ┌────┼─────┬──────┐\n ↓    ↓     ↓      ↓\nSAST SCA  Secrets  IaC\n ↓    ↓     ↓      ↓\n └────┴─────┴──────┘\n          ↓\n     AI Analyzer\n          ↓\n Risk + Explanation\n          ↓\n Remediation"
    },
    {
        "id": "ai-qa-autonomous-testing-platform",
        "number": "09",
        "title": "AI QA & Autonomous Testing Platform",
        "tagline": "Autonomous test strategy, test synthesis, and execution engine from URL or repo",
        "category": "QA & Testing",
        "color": "yellow",
        "image": "/projects/9. AI QA & Autonomous Testing Platform.png",
        "description": "An autonomous QA engineering platform where users provide an application URL or GitHub repository, and an agent swarm automatically analyzes the architecture, synthesizes multi-layer test suites, executes them in headless browsers/APIs, and produces actionable failure reports.",
        "workflowType": "qa-pipeline",
        "testSuiteTypes": [
            {
                "type": "Unit Tests",
                "desc": "Component testing, mocking, stubs, code branch coverage",
                "icon": "Code2"
            },
            {
                "type": "API Tests",
                "desc": "REST & GraphQL contract testing, edge response validation",
                "icon": "Zap"
            },
            {
                "type": "Integration Tests",
                "desc": "Service interaction, database integrity, third-party mocks",
                "icon": "Workflow"
            },
            {
                "type": "End-to-End Tests",
                "desc": "User flows, cross-browser automation with Playwright",
                "icon": "Globe"
            },
            {
                "type": "Regression Tests",
                "desc": "Critical path assertions, visual regression, change impact tests",
                "icon": "Activity"
            },
            {
                "type": "Accessibility Tests",
                "desc": "WCAG 2.1 compliance, screen reader compatibility, contrast checks",
                "icon": "CheckCircle2"
            },
            {
                "type": "Performance Tests",
                "desc": "Load testing, response time percentiles (k6), stress scenarios",
                "icon": "BarChart3"
            }
        ],
        "workflowSteps": [
            {
                "step": "01",
                "role": "Application Discovery",
                "action": "Crawl URL or parse repo to discover endpoints, UI flows & tech stack",
                "icon": "Globe"
            },
            {
                "step": "02",
                "role": "Test Planner Agent",
                "action": "Create optimal multi-layer test strategy & allocate scenarios",
                "icon": "BrainCircuit"
            },
            {
                "step": "03",
                "role": "Test Generator",
                "action": "Synthesize executable Playwright, Jest, PyTest & k6 scripts",
                "icon": "Code2"
            },
            {
                "step": "04",
                "role": "Execution Engine",
                "action": "Run tests in parallel headless browser grids & API runners",
                "icon": "Activity"
            },
            {
                "step": "05",
                "role": "Failure Analyzer",
                "action": "Analyze stack traces, DOM snapshots, network logs & identify root causes",
                "icon": "ShieldAlert"
            },
            {
                "step": "06",
                "role": "Bug Report Generation",
                "action": "Produce actionable Jira-compatible bug reports with reproduction steps & fixes",
                "icon": "CheckCircle2"
            }
        ],
        "features": [
            "Zero-configuration application discovery from URL or Git repo",
            "Autonomous test strategy generation with coverage prioritization",
            "Full-suite code generation: Unit, API, Integration, and E2E tests",
            "Parallel browser execution using headless Playwright & Chromium",
            "Visual regression testing with pixel-diff AI analysis",
            "Automated accessibility auditing compliant with WCAG standards",
            "Performance & load testing scenarios with k6 integration",
            "AI-powered failure root-cause analyzer with code fix recommendations"
        ],
        "techStack": [
            "TypeScript / Python",
            "Playwright",
            "Jest / PyTest",
            "k6",
            "Docker",
            "FastAPI",
            "React",
            "Tailwind CSS",
            "OpenAI"
        ],
        "schema": "Application URL / Repository\n    ↓\nApplication Discovery\n    ↓\nTest Planner Agent\n    ↓\nTest Generator\n    ↓\nBrowser/API Execution\n    ↓\nFailure Analyzer\n    ↓\nActionable Bug Report"
    },
    {
        "id": "cloud-observability-aiops-platform",
        "number": "10",
        "title": "Cloud Observability & AIOps Platform",
        "tagline": "OpenTelemetry full-stack telemetry engine with AI incident correlation and root-cause analysis",
        "category": "AIOps",
        "color": "rose",
        "image": "/projects/10. Cloud Observability & AIOps Platform.png",
        "description": "A Datadog / New Relic-class observability platform built on OpenTelemetry that ingests Metrics, Logs, Traces, and Events, correlates anomalies across distributed microservices, and utilizes AI to explain errors and propose automated remediation runbooks.",
        "workflowType": "observability-pipeline",
        "telemetryPillars": [
            {
                "name": "Metrics",
                "desc": "CPU, Memory, Latency, Error Rates, Request Throughput",
                "icon": "BarChart3"
            },
            {
                "name": "Logs",
                "desc": "Structured application & system log streams with real-time tailing",
                "icon": "Terminal"
            },
            {
                "name": "Traces",
                "desc": "Distributed request flows across microservices with waterfall spans",
                "icon": "Workflow"
            },
            {
                "name": "Events",
                "desc": "Deployments, config changes, autoscaling & infrastructure events",
                "icon": "Activity"
            }
        ],
        "aiCapabilities": [
            {
                "title": "Detect Anomalies",
                "desc": "Find unusual patterns and alert on metric deviations before outages occur",
                "icon": "ShieldAlert"
            },
            {
                "title": "Summarize Incidents",
                "desc": "Auto-generate executive and engineering incident summaries with timeline",
                "icon": "MessageSquare"
            },
            {
                "title": "Correlate Logs & Traces",
                "desc": "Link related logs to distributed trace spans across services automatically",
                "icon": "Zap"
            },
            {
                "title": "Explain Errors",
                "desc": "Translate cryptic stack traces and error codes into clear natural language",
                "icon": "BrainCircuit"
            },
            {
                "title": "Identify Probable Causes",
                "desc": "Pinpoint root-cause deployments, database locks, or resource limits",
                "icon": "Bot"
            },
            {
                "title": "Generate Incident Reports",
                "desc": "Produce comprehensive post-mortem reports with timeline and impact metrics",
                "icon": "CheckCircle2"
            },
            {
                "title": "Suggest Remediation",
                "desc": "Recommend actionable runbooks, config rollbacks, and capacity adjustments",
                "icon": "Layers"
            }
        ],
        "features": [
            "OpenTelemetry unified collection & distributed instrumentation",
            "Real-time streaming ingestion pipeline for high-volume telemetry",
            "Time-series metric storage & distributed log indexing",
            "Interactive distributed trace waterfall & service dependency map",
            "Dynamic health dashboards for Kubernetes, VMs, and Cloud providers",
            "AI-powered anomaly detection & intelligent alert deduplication",
            "Automated root-cause analysis with correlated telemetry evidence",
            "Automated remediation runbook execution & incident workflows"
        ],
        "techStack": [
            "Go / Python",
            "OpenTelemetry",
            "ClickHouse / VictoriaMetrics",
            "Kafka",
            "Grafana",
            "FastAPI",
            "React",
            "Docker",
            "Kubernetes",
            "GPT-4o"
        ],
        "schema": "Metrics, Logs, Traces, Events\n        ↓\nOpenTelemetry Collector\n        ↓\nStream Processing & Enrichment\n        ↓\nTime-Series & Log Storage\n        ↓\nReal-Time Dashboards\n        ↓\nAI Analysis Engine (Root Cause & Remediation)"
    },
    {
        "id": "global-ai-infrastructure-company",
        "number": "11",
        "title": "Global AI Infrastructure & Trillion-Dollar AI Factory",
        "tagline": "AI Cloud + Private AI + GPU Cloud + AI API + Enterprise AI Factory",
        "category": "AI Infrastructure",
        "color": "blue",
        "image": "/projects/11. Global AI Infrastructure Vision.png",
        "pdfUrl": "/projects/11. Action Plan Business_Plan.pdf",
        "pdfName": "11. Action Plan Business_Plan.pdf",
        "pdfTitle": "Executive Business Plan & 90-Day Scaling Blueprint (PDF)",
        "pdfSize": "3.4 MB",
        "description": "A comprehensive hyperscale AI infrastructure blueprint designed for modular growth from regional AI clouds to global AI factories. Featuring 72-GPU liquid-cooled Blackwell GB300 NVL72 racks, 800 Gb/s InfiniBand fabrics, dynamic multi-model routing control planes, 7 compounding revenue engines, and sovereign enterprise private clouds.",
        "workflowType": "infrastructure-mesh",
        "commercialSurfaces": [
            {
                "name": "01 GPU Cloud",
                "desc": "On-demand GPU, reserved capacity, dedicated servers, racks & clusters (GB200/GB300/B200/H100)",
                "icon": "Cpu"
            },
            {
                "name": "02 AI API",
                "desc": "Token-based inference for text, reasoning, vision, speech, embeddings, image & video",
                "icon": "Zap"
            },
            {
                "name": "03 Model Cloud",
                "desc": "Multi-model intelligent routing across open, licensed, proprietary & customer-hosted models",
                "icon": "Workflow"
            },
            {
                "name": "04 Private AI",
                "desc": "Isolated enterprise environments with sovereign security, private VPC and guaranteed SLAs",
                "icon": "Lock"
            },
            {
                "name": "05 AI Factory",
                "desc": "Autonomous agents, copilots, and industry solutions selling business outcomes, not raw compute",
                "icon": "BrainCircuit"
            }
        ],
        "revenueEngines": [
            {
                "engine": "1. GPU Cloud",
                "model": "GPU-hours, clusters, dedicated capacity & reserved multi-year contracts"
            },
            {
                "engine": "2. AI API",
                "model": "Tokens, reasoning, image, audio, video, embeddings and serverless compute"
            },
            {
                "engine": "3. Private AI",
                "model": "Implementation + platform license + private infrastructure + support"
            },
            {
                "engine": "4. Sovereign AI",
                "model": "Multi-year national AI cloud & sovereign strategic infrastructure"
            },
            {
                "engine": "5. AI Agents",
                "model": "Per-agent monthly subscription + autonomous task usage fees"
            },
            {
                "engine": "6. AI Marketplace",
                "model": "Infrastructure revenue + model/app store marketplace commissions"
            },
            {
                "engine": "7. Enterprise AI",
                "model": "Industry-specific platforms priced around measurable business outcomes"
            }
        ],
        "features": [
            "72-GPU Blackwell GB300 NVL72 liquid-cooled rack-scale compute architecture",
            "800 Gb/s InfiniBand & high-speed RoCE AI cluster interconnection fabrics",
            "Intelligent AI Model Router optimizing for quality, latency, GPU cost & compliance",
            "Multi-tenant GPU orchestration scheduler with Slurm, Kubernetes & Ray",
            "High-throughput model serving via vLLM, TensorRT-LLM & Triton Inference Server",
            "7 compounding revenue engines over unified physical hardware infrastructure",
            "Sovereign AI clouds with national data residency & strict enterprise isolation",
            "FinOps telemetry tracking revenue/MW, gross profit/GPU-hour & rack utilization",
            "5-tier customer engine: Hyperscalers, AI Labs, Enterprises, Developers & Governments",
            "90-day execution roadmap from leased MVP to contracted recurring multi-MW clusters"
        ],
        "techStack": [
            "NVIDIA GB300 / B200",
            "CUDA",
            "InfiniBand 800Gb/s",
            "vLLM",
            "TensorRT-LLM",
            "Triton",
            "Kubernetes",
            "Slurm",
            "FastAPI",
            "Ray",
            "OpenTelemetry"
        ],
        "schema": "Global AI Workloads & Requests\n              ↓\n   AI Model Router (Control Plane)\n  (Quality • Latency • Cost • Privacy)\n              ↓\n  ┌───────────┼───────────┬───────────┐\n  ↓           ↓           ↓           ↓\nGPU Cloud   AI API    Private AI   AI Factory\n(GB300)   (Serverless)  (VPC)      (Agents)\n  └───────────┬───────────┴───────────┘\n              ↓\nLiquid-Cooled NVL72 AI Data Centers"
    },
    {
        "id": "ai-customer-discovery-engine",
        "number": "12",
        "title": "AI Customer Discovery Engine (RevenueFlow)",
        "tagline": "Autonomous social listening, buying signal detection, and compliant lead generation pipeline",
        "category": "Agentic AI",
        "color": "cyan",
        "image": "/projects/12. AI Customer Discovery Engine.png",
        "description": "An autonomous customer discovery engine that scans authorized, public, and consented channels (LinkedIn, X, Reddit, Web) for buying signals, understands business problems with AI, scores leads (0-100), and queues verified outreach with human approval.",
        "workflowType": "discovery-pipeline",
        "workflowSteps": [
            {
                "step": "01",
                "role": "Social Listening Agent",
                "action": "Continuous monitoring of public social feeds & developer forums",
                "icon": "Globe"
            },
            {
                "step": "02",
                "role": "Need Detection Agent",
                "action": "Parse posts to extract specific pain points, channels & requirements",
                "icon": "BrainCircuit"
            },
            {
                "step": "03",
                "role": "Relevance Engine",
                "action": "Evaluate semantic fit against product capabilities & target ICP",
                "icon": "CheckCircle2"
            },
            {
                "step": "04",
                "role": "Lead Enrichment",
                "action": "Synthesize verified company metadata, contact roles & intent score",
                "icon": "Database"
            },
            {
                "step": "05",
                "role": "Propensity Scoring",
                "action": "Compute 0-100 lead score (e.g. 94/100 Highly Qualified)",
                "icon": "BarChart3"
            },
            {
                "step": "06",
                "role": "Human Approval Gate",
                "action": "Review generated personalized outreach before dispatching message",
                "icon": "Lock"
            },
            {
                "step": "07",
                "role": "Sales Queue Dispatch",
                "action": "Push to WhatsApp/CRM queue for permitted compliance-first outreach",
                "icon": "Zap"
            }
        ],
        "features": [
            "Proactive public social listening across LinkedIn, X, Instagram & Reddit",
            "Real-time buying signal & customer need detection using NLP models",
            "High-accuracy lead propensity scoring (0-100) with confidence intervals",
            "Consent-first architecture adhering to platform terms & data privacy regulations",
            "Automatic company identity resolution and CRM data enrichment",
            "Human-in-the-loop approval mechanism before any communication is dispatched",
            "Automated WhatsApp, Email & Webhook sales queue integration",
            "Continuous learning loop optimizing signal detection from conversion outcomes"
        ],
        "techStack": [
            "Python",
            "LangChain",
            "FastAPI",
            "Playwright",
            "Redis",
            "PostgreSQL",
            "pgvector",
            "OpenAI GPT-4o",
            "WhatsApp API",
            "Tailwind CSS"
        ],
        "schema": "Public Social Content (LinkedIn, X, Reddit, Web)\n              ↓\n   AI Social Listening Agent\n              ↓\n  Detect Business / Customer Need\n              ↓\n       Determine Relevance\n              ↓\n     Create Potential Lead\n              ↓\n       AI Lead Scoring (94/100)\n              ↓\n  Human Approval / Permitted Outreach\n              ↓\n      Added to Sales Queue"
    },
    {
        "id": "ai-revenueflow-platform",
        "number": "13",
        "title": "AI RevenueFlow — Autonomous Sales & Engagement Platform",
        "tagline": "End-to-end multi-agent sales command center from discovery to conversion",
        "category": "Enterprise AI",
        "color": "purple",
        "image": "/projects/13. AI RevenueFlow Architecture Dashboard.png",
        "description": "An enterprise agentic revenue engine that unifies multi-channel customer ingestion (WhatsApp, Social Media, Website, Email/CRM, Ads, Live Chat), LangGraph multi-agent orchestration, real-time lead qualification, and closed-loop conversational sales.",
        "workflowType": "sales-command-center",
        "workflowSteps": [
            {
                "step": "Ingest",
                "role": "Data Ingestion Layer",
                "action": "Unify incoming events from WhatsApp, Web, Email & Social APIs",
                "icon": "Layers"
            },
            {
                "step": "Identity",
                "role": "Customer Identity Engine",
                "action": "Deduplicate contacts & build unified customer profile",
                "icon": "Lock"
            },
            {
                "step": "Intelligence",
                "role": "AI Customer Intelligence",
                "action": "Extract intent, need, sentiment, product interest & budget",
                "icon": "BrainCircuit"
            },
            {
                "step": "Scoring",
                "role": "Lead Scoring Matrix",
                "action": "Categorize leads into Hot (90-100), Warm (70-89), Nurture (40-69)",
                "icon": "BarChart3"
            },
            {
                "step": "Orchestrator",
                "role": "LangGraph Swarm",
                "action": "Coordinate Research, Qualification, Sales, Offer & Follow-up agents",
                "icon": "Workflow"
            },
            {
                "step": "Outreach",
                "role": "Omni-Channel Delivery",
                "action": "Personalized messaging over WhatsApp, Email, SMS & Voice",
                "icon": "MessageSquare"
            }
        ],
        "features": [
            "Multi-channel ingestion layer across WhatsApp Business, Email, Web Chat & CRM",
            "LangGraph-powered multi-agent swarm (Research, Qualification, Sales, Offer, Follow-up)",
            "Dynamic AI Revenue Command Center dashboard with live conversion metrics",
            "Customer Intelligence engine detecting intent, budget, sentiment & product fit",
            "Predictive lead scoring matrix (Hot / Warm / Nurture / Low Value)",
            "Personalized dynamic messaging with strict Human-in-the-Loop review gates",
            "Bi-directional synchronization with Salesforce, HubSpot, PostgreSQL & ERPs",
            "Closed-loop analytics and continuous reinforcement learning from win/loss data"
        ],
        "techStack": [
            "LangGraph",
            "Python",
            "FastAPI",
            "React / Next.js",
            "WhatsApp Business API",
            "PostgreSQL",
            "Kafka",
            "Redis",
            "Docker",
            "Claude 3.5 Sonnet"
        ],
        "schema": "Customer Sources (WhatsApp, Social, Web, Email, Ads)\n              ↓\nData Ingestion Layer (APIs / Webhooks / Connectors)\n              ↓\nCustomer Identity (Resolution + Deduplication)\n              ↓\nAI Customer Intelligence (Intent, Need, Sentiment)\n              ↓\nLead Scoring Matrix (Hot 90-100 / Warm / Nurture)\n              ↓\nAgentic AI Orchestrator (LangGraph Multi-Agent Swarm)\n  ┌───────────┬───────────┬───────────┐\n  ↓           ↓           ↓           ↓\nResearch    Qualify     Sales       Offer\n  └───────────┴───────────┴───────────┘\n              ↓\nHuman Approval → Multi-Channel Outreach → CRM Sync"
    },
    {
        "id": "visionguard-ai-security-platform",
        "number": "14",
        "title": "VisionGuard AI — Intelligent Surveillance & Security Platform",
        "tagline": "Multi-tenant edge computer vision, real-time anomaly detection, and automated physical access control",
        "category": "AI Security",
        "color": "emerald",
        "image": "/projects/14. VisionGuard AI Security Platform.png",
        "description": "An enterprise-grade physical security & surveillance automation platform that integrates RTSP CCTV cameras, IoT sensors, facial recognition access control, vehicle license plate recognition (LPR), fire/smoke detection, and natural language camera search with autonomous incident response.",
        "workflowType": "surveillance-control",
        "features": [
            "Multi-factor facial recognition access control (Employee, Visitor, VIP, Watchlist)",
            "Intelligent anomaly detection: intrusion, loitering, crowd panic, fighting & tampering",
            "Vehicle intelligence: Automated LPR, parking monitoring, blacklist alerts & delivery logs",
            "Thermal fire, smoke, and emergency exit blockage detection with instant alarm triggers",
            "AI Security Agent with conversational natural language search (\"Find all events after 10 PM\")",
            "Multi-tenant cloud architecture with isolated cameras, policies, and audit logs per company",
            "Security Operations Center (SOC) dashboard with live camera wall & real-time heatmaps",
            "Mobile app for security officers with real-time push alerts, live view, and gate unlock",
            "Automated alarm triggers: sirens, strobe lights, electronic gate locks, and panic relays",
            "Enterprise integrations with ONVIF, RTSP, MQTT, WebSockets, REST APIs, and HR systems"
        ],
        "techStack": [
            "PyTorch",
            "YOLOv8 / Detectron2",
            "DeepStream",
            "FastAPI",
            "RTSP / ONVIF",
            "PostgreSQL / pgvector",
            "Redis",
            "Kafka",
            "React",
            "Docker"
        ],
        "schema": "CCTV Cameras, IoT Sensors, Access Gates, Barriers\n              ↓\nVideo / Event Ingestion (RTSP, MQTT, WebSockets, APIs)\n              ↓\nComputer Vision Layer (Face, Object, Anomaly, Behavior)\n              ↓\nAI Event Engine + Decision Engine (Risk Scoring & Policies)\n              ↓\n  ┌───────────┬───────────┬───────────┬───────────┐\n  ↓           ↓           ↓           ↓           ↓\nAlarm Trigger Gate Unlock Push Notice Sec Response Analytics"
    },
    {
        "id": "ai-cfo-finance-copilot",
        "number": "15",
        "title": "AI CFO — Autonomous Financial Intelligence & Copilot for SMEs",
        "tagline": "AI-powered CFO that connects invoices, expenses, banking, and predicts cash flow anomalies",
        "category": "FinTech AI",
        "color": "teal",
        "image": "/projects/15. AI-Powered CFO SaaS Infographic.png",
        "description": "A proactive financial intelligence platform that unifies invoices, bank transactions, expenses, and payroll, autonomously categorizes receipts, forecasts cash flow runway, detects duplicate billing/fraud, and delivers conversational financial advisory.",
        "workflowType": "finance-copilot",
        "features": [
            "AI invoice management with automatic OCR extraction, numbering & payment tracking",
            "Smart expense categorization for software subscriptions, salaries, travel & vendors",
            "Conversational AI CFO Copilot (\"Why did profit decrease?\", \"Can I afford a new hire?\")",
            "Real-time financial dashboard with revenue, expense, net profit, and cash runway KPIs",
            "Predictive AI cash-flow forecasting calculating exact runway reserve days (e.g. 47 days)",
            "Proactive 24/7 financial alerts for cash-flow risks, unusual expenses & overdue invoices",
            "Automated fraud and duplicate invoice detection protecting businesses from financial loss",
            "Multi-currency and multi-bank account synchronization with Plaid and Open Banking APIs"
        ],
        "techStack": [
            "Python",
            "FastAPI",
            "Next.js / React",
            "PostgreSQL",
            "Pandas",
            "Prophet (Time Series)",
            "OpenAI GPT-4o",
            "Plaid API",
            "Stripe API",
            "Tailwind CSS"
        ],
        "schema": "Invoices, Expenses, Bank Data, Payroll, Subscriptions\n              ↓\nData Ingestion & OCR Classification Engine\n              ↓\nAI CFO Copilot (Contextual Natural Language Reasoning)\n              ↓\n  ┌───────────────────────┼───────────────────────┐\n  ↓                       ↓                       ↓\nReal-Time Financial   AI Cash-Flow Forecasting  Proactive Anomaly\nKPIs & Dashboard      (Predict Runway Reserve)  & Fraud Detection"
    },
    {
        "id": "ai-business-operating-system",
        "number": "16",
        "title": "AI Business Operating System (One AI Brain)",
        "tagline": "Centralized company intelligence unifying CRM, email, tasks, analytics, and departmental workflows",
        "category": "Enterprise AI",
        "color": "sky",
        "image": "/projects/16. AI Business Operating System Infographic.png",
        "description": "An autonomous enterprise neural operating system that interconnects CRM, emails, project tasks, and communications into a unified company brain, providing executive copilots, autonomous workflow generators, predictive business radars, and multi-agent cross-department execution.",
        "workflowType": "business-os",
        "features": [
            "Unified AI Company Brain understanding all internal documents, tasks, emails & CRM records",
            "AI Executive Copilot preparing sales briefings, analyzing stalled deals & generating agendas",
            "Intent-to-Action engine executing complex multi-step instructions from a single prompt",
            "Autonomous plain-language workflow generator eliminating complex drag-and-drop builders",
            "AI Business Detective identifying revenue anomalies, customer churn risks & operational lags",
            "Predictive Business Radar forecasting revenue, customer demand, and project bottlenecks",
            "Goal-to-Execution engine decomposing corporate targets into trackable weekly action items",
            "Specialized AI Employee Agents for Sales, CS, Project Management, Finance, HR & Operations",
            "Multi-agent consensus collaboration resolving complex inter-departmental questions"
        ],
        "techStack": [
            "LangGraph",
            "Python",
            "FastAPI",
            "React / Next.js",
            "Kafka",
            "PostgreSQL",
            "Redis",
            "OpenAI",
            "Claude 3.5 Sonnet",
            "Docker"
        ],
        "schema": "Unified Enterprise Ingestion (CRM, Email, Tasks, Analytics)\n              ↓\nCentral AI Company Brain (Holistic Neural Graph)\n              ↓\n  ┌───────────────────────┼───────────────────────┐\n  ↓                       ↓                       ↓\nAI Executive Copilot  Intent → Action Engine  Autonomous Workflows\n  ↓                       ↓                       ↓\nPredictive Business   Goal → Execution        Multi-Agent Swarm\nRadar (Forecasting)   (Action Plans)          (Consensus Engine)"
    },
    {
        "id": "autonomous-fintech-ai-platform",
        "number": "17",
        "title": "Autonomous FinTech AI Banking & Lending Platform",
        "tagline": "End-to-end intelligent credit risk assessment, fraud prevention, and banking agent orchestration",
        "category": "FinTech AI",
        "color": "yellow",
        "image": "/projects/17. Autonomous Fintech AI Platform.png",
        "description": "A high-security, compliant autonomous FinTech platform that processes real-time transaction streams, performs credit risk scoring, detects financial fraud, provides explainable loan decisions, and executes approved banking actions with human-in-the-loop oversight.",
        "workflowType": "fintech-mesh",
        "workflowSteps": [
            {
                "step": "01",
                "role": "Customer Ingestion",
                "action": "Stream transaction histories, KYC documents, credit reports & behavior",
                "icon": "Database"
            },
            {
                "step": "02",
                "role": "AI Analysis Swarm",
                "action": "Analyze risk factors, detect anomalies, evaluate financial ratios & trends",
                "icon": "BrainCircuit"
            },
            {
                "step": "03",
                "role": "Recommendations",
                "action": "Synthesize credit decisions, risk scores, repayment options & explanations",
                "icon": "BarChart3"
            },
            {
                "step": "04",
                "role": "Human Approval Gate",
                "action": "Mandatory officer review for high-risk loan approvals & credit overrides",
                "icon": "Lock"
            },
            {
                "step": "05",
                "role": "Autonomous Execution",
                "action": "Disburse loans, update limits, send alerts, trigger webhooks & log audits",
                "icon": "Zap"
            }
        ],
        "features": [
            "Specialized AI agents: Credit Agent, Fraud Agent, Compliance Agent & Banking Agent",
            "LangGraph + Model Context Protocol (MCP) orchestration layer for banking tools",
            "RAG over banking regulations, KYC/AML policies, and credit underwriting manuals",
            "Real-time transaction anomaly & fraud detection on high-throughput Kafka streams",
            "Explainable AI credit decision engine with human-readable rationale reports",
            "Strict Human-in-the-Loop approval workflows for large loans and high-risk exceptions",
            "Banking-grade security, AES-256 encryption, zero-trust RBAC & immutable audit logs",
            "Multi-cloud deployment on AWS & Azure GovCloud with pgvector database storage"
        ],
        "techStack": [
            "Python",
            "FastAPI",
            "LangGraph",
            "MCP",
            "OpenAI / LLMs",
            "PostgreSQL / pgvector",
            "Redis",
            "Kafka",
            "AWS / Azure",
            "Docker"
        ],
        "schema": "Customer Financial Data (Transactions, KYC, Credit Reports)\n              ↓\nAPI Gateway & FastAPI Microservices\n              ↓\nAI Agent Layer (LangGraph + MCP Orchestration)\n  ┌───────────┬───────────┬───────────┬───────────┐\n  ↓           ↓           ↓           ↓           ↓\nCredit Agent Fraud Agent Compliance  Banking Agent\n  └───────────┴───────────┴───────────┴───────────┘\n              ↓\nLLM Reasoning + RAG Knowledge (pgvector)\n              ↓\nHuman-in-the-Loop Review Gate (High-Risk Loans)\n              ↓\nApproved Execution (Disbursements, Alerts, CRM Sync)"
    },
    {
        "id": "ai-agentic-enterprise-operating-system",
        "number": "18",
        "title": "AI Agentic Enterprise OS (LangGraph + MCP Swarm)",
        "tagline": "Enterprise multi-agent control plane with MCP tooling, SOX/GDPR governance, and audit telemetry",
        "category": "Agentic AI",
        "color": "indigo",
        "image": "/projects/18. AI Agentic Enterprise Operating System.png",
        "description": "A multi-agent enterprise control plane built on LangGraph and Model Context Protocol (MCP). It routes executive requests across specialized agents (Finance, SQL, Email, Analytics, Compliance), enforces SOX/GDPR policies, and tracks end-to-end token costs, latencies, and immutable audit logs.",
        "workflowType": "enterprise-control-plane",
        "workflowSteps": [
            {
                "step": "Manager",
                "role": "Manager Request",
                "action": "\"Find all unpaid invoices from last month, draft emails, show approvals\"",
                "icon": "MessageSquare"
            },
            {
                "step": "Router",
                "role": "Orchestrator Agent",
                "action": "Decompose prompt into subtasks & route across multi-agent architecture",
                "icon": "BrainCircuit"
            },
            {
                "step": "Finance",
                "role": "Finance Agent",
                "action": "Identify unpaid invoices, check payment terms & calculate overdue balance",
                "icon": "BarChart3"
            },
            {
                "step": "SQL",
                "role": "SQL Agent",
                "action": "Generate safe parameterized queries, extract tables & validate datasets",
                "icon": "Code2"
            },
            {
                "step": "Email",
                "role": "Email Agent",
                "action": "Draft personalized collection emails & attach statements into review queue",
                "icon": "Layers"
            },
            {
                "step": "Compliance",
                "role": "Compliance Agent",
                "action": "Verify approval matrix, SOX compliance rules & audit readiness",
                "icon": "ShieldCheck"
            },
            {
                "step": "Approval",
                "role": "Human-in-the-Loop",
                "action": "Executive reviews and approves batch execution with 1-click override",
                "icon": "Lock"
            }
        ],
        "features": [
            "LangGraph stateful workflow orchestration with branching, retries & parallel steps",
            "Standardized Model Context Protocol (MCP) connectors for SAP, Salesforce & Snowflake",
            "Specialized multi-agent architecture: Finance, SQL, Email, Analytics & Compliance agents",
            "Governance & compliance engine ensuring SOX, GDPR, and ISO 27001 readiness",
            "Granular Role-Based Access Control (RBAC) and data privacy PII masking filters",
            "Human-in-the-Loop approval matrix with request-change and rollback capabilities",
            "Real-time observability dashboard tracking success rate (98.6%), latency & token spend",
            "Cryptographically immutable end-to-end audit trail for every action and tool execution"
        ],
        "techStack": [
            "LangGraph",
            "Model Context Protocol (MCP)",
            "Python",
            "FastAPI",
            "Pinecone",
            "PostgreSQL",
            "Redis",
            "Docker",
            "Kubernetes",
            "Grafana"
        ],
        "schema": "Executive Request (e.g. \"Reconcile unpaid invoices & draft emails\")\n              ↓\nLangGraph Orchestrator Agent (Decompose & Route)\n              ↓\n  ┌───────────┬───────────┬───────────┬───────────┬───────────┐\n  ↓           ↓           ↓           ↓           ↓           ↓\nFinance      SQL        Email      Analytics  Compliance  Tool Calling\n Agent      Agent       Agent        Agent       Agent       (MCP)\n  └───────────┴───────────┴───────────┴───────────┴───────────┘\n              ↓\nEnterprise Systems (ERP, CRM, Snowflake, S3 Document Store)\n              ↓\nHuman-in-the-Loop Workflow (Review → Approve → Execute)\n              ↓\nObservability Telemetry & Immutable Cryptographic Audit Logs"
    },
    {
        "id": "agent-ai-voice-whatsapp-call-center",
        "number": "19",
        "title": "10-Agent AI Voice & WhatsApp Customer Operations Platform",
        "tagline": "Hybrid AI + Human-in-the-loop smart call center and omni-channel order management",
        "category": "Voice & Omni-Channel AI",
        "color": "cyan",
        "image": "/projects/19. Agent AI Voice & WhatsApp Customer Operations Platform.png",
        "description": "A carrier-grade omni-channel customer operations platform unifying Asterisk PBX/SIP telephony, WebRTC voice streaming, and WhatsApp Business API with a 10-agent orchestration swarm for voice calls, order modifications, and human escalations.",
        "workflowType": "callcenter-omnichannel",
        "workflowSteps": [
            {
                "step": "Channel",
                "role": "Customer Channels",
                "action": "Receive inbound voice calls (PBX/SIP) & WhatsApp messaging",
                "icon": "Phone"
            },
            {
                "step": "Voice AI",
                "role": "Speech & Audio Layer",
                "action": "Real-time STT (Deepgram/Whisper) -> LLM -> Ultra-fast TTS (ElevenLabs)",
                "icon": "Headphones"
            },
            {
                "step": "Orchestrator",
                "role": "LangGraph Router",
                "action": "Intent detection, customer ID resolution & policy validation",
                "icon": "BrainCircuit"
            },
            {
                "step": "Agents",
                "role": "Specialized 10-Agent Swarm",
                "action": "Order (1001-02), Product (1003-04), Support (1005-06), Cancel (1007-08)",
                "icon": "Bot"
            },
            {
                "step": "Human Loop",
                "role": "Human Escalation",
                "action": "Seamless live call transfer to human agents (Ext 1010) on complex cases",
                "icon": "Layers"
            },
            {
                "step": "Execution",
                "role": "Business Tool Execution",
                "action": "Update CRM, process order modification, dispatch tracking & audit log",
                "icon": "CheckCircle2"
            }
        ],
        "features": [
            "Asterisk PBX & SIP Trunk integration supporting concurrent inbound/outbound calls",
            "WhatsApp Business API integration with shared conversation context across voice & chat",
            "10-Agent swarm architecture with dedicated agent extensions (1001 to 1010)",
            "Sub-800ms conversational voice response with real-time interruption handling",
            "RAG knowledge base querying product catalogs, return policies & delivery FAQs",
            "Safe & controlled order modification flow with business rule validation",
            "Smart human escalation matrix for cancellations, refunds, and high-risk exceptions",
            "Enterprise CRM, ERP, and payment gateway tool execution with audit trails"
        ],
        "techStack": [
            "Asterisk / FreePBX",
            "SIP / WebRTC",
            "Python",
            "FastAPI",
            "LangGraph",
            "WhatsApp Cloud API",
            "Deepgram",
            "ElevenLabs",
            "PostgreSQL",
            "Redis"
        ],
        "schema": "Inbound Phone Calls (SIP / PBX) & WhatsApp Messaging\n              ↓\nTelephony & Audio Layer (STT → Real-Time Audio Streaming)\n              ↓\nLangGraph Agent Orchestrator (Intent & ID Resolution)\n              ↓\n  ┌───────────┬───────────┬───────────┬───────────┐\n  ↓           ↓           ↓           ↓           ↓\nOrder Agent  Product    Support     Cancel     Human Agents\n(1001-1002) (1003-1004) (1005-1006) (1007-1008)  (Ext 1010)\n  └───────────┴───────────┴───────────┴───────────┘\n              ↓\nSecurity & Business Rules Engine (Permission Checks)\n              ↓\nTool Execution (CRM, ERP, Payments) + Ultra-Fast TTS Output"
    },
    {
        "id": "ai-voice-call-centre-discovery-framework",
        "number": "20",
        "title": "Enterprise AI Voice Call Centre Discovery & Architecture Framework",
        "tagline": "18-dimension consultative discovery, scoping, and production migration roadmap",
        "category": "Voice & Omni-Channel AI",
        "color": "emerald",
        "image": "/projects/20. AI Voice Call Centre Discovery Checklist.png",
        "description": "A battle-tested 18-dimension enterprise discovery framework and scoping blueprint for deploying AI voice call centers—covering business objectives, PBX/SIP topology, speech latencies, multi-agent escalation matrices, RAG knowledge integration, and phased rollout strategies.",
        "workflowType": "consulting-framework",
        "discoveryDimensions": [
            {
                "num": "01",
                "title": "Business Objectives",
                "desc": "Cost reduction, faster response, 24/7 support & sales automation"
            },
            {
                "num": "02",
                "title": "Current Call Process",
                "desc": "Human agent count, peak hours, call durations & escalation rates"
            },
            {
                "num": "03",
                "title": "AI Agent Tasks",
                "desc": "Outbound/inbound calls, order status, bookings & FAQ resolution"
            },
            {
                "num": "04",
                "title": "Interaction Channels",
                "desc": "Phone, WhatsApp Voice/Text, Web Chat & cross-channel handoffs"
            },
            {
                "num": "05",
                "title": "Product Knowledge",
                "desc": "Catalogs, pricing, policies & RAG knowledge base integration"
            },
            {
                "num": "06",
                "title": "Order & CRM Systems",
                "desc": "Integrations with CRM, ERP, E-Commerce & payment gateways"
            },
            {
                "num": "07",
                "title": "Telephony & SIP",
                "desc": "PBX, Asterisk, FreePBX, SIP trunks, IVR & carrier migration"
            },
            {
                "num": "08",
                "title": "Voice AI Experience",
                "desc": "English/Urdu/Multilingual, interruption handling & brand tone"
            },
            {
                "num": "09",
                "title": "Human Escalation",
                "desc": "Low confidence triggers, refund disputes & live agent routing"
            },
            {
                "num": "10",
                "title": "Recording & Analytics",
                "desc": "Call transcripts, sentiment analysis, agent KPI dashboards"
            },
            {
                "num": "11",
                "title": "Security & Privacy",
                "desc": "PII masking, PCI compliance, data residency & audit logging"
            },
            {
                "num": "12",
                "title": "Scale & Latency",
                "desc": "Concurrent call capacity, 24/7 SLA & sub-second speech latency"
            },
            {
                "num": "13",
                "title": "Accuracy & Fallbacks",
                "desc": "Clarification loops, hallucination guards & fallback policies"
            },
            {
                "num": "14",
                "title": "Admin Dashboard",
                "desc": "Knowledge upload, prompt config, live call monitoring & reports"
            },
            {
                "num": "15",
                "title": "Infrastructure",
                "desc": "AWS, Azure, Google Cloud, Private Cloud or on-premise hybrid"
            },
            {
                "num": "16",
                "title": "Phased Rollout",
                "desc": "PoC -> Pilot -> WhatsApp Workflows -> Full Scale Production"
            },
            {
                "num": "17",
                "title": "Success Metrics",
                "desc": "% calls automated, resolution rate, CSAT & cost per interaction"
            },
            {
                "num": "18",
                "title": "Budget & Timeline",
                "desc": "Milestone schedules, SLA commitments & monthly compute budgets"
            }
        ],
        "features": [
            "18-pillar consultative blueprint for scoping enterprise AI call center transformations",
            "Detailed telephony audit covering PBX, SIP trunks, IVR, and carrier integrations",
            "Multi-language voice persona engineering with real-time interruption handling",
            "Multi-tier human escalation matrix with sentiment-triggered transfer protocols",
            "RAG architecture scoping for dynamic product catalogs and enterprise policy docs",
            "Comprehensive compliance checklist covering PII masking, call recording & SOC2",
            "5-stage phased implementation roadmap from initial PoC to enterprise production",
            "Executive interview guide featuring the top 10 most critical client discovery questions"
        ],
        "techStack": [
            "VoIP / SIP",
            "Asterisk",
            "FreePBX",
            "Deepgram",
            "Whisper",
            "ElevenLabs",
            "LangGraph",
            "FastAPI",
            "Python",
            "WebRTC"
        ],
        "schema": "18-Dimension Consultative Discovery Framework\n              ↓\n  ┌───────────────────────┬───────────────────────┐\n  ↓                       ↓                       ↓\nBusiness & Telephony    Voice Experience & RAG   Security & Latency\n(Objectives, PBX, SIP)  (TTS/STT, Interruption)  (PII, Sub-800ms SLA)\n  └───────────────────────┬───────────────────────┘\n              ↓\nMulti-Tier Human Escalation & Failure Clarification Matrices\n              ↓\n5-Stage Phased Rollout Plan (PoC → Pilot → WhatsApp → Scale)\n              ↓\nTarget Metrics Validation (Automation %, CSAT, Unit Cost ROI)"
    },
    {
        "id": "paypilot-ai-autonomous-payroll",
        "number": "21",
        "title": "PayPilot AI - Autonomous Payroll & Account Management Platform",
        "tagline": "Autonomous Payroll & Finance Agent from employee data to verified multi-bank salary dispatching",
        "category": "FinTech AI",
        "color": "cyan",
        "image": "/projects/21. PayPilot AI Autonomous Payroll Platform.png",
        "description": "From employee data to verified salary payment — PayPilot AI autonomously prepares, validates, detects risks, obtains executive authorization, and executes multi-bank salary dispatching with built-in AI anomaly detection, bank-grade encryption, and conversational employee self-service.",
        "workflowType": "autonomous-payroll",
        "workflowSteps": [
            {
                "step": "01",
                "role": "AI Employee Profile Ingestion",
                "action": "Sync employee profiles, biometric attendance, leaves, loans, tax slabs & bank account details",
                "icon": "UserCheck"
            },
            {
                "step": "02",
                "role": "Autonomous Payroll Agent",
                "action": "End-to-end gross-to-net salary calculation, tax deductions, bonuses & allowances computation",
                "icon": "BrainCircuit"
            },
            {
                "step": "03",
                "role": "AI Anomaly & Risk Detection",
                "action": "Detect sudden salary deviations, ghost employee accounts, duplicate records & payroll errors",
                "icon": "AlertTriangle"
            },
            {
                "step": "04",
                "role": "Executive Authorization Gate",
                "action": "Multi-tier executive dashboard review with 1-click cryptographic approval & audit logging",
                "icon": "Lock"
            },
            {
                "step": "05",
                "role": "Smart Salary Dispatching",
                "action": "Direct bulk salary transfer via secure banking APIs (HBL, UBL, Meezan, 1-Link integration)",
                "icon": "Zap"
            },
            {
                "step": "06",
                "role": "Employee Self-Service & AI Bot",
                "action": "Automated WhatsApp payslips, mobile self-service portal, leave requests & conversational AI assistant",
                "icon": "MessageSquare"
            }
        ],
        "features": [
            "AI Employee Account Management: Complete financial profiles, attendance, leaves, loans, tax brackets & deductions",
            "Autonomous Payroll Agent: End-to-end automated payroll calculation with validation, risk audits & approval checkpoints",
            "Smart Salary Dispatching: Multi-bank bulk payment execution with direct API integrations (HBL, UBL, Meezan, 1-Link)",
            "AI Anomaly Detection: Sub-second detection of unusual salary changes, duplicate payments, ghost accounts & fraud",
            "Bank-Grade Enterprise Security: Zero-trust RBAC, multi-factor authentication (MFA), AES-256 encryption & audit logs",
            "Employee Self-Service Portal: Instant payslip downloads, leave management, loan tracking & salary advance requests",
            "AI CFO / HR Assistant Copilot: Natural language query engine ('How much will Ahmed receive?', payroll budget forecasts)",
            "Executive Financial Dashboard: Real-time payroll breakdown (PKR 42.8M), tax distributions, anomaly alerts & cash runway",
            "Agentic Architecture: Specialized collaborative AI agents orchestrating calculations, compliance, banking & notifications",
            "Omni-Channel WhatsApp Automation: Instant payslip delivery, employee query answering & WhatsApp alert integration"
        ],
        "techStack": [
            "Python",
            "FastAPI",
            "LangGraph",
            "Open Banking APIs",
            "PostgreSQL",
            "Redis",
            "WhatsApp Cloud API",
            "React / Next.js",
            "Docker",
            "Tailwind CSS"
        ],
        "schema": "Employee Profile Ingestion (Attendance, Leaves, Loans, Tax Slabs)\n              ↓\nAutonomous Payroll Agent (Gross-to-Net Calculations & Deductions)\n              ↓\nAI Anomaly & Risk Detection (Flag Calculation Errors & Ghost Accounts)\n              ↓\nExecutive Authorization & Multi-Tier Approval Gate\n              ↓\nSmart Salary Dispatching (Direct Bank APIs: HBL, UBL, Meezan, 1-Link)\n              ↓\nEmployee Self-Service Portal & Automated WhatsApp Payslips"
    },
    {
        "id": "ai-payment-gateway-infrastructure",
        "number": "22",
        "title": "AI Payment Gateway & Autonomous Financial Infrastructure",
        "tagline": "Zero-downtime, self-healing, self-developing & autonomous payment operations platform",
        "category": "FinTech AI",
        "color": "blue",
        "image": "/projects/22. AI Payment Gateway Infrastructure.png",
        "description": "An advanced AI-powered payment gateway and autonomous financial operations platform designed for fintechs, banks, SaaS companies, and global marketplaces. Features zero-downtime active-active architecture, autonomous self-developing code agents, sub-50ms AI fraud scoring, and multi-provider intelligent routing.",
        "workflowType": "autonomous-gateway",
        "workflowSteps": [
            {
                "step": "01",
                "role": "Multi-Payment Ingestion",
                "action": "Ingest cards, bank rails, digital wallets, mobile payments, payment links, invoices & subscriptions",
                "icon": "Database"
            },
            {
                "step": "02",
                "role": "AI Fraud & Risk Engine",
                "action": "Sub-50ms behavioral scoring, velocity monitoring, account takeover detection & adaptive fraud rules",
                "icon": "ShieldAlert"
            },
            {
                "step": "03",
                "role": "Multi-Provider Smart Routing",
                "action": "Dynamic transaction routing based on real-time provider availability, processing cost, geography & latency",
                "icon": "Workflow"
            },
            {
                "step": "04",
                "role": "Intelligent Retry & Failover",
                "action": "Automated fallback route switching, circuit breaker protection & zero-loss failure recovery",
                "icon": "Zap"
            },
            {
                "step": "05",
                "role": "Self-Healing AI Payment Engine",
                "action": "Continuously diagnoses infrastructure issues, auto-restarts unhealthy services & shifts traffic seamlessly",
                "icon": "Activity"
            },
            {
                "step": "06",
                "role": "Self-Developing & Self-Updating AI",
                "action": "Autonomous engineering agents handle bug detection, regression test generation & continuous CI/CD rollout",
                "icon": "Code2"
            },
            {
                "step": "07",
                "role": "AI Payment Intelligence & Settlement",
                "action": "Real-time BI telemetry on volume, revenue, success rates, provider performance & autonomous settlement",
                "icon": "BarChart3"
            }
        ],
        "features": [
            "Zero-Downtime Payment Architecture: High-availability active-active multi-region deployment with zero single point of failure",
            "Self-Healing AI Payment Engine: Continuous monitoring, automated infrastructure diagnosis, auto-restarts & load rebalancing",
            "Self-Developing & Self-Updating AI: Autonomous engineering agents handling code analysis, test suites, and CI/CD releases",
            "Multi-Payment Processing: Cards, bank transfers, digital wallets, mobile payments, payment links, subscriptions & payouts",
            "AI Fraud & Risk Engine: Real-time fraud detection, adaptive rule synthesis, velocity checks & suspicious activity scoring",
            "Enterprise Security: End-to-end tokenization, AES-256 encryption, zero-trust RBAC, PCI-DSS, SOC2 & HIPAA readiness",
            "AI Payment Intelligence Dashboard: Real-time telemetry on transaction volume, provider latencies, and conversion rates",
            "Intelligent Retry & Routing: Automatic route switching across acquiring banks on failure to maximize checkout conversion",
            "Cloud-Native Massively Scalable: Kubernetes microservices, Kafka event streams, Redis caching & auto-scaling to millions of txns",
            "Agentic AI Architecture: Specialized swarms for Payment Ops, Fraud Detection, Incident Response, Performance, and Compliance"
        ],
        "techStack": [
            "Python",
            "Go",
            "FastAPI",
            "LangGraph",
            "Kubernetes",
            "Kafka",
            "Redis",
            "PostgreSQL",
            "Prometheus / Grafana",
            "Docker"
        ],
        "schema": "Multi-Payment Ingestion (Cards, Wallets, Bank Rails, Invoices)\n              ↓\nKubernetes API Gateway & Tokenization Security Layer\n              ↓\nAI Fraud & Risk Scoring Engine (Sub-50ms Velocity & Anomaly Checks)\n              ↓\nMulti-Provider Smart Routing (Cost, Latency & Geo-Optimized)\n  ┌───────────────────────┼───────────────────────┐\n  ↓                       ↓                       ↓\nAcquiring Bank Rails    Intelligent Retry &     Self-Healing AI Engine\n(Stripe, Adyen, Banks)  Failover Switching      (Auto-Restart & Rebalance)\n  └───────────────────────┼───────────────────────┘\n              ↓\nSelf-Developing AI Agent (Continuous CI/CD Optimization & Bug Repair)\n              ↓\nReal-Time Payment Intelligence & Autonomous Financial Settlement"
    },
    {
        "id": "propagent-ai-real-estate-platform",
        "number": "23",
        "title": "PropAgent AI — Autonomous AI Sales & Property Discovery Platform for Real Estate",
        "tagline": "Find the Buyer. Understand the Buyer. Match the Property. Close the Deal. — 24/7",
        "category": "Real Estate AI",
        "color": "emerald",
        "image": "/projects/23. PropAgent AI Autonomous Real Estate Platform.png",
        "description": "An autonomous AI sales workforce and property discovery platform that inverts the traditional real estate sales model. Features dual customer acquisition engines (inbound omni-channel instant response & outbound permission-aware social media intent discovery), autonomous voice AI sales agents, Property Intent Graph™ semantic matching, 5-year investment scenario modeling, lifestyle-based consulting, predictive buyer scoring, and seamless human agent handoff CRM.",
        "workflowType": "autonomous-real-estate-sales",
        "workflowSteps": [
            {
                "step": "01",
                "role": "Social Intent & Inbound Radar",
                "action": "Detect buying intent across permitted social posts/comments & handle 24/7 inbound calls, WhatsApp & web inquiries",
                "icon": "Radio"
            },
            {
                "step": "02",
                "role": "Intent Scoring & Qualification",
                "action": "Extract budget, timeline, location, financing & family needs; assign real-time intent score (0-100)",
                "icon": "Target"
            },
            {
                "step": "03",
                "role": "Conversational & Voice Sales Agent",
                "action": "Conduct natural multi-turn sales discovery via ultra-low latency Voice AI phone calls & WhatsApp chat",
                "icon": "Phone"
            },
            {
                "step": "04",
                "role": "Property Intent Graph™",
                "action": "Multi-dimensional buyer modeling linking budget, commute, school proximity, lifestyle & investment horizons",
                "icon": "BrainCircuit"
            },
            {
                "step": "05",
                "role": "Semantic Property Matcher",
                "action": "Query verified property database, live inventory, payment plans & legal documents with zero hallucinations",
                "icon": "Database"
            },
            {
                "step": "06",
                "role": "AI Investment & Lifestyle Advisor",
                "action": "Generate 5-year conservative/base/optimistic projections, rental yields & personalized lifestyle matches",
                "icon": "TrendingUp"
            },
            {
                "step": "07",
                "role": "Automated Viewing & Follow-Up",
                "action": "Schedule site visits, dispatch WhatsApp brochures & execute 10-day compliant nurturing journeys",
                "icon": "Zap"
            },
            {
                "step": "08",
                "role": "CRM Intelligence & Agent Handoff",
                "action": "Equip human closers with 360° buyer dossier, negotiation points & purchase probability for final deal closing",
                "icon": "UserCheck"
            }
        ],
        "dualAcquisitionEngines": [
            {
                "engine": "Engine A — Inbound Omni-Channel Leads",
                "channels": "WhatsApp, Phone Calls, Instagram DMs, Website Chat, Messenger, SMS, Email",
                "behavior": "Instant sub-second response, deep conversational requirement discovery, live inventory lookup, and instant site visit booking."
            },
            {
                "engine": "Engine B — Social Intent Radar (Outbound Discovery)",
                "channels": "Permitted Social Feeds, Public Forums, Buyer Groups, Discussion Boards",
                "behavior": "Identifies publicly expressed buying intent, scores context (Strong / Medium / Investor), and executes permission-aware compliant outreach."
            }
        ],
        "commandCenterMetrics": [
            { "label": "Total Leads Ingested", "val": "1,842", "change": "+24% MoM", "icon": "Users" },
            { "label": "Hot Qualified Buyers", "val": "127", "change": "+32% MoM", "icon": "Target" },
            { "label": "AI Voice / Chat Convs", "val": "463", "change": "+48% MoM", "icon": "Phone" },
            { "label": "Site Visits Scheduled", "val": "38", "change": "+21% MoM", "icon": "CheckCircle2" },
            { "label": "Semantic Property Matches", "val": "621", "change": "+36% MoM", "icon": "BrainCircuit" },
            { "label": "Pipeline Deal Value", "val": "PKR 18.4 Cr", "change": "+42% MoM", "icon": "TrendingUp" }
        ],
        "features": [
            "Dual Acquisition Engines: Inbound multi-channel instant AI response (WhatsApp, Web, Voice, DMs) + Outbound permission-aware social media buyer intent discovery",
            "Autonomous AI Voice Sales Agent: Natural low-latency phone calls answering inquiries, qualifying budgets, explaining listings, and booking site visits 24/7",
            "Property Intent Graph™: Multi-dimensional buyer modeling linking budget, lifestyle, family commute, school proximity, and investment horizons",
            "Semantic AI Property Matching: Multi-vector property matching across school proximity, security, rental yields, price trends, and developer track record",
            "AI Property Investment Advisor: 5-year scenario forecasting (Conservative/Base/Optimistic), rental yields, liquidity metrics, and infrastructure trend analysis",
            "Lifestyle-Based Property Consultant: Consultative discovery tailored to family life stages, commute preferences, amenities, and luxury residential requirements",
            "Predictive Lead Scoring & Purchase Probability: Real-time hot buyer classification (0-100 score) with ML-based closing probability and recommended actions",
            "Controlled RAG & Source-of-Truth DB: Verified property records preventing hallucinations; queries live listings, payment plans, and legal contracts",
            "Intelligent Human Agent Handoff: AI handles 1,000+ top-of-funnel interactions and equips human closers with 360° buyer profiles and objection briefs",
            "Real Estate AI CRM & Autonomous Sales Manager: Integrated lead board, pipeline valuation, daily priority briefings, and auto-scheduled nurturing journeys",
            "Omni-Channel Automated Follow-Up: 10-day personalized re-engagement journeys respecting consent, sending fresh inventory and price adjustments",
            "AI Real Estate Marketing Content Engine: Automated multi-platform generation of luxury listing posts, Reels scripts, YouTube outlines, and email campaigns",
            "Multi-Agent Swarm Orchestration: Specialized swarms for Discovery, Conversation, Voice Sales, Investment Analysis, Scheduling, and Safety/Compliance",
            "Enterprise Security, Consent & Anti-Spam: Strict GDPR/telecom compliance, opt-out management, PII encryption, audit trails, and zero unauthorized scraping",
            "White-Label AI Real Estate OS: Multi-tenant deployment supporting custom developer branding, bespoke voice personas, and dedicated database partitions"
        ],
        "techStack": [
            "Python",
            "FastAPI",
            "Next.js",
            "React",
            "TypeScript",
            "LangGraph",
            "Vector DB (Qdrant / pgvector)",
            "WebRTC / SIP Telephony",
            "Whisper / Cartesia TTS",
            "WhatsApp Cloud API",
            "PostgreSQL",
            "Redis",
            "Docker / Kubernetes"
        ],
        "schema": "Social Media Intent & Permitted Feeds          Inbound Calls, WhatsApp, Web, SMS & DMs\n               │                                                    │\n               ▼                                                    ▼\n   [Engine B: Social Intent Radar]                         [Engine A: Omni-Channel Gate]\n               │                                                    │\n               └──────────────────────────┬─────────────────────────┘\n                                          │\n                                          ▼\n                        [AI Buyer Qualification & Intent Engine]\n                        (Budget, Timeline, Financing, Purpose)\n                                          │\n                                          ▼\n                               [Property Intent Graph™]\n                   (Location + Lifestyle + Family + Investment Goal)\n                                          │\n                  ┌───────────────────────┴───────────────────────┐\n                  ▼                                               ▼\n     [AI Voice & Chat Sales Agent]                  [AI Property Investment Advisor]\n   (24/7 Phone, WhatsApp, Inquiries)               (5-Yr Forecast, Yield, Scenario)\n                  │                                               │\n                  └───────────────────────┬───────────────────────┘\n                                          │\n                                          ▼\n                     [Semantic Property Matcher & RAG Brain]\n                     (Live Property DB, Contracts, Price Data)\n                                          │\n                                          ▼\n                     [Automated Viewing & Follow-Up Journey]\n                                          │\n                                          ▼\n                     [Real Estate AI CRM & Command Center]\n                    (Lead Scoring 0-100 & Hot Buyer Dossier)\n                                          │\n                                          ▼\n               [Human Closer Handoff → Negotiation → Closed Sale]"
    }
];
