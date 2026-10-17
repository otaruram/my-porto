import { ExternalLink, Github, Code2, Shield, Rocket, Mail, Linkedin, FileText, Download, CheckCircle2, Award, Database, Cpu, Sparkles, Terminal, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";

const Home = () => {
  const pdfUrl = "/cv/OKI_TARUNA_RAMADHAN_FlowCV_Resume_2026-10-17-1.pdf";

  return (
    <div className="min-h-screen bg-white text-zinc-950">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center section-padding relative overflow-hidden bg-white">
        {/* Subtle geometric grid background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none"></div>

        <div className="container-custom text-center space-y-8 animate-fade-up relative z-10 max-w-4xl pt-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 text-zinc-800 text-xs font-semibold tracking-wide shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block"></span>
            <span>Cek CV Lengkap Terlampir</span>
            <span className="text-zinc-400">•</span>
            <span className="text-zinc-600">Bandung, Indonesia</span>
          </div>

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
            Mahasiswa tingkat akhir Sistem Informasi dengan spesialisasi dalam merancang <strong>Generative AI pipelines</strong>, <strong>Agentic workflows</strong>, dan sistem otomatisasi cerdas. Menggabungkan <strong>7+ tahun pengalaman optimasi sistem operasional di PT Dirgantara Indonesia (Indonesian Aerospace)</strong> dengan keahlian engineering modern (Multimodal RAG, LLMOps, IndoBERT, Claude 3.5, Gemini, Azure AI, dan pgvector).
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center pt-4">
            <Link
              to="/cv"
              className="w-full sm:w-auto px-7 py-3.5 bg-zinc-950 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-all text-sm tracking-wide flex items-center justify-center gap-2 shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Cek CV & Resume Resmi</span>
            </Link>

            <a
              href={pdfUrl}
              download="OKI_TARUNA_RAMADHAN_Resume.pdf"
              className="w-full sm:w-auto px-6 py-3.5 bg-white border border-zinc-300 text-zinc-900 rounded-xl font-semibold hover:bg-zinc-50 hover:border-zinc-400 transition-all text-sm tracking-wide flex items-center justify-center gap-2 shadow-2xs"
            >
              <Download className="w-4 h-4" />
              <span>Unduh PDF CV</span>
            </a>

            <a
              href="mailto:okitarunaramadhan@gmail.com"
              className="w-full sm:w-auto px-6 py-3.5 bg-zinc-100 text-zinc-800 rounded-xl font-semibold hover:bg-zinc-200 transition-all text-sm tracking-wide flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Kontak Saya</span>
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
            <div className="p-4 bg-zinc-50 border border-zinc-200/80 rounded-xl">
              <span className="text-2xl font-black text-zinc-950 block">7+ Thn</span>
              <span className="text-xs text-zinc-600 font-medium">Operasional PT Dirgantara</span>
            </div>
            <div className="p-4 bg-zinc-50 border border-zinc-200/80 rounded-xl">
              <span className="text-2xl font-black text-zinc-950 block">30+</span>
              <span className="text-xs text-zinc-600 font-medium">Talenta Dimentor di Dicoding</span>
            </div>
            <div className="p-4 bg-zinc-50 border border-zinc-200/80 rounded-xl">
              <span className="text-2xl font-black text-zinc-950 block">Top 15</span>
              <span className="text-xs text-zinc-600 font-medium">BNI Spark Hackathon 2026</span>
            </div>
            <div className="p-4 bg-zinc-50 border border-zinc-200/80 rounded-xl">
              <span className="text-2xl font-black text-zinc-950 block">5+</span>
              <span className="text-xs text-zinc-600 font-medium">Penghargaan Nasional</span>
            </div>
          </div>
        </div>
      </section>

      {/* CV Callout Spotlight Section */}
      <section className="section-light section-padding">
        <div className="container-custom max-w-5xl">
          <div className="bg-white border-2 border-zinc-900/10 rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 rounded-full text-zinc-900 text-xs font-bold uppercase tracking-wider">
                  <FileText className="w-3.5 h-3.5" />
                  <span>Curriculum Vitae Terlampir</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950 tracking-tight">
                  Tinjau Dokumen CV Lengkap & Rekam Jejak Profesional
                </h2>
                <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                  Dokumen CV resmi mencakup detail pengalaman di PT DIRGANTARA INDONESIA, mentoring di Dicoding Indonesia (IBM SkillsBuild & DBS Foundation), proyek AI unggulan (Oziktag, OtaruChain, OzikSustain), hingga daftar penghargaan nasional.
                </p>
                <div className="flex flex-wrap gap-2 pt-1 text-xs text-zinc-500 font-medium">
                  <span className="px-2.5 py-1 bg-zinc-100 rounded-md">Format: PDF (2 Halaman)</span>
                  <span className="px-2.5 py-1 bg-zinc-100 rounded-md">Ukuran: 94.5 KB</span>
                  <span className="px-2.5 py-1 bg-zinc-100 rounded-md">Diperbarui: 2026</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
                <Link
                  to="/cv"
                  className="px-6 py-3.5 bg-zinc-950 text-white font-semibold text-sm rounded-xl hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <FileText className="w-4 h-4" />
                  <span>Buka Halaman CV</span>
                </Link>
                <a
                  href={pdfUrl}
                  download="OKI_TARUNA_RAMADHAN_Resume.pdf"
                  className="px-6 py-3.5 bg-white border border-zinc-300 text-zinc-900 font-semibold text-sm rounded-xl hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Unduh File PDF</span>
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
            <h2 className="section-title text-zinc-950">Keahlian & Kompetensi Teknis</h2>
            <p className="text-zinc-600 text-sm md:text-base max-w-2xl mx-auto">
              Kombinasi keahlian operasional mendalam dan arsitektur AI modern sesuai ringkasan CV resmi.
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
                Generative AI, Agentic AI, LLMOps, Multimodal RAG, Fine-Tuned NLP (IndoBERT), Computer Vision, Prompt Engineering & Chaining, Prompt Flow.
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
                Python, Microsoft Azure (Azure OpenAI / Cognitive Services), Docker, RESTful APIs, Next.js, Go. Scalable deployment dan microservices.
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
                PostgreSQL, pgvector, Supabase, Prisma, SQL (Query Optimization), Human-in-the-Loop (HITL), Cryptographic Integrity (HMAC-SHA256), SDLC Agile.
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
              <h2 className="section-title text-zinc-950">Portofolio & Proyek Relevan</h2>
              <p className="text-zinc-600 text-sm md:text-base max-w-2xl">
                Sistem AI dan arsitektur perangkat lunak yang tercantum pada dokumen CV resmi.
              </p>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-zinc-900 hover:text-zinc-600 transition-colors"
            >
              <span>Lihat Detail Semua Proyek</span>
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
                      Merancang sistem verifikasi visual AI mengintegrasikan <strong>Multimodal RAG</strong> dan <strong>Computer Vision</strong> untuk mengotomatisasi inspeksi kerusakan paket serta mengeliminasi sengketa transit hingga 95%.
                    </li>
                    <li>
                      Membangun <strong>automated Agentic decision loop</strong> yang menganalisis snapshot kondisi paket secara real-time, menghasilkan ringkasan kualitas kontekstual, dan memicu pelepasan escrow dinamis via integrasi API.
                    </li>
                    <li>
                      Mendapat penghargaan <strong>Top 15 Finalist di BNI Spark Hackathon 2026</strong> untuk arsitektur middleware inovatif yang menggabungkan inspeksi visual AI dengan digital trust seals.
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
                      Mengembangkan pipeline ekstraksi dokumen finansial otomatis menggunakan <strong>Gemini 2.5 Flash</strong> untuk mengekstrak teks nota dan mendeteksi anomali fraud visual (mark-up, klaim palsu) dengan screening real-time.
                    </li>
                    <li>
                      Mengimplementasikan Adaptive Credit Scoring Engine berbasis <strong>Logistic Regression</strong> dan <strong>Human-in-the-Loop (HITL)</strong> validation yang menghasilkan Trust Grades ter-audit untuk mitigasi risiko likuiditas.
                    </li>
                    <li>
                      Mengarsiteki backend microservices dengan antarmuka Telegram Bot, whitelist nomor telepon patuh <strong>UU PDP</strong>, dan pencatatan data anti-manipulasi via Supa Ledger (PostgreSQL & SHA-256).
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
                      Mengarsiteki pipeline asesmen Generative AI hibrida yang menggabungkan fine-tuned <strong>IndoBERT embeddings</strong> dan <strong>Claude 3.5 Sonnet</strong> untuk pemetaan regulasi otomatis dan skor kepatuhan ESG multi-pilar.
                    </li>
                    <li>
                      Mengembangkan pipeline retrieval Agentic memanfaatkan <strong>Supabase pgvector</strong> dan API hukum semantik (Pasal.id), memangkas waktu penyelesaian hingga {"<"}24 jam dan menurunkan biaya audit warisan sebesar 85%.
                    </li>
                    <li>
                      Menerapkan redaksi PII otomatis dan audit logging kriptografi HMAC-SHA256 untuk menjamin proteksi data tanpa kebocoran dan mencegah greenwashing pada rantai pengadaan perusahaan.
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
                <h2 className="text-2xl font-extrabold text-zinc-950 tracking-tight">Pengalaman Kerja</h2>
                <p className="text-xs text-zinc-500 mt-1">Sesuai data Curriculum Vitae resmi</p>
              </div>

              <div className="space-y-8 relative pl-6 border-l-2 border-zinc-200">
                {/* Dicoding */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 border-white ring-2 ring-zinc-200"></div>
                  <span className="text-xs font-bold text-zinc-500 tracking-wider block mb-1">05/2026 – 10/2026 • BANDUNG</span>
                  <h3 className="text-lg font-bold text-zinc-950">AI & Technical Mentor</h3>
                  <p className="text-sm font-semibold text-zinc-700 mb-2">Dicoding Indonesia</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Mementori 30+ developer dan profesional teknologi di bawah program IBM SkillsBuild & DBS Foundation dalam logika backend Python, analitik prediktif, serta arsitektur machine learning. Mengadakan technical code review pada workflow pelatihan model, integrasi API, dan deployment cloud.
                  </p>
                </div>

                {/* PT Dirgantara Indonesia */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 border-white ring-2 ring-zinc-200"></div>
                  <span className="text-xs font-bold text-zinc-500 tracking-wider block mb-1">02/2019 – SEKARANG • BANDUNG</span>
                  <h3 className="text-lg font-bold text-zinc-950">Supply Chain Operations Administrator</h3>
                  <p className="text-sm font-semibold text-zinc-700 mb-2">PT DIRGANTARA INDONESIA (Indonesian Aerospace)</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Memetakan dan menstandarisasi workflow operasional end-to-end, berkolaborasi dengan stakeholder lintas fungsi untuk menentukan BRD dan spesifikasi sistem inventaris. Menggunakan SQL untuk validasi database operasional dan rekonsiliasi data, mengurangi kesalahan pencatatan hingga ~20%. Memfasilitasi implementasi siklus penuh SDLC (SIT & UAT).
                  </p>
                </div>

                {/* Fydemy */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 border-white ring-2 ring-zinc-200"></div>
                  <span className="text-xs font-bold text-zinc-500 tracking-wider block mb-1">01/2026 – 09/2026 • SINGAPORE</span>
                  <h3 className="text-lg font-bold text-zinc-950">Community Lead & Technical Contributor</h3>
                  <p className="text-sm font-semibold text-zinc-700 mb-2">Fydemy</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Mengembangkan skrip otomasi data berbasis Python dan membimbing talenta teknis seputar efisiensi workflow kerja dan integrasi API.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Honors Column */}
            <div className="space-y-8">
              {/* Education */}
              <div className="space-y-6">
                <div className="border-b border-zinc-200 pb-3">
                  <h2 className="text-2xl font-extrabold text-zinc-950 tracking-tight">Pendidikan & Pelatihan</h2>
                  <p className="text-xs text-zinc-500 mt-1">Latar belakang akademis & sertifikasi</p>
                </div>

                <div className="space-y-4">
                  <div className="p-5 bg-zinc-50 border border-zinc-200/80 rounded-xl space-y-1">
                    <span className="text-xs font-bold text-zinc-500">2023 – SEKARANG • BANDUNG</span>
                    <h3 className="text-base font-bold text-zinc-950">S.1 Sistem Informasi (Mahasiswa Tingkat Akhir)</h3>
                    <p className="text-sm text-zinc-700 font-medium">Universitas Terbuka</p>
                    <p className="text-xs text-zinc-500 pt-1">
                      Mata Kuliah Relevan: Analisis & Perancangan Sistem, Sistem Manajemen Basis Data, Jaringan Data.
                    </p>
                  </div>

                  <div className="p-5 bg-zinc-50 border border-zinc-200/80 rounded-xl space-y-1">
                    <span className="text-xs font-bold text-zinc-500">ONLINE ACADEMY</span>
                    <h3 className="text-base font-bold text-zinc-950">Machine Learning & Data Developer Learning Path</h3>
                    <p className="text-sm text-zinc-700 font-medium">Dicoding Indonesia</p>
                    <p className="text-xs text-zinc-500 pt-1">
                      Fokus: Predictive Analytics, Data Processing (Python), & Applied System Architecture.
                    </p>
                  </div>
                </div>
              </div>

              {/* Honors & Competitions */}
              <div className="space-y-6">
                <div className="border-b border-zinc-200 pb-3">
                  <h2 className="text-2xl font-extrabold text-zinc-950 tracking-tight">Penghargaan & Kompetisi</h2>
                  <p className="text-xs text-zinc-500 mt-1">Pencapaian hackathon & inovasi AI</p>
                </div>

                <div className="space-y-2.5">
                  {[
                    { label: "Finalist", event: "BRIN Aidenation (OtaruChain Project)", desc: "AI Document Intelligence & Risk Engine" },
                    { label: "Semifinalist", event: "Bank Indonesia Innovation Competition", desc: "OtaruChain Project (Multimodal Document Intelligence & Scoring)" },
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

            <div className="flex items-center gap-3">
              <Link
                to="/cv"
                className="px-4 py-2 bg-zinc-950 text-white rounded-lg text-xs font-semibold hover:bg-zinc-800 transition-colors flex items-center gap-1.5"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Lihat CV</span>
              </Link>
              <a
                href={pdfUrl}
                download="OKI_TARUNA_RAMADHAN_Resume.pdf"
                className="px-4 py-2 bg-zinc-100 text-zinc-900 rounded-lg text-xs font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-1.5 border border-zinc-200"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh PDF</span>
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
            <span>CV & Dokumen Portofolio Resmi</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
