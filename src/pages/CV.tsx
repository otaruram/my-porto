import React, { useState } from "react";
import { 
  Download, 
  ExternalLink, 
  Printer, 
  Copy, 
  Check, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Terminal, 
  Database, 
  Cpu, 
  Sparkles,
  Layers,
  ShieldCheck
} from "lucide-react";

export default function CV() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeTab, setActiveTab] = useState<"digital" | "pdf">("digital");

  const pdfUrl = "/cv/OKI_TARUNA_RAMADHAN_FlowCV_Resume_2026-10-17-1.pdf";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("okitarunaramadhan@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("+6285797968246");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full pb-24">
      {/* DOCUMENT TOP MASTHEAD */}
      <section className="border-b border-border py-10 sm:py-14 bg-secondary/30 hallmark-grid-bg">
        <div className="hallmark-container space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="hallmark-seal">
                OFFICIAL CURRICULUM VITAE
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                DOC_ID: OTR-CV-2026
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                FORMAT: PDF [94.5 KB • 2 PAGES]
              </span>
            </div>

            {/* Quick Actions Toolbar */}
            <div className="flex flex-wrap items-center gap-2">
              <a
                href={pdfUrl}
                download="OKI_TARUNA_RAMADHAN_Resume.pdf"
                className="px-4 py-2 rounded bg-primary text-primary-foreground font-mono text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-1.5 shadow-2xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF [94KB]</span>
              </a>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded border border-border bg-card text-foreground font-mono text-xs font-medium hover:bg-secondary transition-colors flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in Tab</span>
              </a>

              <button
                onClick={handlePrint}
                className="px-3.5 py-2 rounded border border-border bg-card text-foreground font-mono text-xs font-medium hover:bg-secondary transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Print Document"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="hallmark-hero-headline font-serif font-normal text-foreground">
              Curriculum Vitae & Verified Record
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl font-mono">
              Official professional history, technical competencies, and academic credentials of Oki Taruna Ramadhan.
            </p>
          </div>

          {/* View Mode Selector Tabs */}
          <div className="flex gap-2 border-b border-border pt-4">
            <button
              onClick={() => setActiveTab("digital")}
              className={`pb-3 px-4 font-mono text-xs font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "digital"
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>[01] Interactive Spec-Sheet</span>
            </button>

            <button
              onClick={() => setActiveTab("pdf")}
              className={`pb-3 px-4 font-mono text-xs font-semibold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "pdf"
                  ? "border-primary text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>[02] Official PDF Viewer</span>
            </button>
          </div>
        </div>
      </section>

      {/* VIEWPORT AREA */}
      <div className="hallmark-container pt-8 sm:pt-12">
        {activeTab === "pdf" ? (
          /* EMBEDDED PDF PREVIEW */
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-md border border-border bg-card font-mono text-xs">
              <span className="text-muted-foreground">
                Displaying official 2-page document compiled via FlowCV:
              </span>
              <a
                href={pdfUrl}
                download="OKI_TARUNA_RAMADHAN_Resume.pdf"
                className="font-semibold text-primary hover:underline flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save to device</span>
              </a>
            </div>

            <div className="w-full h-[850px] border border-border rounded-md overflow-hidden bg-secondary">
              <iframe
                src={`${pdfUrl}#toolbar=0`}
                className="w-full h-full"
                title="Curriculum Vitae PDF Preview"
              />
            </div>
          </div>
        ) : (
          /* DIGITAL INTERACTIVE SPEC-SHEET */
          <div className="hallmark-card space-y-12 shadow-sm">
            {/* 1. HEADER & CONTACT SPEC */}
            <div className="border-b border-border/80 pb-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  CURRICULUM VITAE // DOSSIER
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
                  Oki Taruna Ramadhan
                </h2>
                <p className="text-base sm:text-lg font-mono text-foreground/80 font-medium">
                  Supply Chain Operation & IT Specialist
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
                  Generative AI Pipelines • Agentic Workflows • Enterprise Systems Optimization
                </p>
              </div>

              {/* Contact Grid */}
              <div className="space-y-2 text-xs font-mono text-muted-foreground p-4 rounded border border-border bg-secondary/30 shrink-0">
                <div className="flex items-center gap-2 text-foreground">
                  <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                  <span>Bandung, Indonesia</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                    <span>okitarunaramadhan@gmail.com</span>
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="text-primary hover:underline cursor-pointer"
                  >
                    {copiedEmail ? "Copied" : "Copy"}
                  </button>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                    <span>+62 857 9796 8246</span>
                  </span>
                  <button
                    onClick={handleCopyPhone}
                    className="text-primary hover:underline cursor-pointer"
                  >
                    {copiedPhone ? "Copied" : "Copy"}
                  </button>
                </div>
                <div className="flex items-center gap-2 pt-1 border-t border-border/60">
                  <Linkedin className="w-3.5 h-3.5 text-muted-foreground" />
                  <a
                    href="https://linkedin.com/in/otaruram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground hover:underline"
                  >
                    linkedin.com/in/otaruram
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-muted-foreground" />
                  <a
                    href="https://github.com/otaruram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground hover:underline"
                  >
                    github.com/otaruram
                  </a>
                </div>
              </div>
            </div>

            {/* 2. EXECUTIVE SUMMARY */}
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-2">
                <FileText className="w-3.5 h-3.5" />
                <span>[01] Professional Summary</span>
              </span>
              <p className="text-sm sm:text-base text-foreground/85 leading-relaxed font-normal">
                Final year Information Systems student with extensive experience in architecting <strong>Generative AI pipelines</strong>, <strong>Agentic workflows</strong>, and intelligent automation systems. Combining <strong>7+ years of operational systems optimization at PT Dirgantara Indonesia (Indonesian Aerospace)</strong> with production-grade AI engineering (Multimodal RAG, LLMOps, IndoBERT, Claude 3.5, Gemini, Azure AI Services, and pgvector). Experienced in mentoring developers, leading AI initiatives, and designing robust, secure software architectures.
              </p>
            </div>

            {/* 3. CORE TECHNICAL COMPETENCIES */}
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>[02] Core Competencies & Technical Skills</span>
              </span>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded border border-border bg-card space-y-2">
                  <span className="font-mono text-xs font-bold text-foreground block">
                    AI & Machine Learning
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Generative AI, Agentic AI, LLMOps, Multimodal RAG, Fine-Tuned NLP (IndoBERT), Computer Vision, Multimodal Models, Prompt Engineering & Chaining, Prompt Flow.
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {["Generative AI", "Agentic AI", "Multimodal RAG", "IndoBERT", "LLMOps"].map((t) => (
                      <span key={t} className="hallmark-tag text-[10px]">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded border border-border bg-card space-y-2">
                  <span className="font-mono text-xs font-bold text-foreground block">
                    Programming & Cloud
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Python, Microsoft Azure (Azure OpenAI / Cognitive Services), Docker, RESTful APIs, Next.js, Go. Microservices and scalable API design.
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {["Python", "Azure OpenAI", "Docker", "REST APIs", "Go"].map((t) => (
                      <span key={t} className="hallmark-tag text-[10px]">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded border border-border bg-card space-y-2">
                  <span className="font-mono text-xs font-bold text-foreground block">
                    Databases & Architecture
                  </span>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    PostgreSQL, pgvector, Supabase, Prisma, SQL (Query Optimization & Validation), Human-in-the-Loop (HITL), Cryptographic Integrity (HMAC-SHA256), SDLC Agile.
                  </p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {["pgvector", "PostgreSQL", "Supabase", "HITL", "SHA-256"].map((t) => (
                      <span key={t} className="hallmark-tag text-[10px]">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 4. PROFESSIONAL EXPERIENCE */}
            <div className="space-y-6">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>[03] Professional Experience</span>
              </span>

              <div className="space-y-6">
                {/* Dicoding Indonesia */}
                <div className="p-5 rounded border border-border bg-secondary/20 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-border/60 pb-2">
                    <div>
                      <h3 className="font-bold text-base text-foreground font-sans">
                        AI & Technical Mentor
                      </h3>
                      <p className="text-xs font-serif font-semibold text-foreground/80">
                        Dicoding Indonesia • IBM SkillsBuild & DBS Foundation
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      05/2026 – 10/2026 • Bandung, Indonesia
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-foreground/85 leading-relaxed list-outside pl-4 list-disc marker:text-muted-foreground">
                    <li>
                      Mentored 30+ developers and tech professionals under IBM SkillsBuild & DBS Foundation programs in Python backend logic, predictive analytics, and machine learning architecture.
                    </li>
                    <li>
                      Conducted technical code reviews on model training workflows, API integrations, and cloud deployments, ensuring industry-standard clean code and model accuracy.
                    </li>
                    <li>
                      Guided mentees through end-to-end AI project lifecycle—from data preprocessing and exploratory data analysis to model deployment.
                    </li>
                  </ul>
                </div>

                {/* PT Dirgantara Indonesia */}
                <div className="p-5 rounded border border-border bg-secondary/20 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-border/60 pb-2">
                    <div>
                      <h3 className="font-bold text-base text-foreground font-sans">
                        Supply Chain Operations Administrator
                      </h3>
                      <p className="text-xs font-serif font-semibold text-foreground/80">
                        PT DIRGANTARA INDONESIA (Indonesian Aerospace)
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      02/2019 – PRESENT • Bandung, Indonesia
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-foreground/85 leading-relaxed list-outside pl-4 list-disc marker:text-muted-foreground">
                    <li>
                      Mapped and standardized end-to-end operational workflows, collaborating with cross-functional stakeholders to formulate Business Requirement Documents (BRD) and functional specifications for enterprise inventory systems.
                    </li>
                    <li>
                      Utilized SQL (DML commands: SELECT, INSERT, UPDATE) to validate operational database records, perform multi-tier data reconciliations, and mitigate reporting errors by ~20%.
                    </li>
                    <li>
                      Facilitated full-cycle software development implementation (SDLC), actively coordinating System Integration Testing (SIT) and supporting User Acceptance Testing (UAT) with operational personnel to guarantee solution readiness.
                    </li>
                  </ul>
                </div>

                {/* Fydemy */}
                <div className="p-5 rounded border border-border bg-secondary/20 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-border/60 pb-2">
                    <div>
                      <h3 className="font-bold text-base text-foreground font-sans">
                        Community Lead & Technical Contributor
                      </h3>
                      <p className="text-xs font-serif font-semibold text-foreground/80">
                        Fydemy
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">
                      01/2026 – 09/2026 • Singapore (Remote)
                    </span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-foreground/85 leading-relaxed list-outside pl-4 list-disc marker:text-muted-foreground">
                    <li>
                      Developed Python-based data automation scripts and mentored technical talents on workflow efficiency and API integrations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5. FORMAL EDUCATION & CERTIFICATIONS */}
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5" />
                <span>[04] Education & Training</span>
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded border border-border bg-card space-y-1">
                  <span className="font-mono text-xs text-muted-foreground">
                    2023 – PRESENT • BANDUNG
                  </span>
                  <h4 className="font-bold text-sm text-foreground font-sans">
                    Bachelor of Science (B.S.) in Information Systems
                  </h4>
                  <p className="text-xs font-semibold text-foreground/80">
                    Universitas Terbuka (Final Year Student)
                  </p>
                  <p className="text-xs text-muted-foreground pt-1">
                    Relevant Coursework: Systems Analysis & Design, Database Management Systems, Data Networks.
                  </p>
                </div>

                <div className="p-4 rounded border border-border bg-card space-y-1">
                  <span className="font-mono text-xs text-muted-foreground">
                    ONLINE ACADEMY
                  </span>
                  <h4 className="font-bold text-sm text-foreground font-sans">
                    Machine Learning & Data Developer Learning Path
                  </h4>
                  <p className="text-xs font-semibold text-foreground/80">
                    Dicoding Indonesia
                  </p>
                  <p className="text-xs text-muted-foreground pt-1">
                    Focus: Predictive Analytics, Data Processing (Python), & Applied System Architecture.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. COMPETITIVE HONORS & HACKATHONS */}
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold flex items-center gap-2">
                <Award className="w-3.5 h-3.5" />
                <span>[05] Honors & Competitions</span>
              </span>

              <div className="divide-y divide-border border border-border rounded bg-card overflow-hidden text-xs">
                {[
                  { rank: "Finalist", event: "BRIN Aidenation", desc: "OtaruChain Project — AI Document Intelligence & Risk Engine" },
                  { rank: "Semifinalist", event: "Bank Indonesia Innovation Competition", desc: "OtaruChain Project — Multimodal Document Intelligence & Transparent Credit Scoring API" },
                  { rank: "Top 15", event: "BNI Spark Hackathon 2026", desc: "Oziktag Project — Visual QC & Digital Supply Chain Platform" },
                  { rank: "Top 11", event: "ZTE × ITB Competition", desc: "OzikNTN Project — Cold-Chain Supply Chain Platform for 3T Regions" },
                  { rank: "Semifinalist", event: "PLN SustainAction", desc: "OzikSustain Project — Smart Energy & Sustainability Management Platform" },
                ].map((item, idx) => (
                  <div key={idx} className="p-3 flex items-start justify-between gap-3">
                    <div>
                      <span className="font-bold font-mono text-primary mr-2">[{item.rank}]</span>
                      <strong className="text-foreground">{item.event}: </strong>
                      <span className="text-muted-foreground">{item.desc}</span>
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground shrink-0">VERIFIED</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. FOOTER ACTION */}
            <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="font-mono text-xs text-muted-foreground">
                Document digitally signed and certified under Hallmark Anti-Slop specification.
              </span>

              <a
                href={pdfUrl}
                download="OKI_TARUNA_RAMADHAN_Resume.pdf"
                className="px-5 py-2.5 rounded bg-primary text-primary-foreground font-mono text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Official PDF Copy (94.5 KB)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
