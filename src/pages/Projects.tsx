import { ExternalLink, Github, Filter, Shield, Code2, Rocket, FileText, Download, Award, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const pdfUrl = "/cv/OKI_TARUNA_RAMADHAN_FlowCV_Resume_2026-10-17-1.pdf";

  const projects = [
    {
      title: "Oziktag",
      subtitle: "Supply Chain Visual QC & Digital Trust Platform",
      url: "https://www.oziktag.my.id",
      github: "#",
      award: "Top 15 Finalist at BNI Spark Hackathon 2026",
      tags: ["AI", "Supply Chain", "Agentic AI"],
      stack: ["Multimodal RAG", "Computer Vision", "Agentic Loop", "Escrow APIs", "FastAPI"],
      problem: "Supply chain operators and MSMEs frequently suffer from package damage transit disputes due to the lack of real-time verified visual inspection proof.",
      solution: "Architected an AI visual inspection system integrating Multimodal RAG and Computer Vision to automate package damage verification. Built an automated Agentic decision loop analyzing real-time condition snapshots and triggering dynamic escrow releases via API integrations.",
      impact: "Eliminated transit dispute claims by up to 95% and recognized as Top 15 Finalist at BNI Spark Hackathon 2026.",
      icon: Shield
    },
    {
      title: "OtaruChain",
      subtitle: "Multimodal Document Intelligence & Transparent Credit Scoring API",
      url: "https://otaruchain.id",
      github: "#",
      award: "Finalist BRIN Aidenation 2026 & Semifinalist Bank Indonesia Innovation",
      tags: ["AI", "Security", "Fintech"],
      stack: ["Gemini 2.5 Flash", "Logistic Regression", "HITL", "PostgreSQL", "SHA-256", "UU PDP"],
      problem: "Financial invoice validation and credit scoring processes are susceptible to visual fraud anomalies, counterfeit claims, and lack an immutable audit trail.",
      solution: "Engineered an automated financial document extraction pipeline using Gemini 2.5 Flash to extract receipt text and detect visual fraud anomalies with real-time screening. Implemented an interpretable Adaptive Credit Scoring Engine powered by Logistic Regression and Human-in-the-Loop (HITL) validation, backed by Supa Ledger (PostgreSQL & SHA-256).",
      impact: "Delivers transparent, auditable Trust Grades for liquidity risk mitigation. Recognized as Finalist at BRIN Aidenation 2026 and Semifinalist at Bank Indonesia Innovation Competition.",
      icon: Code2
    },
    {
      title: "OzikSustain",
      subtitle: "AI-Powered ESG Compliance & Regulatory Assessment Engine",
      url: "#",
      github: "#",
      award: "Semifinalist PLN SustainAction 2026",
      tags: ["AI", "ESG", "NLP"],
      stack: ["IndoBERT", "Claude 3.5 Sonnet", "Supabase pgvector", "Pasal.id API", "HMAC-SHA256"],
      problem: "Conventional ESG regulatory compliance auditing is time-consuming, expensive, and prone to greenwashing practices across enterprise supply chains.",
      solution: "Architected a hybrid Generative AI assessment pipeline combining fine-tuned IndoBERT embeddings and Claude 3.5 Sonnet for automated regulatory document mapping and multi-pillar ESG compliance scoring. Engineered an Agentic retrieval pipeline utilizing Supabase pgvector and semantic legal APIs (Pasal.id), coupled with cryptographic HMAC-SHA256 audit logging.",
      impact: "Achieved <24-hour turnaround, reduced legacy audit costs by 85%, and guaranteed zero data leakage.",
      icon: Rocket
    },
    {
      title: "OzikNTN",
      subtitle: "Cold-Chain Supply Chain Platform for 3T Regions",
      url: "#",
      github: "#",
      award: "Top 11 Finalist ZTE X ITB Competition",
      tags: ["Supply Chain", "IoT"],
      stack: ["Cold-Chain IoT", "Telemetry", "Non-Terrestrial Network", "Data Integrity"],
      problem: "Cold-chain logistics distribution across 3T (Frontier, Outermost, Underdeveloped) regions suffers from temperature excursions due to frequent network deadzones.",
      solution: "Designed cold-chain telemetry monitoring architecture integrated with non-terrestrial network (NTN) satellite communications for uninterrupted cargo tracking.",
      impact: "Awarded Top 11 Finalist in the national ZTE X ITB Competition.",
      icon: Shield
    }
  ];

  const categories = ["All", "AI", "Supply Chain", "Security", "Fintech", "ESG"];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.tags.includes(filter));

  return (
    <div className="min-h-screen bg-white text-zinc-950 pb-20">
      {/* Header */}
      <section className="bg-zinc-50/70 border-b border-zinc-200/80 py-8 sm:py-12 px-4 sm:px-6">
        <div className="container-custom max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 text-white rounded-full text-xs font-semibold">
                <FileText className="w-3.5 h-3.5" />
                <span>Official Portfolio from CV</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-950">
                Projects & Systems Engineering
              </h1>
              <p className="text-sm md:text-base text-zinc-600 max-w-2xl font-medium">
                A curated collection of artificial intelligence (AI) systems, regulatory compliance engines, and supply chain operations directly featured on the official CV.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 shrink-0">
              <Link
                to="/cv"
                className="px-3.5 sm:px-4 py-2.5 bg-zinc-950 text-white rounded-lg text-xs sm:text-sm font-semibold hover:bg-zinc-800 transition-colors flex items-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Review CV Document</span>
              </Link>
              <a
                href={pdfUrl}
                download="OKI_TARUNA_RAMADHAN_Resume.pdf"
                className="px-3.5 sm:px-4 py-2.5 bg-white border border-zinc-300 text-zinc-900 rounded-lg text-xs sm:text-sm font-semibold hover:bg-zinc-100 transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-6 sm:pt-8">
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider mr-1 sm:mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" /> Category:
            </span>
            {categories.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                  filter === f
                    ? "bg-zinc-950 text-white border-zinc-950 shadow-sm"
                    : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400 hover:text-zinc-950"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container-custom max-w-5xl px-3.5 sm:px-6 pt-8 sm:pt-12">
        <div className="grid md:grid-cols-1 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-zinc-200/90 rounded-2xl p-5 sm:p-7 md:p-10 hover:border-zinc-400 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-zinc-100 rounded-xl border border-zinc-200/80 text-zinc-950 shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-950">{project.title}</h2>
                          {project.award && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-zinc-100 text-zinc-900 border border-zinc-200">
                              <Award className="w-3 h-3 text-zinc-900" />
                              {project.award}
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-semibold text-zinc-600">{project.subtitle}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start">
                      {project.url !== "#" && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-zinc-900 text-white rounded-lg text-xs font-semibold hover:bg-zinc-800 transition-colors flex items-center gap-1.5 shadow-2xs"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Visit Live</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 pt-4 border-t border-zinc-100">
                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">Problem / Challenge</span>
                      <p className="text-sm text-zinc-700 leading-relaxed font-normal">{project.problem}</p>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">Architecture & Solution</span>
                      <p className="text-sm text-zinc-800 leading-relaxed font-normal">{project.solution}</p>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">Impact & Key Metrics</span>
                      <p className="text-sm text-zinc-900 leading-relaxed font-medium bg-zinc-50 p-3 rounded-lg border border-zinc-200/70">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-zinc-100">
                  {project.stack.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
