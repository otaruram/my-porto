import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Download, 
  FileText, 
  ExternalLink, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Terminal, 
  Cpu, 
  Database, 
  Layers, 
  Award, 
  Briefcase, 
  ChevronRight, 
  Mail, 
  Linkedin, 
  Github, 
  Copy, 
  Check, 
  Sparkles,
  Sliders,
  Scale
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { useHallmarkTheme, HALLMARK_THEMES, HallmarkTheme } from "@/context/ThemeContext";

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { theme, setTheme, currentThemeMeta } = useHallmarkTheme();

  const pdfUrl = "/cv/OKI_TARUNA_RAMADHAN_FlowCV_Resume_2026-10-17-1.pdf";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("okitarunaramadhan@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const systems = [
    {
      id: "SYS-01",
      title: "Oziktag",
      domain: "Supply Chain QC & Escrow Trust",
      award: "Top 15 Finalist at BNI Spark Hackathon 2026",
      url: "https://www.oziktag.my.id",
      stack: ["Multimodal RAG", "Computer Vision", "Agentic Escrow Loop", "FastAPI", "Digital Trust Seals"],
      problem: "E-commerce & supply chain logistics operators suffer frequent transit disputes and costly chargebacks due to the absence of verifiable visual proof during cargo transit handoffs.",
      solution: "Engineered an AI visual verification system integrating Multimodal RAG with Computer Vision to automate package damage inspection and eliminate transit dispute claims by up to 95%. Implemented an Agentic decision loop that evaluates condition snapshots in real time, generates contextual quality summaries, and triggers dynamic escrow releases via banking APIs.",
      metrics: ["Dispute reduction: ~95%", "Latency: Real-time visual evaluation", "Honors: Top 15 Finalist BNI Spark 2026"],
    },
    {
      id: "SYS-02",
      title: "OtaruChain",
      domain: "Financial Document Intelligence & Scoring",
      award: "Finalist BRIN Aidenation 2026 • Semifinalist Bank Indonesia Innovation",
      url: "https://otaruchain.id",
      stack: ["Gemini 2.5 Flash", "Logistic Regression", "Human-in-the-Loop", "PostgreSQL", "SHA-256", "UU PDP"],
      problem: "Traditional invoice auditing and SME credit underwriting suffer from counterfeit receipts, manual validation latency, and lack of tamper-evident audit trails.",
      solution: "Engineered an automated financial document extraction pipeline using Gemini 2.5 Flash to extract tabular receipts and detect visual fraud anomalies in real time. Deployed an interpretable Adaptive Credit Scoring Engine combining Logistic Regression and Human-in-the-Loop (HITL) checkpoints. Enforces cryptographic data integrity via Supa Ledger (PostgreSQL & SHA-256) and strict UU PDP compliance.",
      metrics: ["Interpretable Trust Grades", "Full UU PDP Privacy Compliance", "Finalist BRIN & Semifinalist BI"],
    },
    {
      id: "SYS-03",
      title: "OzikSustain",
      domain: "AI ESG Compliance & Legal Reasoning",
      award: "Finalist DeveloperDay.id 2026 • Semifinalist PLN SustainAction",
      url: "#",
      stack: ["IndoBERT Embeddings", "Claude 3.5 Sonnet", "Supabase pgvector", "Pasal.id Legal API", "HMAC-SHA256"],
      problem: "Enterprise ESG compliance assessments require hundreds of manual hours, are prone to greenwashing, and cost tens of thousands of dollars per audit cycle.",
      solution: "Architected a hybrid Generative AI assessment pipeline pairing fine-tuned IndoBERT embeddings with Claude 3.5 Sonnet for automated regulatory document mapping and multi-pillar ESG compliance scoring. Integrated semantic legal retrieval via Supabase pgvector and Pasal.id API, reducing turnaround time from weeks to under 24 hours while cutting legacy audit costs by 85%.",
      metrics: ["Turnaround: < 24 Hours", "Audit cost reduction: 85%", "Audit log integrity: HMAC-SHA256"],
    },
  ];

  const operationalChronology = [
    {
      role: "Supply Chain Operations Administrator",
      organization: "PT DIRGANTARA INDONESIA (Indonesian Aerospace)",
      period: "02/2019 – PRESENT",
      location: "Bandung, Indonesia",
      scope: "Aerospace Logistics & Operational Systems Optimization",
      points: [
        "Mapped and standardized end-to-end operational workflows, collaborating with cross-functional stakeholders to formulate Business Requirement Documents (BRD) and functional specifications for enterprise inventory systems.",
        "Utilized SQL (DML commands: SELECT, INSERT, UPDATE) to validate operational database records, perform multi-tier data reconciliations, and mitigate reporting errors by ~20%.",
        "Facilitated full-cycle software development implementation (SDLC), actively coordinating System Integration Testing (SIT) and supporting User Acceptance Testing (UAT) with operational personnel to guarantee solution readiness.",
      ],
    },
    {
      role: "AI & Technical Mentor",
      organization: "Dicoding Indonesia (IBM SkillsBuild & DBS Foundation)",
      period: "05/2026 – 10/2026",
      location: "Bandung, Indonesia",
      scope: "Applied Machine Learning & Backend Architecture Mentorship",
      points: [
        "Mentored 30+ developers and tech professionals under IBM SkillsBuild & DBS Foundation programs in Python backend logic, predictive analytics, and machine learning architecture.",
        "Conducted in-depth technical code reviews on model training workflows, RESTful API integrations, and cloud deployment pipelines.",
      ],
    },
    {
      role: "Community Lead & Technical Contributor",
      organization: "Fydemy",
      period: "01/2026 – 09/2026",
      location: "Singapore (Remote)",
      scope: "Data Automation Scripts & Developer Community Guidance",
      points: [
        "Developed Python-based data automation scripts and mentored technical talents on workflow efficiency and API integrations.",
      ],
    },
  ];

  const competitionHonors = [
    {
      rank: "National Finalist",
      competition: "DeveloperDay.id 2026",
      project: "OzikSustain Project",
      focus: "AI-Powered ESG Compliance & Regulatory Assessment Engine",
    },
    {
      rank: "Top 15 Finalist",
      competition: "BNI Spark Hackathon 2026",
      project: "Oziktag Project",
      focus: "AI Visual QC & Dynamic Digital Trust Escrow Platform",
    },
    {
      rank: "National Finalist",
      competition: "BRIN Aidenation 2026",
      project: "OtaruChain Project",
      focus: "Multimodal AI Document Intelligence & Risk Engine",
    },
    {
      rank: "National Semifinalist",
      competition: "Bank Indonesia Innovation Competition",
      project: "OtaruChain Project",
      focus: "Transparent Credit Scoring API & UU PDP Privacy",
    },
    {
      rank: "Top 11 Finalist",
      competition: "ZTE × ITB Innovation Competition",
      project: "OzikNTN Project",
      focus: "Cold-Chain Supply Chain IoT via Non-Terrestrial Networks (NTN)",
    },
    {
      rank: "National Semifinalist",
      competition: "PLN SustainAction 2026",
      project: "OzikSustain Project",
      focus: "AI-Powered ESG Compliance & Regulatory Assessment Engine",
    },
  ];

  return (
    <div className="w-full">
      {/* SECTION 1: EDITORIAL HERO MASTHEAD */}
      <section className="relative border-b border-border py-16 sm:py-24 lg:py-28 overflow-hidden hallmark-grid-bg">
        <div className="hallmark-container relative z-10 space-y-10">
          {/* Top Architectural Specification Badge */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="hallmark-tag font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              <span>SYS_SPEC // OTR-2026</span>
            </span>
            <span className="hallmark-tag font-mono">
              DOMAIN: AI ARCHITECT × SUPPLY CHAIN
            </span>
            <span className="hallmark-tag font-mono hidden md:inline-flex">
              7+ YRS PT DIRGANTARA INDONESIA
            </span>
          </div>

          {/* Master Headline (Hallmark signature font pairing: bold grotesque + editorial italic serif) */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="hallmark-hero-headline font-sans font-extrabold text-foreground tracking-tight">
              Bridging <span className="font-serif italic font-normal">Aerospace Rigor</span> <br />
              with Production <span className="font-serif italic font-normal">Generative AI</span>.
            </h1>

            <p className="font-mono text-xs sm:text-sm text-muted-foreground uppercase tracking-wider pt-1">
              Supply Chain Operations Administrator • Generative AI & Agentic Systems Developer
            </p>
          </div>

          {/* Master Bio Paragraph */}
          <div className="max-w-3xl space-y-4 text-base sm:text-lg text-foreground/85 leading-relaxed font-normal">
            <p>
              Final year Information Systems student at Universitas Terbuka, coupling{" "}
              <strong className="font-semibold text-foreground">
                7+ years of operational systems optimization at PT Dirgantara Indonesia (Indonesian Aerospace)
              </strong>{" "}
              with production-grade AI engineering.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Specialized in architecting verifiable, anti-slop architectures: Multimodal RAG pipelines, Agentic decision loops, pgvector semantic retrieval, fine-tuned IndoBERT embeddings, and cryptographically auditable ledgers (SHA-256).
            </p>
          </div>

          {/* Hallmark Action Matrix */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/cv"
              className="px-5 py-3 rounded-md bg-primary text-primary-foreground font-mono text-xs sm:text-sm font-semibold hover:opacity-90 transition-all flex items-center gap-2 shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Review Verified CV Document</span>
            </Link>

            <a
              href={pdfUrl}
              download="OKI_TARUNA_RAMADHAN_Resume.pdf"
              className="px-5 py-3 rounded-md border border-border bg-card text-foreground font-mono text-xs sm:text-sm font-medium hover:bg-secondary transition-all flex items-center gap-2 shadow-2xs"
            >
              <Download className="w-4 h-4" />
              <span>Download Official PDF</span>
              <span className="text-[11px] text-muted-foreground">[94.5 KB]</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-4 py-3 rounded-md border border-border bg-card text-foreground font-mono text-xs sm:text-sm font-medium hover:bg-secondary transition-all flex items-center gap-2 cursor-pointer"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Mail className="w-4 h-4" />}
              <span>{copiedEmail ? "Email Copied!" : "Copy Email Address"}</span>
            </button>
          </div>

          {/* Verified Engineering Spec Strip */}
          <div className="pt-6 border-t border-border/80 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-md border border-border bg-card">
              <span className="font-mono text-[10px] uppercase text-muted-foreground block">
                [EXPERIENCE METRIC]
              </span>
              <span className="font-serif text-3xl sm:text-4xl font-normal text-foreground block mt-1">
                7+ Years
              </span>
              <span className="text-xs text-muted-foreground mt-0.5 block">
                Aerospace Supply Chain Systems at PT Dirgantara Indonesia
              </span>
            </div>

            <div className="p-4 rounded-md border border-border bg-card">
              <span className="font-mono text-[10px] uppercase text-muted-foreground block">
                [HACKATHON ACCREDITATION]
              </span>
              <span className="font-serif text-3xl sm:text-4xl font-normal text-foreground block mt-1">
                Top 15
              </span>
              <span className="text-xs text-muted-foreground mt-0.5 block">
                BNI Spark Hackathon 2026 (Oziktag Visual QC Platform)
              </span>
            </div>

            <div className="p-4 rounded-md border border-border bg-card">
              <span className="font-mono text-[10px] uppercase text-muted-foreground block">
                [TECHNICAL MENTORSHIP]
              </span>
              <span className="font-serif text-3xl sm:text-4xl font-normal text-foreground block mt-1">
                30+ Mentees
              </span>
              <span className="text-xs text-muted-foreground mt-0.5 block">
                IBM SkillsBuild & DBS Foundation via Dicoding Indonesia
              </span>
            </div>

            <div className="p-4 rounded-md border border-border bg-card">
              <span className="font-mono text-[10px] uppercase text-muted-foreground block">
                [NATIONAL RECOGNITION]
              </span>
              <span className="font-serif text-3xl sm:text-4xl font-normal text-foreground block mt-1">
                6 Honors
              </span>
              <span className="text-xs text-muted-foreground mt-0.5 block">
                DeveloperDay.id, BRIN, Bank Indonesia, BNI, ZTE × ITB, PLN
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: HALLMARK ANTI-SLOP PHILOSOPHY & QUALITY FLOOR */}
      <section className="py-16 sm:py-20 border-b border-border bg-secondary/30">
        <div className="hallmark-container space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/80 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="hallmark-seal">THE FLOOR // QUALITY STANDARD</span>
                <span className="text-xs font-mono text-muted-foreground">REF: usehallmark.com</span>
              </div>
              <h2 className="hallmark-section-headline font-serif text-foreground font-normal">
                Anti-Slop Engineering Principles
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md font-mono">
              In an era inundated with superficial AI wrappers and ungrounded demos, production systems demand aerospace-grade rigor and tamper-evident auditability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="hallmark-card space-y-3">
              <div className="w-8 h-8 rounded border border-border bg-secondary flex items-center justify-center font-mono text-xs font-bold">
                01
              </div>
              <h3 className="font-bold text-base text-foreground font-sans">
                Aerospace-Grade Rigor
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Seven years of operational compliance at PT Dirgantara Indonesia translates into zero tolerance for ungrounded hallucination. Every automated decision loop includes deterministic fallback paths and rigorous verification.
              </p>
              <div className="pt-2 font-mono text-[11px] text-foreground/80 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Deterministic SDLC & SIT/UAT Validation</span>
              </div>
            </div>

            <div className="hallmark-card space-y-3">
              <div className="w-8 h-8 rounded border border-border bg-secondary flex items-center justify-center font-mono text-xs font-bold">
                02
              </div>
              <h3 className="font-bold text-base text-foreground font-sans">
                Human-in-the-Loop & Auditability
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Rather than treating AI as an uncontrollable black box, our architectures enforce Human-in-the-Loop (HITL) checkpoints and cryptographically sealed ledgers (PostgreSQL pgvector, SHA-256, and HMAC validation).
              </p>
              <div className="pt-2 font-mono text-[11px] text-foreground/80 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Tamper-Evident SHA-256 Data Integrity</span>
              </div>
            </div>

            <div className="hallmark-card space-y-3">
              <div className="w-8 h-8 rounded border border-border bg-secondary flex items-center justify-center font-mono text-xs font-bold">
                03
              </div>
              <h3 className="font-bold text-base text-foreground font-sans">
                Regulatory & Privacy by Design
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Full compliance with national data privacy statutes (UU PDP) and ESG auditing standards. Automated PII scrubbing and semantic legal validation ensure enterprise security and zero data leaks.
              </p>
              <div className="pt-2 font-mono text-[11px] text-foreground/80 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>UU PDP Compliance & PII Redaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FLAGSHIP SYSTEMS & ARCHITECTURAL CASE STUDIES */}
      <section className="py-16 sm:py-24 border-b border-border bg-background">
        <div className="hallmark-container space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/80 pb-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                [PORTFOLIO BLUEPRINTS]
              </span>
              <h2 className="hallmark-section-headline font-serif text-foreground font-normal">
                Engineered Systems & Projects
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
                Production-ready architectures deployed and verified in national competitions and real-world supply chain workflows.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold text-foreground hover:opacity-75 transition-opacity"
            >
              <span>Explore All 4 Projects & Specs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* System Deep-Dive Cards */}
          <div className="space-y-8">
            {systems.map((sys) => (
              <div
                key={sys.id}
                className="hallmark-card hover:shadow-sm space-y-6"
              >
                {/* Header row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border/70 pb-5">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="hallmark-tag font-mono font-bold text-primary">
                        {sys.id}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">
                        {sys.domain}
                      </span>
                      <span className="hallmark-seal text-[10px]">
                        {sys.award}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-foreground">
                      {sys.title}
                    </h3>
                  </div>

                  {sys.url !== "#" && (
                    <a
                      href={sys.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-border bg-secondary font-mono text-xs font-semibold text-foreground hover:bg-foreground hover:text-background transition-all self-start lg:self-auto"
                    >
                      <span>Live Platform</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Problem vs Solution Architectural Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                  <div className="space-y-2 p-4 rounded border border-border/70 bg-secondary/30">
                    <span className="font-mono text-[10px] uppercase font-bold text-muted-foreground block">
                      [OPERATIONAL BOTTLENECK / PROBLEM]
                    </span>
                    <p className="text-foreground/90 leading-relaxed font-normal">
                      {sys.problem}
                    </p>
                  </div>

                  <div className="space-y-2 p-4 rounded border border-border/70 bg-card">
                    <span className="font-mono text-[10px] uppercase font-bold text-foreground block">
                      [ENGINEERED AI ARCHITECTURE / SOLUTION]
                    </span>
                    <p className="text-foreground/90 leading-relaxed font-normal">
                      {sys.solution}
                    </p>
                  </div>
                </div>

                {/* Stack & Verified Metrics */}
                <div className="pt-4 border-t border-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="font-mono text-[10px] text-muted-foreground mr-1 uppercase">
                      Stack:
                    </span>
                    {sys.stack.map((tech) => (
                      <span key={tech} className="hallmark-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground">
                    {sys.metrics.map((m, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1">
                        <span className="text-primary">•</span>
                        <span>{m}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OPERATIONAL LEDGER (PROFESSIONAL EXPERIENCE) */}
      <section className="py-16 sm:py-24 border-b border-border bg-secondary/20">
        <div className="hallmark-container space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/80 pb-6">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                [VERIFIABLE CAREER RECORD]
              </span>
              <h2 className="hallmark-section-headline font-serif text-foreground font-normal">
                Professional Experience Ledger
              </h2>
            </div>
            <Link
              to="/cv"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-foreground hover:opacity-75 transition-opacity"
            >
              <span>Examine Comprehensive CV</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-6">
            {operationalChronology.map((job, idx) => (
              <div
                key={idx}
                className="hallmark-card space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3">
                  <div>
                    <span className="font-mono text-xs text-muted-foreground">
                      {job.period} • {job.location}
                    </span>
                    <h3 className="text-xl font-bold font-sans text-foreground">
                      {job.role}
                    </h3>
                    <p className="text-sm font-serif font-semibold text-foreground/80 mt-0.5">
                      {job.organization}
                    </p>
                  </div>
                  <span className="hallmark-tag font-mono self-start sm:self-auto">
                    {job.scope}
                  </span>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-foreground/85 leading-relaxed list-outside pl-4 list-disc marker:text-muted-foreground">
                  {job.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: NATIONAL HONORS & COMPETITION RECORD */}
      <section className="py-16 sm:py-24 border-b border-border bg-background">
        <div className="hallmark-container space-y-8">
          <div className="border-b border-border/80 pb-6 space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              [COMPETITIVE RIGOR]
            </span>
            <h2 className="hallmark-section-headline font-serif text-foreground font-normal">
              National Honors & Hackathon Accolades
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl">
              Competitive validation across national banking, aerospace, and energy innovation challenges.
            </p>
          </div>

          <div className="divide-y divide-border border border-border rounded-md bg-card overflow-hidden">
            {competitionHonors.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-secondary/40 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="hallmark-tag font-bold text-primary">
                      {item.rank}
                    </span>
                    <span className="font-bold text-sm sm:text-base text-foreground font-sans">
                      {item.competition}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono">
                    System: {item.project} — {item.focus}
                  </p>
                </div>

                <div className="shrink-0 font-mono text-[11px] text-muted-foreground flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-primary" />
                  <span>VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: INTERACTIVE HALLMARK THEME PLAYGROUND */}
      <section className="py-16 sm:py-20 border-b border-border bg-secondary/30">
        <div className="hallmark-container space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 hallmark-seal">
              <Sliders className="w-3.5 h-3.5" />
              <span>LIVE HALLMARK TASTE ENGINE</span>
            </div>
            <h2 className="hallmark-section-headline font-serif text-foreground font-normal">
              Curated Material Themes
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Hallmark enforces design variety across four strict, material-driven themes. Toggle any theme below to instantaneously transform the entire portfolio's typography, palette, and borders.
            </p>
          </div>

          {/* Theme Switcher Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {HALLMARK_THEMES.map((t) => {
              const isActive = t.id === theme;
              return (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`p-5 rounded-md border text-left transition-all duration-200 cursor-pointer space-y-3 relative ${
                    isActive
                      ? "border-primary bg-card ring-1 ring-primary shadow-sm"
                      : "border-border bg-card/60 hover:bg-card hover:border-foreground/30"
                  }`}
                >
                  {/* Swatch Header */}
                  <div className="flex items-center justify-between">
                    <div
                      className="w-5 h-5 rounded-full border border-border/80 shadow-2xs"
                      style={{ backgroundColor: t.previewBg }}
                    />
                    {isActive && (
                      <span className="font-mono text-[10px] font-bold text-primary uppercase">
                        Active
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-bold text-sm text-foreground">{t.name}</h3>
                    <span className="font-mono text-[10px] text-muted-foreground block">
                      {t.genre}
                    </span>
                  </div>

                  <p className="text-[11px] text-muted-foreground leading-relaxed line-clamp-3">
                    {t.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7: EDITORIAL INVITATION & TRANSMISSION CONSOLE */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="hallmark-container">
          <div className="p-8 sm:p-12 rounded-lg border-2 border-border bg-card space-y-6 text-center max-w-3xl mx-auto">
            <span className="hallmark-seal">
              DIRECT TRANSMISSION // RECRUITMENT & COLLABORATION
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif text-foreground font-normal">
              Ready to deploy aerospace operational rigor to your AI pipelines?
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Currently open to technical roles in Generative AI Engineering, Agentic Systems Architecture, and Supply Chain Technology Optimization.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <Link
                to="/cv"
                className="px-6 py-3 rounded-md bg-primary text-primary-foreground font-mono text-xs sm:text-sm font-bold hover:opacity-90 transition-all flex items-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Open Curriculum Vitae (CV)</span>
              </Link>

              <a
                href={pdfUrl}
                download="OKI_TARUNA_RAMADHAN_Resume.pdf"
                className="px-6 py-3 rounded-md border border-border bg-card text-foreground font-mono text-xs sm:text-sm font-semibold hover:bg-secondary transition-all flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Official PDF</span>
              </a>

              <a
                href="mailto:okitarunaramadhan@gmail.com"
                className="px-6 py-3 rounded-md border border-border bg-secondary text-foreground font-mono text-xs sm:text-sm font-semibold hover:bg-foreground hover:text-background transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>okitarunaramadhan@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
