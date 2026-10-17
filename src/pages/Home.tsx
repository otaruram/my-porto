import { ExternalLink, Github, Code2, Shield, Rocket, Mail, Linkedin, FileText, Download, Award, Database, Cpu, Sparkles, Terminal, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";

const Home = () => {
  const pdfUrl = "/cv/OKI_TARUNA_RAMADHAN_FlowCV_Resume_2026-10-17-1.pdf";

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center justify-center section-padding relative overflow-hidden bg-white">
        {/* Subtle geometric grid background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"></div>

        <div className="container-custom text-center space-y-8 animate-fade-up relative z-10 max-w-4xl pt-4">
          {/* Titles */}
          <div className="space-y-4">
            <h2 className="text-xs md:text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">
              Oki Taruna Ramadhan
            </h2>
            <h1 className="hero-title text-zinc-950 font-extrabold">
              Supply Chain Operation <br className="hidden sm:block" />
              <span className="text-zinc-600">& IT Specialist</span>
            </h1>
            <p className="text-sm md:text-base font-semibold text-zinc-600 tracking-wide uppercase">
              Generative AI Pipelines • Agentic Workflows • Enterprise Systems Optimization
            </p>
          </div>

          {/* Narrative aligned with CV */}
          <p className="text-base md:text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed font-normal">
            Final year Information Systems student with extensive experience in architecting <strong>Generative AI pipelines</strong>, <strong>Agentic workflows</strong>, and intelligent automation systems. Combining <strong>7+ years of operational systems optimization at PT Dirgantara Indonesia (Indonesian Aerospace)</strong> with production-grade AI engineering (Multimodal RAG, LLMOps, IndoBERT, Claude 3.5, Gemini, Azure AI Services, and pgvector).
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3.5 justify-center items-stretch sm:items-center pt-4 max-w-xl mx-auto">
            <Link
              to="/cv"
              className="w-full sm:w-auto px-6 sm:px-7 py-3.5 bg-zinc-950 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-all text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Review Curriculum Vitae</span>
            </Link>

            <a
              href={pdfUrl}
              download="OKI_TARUNA_RAMADHAN_Resume.pdf"
              className="w-full sm:w-auto px-5 sm:px-6 py-3.5 bg-white border border-zinc-300 text-zinc-900 rounded-xl font-semibold hover:bg-zinc-50 hover:border-zinc-400 transition-all text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 shadow-2xs"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF CV</span>
            </a>

            <a
              href="mailto:okitarunaramadhan@gmail.com"
              className="w-full sm:w-auto px-5 sm:px-6 py-3.5 bg-zinc-100 text-zinc-800 rounded-xl font-semibold hover:bg-zinc-200 transition-all text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-8 sm:pt-10 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 max-w-3xl mx-auto text-left">
            <div className="p-3.5 sm:p-4 bg-zinc-50 border border-zinc-200/80 rounded-xl">
              <span className="text-xl sm:text-2xl font-black text-zinc-950 block">7+ Yrs</span>
              <span className="text-[11px] sm:text-xs text-zinc-600 font-medium">Operations at PT Dirgantara</span>
            </div>
            <div className="p-3.5 sm:p-4 bg-zinc-50 border border-zinc-200/80 rounded-xl">
              <span className="text-xl sm:text-2xl font-black text-zinc-950 block">30+</span>
              <span className="text-[11px] sm:text-xs text-zinc-600 font-medium">Mentees at Dicoding Indonesia</span>
            </div>
            <div className="p-3.5 sm:p-4 bg-zinc-50 border border-zinc-200/80 rounded-xl">
              <span className="text-xl sm:text-2xl font-black text-zinc-950 block">Top 15</span>
              <span className="text-[11px] sm:text-xs text-zinc-600 font-medium">BNI Spark Hackathon 2026</span>
            </div>
            <div className="p-3.5 sm:p-4 bg-zinc-50 border border-zinc-200/80 rounded-xl">
              <span className="text-xl sm:text-2xl font-black text-zinc-950 block">5+</span>
              <span className="text-[11px] sm:text-xs text-zinc-600 font-medium">National Honors & Awards</span>
            </div>
          </div>
        </div>
      </section>

      {/* CV Callout Spotlight Section */}
      <section className="section-light section-padding">
        <div className="container-custom max-w-5xl">
          <div className="bg-white border-2 border-zinc-900/10 rounded-2xl p-5 sm:p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 rounded-full text-zinc-900 text-xs font-bold uppercase tracking-wider">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Curriculum Vitae Attached</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950 tracking-tight">
                  Review Official Resume & Professional Track Record
                </h2>
                <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                  The official CV outlines operational workflows at PT DIRGANTARA INDONESIA, technical mentoring at Dicoding Indonesia (IBM SkillsBuild & DBS Foundation programs), featured AI systems (Oziktag, OtaruChain, OzikSustain), and national hackathon achievements.
                </p>
                <div className="flex flex-wrap gap-2 pt-1 text-xs text-zinc-500 font-medium">
                  <span className="px-2.5 py-1 bg-zinc-100 rounded-md">Format: PDF (2 Pages)</span>
                  <span className="px-2.5 py-1 bg-zinc-100 rounded-md">Size: 94.5 KB</span>
                  <span className="px-2.5 py-1 bg-zinc-100 rounded-md">Updated: 2026</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
                <Link
                  to="/cv"
                  className="px-6 py-3.5 bg-zinc-950 text-white font-semibold text-sm rounded-xl hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Open CV Page</span>
                </Link>
                <a
                  href={pdfUrl}
                  download="OKI_TARUNA_RAMADHAN_Resume.pdf"
                  className="px-6 py-3.5 bg-white border border-zinc-300 text-zinc-900 font-semibold text-sm rounded-xl hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies & Technical Skills (Direct from CV) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center space-y-3 mb-14">
            <h2 className="section-title text-zinc-950">Core Competencies & Technical Skills</h2>
            <p className="text-zinc-600 text-sm md:text-base max-w-2xl mx-auto">
              Bridging deep operational rigor with modern AI architectures as summarized in the official CV.
            </p>
          </div>

          <div className="bento-grid">
            {/* AI & Machine Learning */}
            <div className="bento-card">
              <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center mb-5 border border-zinc-200">
                <Sparkles className="w-5 h-5 text-zinc-950" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">AI & Machine Learning</h3>
              <p className="text-xs md:text-sm text-zinc-600 mb-5 leading-relaxed">
                Generative AI, Agentic AI, LLMOps, Multimodal RAG, Fine-Tuned NLP (IndoBERT), Computer Vision, Multimodal Models, Prompt Engineering & Chaining, Prompt Flow.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Generative AI", "Agentic AI", "Multimodal RAG", "IndoBERT", "LLMOps"].map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Programming & Cloud */}
            <div className="bento-card">
              <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center mb-5 border border-zinc-200">
                <Terminal className="w-5 h-5 text-zinc-950" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">Programming & Cloud</h3>
              <p className="text-xs md:text-sm text-zinc-600 mb-5 leading-relaxed">
                Python, Microsoft Azure (Azure OpenAI / Cognitive Services), Docker, RESTful APIs, Next.js, Go. Scalable deployments and microservices.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["Python", "Azure OpenAI", "Docker", "RESTful APIs", "Next.js", "Go"].map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Databases, Vector & Architecture */}
            <div className="bento-card">
              <div className="w-10 h-10 bg-zinc-100 rounded-xl flex items-center justify-center mb-5 border border-zinc-200">
                <Database className="w-5 h-5 text-zinc-950" />
              </div>
              <h3 className="text-lg font-bold text-zinc-950 mb-2">Databases & Architecture</h3>
              <p className="text-xs md:text-sm text-zinc-600 mb-5 leading-relaxed">
                PostgreSQL, pgvector, Supabase, Prisma, SQL (Query Optimization & Validation), Human-in-the-Loop (HITL), Cryptographic Integrity (HMAC-SHA256), SDLC Agile.
              </p>
              <div className="flex flex-wrap gap-1.5">
                {["pgvector", "PostgreSQL", "Supabase", "HITL", "SHA-256", "SDLC"].map((tech) => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects (Direct from CV) */}
      <section className="section-light section-padding" id="projects">
        <div className="container-custom space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <h2 className="section-title text-zinc-950">Relevant Projects (Portfolio)</h2>
              <p className="text-zinc-600 text-sm md:text-base max-w-2xl">
                Production-ready AI systems and software architectures documented in the official CV.
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-zinc-900 hover:text-zinc-600 transition-colors"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {/* Project 1: Oziktag */}
            <div className="bg-white border border-zinc-200/90 rounded-2xl p-7 md:p-9 hover:border-zinc-400 hover:shadow-[0_8px_25px_rgba(0,0,0,0.05)] transition-all">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 space-y-3">
                  <div className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-900 rounded-md text-xs font-bold uppercase tracking-wider">
                    Top 15 BNI Spark Hackathon
                  </div>
                  <h3 className="text-2xl font-extrabold text-zinc-950">Oziktag</h3>
                  <p className="text-sm font-semibold text-zinc-600">
                    Supply Chain Visual QC & Digital Trust Platform
                  </p>
                  <a
                    href="https://www.oziktag.my.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 hover:underline pt-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>www.oziktag.my.id</span>
                  </a>
                </div>

                <div className="md:w-2/3 space-y-4">
                  <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-zinc-700 leading-relaxed">
                    <li>
                      Designed an AI visual verification system integrating <strong>Multimodal RAG</strong> and <strong>Computer Vision</strong> to automate package damage inspection and eliminate transit dispute claims by up to 95%.
                    </li>
                    <li>
                      Built an automated <strong>Agentic decision loop</strong> analyzing package condition snapshots in real time, generating contextual quality summaries, and triggering dynamic escrow releases via API integrations.
                    </li>
                    <li>
                      Awarded <strong>Top 15 Finalist at BNI Spark Hackathon 2026</strong> for innovative middleware architecture combining AI visual inspection and dynamic digital trust seals.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-100">
                    {["Multimodal RAG", "Computer Vision", "Agentic Decision Loop", "Escrow API", "BNI Hackathon 2026"].map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: OtaruChain */}
            <div className="bg-white border border-zinc-200/90 rounded-2xl p-7 md:p-9 hover:border-zinc-400 hover:shadow-[0_8px_25px_rgba(0,0,0,0.05)] transition-all">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 space-y-3">
                  <div className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-900 rounded-md text-xs font-bold uppercase tracking-wider">
                    Finalist BRIN & BI Semifinalist
                  </div>
                  <h3 className="text-2xl font-extrabold text-zinc-950">OtaruChain</h3>
                  <p className="text-sm font-semibold text-zinc-600">
                    Multimodal Document Intelligence & Transparent Credit Scoring API
                  </p>
                  <a
                    href="https://otaruchain.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-900 hover:underline pt-2"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>otaruchain.id</span>
                  </a>
                </div>

                <div className="md:w-2/3 space-y-4">
                  <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-zinc-700 leading-relaxed">
                    <li>
                      Engineered an automated financial document extraction pipeline using <strong>Gemini 2.5 Flash</strong> to extract receipt text and detect visual fraud anomalies (mark-ups, counterfeit claims) with real-time screening.
                    </li>
                    <li>
                      Implemented an interpretable Adaptive Credit Scoring Engine powered by <strong>Logistic Regression</strong> and <strong>Human-in-the-Loop (HITL)</strong> validation, outputting auditable Trust Grades for liquidity risk mitigation.
                    </li>
                    <li>
                      Architected a microservices backend featuring a Telegram Bot interface, privacy-preserving Phone Whitelist (<strong>UU PDP compliance</strong>), and tamper-evident data logging via Supa Ledger (PostgreSQL & SHA-256).
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-100">
                    {["Gemini 2.5 Flash", "HITL Scoring", "PostgreSQL", "SHA-256", "UU PDP", "BRIN Aidenation"].map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3: OzikSustain */}
            <div className="bg-white border border-zinc-200/90 rounded-2xl p-7 md:p-9 hover:border-zinc-400 hover:shadow-[0_8px_25px_rgba(0,0,0,0.05)] transition-all">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 space-y-3">
                  <div className="inline-block px-2.5 py-1 bg-zinc-100 text-zinc-900 rounded-md text-xs font-bold uppercase tracking-wider">
                    Semifinalist PLN SustainAction
                  </div>
                  <h3 className="text-2xl font-extrabold text-zinc-950">OzikSustain</h3>
                  <p className="text-sm font-semibold text-zinc-600">
                    AI-Powered ESG Compliance & Regulatory Assessment Engine
                  </p>
                </div>

                <div className="md:w-2/3 space-y-4">
                  <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-zinc-700 leading-relaxed">
                    <li>
                      Architected a hybrid Generative AI assessment pipeline combining fine-tuned <strong>IndoBERT embeddings</strong> and <strong>Claude 3.5 Sonnet</strong> for automated regulatory document mapping and multi-pillar ESG compliance scoring.
                    </li>
                    <li>
                      Engineered an Agentic retrieval pipeline utilizing <strong>Supabase pgvector</strong> and semantic legal APIs (Pasal.id), achieving {"<"}24-hour turnaround and reducing legacy audit costs by 85%.
                    </li>
                    <li>
                      Implemented automated PII redaction and cryptographic HMAC-SHA256 audit logging to guarantee zero data leakage and prevent greenwashing across enterprise procurement workflows.
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-zinc-100">
                    {["IndoBERT", "Claude 3.5 Sonnet", "Supabase pgvector", "HMAC-SHA256", "ESG Scoring"].map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience (From CV) */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Experience Column */}
            <div className="space-y-8">
              <div className="border-b border-zinc-200 pb-3">
                <h2 className="text-2xl font-extrabold text-zinc-950 tracking-tight">Professional Experience</h2>
                <p className="text-xs text-zinc-500 mt-1">Directly documented from the official Curriculum Vitae</p>
              </div>

              <div className="space-y-8 relative pl-6 border-l-2 border-zinc-200">
                {/* Dicoding */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 border-white ring-2 ring-zinc-200"></div>
                  <span className="text-xs font-bold text-zinc-500 tracking-wider block mb-1">05/2026 – 10/2026 • BANDUNG</span>
                  <h3 className="text-lg font-bold text-zinc-950">AI & Technical Mentor</h3>
                  <p className="text-sm font-semibold text-zinc-700 mb-2">Dicoding Indonesia</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Mentored 30+ developers and tech professionals under IBM SkillsBuild & DBS Foundation programs in Python backend logic, predictive analytics, and machine learning architecture. Conducted technical code reviews on model training workflows, API integrations, and cloud deployments.
                  </p>
                </div>

                {/* PT Dirgantara Indonesia */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 border-white ring-2 ring-zinc-200"></div>
                  <span className="text-xs font-bold text-zinc-500 tracking-wider block mb-1">02/2019 – PRESENT • BANDUNG, INDONESIA</span>
                  <h3 className="text-lg font-bold text-zinc-950">Supply Chain Operations Administrator</h3>
                  <p className="text-sm font-semibold text-zinc-700 mb-2">PT DIRGANTARA INDONESIA (Indonesian Aerospace)</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Mapped and standardized end-to-end operational workflows, collaborating with cross-functional stakeholders to define business requirements (BRD) and functional specifications for internal inventory systems. Utilized SQL (DML commands: SELECT, INSERT, UPDATE) to validate operational database records, perform data reconciliations, and mitigate reporting errors by ~20%. Facilitated full-cycle software development implementation (SDLC), actively coordinating System Integration Testing (SIT) and supporting User Acceptance Testing (UAT) with operational end-users to ensure solution readiness.
                  </p>
                </div>

                {/* Fydemy */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 border-white ring-2 ring-zinc-200"></div>
                  <span className="text-xs font-bold text-zinc-500 tracking-wider block mb-1">01/2026 – 09/2026 • SINGAPORE</span>
                  <h3 className="text-lg font-bold text-zinc-950">Community Lead & Technical Contributor</h3>
                  <p className="text-sm font-semibold text-zinc-700 mb-2">Fydemy</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Developed Python-based data automation scripts and mentored technical talents on workflow efficiency and API integrations.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Honors Column */}
            <div className="space-y-8">
              {/* Education */}
              <div className="space-y-6">
                <div className="border-b border-zinc-200 pb-3">
                  <h2 className="text-2xl font-extrabold text-zinc-950 tracking-tight">Education & Training</h2>
                  <p className="text-xs text-zinc-500 mt-1">Academic degree & professional certifications</p>
                </div>

                <div className="space-y-4">
                  <div className="p-5 bg-zinc-50 border border-zinc-200/80 rounded-xl space-y-1">
                    <span className="text-xs font-bold text-zinc-500">2023 – PRESENT • BANDUNG</span>
                    <h3 className="text-base font-bold text-zinc-950">Bachelor of Science (B.S.) in Information Systems (Final Year Student)</h3>
                    <p className="text-sm text-zinc-700 font-medium">Universitas Terbuka</p>
                    <p className="text-xs text-zinc-500 pt-1">
                      Relevant Coursework: Systems Analysis & Design, Database Management Systems, Data Networks.
                    </p>
                  </div>

                  <div className="p-5 bg-zinc-50 border border-zinc-200/80 rounded-xl space-y-1">
                    <span className="text-xs font-bold text-zinc-500">ONLINE ACADEMY</span>
                    <h3 className="text-base font-bold text-zinc-950">Machine Learning & Data Developer Learning Path</h3>
                    <p className="text-sm text-zinc-700 font-medium">Dicoding Indonesia</p>
                    <p className="text-xs text-zinc-500 pt-1">
                      Focus: Predictive Analytics, Data Processing (Python), & Applied System Architecture.
                    </p>
                  </div>
                </div>
              </div>

              {/* Honors & Competitions */}
              <div className="space-y-6">
                <div className="border-b border-zinc-200 pb-3">
                  <h2 className="text-2xl font-extrabold text-zinc-950 tracking-tight">Honors & Competitions</h2>
                  <p className="text-xs text-zinc-500 mt-1">Hackathons & AI innovation accolades</p>
                </div>

                <div className="space-y-2.5">
                  {[
                    { label: "Finalist", event: "BRIN Aidenation (OtaruChain Project)", desc: "AI Document Intelligence & Risk Engine" },
                    { label: "Semifinalist", event: "Bank Indonesia Innovation Competition", desc: "OtaruChain Project (Multimodal Document Intelligence & Transparent Credit Scoring API)" },
                    { label: "Top 15", event: "BNI Spark Hackathon 2026 (Oziktag Project)", desc: "Visual QC & Digital Supply Chain Platform" },
                    { label: "Top 11", event: "ZTE X ITB - OzikNTN Project", desc: "Cold-Chain Supply Chain Platform for 3T Regions" },
                    { label: "Semifinalist", event: "PLN SustainAction - OzikSustain Project", desc: "Smart Energy & Sustainability Management Platform" },
                  ].map((honor, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-zinc-50 border border-zinc-200/70 rounded-lg">
                      <Award className="w-4 h-4 text-zinc-900 mt-0.5 shrink-0" />
                      <div className="text-xs">
                        <span className="font-bold text-zinc-950 mr-1.5">{honor.label}:</span>
                        <span className="font-medium text-zinc-800">{honor.event}</span>
                        <span className="block text-zinc-500 mt-0.5">{honor.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-zinc-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Logo size={34} variant="dark" />
              <div className="text-left">
                <span className="font-bold text-sm text-zinc-950 block">Oki Taruna Ramadhan</span>
                <span className="text-xs text-zinc-500">Supply Chain Operation & IT Specialist</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center md:justify-end items-center gap-2.5 sm:gap-3">
              <Link
                to="/cv"
                className="px-4 py-2 bg-zinc-950 text-white rounded-lg text-xs font-semibold hover:bg-zinc-800 transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View CV</span>
              </Link>
              <a
                href={pdfUrl}
                download="OKI_TARUNA_RAMADHAN_Resume.pdf"
                className="px-4 py-2 bg-zinc-100 text-zinc-900 rounded-lg text-xs font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-1.5 border border-zinc-200"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
              <a
                href="mailto:okitarunaramadhan@gmail.com"
                className="p-2 text-zinc-600 hover:text-zinc-950 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/otaruram"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-600 hover:text-zinc-950 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/otaruram"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-zinc-600 hover:text-zinc-950 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-100 text-center md:text-left text-xs text-zinc-500 flex flex-col md:flex-row justify-between gap-2">
            <span>© {new Date().getFullYear()} Oki Taruna Ramadhan. All rights reserved.</span>
            <span>Curriculum Vitae & Official Portfolio</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
