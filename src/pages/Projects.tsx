import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ExternalLink, 
  Download, 
  FileText, 
  ShieldCheck, 
  Code2, 
  Rocket, 
  Terminal, 
  Database, 
  Cpu, 
  Award, 
  ArrowRight, 
  CheckCircle2,
  Filter
} from "lucide-react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const pdfUrl = "/cv/OKI_TARUNA_RAMADHAN_FlowCV_Resume_2026-10-17-1.pdf";

  const categories = [
    "All",
    "Agentic AI",
    "Supply Chain Logistics",
    "Fintech & Security",
    "ESG & Compliance",
  ];

  const projects = [
    {
      id: "SYS-01",
      title: "Oziktag",
      subtitle: "Supply Chain Visual QC & Digital Trust Platform",
      category: "Supply Chain Logistics",
      tags: ["Agentic AI", "Supply Chain Logistics"],
      award: "Top 15 Finalist at BNI Spark Hackathon 2026",
      liveUrl: "https://www.oziktag.my.id",
      githubUrl: "#",
      stack: ["Multimodal RAG", "Computer Vision", "Agentic Escrow Loop", "FastAPI", "Digital Trust Seals"],
      problem: "E-commerce & supply chain logistics operators suffer frequent transit disputes and costly chargebacks due to the absence of verified visual inspection proof during transit handoffs.",
      solution: "Designed an AI visual verification system integrating Multimodal RAG with Computer Vision to automate package damage inspection and eliminate transit dispute claims by up to 95%. Built an automated Agentic decision loop analyzing package condition snapshots in real time, generating contextual quality summaries, and triggering dynamic escrow releases via banking API integrations.",
      impact: "Eliminated transit dispute claims by up to 95%. Recognized as Top 15 Finalist at BNI Spark Hackathon 2026.",
      architectureHighlights: [
        "Real-time visual anomaly detection model evaluating package condition snapshots.",
        "Agentic decision loop generating structured JSON summaries for automated escrow release.",
        "Dynamic digital trust seals certifying cargo integrity for MSMEs.",
      ],
    },
    {
      id: "SYS-02",
      title: "OtaruChain",
      subtitle: "Multimodal Document Intelligence & Transparent Credit Scoring API",
      category: "Fintech & Security",
      tags: ["Agentic AI", "Fintech & Security"],
      award: "Finalist BRIN Aidenation 2026 • Semifinalist Bank Indonesia Innovation",
      liveUrl: "https://otaruchain.id",
      githubUrl: "#",
      stack: ["Gemini 2.5 Flash", "Logistic Regression", "Human-in-the-Loop", "PostgreSQL", "SHA-256", "UU PDP"],
      problem: "Financial invoice validation and credit scoring processes are susceptible to visual fraud anomalies, counterfeit claims, and lack an immutable, tamper-evident audit trail.",
      solution: "Engineered an automated financial document extraction pipeline using Gemini 2.5 Flash to extract tabular receipt data and detect visual fraud anomalies (mark-ups, counterfeit claims) with real-time screening. Implemented an interpretable Adaptive Credit Scoring Engine powered by Logistic Regression and Human-in-the-Loop (HITL) validation, outputting auditable Trust Grades for liquidity risk mitigation. Backed by Supa Ledger (PostgreSQL & SHA-256) and strict UU PDP compliance.",
      impact: "Delivers transparent, auditable Trust Grades for liquidity risk mitigation. Recognized as Finalist at BRIN Aidenation 2026 and Semifinalist at Bank Indonesia Innovation Competition.",
      architectureHighlights: [
        "Gemini 2.5 Flash multimodal document OCR and visual tamper detection.",
        "Transparent Logistic Regression credit scoring engine with human oversight (HITL).",
        "Cryptographic audit ledger using PostgreSQL and SHA-256 hashing for tamper evidence.",
        "Telegram Bot interface with Phone Whitelisting strictly compliant with Indonesia's UU PDP.",
      ],
    },
    {
      id: "SYS-03",
      title: "OzikSustain",
      subtitle: "AI-Powered ESG Compliance & Regulatory Assessment Engine",
      category: "ESG & Compliance",
      tags: ["Agentic AI", "ESG & Compliance"],
      award: "Semifinalist PLN SustainAction 2026",
      liveUrl: "#",
      githubUrl: "#",
      stack: ["IndoBERT Embeddings", "Claude 3.5 Sonnet", "Supabase pgvector", "Pasal.id Legal API", "HMAC-SHA256"],
      problem: "Conventional ESG regulatory compliance auditing is time-consuming, expensive, and prone to greenwashing practices across enterprise supply chains.",
      solution: "Architected a hybrid Generative AI assessment pipeline combining fine-tuned IndoBERT embeddings and Claude 3.5 Sonnet for automated regulatory document mapping and multi-pillar ESG compliance scoring. Engineered an Agentic retrieval pipeline utilizing Supabase pgvector and semantic legal APIs (Pasal.id), achieving <24-hour turnaround and reducing legacy audit costs by 85%. Enforced cryptographic HMAC-SHA256 audit logging to guarantee zero data leakage.",
      impact: "Achieved <24-hour turnaround, reduced legacy audit costs by 85%, and guaranteed zero data leakage.",
      architectureHighlights: [
        "Fine-tuned IndoBERT embedding models aligned with Indonesian environmental and labor statutes.",
        "High-density semantic retrieval via Supabase pgvector and Pasal.id legal knowledge base.",
        "Cryptographic HMAC-SHA256 audit logging to prevent tampering and greenwashing claims.",
        "Automated PII scrubbing ensuring zero leakage of proprietary enterprise procurement data.",
      ],
    },
    {
      id: "SYS-04",
      title: "OzikNTN",
      subtitle: "Cold-Chain Supply Chain IoT via Non-Terrestrial Networks",
      category: "Supply Chain Logistics",
      tags: ["Supply Chain Logistics"],
      award: "Top 11 Finalist ZTE × ITB Competition",
      liveUrl: "#",
      githubUrl: "#",
      stack: ["Cold-Chain IoT", "Telemetry", "Non-Terrestrial Network (NTN)", "Data Integrity"],
      problem: "Cold-chain logistics distribution across 3T (Frontier, Outermost, Underdeveloped) regions suffers from temperature excursions and cargo spoilage due to frequent cellular network deadzones.",
      solution: "Designed cold-chain telemetry monitoring architecture integrated with non-terrestrial network (NTN) satellite communications for uninterrupted cargo tracking and real-time spoilage alerts across remote maritime and regional routes.",
      impact: "Awarded Top 11 Finalist in the national ZTE × ITB Innovation Competition.",
      architectureHighlights: [
        "Hybrid satellite and cellular telemetry handoff ensuring uninterrupted temperature auditing.",
        "Low-power edge computation nodes logging sensor telemetry with cryptographic integrity.",
        "Automated threshold alarms preventing biological and pharmaceutical cargo spoilage.",
      ],
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <div className="w-full pb-24">
      {/* HEADER SECTION */}
      <section className="border-b border-border py-12 sm:py-16 bg-secondary/30 hallmark-grid-bg">
        <div className="hallmark-container space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="hallmark-seal font-mono">
              OFFICIAL SYSTEM CATALOGUE
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              ALL BLUEPRINTS VERIFIED
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="hallmark-hero-headline font-serif font-normal text-foreground">
              Systems & Software Engineering
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Detailed architectural blueprints of production Generative AI pipelines, Multimodal RAG systems, and supply chain audit mechanisms developed by Oki Taruna Ramadhan.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/cv"
              className="px-4 py-2 rounded bg-primary text-primary-foreground font-mono text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Review CV Document</span>
            </Link>

            <a
              href={pdfUrl}
              download="OKI_TARUNA_RAMADHAN_Resume.pdf"
              className="px-4 py-2 rounded border border-border bg-card text-foreground font-mono text-xs font-medium hover:bg-secondary transition-colors flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official PDF</span>
            </a>
          </div>
        </div>
      </section>

      {/* FILTER CONTROLS */}
      <section className="border-b border-border bg-card sticky top-[65px] z-30 py-3 backdrop-blur-md">
        <div className="hallmark-container flex items-center justify-between gap-4 overflow-x-auto">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="font-mono text-xs text-muted-foreground mr-1 hidden sm:inline">
              Filter Domain:
            </span>
            {categories.map((cat) => {
              const isSelected = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1.5 rounded text-xs font-mono transition-colors cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? "bg-primary text-primary-foreground font-semibold shadow-2xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <span className="font-mono text-xs text-muted-foreground hidden md:inline shrink-0">
            Showing {filteredProjects.length} of {projects.length} Systems
          </span>
        </div>
      </section>

      {/* SYSTEMS LIST */}
      <section className="py-12 sm:py-16">
        <div className="hallmark-container space-y-10">
          {filteredProjects.map((p) => (
            <article
              key={p.id}
              className="hallmark-card space-y-6"
            >
              {/* Card Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-border/70 pb-5">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="hallmark-tag font-mono font-bold text-primary">
                      {p.id}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground">
                      {p.subtitle}
                    </span>
                    <span className="hallmark-seal text-[10px]">
                      {p.award}
                    </span>
                  </div>

                  <h2 className="text-3xl font-serif font-bold text-foreground">
                    {p.title}
                  </h2>
                </div>

                {p.liveUrl !== "#" && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded border border-border bg-secondary font-mono text-xs font-semibold text-foreground hover:bg-foreground hover:text-background transition-all self-start lg:self-auto"
                  >
                    <span>Visit Live System</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Problem & Solution Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
                <div className="p-4 rounded border border-border/70 bg-secondary/30 space-y-2">
                  <span className="font-mono text-[10px] uppercase font-bold text-muted-foreground block">
                    [OPERATIONAL PROBLEM / CHALLENGE]
                  </span>
                  <p className="text-foreground/90 leading-relaxed font-normal">
                    {p.problem}
                  </p>
                </div>

                <div className="p-4 rounded border border-border/70 bg-card space-y-2">
                  <span className="font-mono text-[10px] uppercase font-bold text-foreground block">
                    [ENGINEERED AI SOLUTION / ARCHITECTURE]
                  </span>
                  <p className="text-foreground/90 leading-relaxed font-normal">
                    {p.solution}
                  </p>
                </div>
              </div>

              {/* Architecture Highlights Bullet Points */}
              <div className="space-y-2 pt-2">
                <span className="font-mono text-[10px] uppercase font-bold text-muted-foreground block">
                  [KEY ARCHITECTURAL HIGHLIGHTS]
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-foreground/85 leading-relaxed list-outside pl-4 list-disc marker:text-muted-foreground">
                  {p.architectureHighlights.map((hl, i) => (
                    <li key={i}>{hl}</li>
                  ))}
                </ul>
              </div>

              {/* Footer Meta & Stack */}
              <div className="pt-4 border-t border-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase mr-1">
                    Tech Stack:
                  </span>
                  {p.stack.map((tech) => (
                    <span key={tech} className="hallmark-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="font-mono text-xs text-muted-foreground">
                  <span className="font-semibold text-foreground">Impact: </span>
                  <span>{p.impact}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
