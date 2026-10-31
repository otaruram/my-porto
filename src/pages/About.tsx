import React from "react";
import { Link } from "react-router-dom";
import { 
  Download, 
  FileText, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Terminal, 
  Cpu, 
  Database, 
  ShieldCheck, 
  CheckCircle2,
  Sparkles,
  Layers,
  ArrowRight
} from "lucide-react";

export default function About() {
  const pdfUrl = "/cv/OKI_TARUNA_RAMADHAN_FlowCV_Resume_2026-10-17-1.pdf";

  const corePillars = [
    {
      title: "Aerospace Operational Rigor",
      desc: "7+ years managing inventory reconciliation, Business Requirements Documents (BRD), and strict standard operating procedures at PT Dirgantara Indonesia. Operational failures in aerospace are catastrophic—this mindset translates directly into how I design mission-critical AI workflows.",
    },
    {
      title: "Verifiable, Anti-Slop AI Architectures",
      desc: "No superficial API wrappers or toy demos. I build production-grade Agentic systems with deterministic fallbacks, semantic vector retrieval (pgvector), and fine-tuned embeddings (IndoBERT) that solve concrete business friction.",
    },
    {
      title: "Human-in-the-Loop & Cryptographic Audit Trails",
      desc: "True enterprise reliability requires accountability. All automated scoring pipelines incorporate Human-in-the-Loop (HITL) review stages and immutable cryptographic hashing (HMAC-SHA256) to ensure transparency.",
    },
    {
      title: "Regulatory Compliance & Data Privacy",
      desc: "Systems engineered from the ground up to respect national privacy legislation (Indonesia UU PDP) and enterprise ESG auditing criteria, featuring automated PII scrubbing and zero data leakage.",
    },
  ];

  const technicalToolkit = [
    {
      domain: "Generative AI & LLMOps",
      skills: ["Multimodal RAG", "Agentic Decision Loops", "IndoBERT Fine-Tuning", "Claude 3.5 Sonnet", "Gemini 2.5 Flash", "Prompt Flow", "LLMOps"],
    },
    {
      domain: "Backend, APIs & Cloud",
      skills: ["Python", "FastAPI", "Go", "Microsoft Azure (Azure OpenAI)", "Docker", "RESTful Architecture", "Next.js"],
    },
    {
      domain: "Databases & Vector Storage",
      skills: ["PostgreSQL", "Supabase pgvector", "Prisma ORM", "SQL Query Optimization", "Cryptographic Ledgers (SHA-256)"],
    },
    {
      domain: "Operations & Methodology",
      skills: ["Supply Chain Operations (7+ yrs)", "Business Requirements (BRD)", "SDLC Agile", "System Integration Testing (SIT)", "User Acceptance Testing (UAT)", "UU PDP Compliance"],
    },
  ];

  return (
    <div className="w-full pb-24">
      {/* DOSSIER HEADER */}
      <section className="border-b border-border py-12 sm:py-16 bg-secondary/30 hallmark-grid-bg">
        <div className="hallmark-container space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="hallmark-seal font-mono">
              ENGINEERING DOSSIER
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              PROFILE SPECIFICATION // OTR-BIO
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="hallmark-hero-headline font-serif font-normal text-foreground">
              Oki Taruna Ramadhan
            </h1>
            <p className="font-mono text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
              Supply Chain Operation & IT Specialist • Generative AI Systems Architect
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/cv"
              className="px-4 py-2 rounded bg-primary text-primary-foreground font-mono text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Review Official CV</span>
            </Link>

            <a
              href={pdfUrl}
              download="OKI_TARUNA_RAMADHAN_Resume.pdf"
              className="px-4 py-2 rounded border border-border bg-card text-foreground font-mono text-xs font-medium hover:bg-secondary transition-colors flex items-center gap-2"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF [94.5 KB]</span>
            </a>
          </div>
        </div>
      </section>

      {/* CORE BIOGRAPHY & NARRATIVE */}
      <section className="py-12 sm:py-16 border-b border-border">
        <div className="hallmark-container space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column: Editorial Story */}
            <div className="lg:col-span-2 space-y-6 text-sm sm:text-base text-foreground/85 leading-relaxed">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block font-semibold">
                [NARRATIVE // BACKGROUND]
              </span>

              <h2 className="text-2xl sm:text-3xl font-serif font-normal text-foreground">
                Where Aerospace Operations Intersect with Machine Intelligence
              </h2>

              <p>
                My journey began on the hangar floors and inventory command centers of <strong>PT Dirgantara Indonesia (Indonesian Aerospace)</strong>. Over the past seven years, I have lived the intricacies of industrial supply chain operations: tracking complex aerospace assemblies, reconciling multi-tier inventory ledgers, and formulating strict Business Requirement Documents (BRD) for internal systems.
              </p>

              <p>
                In high-reliability manufacturing, precision is not a preference—it is a non-negotiable floor. As I pursued my degree in Information Systems at Universitas Terbuka, I observed a profound industry gap: while frontier Large Language Models possessed unprecedented reasoning potential, real-world enterprises remained wary of deploying them due to hallucination, unpredictable latency, and opacity.
              </p>

              <p>
                This realization defined my engineering focus: <strong>grounding generative intelligence with operational discipline</strong>. Through production projects like Oziktag (Top 15 BNI Spark Hackathon), OtaruChain (BRIN Aidenation Finalist & Bank Indonesia Semifinalist), and OzikSustain (Finalist DeveloperDay.id & Semifinalist PLN SustainAction), I develop systems featuring deterministic verification gates, Human-in-the-Loop checkpoints, and cryptographic audit ledgers.
              </p>

              <p>
                Simultaneously, as an AI & Technical Mentor at <strong>Dicoding Indonesia</strong> for the IBM SkillsBuild & DBS Foundation programs, I have had the privilege of guiding 30+ aspiring engineers in mastering applied machine learning architectures and production code hygiene.
              </p>
            </div>

            {/* Right Column: Fast Facts & Verified Coordinates */}
            <div className="space-y-6">
              <div className="hallmark-card space-y-4">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block font-semibold border-b border-border/70 pb-2">
                  [OPERATIONAL COORDINATES]
                </span>

                <div className="space-y-3 text-xs font-mono">
                  <div>
                    <span className="text-muted-foreground block">CURRENT BASE:</span>
                    <span className="font-bold text-foreground">Bandung, West Java, Indonesia</span>
                  </div>

                  <div>
                    <span className="text-muted-foreground block">ACADEMIC ALMA MATER:</span>
                    <span className="font-bold text-foreground">Universitas Terbuka (B.S. Information Systems)</span>
                  </div>

                  <div>
                    <span className="text-muted-foreground block">CORE INDUSTRY PEDIGREE:</span>
                    <span className="font-bold text-foreground">PT Dirgantara Indonesia (7+ Years)</span>
                  </div>

                  <div>
                    <span className="text-muted-foreground block">TECHNICAL MENTORSHIP:</span>
                    <span className="font-bold text-foreground">Dicoding Indonesia (30+ Mentees)</span>
                  </div>

                  <div>
                    <span className="text-muted-foreground block">PRIMARY FOCUS:</span>
                    <span className="font-bold text-foreground">Generative AI • Multimodal RAG • Supply Chain Ops</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-border/70">
                  <a
                    href="mailto:okitarunaramadhan@gmail.com"
                    className="w-full py-2 px-3 rounded bg-primary text-primary-foreground font-mono text-xs font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Initiate Contact</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS OF ENGINEERING */}
      <section className="py-12 sm:py-16 border-b border-border bg-secondary/20">
        <div className="hallmark-container space-y-8">
          <div className="border-b border-border/80 pb-4 space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block font-semibold">
              [GOVERNING METHODOLOGY]
            </span>
            <h2 className="hallmark-section-headline font-serif font-normal text-foreground">
              Core Engineering Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {corePillars.map((p, i) => (
              <div key={i} className="hallmark-card space-y-2">
                <span className="font-mono text-xs font-bold text-primary block">
                  // PILLAR 0{i + 1}
                </span>
                <h3 className="font-bold text-base sm:text-lg text-foreground font-sans">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNICAL TOOLKIT MATRIX */}
      <section className="py-12 sm:py-16">
        <div className="hallmark-container space-y-8">
          <div className="border-b border-border/80 pb-4 space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground block font-semibold">
              [SYSTEM CAPABILITY MATRIX]
            </span>
            <h2 className="hallmark-section-headline font-serif font-normal text-foreground">
              Technical Competencies & Tooling
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalToolkit.map((toolkit, idx) => (
              <div key={idx} className="hallmark-card space-y-3">
                <h3 className="font-mono text-xs font-bold uppercase text-foreground border-b border-border/60 pb-2">
                  {toolkit.domain}
                </h3>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {toolkit.skills.map((s) => (
                    <span key={s} className="hallmark-tag text-[10px]">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
