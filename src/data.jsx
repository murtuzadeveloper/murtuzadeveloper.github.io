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
    { name: 'Education', icon: <GraduationCap size={18} />, color: 'yellow' },
    { name: 'Experience', icon: <Briefcase size={18} />, color: 'indigo' },
    { name: 'Skills', icon: <Code2 size={18} />, color: 'cyan' },
    { name: 'Services', icon: <Layers size={18} />, color: 'orange' },
    { name: 'Industries', icon: <Globe size={18} />, color: 'emerald' },
    { name: 'AI Solutions', icon: <BrainCircuit size={18} />, color: 'purple' },
    { name: 'Cyber Security', icon: <ShieldAlert size={18} />, color: 'red' },
    { name: 'AI Security', icon: <Lock size={18} />, color: 'rose' }
];

export const contactData = {
    phone: "+923060824762",
    email: "murtuzadeveloper@gmail.com",
    roles: "Mobile Development | Backend Development | Desktop Development | Web Development\nAI & FullStack Developer | Solution Architect | Data Scientist | QA Audit | Cloud Eng | Offensive Cybersecurity Engineer",
    bio: "Results-driven Mobile, Desktop, Web, and Backend Developer with expertise in building enterprise-level native and cross-platform applications. Skilled in delivering intuitive, high-performance interfaces and engineering robust, secure backend systems using Node.js, Django, FastAPI, WebSockets, and Flask. Experienced in designing microservices architectures (SNS, SQS, Kafka) with deep knowledge of gRPC, RESTful, and GraphQL APIs. Proficient in managing databases including MySQL, PostgreSQL, MongoDB, Firebase, Pinecone, Weaviate, and FAISS. Adept at deploying solutions on cloud platforms such as GCP, AWS, Hostinger, and Docker. Strong background in implementing CI/CD pipelines with SonarQube and Gemini to ensure efficient deployment and integration. Contribute to AI-powered solutions by integrating and fine-tuning machine learning models and intelligent SaaS APIs. A lifelong learner who continuously explores emerging technologies to build innovative, scalable, and future-ready applications."
};

export const educationData = {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institution: "Usman Institute of Technology (UIT), Karachi",
    date: "2012 – 2016"
};

export const googleBadges = [
    { title: "Google Maps Platform Innovator", date: "Sept 2025", desc: "Advancing geospatial solutions and Map SDK integration." },
    { title: "Google Cloud Innovator", date: "Aug 2025", desc: "Member of elite cloud architecture feedback group." },
    { title: "Firebase Studio Developer", date: "Aug 2025", desc: "Contributor to the Firebase backend-as-a-service community." },
    { title: "Gemini Code Assist Private Preview", date: "Aug 2025", desc: "Selected for closed beta of Google's AI coding agents." },
    { title: "Android Studio Canary Member", date: "Jun 2023", desc: "Testing and providing feedback on bleeding-edge IDE features." },
    { title: "Android SDK Platform Tools", date: "Sept 2022", desc: "Certified competency in low-level Android debug tools." },
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
        title: "Digital Transformation & Cloud Scaling",
        points: [
            "Cloud Strategy Consulting & Migration Services",
            "Hybrid Deployments & Cloud Management",
            "Hyper scaling Solutions, Security & Compliance",
            "Finance: Secure transaction processing, disaster recovery, scalable loads",
            "Tech & SaaS: Automated scaling, cloud-native tech, DevOps tools",
            "Media: Streaming, CDN optimization, cloud video processing",
            "Energy & Utilities: Smart grid data, predictive analytics"
        ]
    },
    {
        title: "Data Analytics for Business Excellence",
        points: [
            "Data Strategy, BI, Advanced Analytics, Big Data",
            "Data Integration, ETL, Data Governance & Compliance",
            "Healthcare: Optimize workflows, personalized treatments, resource allocation",
            "Finance: Predictive modeling, risk management, visualization dashboards",
            "Retail & eCommerce: Predictive demand forecasting, customer segmentation"
        ]
    },
    {
        title: "Web & App Development",
        points: [
            "Custom Web & Mobile App Development (UI/UX Design)",
            "Healthcare: Telemedicine apps, EHR integration, health monitoring apps",
            "Education: E-learning platforms, virtual classrooms, gamification",
            "Real Estate: Virtual tour apps, real-time property updates",
            "Finance: Mobile banking, secure dashboards, AI advisory tools",
            "Retail: Secure online stores, AR product visualization, payment gateways"
        ]
    }
];

export const industriesData = [
    {
        title: "Banking and Finance",
        desc: "AI Solutions boosting efficiency, fraud protection & personalized insight.",
        details: [
            "Fraud Protection: Real-time monitoring, auto-flagging reducing $72B annual losses",
            "Loan & Credit Scoring: Accelerated approvals from 15+ days, smart assessments",
            "Customer Service: 24/7 AI chatbots, personalized advice boosting revenues by 10-30%",
            "Risk Management: Less manual analysis, automated compliance monitoring",
            "Solutions: xVision (Threat Detection), App Pilot (Avatars), Chat Genie (Dashboards)"
        ]
    },
    {
        title: "Manufacturing",
        desc: "Driving Efficiency & Quality with predictive models.",
        details: [
            "Predictive Maintenance: Detect anomalies, optimize uptime, slash repair costs",
            "Quality Control: Vision systems with 98% accuracy inspecting 5x faster",
            "Intelligent Automation: Faster assembly & logistics, easing labor shortages",
            "Supply Chain: Demand forecasting, resilient agile operations, 30% efficiency gains"
        ]
    },
    {
        title: "Healthcare",
        desc: "Transforming Healthcare with AI for Enhanced Efficiency & Patient Care.",
        details: [
            "Clinical Decision Support: Evidence-based insights reducing diagnostic errors",
            "Patient Engagement: Conversational AI, smart scheduling, wellness guidance",
            "Diagnostics: Computer vision to speed up medical imaging analysis",
            "Operational Efficiency: Automating billing, claims, & compliance tracking"
        ]
    },
    {
        title: "Retail & eCommerce",
        desc: "Enhanced Efficiency & Personalization.",
        details: [
            "Personalized Shopping: 1:1 recommendations boosting order value by 45%",
            "Inventory Optimization: 90% accurate demand forecasting reducing storage costs",
            "Dynamic Pricing: Real-time optimization boosting margins by 15-20%",
            "Fraud Detection: 90% accuracy in detecting payment fraud protecting revenues"
        ]
    }
];

export const aiSolutionsData = [
    {
        title: "Chat Genie",
        subtitle: "AI Driven Data Visualizations for Enterprise Success",
        points: [
            "Dynamic Data Integration and Advanced Query Handling",
            "Analytical Insights Generation and Customizable Dashboards",
            "Operations: Inventory optimization, predictive maintenance",
            "Sales & Finance: Forecasting, risk management, profitability analysis",
            "Marketing & Supply Chain: Campaign tracking, demand analysis"
        ]
    },
    {
        title: "App Pilot",
        subtitle: "AI Powered Knowledge Management via Meta Human Avatars",
        points: [
            "Interactive 3D avatars with contextual understanding",
            "Voice Command capabilities & Data Knowledge Graphs",
            "Legal: Due Diligence, Litigation Support, Contract Management",
            "Instant access to deep enterprise knowledge bases seamlessly"
        ]
    },
    {
        title: "xVision",
        subtitle: "Cutting-Edge Computer Vision & Threat Detection",
        points: [
            "Real-Time Threat Detection & High-Value Client Recognition",
            "Queue Management & Environmental Monitoring",
            "Banking: Suspicious activity detection",
            "Retail & Manufacturing: Shelf monitoring, defect detection, safety tracking"
        ]
    }
];

export const cyberSecurityData = [
    {
        title: "Reveal Vulnerabilities Before They Become Threats",
        desc: "Driving Enterprise Success with Custom Security Solutions: Vulnerability Assessment, Cloud Security, Penetration Testing, Application Security, SOC Services."
    },
    {
        title: "Protection by Industry",
        list: [
            "Fintech: Payment gateway protection, access controls",
            "Healthcare: Securing patient records, ransomware defense",
            "Telecommunications: Safeguarding self-optimizing networks (SONs) & AI systems",
            "Banking & Oil/Gas: Hardening AI models, edge-level anomaly detection"
        ]
    },
    {
        title: "The Journey (Discover, Assess, Control, Report)",
        desc: "From mapping your digital ecosystem and running SAST/DAST testing, to actionable remediation planning, hardening infra, and delivering audit-ready ISO 27001 / SOC 2 reports."
    }
];

export const aiSecurityData = [
    {
        title: "Building Trust in AI",
        desc: "AI Will Shape The World, Security Will Shape AI. Providing AI Red Teaming, Security Audits, and AI SOC."
    },
    {
        title: "Defending AI Systems",
        list: [
            "LLM-Based Chatbot Hardening: Mitigating prompt injection, context corruption, jailbreak",
            "AI Red Teaming (CCTV ML): Evasion and adversarial input validation",
            "AI SOC Integration: Real-time detection of data exfiltration or malicious prompts"
        ]
    },
    {
        title: "The Security Journey",
        desc: "Inventorying inference APIs, assessing prompt handling, RAG poisoning, enforcing input sanitization, PII redaction, and compliance tracking (ISO 42001, NIST AI RMF)."
    }
];
