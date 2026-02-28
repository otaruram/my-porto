import { ExternalLink, Github, Code2, Sparkles, Rocket, Mail, Linkedin, ChevronDown } from "lucide-react";
import heroImage from "@/assets/c.jpg";
import { useEffect, useState } from "react";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [showImageModal, setShowImageModal] = useState(false);
  const fullText = "Menjembatani model Machine Learning dengan solusi operasional yang scalable.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Image Modal */}
      {showImageModal && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowImageModal(false)}
        >
          <div className="relative max-w-2xl w-full">
            <img
              src={heroImage}
              alt="Oki Taruna Ramadhan"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center font-bold hover:bg-gray-200 transition-colors"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Hero Section - Full Height */}
      <section className="min-h-screen flex items-center justify-center section-dark section-padding">
        <div className="container-custom text-center space-y-8 animate-fade-up">
          <div
            className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden image-glow cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setShowImageModal(true)}
          >
            <img src={heroImage} alt="Oki" className="w-full h-full object-cover" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-foreground">
            Building End-to-End AI Systems <br className="hidden lg:block" />
            for Complex Logistics & Vision Problems.
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto min-h-[3em] md:min-h-[2em] font-medium">
            {typedText}
            <span className="animate-pulse text-primary">|</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="#projects" className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)]">
              View Case Studies
            </a>
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg font-semibold hover:bg-secondary/90 hover:scale-105 transition-all">
              Download CV
            </a>
          </div>

          <div className="pt-12 animate-float">
            <ChevronDown className="w-8 h-8 mx-auto text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Tech Stack Vault Section */}
      <section className="section-light section-padding border-y border-border">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-foreground rounded-full text-sm font-medium">
              <Code2 className="w-4 h-4" />
              Tech Stack & Cloud Vault
            </div>
            <h2 className="section-title">The Engineering Arsenal</h2>
          </div>

          <div className="bento-grid">
            {/* AI/ML Frameworks */}
            <div className="bento-card md:col-span-2 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">AI & Machine Learning</h3>
                <p className="text-muted-foreground mb-6">Orkestrasi model AI, LLM, dan Computer Vision untuk sistem on-edge dan cloud.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["TensorFlow.js", "PyTorch", "OpenAI (GPT-4o)", "Groq (Llama 3)", "HuggingFace", "Prophet ML", "LangChain", "RAG"].map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium group-hover:border-primary/50 transition-colors">{tech}</span>
                ))}
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="bento-card flex flex-col justify-between group bg-primary/5 border-primary/20">
              <div>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <Rocket className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Cloud & DevOps</h3>
                <p className="text-muted-foreground mb-6">Membangun infrastruktur yang scalable dan reliable.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Azure", "Docker", "GitHub Actions", "Vercel", "Supabase", "Linux"].map(tech => (
                  <span key={tech} className="px-3 py-1.5 bg-background border border-primary/20 rounded-md text-sm font-medium text-primary shadow-[0_0_10px_rgba(14,165,233,0.1)]">{tech}</span>
                ))}
              </div>
            </div>

            {/* Core Languages & Backend */}
            <div className="bento-card md:col-span-3 flex flex-col sm:flex-row gap-8 items-center group">
              <div className="sm:w-1/3 text-center sm:text-left">
                <h3 className="text-2xl font-bold mb-2">Core Stack</h3>
                <p className="text-muted-foreground">Bahasa pemrograman dan framweork utama untuk membangun sistem end-to-end.</p>
              </div>
              <div className="sm:w-2/3 flex flex-wrap justify-center sm:justify-start gap-4">
                {[
                  { name: "TypeScript", desc: "Typesafe Web" },
                  { name: "Python", desc: "AI / Backend" },
                  { name: "Node.js", desc: "Runtime" },
                  { name: "React / Next.js", desc: "Frontend" },
                  { name: "PostgreSQL", desc: "Database" },
                ].map(tech => (
                  <div key={tech.name} className="flex flex-col items-center sm:items-start p-4 bg-background border border-border rounded-lg min-w-[140px] group-hover:border-foreground/30 transition-colors">
                    <span className="font-bold text-foreground">{tech.name}</span>
                    <span className="text-xs text-muted-foreground">{tech.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-dark section-padding">
        <div className="container-custom space-y-16">
          <div className="text-center space-y-4" id="projects">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-foreground rounded-full text-sm font-medium">
              <Rocket className="w-4 h-4" />
              Featured Case Studies
            </div>
            <h2 className="section-title">The "System Architect" Portfolio</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "BERASKU",
                subtitle: "Hybrid AI Computer Vision",
                image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2000&auto=format&fit=crop",
                url: "https://berasku-zhkp.vercel.app/",
                github: "https://github.com/otaruram/Berasku",
                tags: ["TensorFlow.js", "Computer Vision", "React"],
                problem: "Validasi kualitas beras manual memakan waktu dan rawan error subjektif.",
                solution: "Sistem vision AI edge-based untuk mendeteksi anomali pada beras secara realtime.",
                impact: "Akurasi di atas 90% dengan validasi dalam hitungan detik (Risk & Fraud Detection).",
              },
              {
                title: "OCR.WTF",
                subtitle: "Omni Scan Suite",
                image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2000&auto=format&fit=crop",
                url: "https://ocr.wtf",
                github: "https://github.com/otaruram/Logistic-Dokumen",
                tags: ["AI OCR", "GPT-4o", "Groq"],
                problem: "Ekstraksi data dari bermacam format dokumen tidak terstruktur memakan waktu lama.",
                solution: "Pipeline OCR multi-model (Tesseract, GPT-4o-mini, Llama 3) dengan auto-correction.",
                impact: "Ekstraksi data terstruktur langsung ke Google Drive secara otomatis tanpa manual entry.",
              },
              {
                title: "OCLite",
                subtitle: "AI Agents Platform",
                image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
                url: "https://oclite.site",
                github: "https://github.com/otaruram/AIAAS-oclite-",
                tags: ["Next.js", "AI Agents", "Azure"],
                problem: "Kurangnya platform orkestrasi agen AI lokal yang terintegrasi dengan workflow enterprise.",
                solution: "Sistem AI as a Service (AIaaS) end-to-end sebagai 'brain' untuk pipeline multi-agent.",
                impact: "Mampu melayani eksekusi agen AI terpusat yang bisa dikonsumsi dari berbagai client.",
              },
              {
                title: "OCLite Extension",
                subtitle: "VS Code Tooling",
                image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2000&auto=format&fit=crop",
                url: "https://marketplace.visualstudio.com/items?itemName=oclitesite.oclite-vscode",
                github: "https://github.com/otaruram/oclite-vscode",
                tags: ["TypeScript", "VS Code API", "AI Agent"],
                problem: "Developer kehilangan konteks saat berpindah antara IDE dan platform AI eksternal.",
                solution: "Ekstensi VS Code yang terintegrasi langsung dengan OCLite API untuk asisten pintar.",
                impact: "Meningkatkan produktivitas developer dengan asisten AI yang on-the-fly di dalam editor.",
              }
            ].map((project, idx) => (
              <div key={idx} className="bento-card group flex flex-col p-0 overflow-hidden">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="relative h-64 overflow-hidden block">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-background/50 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="px-3 py-1 bg-black/80 backdrop-blur-md rounded-full text-xs font-semibold text-white flex items-center gap-1 border border-white/20">
                      <ExternalLink className="w-3 h-3" /> Visit UI
                    </span>
                  </div>
                </a>

                <div className="p-6 flex-1 flex flex-col bg-card">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                      <p className="text-primary text-sm font-semibold">{project.subtitle}</p>
                    </div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary/50 rounded-full hover:bg-primary hover:text-white transition-colors" title="View Source Code">
                      <Github className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="space-y-4 mb-6 flex-1">
                    <div>
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Problem</span>
                      <p className="text-sm text-foreground/80">{project.problem}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Solution</span>
                      <p className="text-sm text-foreground/90 font-medium">{project.solution}</p>
                    </div>
                    <div className="pl-4 border-l-2 border-primary bg-primary/5 p-3 rounded-r-lg">
                      <span className="text-xs font-bold text-primary uppercase tracking-wider block mb-1">Impact</span>
                      <p className="text-sm text-foreground font-semibold">{project.impact}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 hover:text-primary transition-colors cursor-default">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}


          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="section-accent section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="section-title">Writing</h2>
              <p className="text-lg text-muted-foreground">Artikel di Medium tentang bisnis dan teknologi</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Strategi Bisnis & Perubahan Trend", url: "https://medium.com/@imardzuki61/bagaimana-cara-memastikan-strategi-bisnis-berjalan-dengan-perubahan-trend-di-masa-depan-fc0a11847a65" },
                { title: "Analisis Model Porter", url: "https://medium.com/@imardzuki61/analisis-model-porter-memahami-faktor-faktor-yang-mempengaruhi-kompetitif-bisnis-28ec7d1bcae5" },
                { title: "Menulis Ringkasan Eksekutif", url: "https://medium.com/@imardzuki61/menulis-ringkasan-eksekutif-yang-efektif-tips-untuk-membangun-kredibilitas-bisnis-4751c8fcbe51" },
                { title: "Digitalisasi Merusak Generasi?", url: "https://medium.com/@imardzuki61/digitalisasi-merusak-generasi-a78b4f7114b2" }
              ].map((article, i) => (
                <a
                  key={i}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-card rounded-lg border border-border hover:border-foreground transition-all group"
                >
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-foreground transition-colors">{article.title}</h3>
                  <span className="text-sm text-muted-foreground flex items-center gap-2">
                    Baca di Medium <ExternalLink className="w-4 h-4" />
                  </span>
                </a>
              ))}
            </div>

            <div className="text-center">
              <a href="https://medium.com/@imardzuki61" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg link-hover font-medium">
                Lihat Semua Artikel <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-dark section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="section-title text-center mb-12">Experience & Impact</h2>

            <div className="relative border-l-2 border-border ml-3 md:ml-6 space-y-12">
              {/* Timeline Item 1 */}
              <div className="relative pl-8 md:pl-0 group">
                <div className="md:hidden absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1 ring-4 ring-background group-hover:scale-125 transition-transform"></div>

                <div className="md:grid md:grid-cols-5 gap-8 items-start">
                  <div className="hidden md:block col-span-1 text-right pt-1 relative">
                    <div className="absolute w-4 h-4 bg-primary rounded-full -right-[25px] top-2 ring-4 ring-background group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
                    <span className="text-sm font-bold text-primary tracking-wider">2019 - Present</span>
                  </div>

                  <div className="md:col-span-4 bg-card border border-border rounded-xl p-6 group-hover:border-primary/50 transition-colors relative">
                    <span className="md:hidden text-xs font-bold text-primary tracking-wider block mb-2">2019 - Present</span>
                    <h3 className="text-xl font-bold mb-1">Profesional Operasional</h3>
                    <p className="text-muted-foreground font-medium text-sm mb-4">PT Dirgantara Indonesia (Indonesian Aerospace)</p>

                    <ul className="space-y-3">
                      <li className="flex gap-3 text-foreground/90 text-sm">
                        <span className="text-primary font-bold mt-0.5">›</span>
                        <span>Meningkatkan efisiensi alur kerja operasional sebesar <strong className="text-white">30%</strong> melalui digitalisasi dan optimasi proses sistematis.</span>
                      </li>
                      <li className="flex gap-3 text-foreground/90 text-sm">
                        <span className="text-primary font-bold mt-0.5">›</span>
                        <span>Mengelola dan mengawasi operasional harian untuk lebih dari <strong className="text-white">500+</strong> karyawan, memastikan kepatuhan standar industri penerbangan.</span>
                      </li>
                      <li className="flex gap-3 text-foreground/90 text-sm">
                        <span className="text-primary font-bold mt-0.5">›</span>
                        <span>Terlibat dalam inisiatif reduksi bottleneck yang mempercepat delivery timeline proyek antar-departemen hingga <strong className="text-white">15%</strong>.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-dark section-padding border-t border-border">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl font-bold">Let's Connect</h3>

            <div className="flex gap-4 justify-center">
              <a href="mailto:okitarunaramadhan@gmail.com" className="p-3 bg-card rounded-lg border border-border hover:border-foreground hover:scale-110 transition-all">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="p-3 bg-card rounded-lg border border-border hover:border-foreground hover:scale-110 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/otaruram" target="_blank" rel="noopener noreferrer" className="p-3 bg-card rounded-lg border border-border hover:border-foreground hover:scale-110 transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-muted-foreground pt-8">
              © 2025 Oki Taruna Ramadhan
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
