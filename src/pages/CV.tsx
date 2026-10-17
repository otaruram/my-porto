import { useState } from "react";
import { Download, ExternalLink, Printer, Check, Copy, FileText, Briefcase, GraduationCap, Award, Cpu, Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";

export default function CV() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"digital" | "pdf">("digital");

  const pdfUrl = "/cv/OKI_TARUNA_RAMADHAN_FlowCV_Resume_2026-10-17-1.pdf";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("okitarunaramadhan@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white text-zinc-950 pb-20">
      {/* Top Banner / Actions Bar */}
      <section className="border-b border-zinc-200/80 bg-zinc-50/60 py-8 sm:py-10 px-4 sm:px-6">
        <div className="container-custom max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 text-white text-xs font-semibold tracking-wide">
                <FileText className="w-3.5 h-3.5" />
                <span>Official & Verified Document</span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight">
                Curriculum Vitae (CV)
              </h1>
              <p className="text-sm md:text-base text-zinc-600 font-medium">
                Official CV & Resume of Oki Taruna Ramadhan — Supply Chain Operation & IT Specialist / Generative AI & Agentic Systems Developer.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <a
                href={pdfUrl}
                download="OKI_TARUNA_RAMADHAN_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-zinc-950 text-white text-xs sm:text-sm font-semibold rounded-lg hover:bg-zinc-800 transition-all shadow-sm w-full sm:w-auto"
              >
                <Download className="w-4 h-4" />
                <span>Download Official PDF</span>
              </a>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 bg-white text-zinc-900 text-xs sm:text-sm font-semibold rounded-lg border border-zinc-300 hover:bg-zinc-100 transition-all shadow-xs flex-1 sm:flex-initial"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open in Tab</span>
              </a>

              <button
                onClick={handlePrint}
                className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 bg-white text-zinc-700 text-xs sm:text-sm font-semibold rounded-lg border border-zinc-300 hover:bg-zinc-100 transition-all flex-1 sm:flex-initial"
                title="Print CV"
              >
                <Printer className="w-4 h-4" />
                <span>Print</span>
              </button>
            </div>
          </div>

          {/* Tab Selector with horizontal scrollbar hide for mobile */}
          <div className="flex gap-2 mt-6 sm:mt-8 border-b border-zinc-200 overflow-x-auto hide-scrollbar">
            <button
              onClick={() => setActiveTab("digital")}
              className={`pb-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                activeTab === "digital"
                  ? "border-zinc-950 text-zinc-950"
                  : "border-transparent text-zinc-500 hover:text-zinc-900"
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Interactive Digital View</span>
            </button>
            <button
              onClick={() => setActiveTab("pdf")}
              className={`pb-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 transition-all flex items-center gap-2 whitespace-nowrap shrink-0 ${
                activeTab === "pdf"
                  ? "border-zinc-950 text-zinc-950"
                  : "border-transparent text-zinc-500 hover:text-zinc-900"
              }`}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Original PDF Document Preview</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container-custom max-w-5xl px-3.5 sm:px-6 pt-6 sm:pt-10">
        {activeTab === "pdf" ? (
          /* PDF Viewer Tab */
          <div className="space-y-4">
            <div className="bg-zinc-50 p-3.5 sm:p-4 rounded-xl border border-zinc-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <span className="text-xs text-zinc-600 font-medium break-all">
                Displaying file: <code className="text-zinc-900 font-bold">OKI_TARUNA_RAMADHAN_FlowCV_Resume_2026-10-17-1.pdf</code>
              </span>
              <a
                href={pdfUrl}
                download
                className="text-xs font-semibold text-zinc-900 hover:underline flex items-center gap-1 shrink-0"
              >
                <Download className="w-3.5 h-3.5" /> Download original file
              </a>
            </div>

            <div className="w-full bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-200/90 shadow-sm min-h-[500px] md:min-h-[850px] relative">
              <object
                data={pdfUrl}
                type="application/pdf"
                className="w-full h-[70vh] md:h-[900px] block"
              >
                <div className="p-8 sm:p-12 text-center space-y-4 flex flex-col items-center justify-center h-[400px]">
                  <FileText className="w-12 h-12 text-zinc-400" />
                  <p className="text-zinc-700 font-semibold text-sm">PDF preview is best viewed natively on mobile devices.</p>
                  <a
                    href={pdfUrl}
                    download
                    className="px-6 py-2.5 bg-zinc-950 text-white rounded-lg font-semibold text-sm hover:bg-zinc-800 transition-colors"
                  >
                    Download CV PDF (94.5 KB)
                  </a>
                </div>
              </object>
            </div>
          </div>
        ) : (
          /* Interactive Digital CV Sheet */
          <div className="space-y-8 sm:space-y-12">
            {/* Sheet Container replicating CV layout in crisp editorial style */}
            <div className="bg-white border border-zinc-200/90 rounded-2xl p-4 sm:p-8 md:p-14 shadow-[0_4px_30px_rgba(0,0,0,0.04)] space-y-8 sm:space-y-10">
              
              {/* Header */}
              <div className="border-b border-zinc-200 pb-8 space-y-4">
                <div className="space-y-1.5">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950">
                    OKI TARUNA RAMADHAN
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl font-semibold text-zinc-700">
                    Supply Chain Operation & IT Specialist
                  </p>
                </div>

                {/* Contact Meta */}
                <div className="flex flex-wrap items-center gap-y-2 gap-x-3.5 sm:gap-x-6 text-xs sm:text-sm text-zinc-600 font-medium">
                  <a
                    href="mailto:okitarunaramadhan@gmail.com"
                    className="flex items-center gap-1.5 hover:text-zinc-950 transition-colors break-all"
                  >
                    <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-900 shrink-0" />
                    <span>okitarunaramadhan@gmail.com</span>
                  </a>
                  <a
                    href="tel:085797968246"
                    className="flex items-center gap-1.5 hover:text-zinc-950 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-900 shrink-0" />
                    <span>085797968246</span>
                  </a>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-900 shrink-0" />
                    <span>Bandung, Indonesia</span>
                  </span>
                  <a
                    href="https://linkedin.com/in/otaruram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-zinc-950 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-900 shrink-0" />
                    <span>linkedin.com/in/otaruram</span>
                  </a>
                </div>
              </div>

              {/* Section: Professional Summary */}
              <div className="space-y-3">
                <h2 className="text-base font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-200 pb-1.5">
                  Professional Summary
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-zinc-700">
                  Final year Information Systems student with extensive experience in architecting end to end Generative AI pipelines, Agentic workflows, and intelligent automation systems. Proven track record in deploying production ready AI solutions integrating fine-tuned NLP models, Multimodal RAG, and LLM orchestration (IndoBERT, Claude 3.5, Gemini, Azure AI Services). Strong foundation in Python, LLMOps, vector databases (pgvector), and cloud deployment, combined with 7+ years of operational systems optimization and a solid background as an AI Technical Mentor.
                </p>
              </div>

              {/* Section: Professional Experience */}
              <div className="space-y-6">
                <h2 className="text-base font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-200 pb-1.5 flex items-center justify-between">
                  <span>Professional Experience</span>
                  <Briefcase className="w-4 h-4 text-zinc-500" />
                </h2>

                <div className="space-y-8">
                  {/* Experience 1: Dicoding */}
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <h3 className="text-base font-bold text-zinc-950">AI & Technical Mentor</h3>
                        <p className="text-sm font-semibold text-zinc-700 italic">Dicoding Indonesia</p>
                      </div>
                      <div className="text-xs font-semibold text-zinc-500 sm:text-right">
                        <span>05/2026 – 10/2026</span>
                        <span className="block text-zinc-400">Bandung</span>
                      </div>
                    </div>
                    <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm text-zinc-700 leading-relaxed">
                      <li>
                        Mentored 30+ developers and tech professionals under IBM SkillsBuild & DBS Foundation programs in Python backend logic, predictive analytics, and machine learning architecture.
                      </li>
                      <li>
                        Conducted technical code reviews on model training workflows, API integrations, and cloud deployments.
                      </li>
                    </ul>
                  </div>

                  {/* Experience 2: PT Dirgantara Indonesia */}
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <h3 className="text-base font-bold text-zinc-950">Supply Chain Operations Administrator</h3>
                        <p className="text-sm font-semibold text-zinc-700 italic">PT DIRGANTARA INDONESIA (Indonesian Aerospace)</p>
                      </div>
                      <div className="text-xs font-semibold text-zinc-500 sm:text-right">
                        <span>02/2019 – Present</span>
                        <span className="block text-zinc-400">Bandung, Indonesia</span>
                      </div>
                    </div>
                    <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm text-zinc-700 leading-relaxed">
                      <li>
                        Mapped and standardized end-to-end operational workflows, collaborating with cross-functional stakeholders to define business requirements (BRD) and functional specifications for internal inventory systems.
                      </li>
                      <li>
                        Utilized SQL (DML commands: SELECT, INSERT, UPDATE) to validate operational database records, perform data reconciliations, and mitigate reporting errors by ~20%.
                      </li>
                      <li>
                        Facilitated full-cycle software development implementation (SDLC), actively coordinating System Integration Testing (SIT) and supporting User Acceptance Testing (UAT) with operational end-users to ensure solution readiness.
                      </li>
                      <li>
                        Analyzed material usage patterns and inventory turnover to support demand planning and operational efficiency.
                      </li>
                    </ul>
                  </div>

                  {/* Experience 3: Fydemy */}
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <h3 className="text-base font-bold text-zinc-950">Community Lead & Technical Contributor</h3>
                        <p className="text-sm font-semibold text-zinc-700 italic">Fydemy</p>
                      </div>
                      <div className="text-xs font-semibold text-zinc-500 sm:text-right">
                        <span>01/2026 – 09/2026</span>
                        <span className="block text-zinc-400">Singapore</span>
                      </div>
                    </div>
                    <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm text-zinc-700 leading-relaxed">
                      <li>
                        Developed Python-based data automation scripts and mentored technical talents on workflow efficiency and API integrations.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section: Education */}
              <div className="space-y-6">
                <h2 className="text-base font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-200 pb-1.5 flex items-center justify-between">
                  <span>Education</span>
                  <GraduationCap className="w-4 h-4 text-zinc-500" />
                </h2>

                <div className="space-y-6">
                  {/* UT */}
                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <h3 className="text-base font-bold text-zinc-950">
                          Bachelor of Science (S.1) in Information Systems (Last Year Student)
                        </h3>
                        <p className="text-sm font-semibold text-zinc-700 italic">Universitas Terbuka</p>
                      </div>
                      <div className="text-xs font-semibold text-zinc-500 sm:text-right">
                        <span>2023 – Present</span>
                        <span className="block text-zinc-400">Bandung, Indonesia</span>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-600">
                      <span className="font-semibold text-zinc-800">Relevant Coursework:</span> Systems Analysis & Design, Database Management Systems, Data Networks.
                    </p>
                  </div>

                  {/* Dicoding Learning Path */}
                  <div className="space-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <h3 className="text-base font-bold text-zinc-950">
                          Machine Learning & Data Developer Learning Path (Online)
                        </h3>
                        <p className="text-sm font-semibold text-zinc-700 italic">Dicoding Indonesia</p>
                      </div>
                      <div className="text-xs font-semibold text-zinc-500 sm:text-right">
                        <span>Online Academy</span>
                      </div>
                    </div>
                    <p className="text-sm text-zinc-600">
                      <span className="font-semibold text-zinc-800">Focus:</span> Predictive Analytics, Data Processing (Python), & Applied System Architecture.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section: Relevant Projects (Portfolio) */}
              <div className="space-y-6">
                <h2 className="text-base font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-200 pb-1.5 flex items-center justify-between">
                  <span>Relevant Projects (Portfolio)</span>
                  <Cpu className="w-4 h-4 text-zinc-500" />
                </h2>

                <div className="space-y-6">
                  {/* Oziktag */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-zinc-950">
                        Oziktag — <span className="font-normal text-zinc-700">Supply Chain Visual QC & Digital Trust Platform</span>
                      </h3>
                      <a href="https://www.oziktag.my.id" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-950">
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                    <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm text-zinc-700 leading-relaxed">
                      <li>
                        Designed an AI visual verification system integrating Multimodal RAG and Computer Vision to automate package damage inspection and eliminate transit dispute claims by up to 95%.
                      </li>
                      <li>
                        Built an automated Agentic decision loop analyzing package condition snapshots in real time, generating contextual quality summaries, and triggering dynamic escrow releases via API integrations.
                      </li>
                      <li>
                        Awarded <span className="font-semibold text-zinc-950">Top 15 Finalist at BNI Spark Hackathon 2026</span> for innovative middleware architecture combining AI visual inspection and dynamic digital trust seals.
                      </li>
                    </ul>
                  </div>

                  {/* OtaruChain */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-zinc-950">
                        OtaruChain — <span className="font-normal text-zinc-700">Multimodal Document Intelligence & Transparent Credit Scoring API</span>
                      </h3>
                      <a href="https://otaruchain.id" target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-zinc-950">
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                    <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm text-zinc-700 leading-relaxed">
                      <li>
                        Engineered an automated financial document extraction pipeline using Gemini 2.5 Flash to extract receipt text and detect visual fraud anomalies (mark-ups, counterfeit claims) with real-time screening.
                      </li>
                      <li>
                        Implemented an interpretable Adaptive Credit Scoring Engine powered by Logistic Regression and Human-in-the-Loop (HITL) validation, outputting auditable Trust Grades for liquidity risk mitigation.
                      </li>
                      <li>
                        Architected a microservices backend featuring a Telegram Bot interface, privacy-preserving Phone Whitelist (UU PDP compliance), and tamper-evident data logging via Supa Ledger (PostgreSQL & SHA-256).
                      </li>
                      <li>
                        Recognized as <span className="font-semibold text-zinc-950">Finalist at BRIN AIDEANATION 2026</span> and <span className="font-semibold text-zinc-950">Semifinalist at Bank Indonesia Innovation Competition</span>.
                      </li>
                    </ul>
                  </div>

                  {/* OzikSustain */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-zinc-950">
                        OzikSustain — <span className="font-normal text-zinc-700">AI-Powered ESG Compliance & Regulatory Assessment Engine</span>
                      </h3>
                    </div>
                    <ul className="list-disc list-outside pl-5 space-y-1.5 text-sm text-zinc-700 leading-relaxed">
                      <li>
                        Architected a hybrid Generative AI assessment pipeline combining fine tuned IndoBERT embeddings and Claude 3.5 Sonnet for automated regulatory document mapping and multi-pillar ESG compliance scoring.
                      </li>
                      <li>
                        Engineered an Agentic retrieval pipeline utilizing Supabase pgvector and semantic legal APIs (Pasal.id), achieving {"<"}24-hour delivery turnaround and reducing legacy audit costs by 85%.
                      </li>
                      <li>
                        Implemented automated PII redaction and cryptographic HMAC-SHA256 audit logging to guarantee zero data leakage and prevent greenwashing across enterprise procurement workflows.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section: Technical Skills */}
              <div className="space-y-6">
                <h2 className="text-base font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-200 pb-1.5 flex items-center justify-between">
                  <span>Technical Skills</span>
                  <Cpu className="w-4 h-4 text-zinc-500" />
                </h2>

                <div className="grid sm:grid-cols-2 gap-6 text-sm">
                  <div className="space-y-2">
                    <h3 className="font-bold text-zinc-950">AI & Machine Learning</h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Generative AI, Agentic AI, LLMOps, Retrieval-Augmented Generation (RAG), Fine-Tuned NLP (IndoBERT), Computer Vision, Multimodal Models, Prompt Engineering & Chaining, Prompt Flow.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bold text-zinc-950">Programming & Cloud</h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Python, Microsoft Azure (Azure OpenAI / Cognitive Services), Docker, RESTful APIs, Next.js, Go.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bold text-zinc-950">Databases & Vector Stores</h3>
                    <p className="text-zinc-600 leading-relaxed">
                      PostgreSQL, pgvector, Supabase, Prisma, SQL (Query Optimization & Validation).
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bold text-zinc-950">Frameworks & Architecture</h3>
                    <p className="text-zinc-600 leading-relaxed">
                      Human-in-the-Loop (HITL) Workflows, Cryptographic Integrity (HMAC-SHA256), SDLC (Agile), Microservices Architecture.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section: Honors & Competitions */}
              <div className="space-y-4">
                <h2 className="text-base font-bold uppercase tracking-wider text-zinc-950 border-b border-zinc-200 pb-1.5 flex items-center justify-between">
                  <span>Honors & Competitions</span>
                  <Award className="w-4 h-4 text-zinc-500" />
                </h2>

                <ul className="space-y-2.5 text-sm text-zinc-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-2"></span>
                    <span>
                      <strong className="font-bold text-zinc-950">Finalist</strong>, BRIN Aidenation (OtaruChain Project) — AI Document Intelligence & Risk Engine
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-2"></span>
                    <span>
                      <strong className="font-bold text-zinc-950">Semifinalist</strong>, Bank Indonesia Innovation Competition — OtaruChain Project (Multimodal Document Intelligence & Transparent Credit Scoring API)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-2"></span>
                    <span>
                      <strong className="font-bold text-zinc-950">Top 15</strong>, BNI Spark Hackathon 2026 (Oziktag Project) — Visual QC & Digital Supply Chain Platform
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-2"></span>
                    <span>
                      <strong className="font-bold text-zinc-950">Top 11</strong>, ZTE X ITB — OzikNTN Project (Cold-Chain Supply Chain Platform for 3T Regions)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-2"></span>
                    <span>
                      <strong className="font-bold text-zinc-950">Semifinalist</strong>, PLN SustainAction — OzikSustain Project (Smart Energy & Sustainability Management Platform)
                    </span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Bottom Contact / Direct Download Callout */}
            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <h3 className="text-lg font-bold text-zinc-950">Interested in collaboration or career opportunities?</h3>
                <p className="text-sm text-zinc-600">
                  Reach out directly via email or download a PDF copy of the CV for recruitment processes.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="px-4 py-2.5 bg-white border border-zinc-300 rounded-lg text-sm font-semibold text-zinc-800 hover:bg-zinc-100 transition-colors flex items-center gap-2"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? "Email Copied!" : "Copy Email"}</span>
                </button>
                <a
                  href={pdfUrl}
                  download="OKI_TARUNA_RAMADHAN_Resume.pdf"
                  className="px-5 py-2.5 bg-zinc-950 text-white rounded-lg text-sm font-semibold hover:bg-zinc-800 transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
