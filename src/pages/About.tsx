import { Mail, Linkedin, Github, FileText, Download, Briefcase, GraduationCap, Award, Phone, MapPin, CheckCircle2, Sparkles, Terminal, Database, Server } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const pdfUrl = "/cv/OKI_TARUNA_RAMADHAN_FlowCV_Resume_2026-10-17-1.pdf";

  return (
    <div className="min-h-screen bg-white text-zinc-950 pb-20">
      {/* Hero Intro */}
      <section className="section-padding bg-white border-b border-zinc-200/80">
        <div className="container-custom max-w-4xl space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-900 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-zinc-950"></span>
            <span>Profil Profesional & CV</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-zinc-950">
            Oki Taruna Ramadhan
          </h1>

          <p className="text-lg md:text-xl font-semibold text-zinc-700 leading-snug">
            Supply Chain Operation & IT Specialist | Generative AI, Agentic Workflows & Enterprise Systems
          </p>

          <p className="text-base text-zinc-600 leading-relaxed">
            Mahasiswa tingkat akhir Sistem Informasi di Universitas Terbuka dengan rekam jejak lebih dari <strong>7 tahun di PT Dirgantara Indonesia (Indonesian Aerospace)</strong> dalam merestrukturisasi alur kerja operasional, audit risiko inventaris, dan kepatuhan sistem. Memiliki keahlian teruji dalam arsitektur Generative AI, alur kerja Agentic, LLMOps, serta deployment cloud berskala industri.
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
            <Link
              to="/cv"
              className="px-6 py-3 bg-zinc-950 text-white rounded-xl font-semibold hover:bg-zinc-800 transition-all text-sm flex items-center gap-2 shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Cek Dokumen CV Lengkap</span>
            </Link>

            <a
              href={pdfUrl}
              download="OKI_TARUNA_RAMADHAN_Resume.pdf"
              className="px-5 py-3 bg-white border border-zinc-300 text-zinc-900 rounded-xl font-semibold hover:bg-zinc-50 transition-all text-sm flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Unduh PDF (94.5 KB)</span>
            </a>

            <a
              href="mailto:okitarunaramadhan@gmail.com"
              className="px-5 py-3 bg-zinc-100 text-zinc-800 rounded-xl font-semibold hover:bg-zinc-200 transition-all text-sm flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Kirim Email</span>
            </a>
          </div>

          {/* Contact Strip */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 text-xs font-medium text-zinc-600 border-t border-zinc-100">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-zinc-950" />
              <span>Bandung, Indonesia</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-zinc-950" />
              <span>085797968246</span>
            </span>
            <a
              href="https://linkedin.com/in/otaruram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-zinc-950 hover:underline"
            >
              <Linkedin className="w-3.5 h-3.5 text-zinc-950" />
              <span>linkedin.com/in/otaruram</span>
            </a>
            <a
              href="https://github.com/otaruram"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-zinc-950 hover:underline"
            >
              <Github className="w-3.5 h-3.5 text-zinc-950" />
              <span>github.com/otaruram</span>
            </a>
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="section-padding bg-zinc-50/60 border-b border-zinc-200/80">
        <div className="container-custom max-w-4xl space-y-10">
          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-zinc-950">Rekam Jejak Profesional</h2>
            <p className="text-sm text-zinc-600">Disusun berdasarkan kronologi pengalaman yang tertera di dokumen CV resmi.</p>
          </div>

          <div className="space-y-8 pl-6 border-l-2 border-zinc-300">
            {/* Dicoding */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-950 ring-4 ring-white"></div>
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1">05/2026 – 10/2026 • BANDUNG</span>
              <h3 className="text-lg font-bold text-zinc-950">AI & Technical Mentor</h3>
              <p className="text-sm font-semibold text-zinc-700 mb-2">Dicoding Indonesia</p>
              <ul className="list-disc list-outside pl-4 space-y-1 text-sm text-zinc-600 leading-relaxed">
                <li>Mementori 30+ developer dan profesional teknologi di bawah program IBM SkillsBuild & DBS Foundation programs dalam logika backend Python, predictive analytics, dan machine learning architecture.</li>
                <li>Mengadakan technical code review pada workflow pelatihan model, integrasi API, dan deployment cloud.</li>
              </ul>
            </div>

            {/* PT Dirgantara Indonesia */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-950 ring-4 ring-white"></div>
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1">02/2019 – SEKARANG • BANDUNG, INDONESIA</span>
              <h3 className="text-lg font-bold text-zinc-950">Supply Chain Operations Administrator</h3>
              <p className="text-sm font-semibold text-zinc-700 mb-2">PT DIRGANTARA INDONESIA (Indonesian Aerospace)</p>
              <ul className="list-disc list-outside pl-4 space-y-1 text-sm text-zinc-600 leading-relaxed">
                <li>Memetakan dan menstandarisasi workflow operasional end-to-end, berkolaborasi dengan stakeholder lintas fungsi untuk menentukan BRD dan spesifikasi fungsional sistem inventaris internal.</li>
                <li>Menggunakan SQL (DML commands: SELECT, INSERT, UPDATE) untuk validasi record database operasional, rekonsiliasi data, dan menekan reporting error hingga ~20%.</li>
                <li>Memfasilitasi implementasi siklus penuh SDLC secara aktif, mengoordinasikan System Integration Testing (SIT) dan mendampingi User Acceptance Testing (UAT) bersama pengguna operasional akhir.</li>
                <li>Menganalisis pola penggunaan material dan turnover inventaris guna mendukung demand planning serta efisiensi operasional.</li>
              </ul>
            </div>

            {/* Fydemy */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-950 ring-4 ring-white"></div>
              <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider block mb-1">01/2026 – 09/2026 • SINGAPORE</span>
              <h3 className="text-lg font-bold text-zinc-950">Community Lead & Technical Contributor</h3>
              <p className="text-sm font-semibold text-zinc-700 mb-2">Fydemy</p>
              <ul className="list-disc list-outside pl-4 space-y-1 text-sm text-zinc-600 leading-relaxed">
                <li>Mengembangkan skrip otomasi data berbasis Python dan membimbing talenta teknis seputar efisiensi workflow kerja dan integrasi API.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Skills Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl space-y-12">
          {/* Education */}
          <div className="space-y-6">
            <div className="border-b border-zinc-200 pb-3 flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-zinc-950">Pendidikan</h2>
              <GraduationCap className="w-5 h-5 text-zinc-500" />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-6 bg-zinc-50 border border-zinc-200/80 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-zinc-500">2023 – SEKARANG • BANDUNG</span>
                <h3 className="text-base font-bold text-zinc-950">S1 Sistem Informasi (Mahasiswa Tingkat Akhir)</h3>
                <p className="text-sm font-semibold text-zinc-700">Universitas Terbuka</p>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Mata Kuliah Relevan: Analisis & Perancangan Sistem, Sistem Manajemen Basis Data, Jaringan Data.
                </p>
              </div>

              <div className="p-6 bg-zinc-50 border border-zinc-200/80 rounded-2xl space-y-2">
                <span className="text-xs font-bold text-zinc-500">ONLINE ACADEMY</span>
                <h3 className="text-base font-bold text-zinc-950">Machine Learning & Data Developer Learning Path</h3>
                <p className="text-sm font-semibold text-zinc-700">Dicoding Indonesia</p>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Fokus: Predictive Analytics, Pemrosesan Data (Python), & Arsitektur Sistem Terapan.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills Arsenal */}
          <div className="space-y-6">
            <div className="border-b border-zinc-200 pb-3 flex items-center justify-between">
              <h2 className="text-2xl font-extrabold text-zinc-950">Engineering Arsenal & Keahlian Teknis</h2>
              <Server className="w-5 h-5 text-zinc-500" />
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-zinc-200 rounded-2xl space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-zinc-900" />
                  <h3 className="font-bold text-zinc-950 text-sm">AI & Machine Learning</h3>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Generative AI, Agentic AI, LLMOps, Retrieval-Augmented Generation (RAG), Fine-Tuned NLP (IndoBERT), Computer Vision, Multimodal Models, Prompt Engineering & Chaining, Prompt Flow.
                </p>
              </div>

              <div className="p-6 bg-white border border-zinc-200 rounded-2xl space-y-3">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-zinc-900" />
                  <h3 className="font-bold text-zinc-950 text-sm">Programming & Cloud</h3>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Python, Microsoft Azure (Azure OpenAI / Cognitive Services), Docker, RESTful APIs, Next.js, Go.
                </p>
              </div>

              <div className="p-6 bg-white border border-zinc-200 rounded-2xl space-y-3">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-zinc-900" />
                  <h3 className="font-bold text-zinc-950 text-sm">Databases & Vector Stores</h3>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  PostgreSQL, pgvector, Supabase, Prisma, SQL (Query Optimization & Validation).
                </p>
              </div>

              <div className="p-6 bg-white border border-zinc-200 rounded-2xl space-y-3">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-zinc-900" />
                  <h3 className="font-bold text-zinc-950 text-sm">Frameworks & Architecture</h3>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Human-in-the-Loop (HITL) Workflows, Cryptographic Integrity (HMAC-SHA256), SDLC (Agile), Microservices Architecture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
