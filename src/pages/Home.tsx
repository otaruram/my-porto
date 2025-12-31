import { ExternalLink, Github, Code2, Sparkles, Rocket, Mail, Linkedin, ChevronDown } from "lucide-react";
import heroImage from "@/assets/c.jpg";
import { useEffect, useState } from "react";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [showImageModal, setShowImageModal] = useState(false);
  const fullText = "Engineer yang membangun sistem AI end-to-end";

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

          <h1 className="hero-title">
            Oki Taruna Ramadhan
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto min-h-[2em]">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>

          <div className="flex gap-4 justify-center pt-4">
            <a href="https://linkedin.com/in/otaruram" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg link-hover hover:scale-105 transition-transform">
              LinkedIn
            </a>
          </div>

          <div className="pt-12 animate-float">
            <ChevronDown className="w-8 h-8 mx-auto text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-light section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-foreground rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              About Me
            </div>

            <h2 className="section-title">
              Membangun Sistem AI<br />yang Memecahkan Masalah Nyata
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Membangun sistem AI praktis seperti <span className="text-foreground font-semibold">BERASKU</span> untuk computer vision,
              <span className="text-foreground font-semibold">OCR.wtf</span> untuk document scanning, dan{" "}
              <span className="text-foreground font-semibold">Gudangku</span> untuk logistics management.
              Menggunakan TensorFlow.js, Node.js, dan LLM untuk solusi end-to-end.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {["TensorFlow.js", "Node.js", "React", "LLM"].map((skill, i) => (
                <div key={i} className="p-4 bg-background rounded-lg border border-border hover:border-foreground hover:scale-105 transition-all cursor-pointer">
                  <Code2 className="w-6 h-6 text-foreground mx-auto mb-2" />
                  <p className="text-sm font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-dark section-padding">
        <div className="container-custom space-y-16">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 text-foreground rounded-full text-sm font-medium">
              <Rocket className="w-4 h-4" />
              Featured Projects
            </div>
            <h2 className="section-title">Proyek Unggulan</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* BERASKU */}
            <div className="project-card">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-foreground" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">BERASKU</h3>
                  <p className="text-sm text-muted-foreground mb-3">Hybrid AI Computer Vision</p>
                  <p className="text-muted-foreground">
                    End-to-End Computer Vision System dengan TensorFlow.js dan Smart Validation Rules Engine untuk Risk & Fraud Detection.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="tag">TensorFlow.js</span>
                  <span className="tag">Computer Vision</span>
                  <span className="tag">React</span>
                </div>

                <div className="flex gap-3 pt-2">
                  <a href="https://berasku.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm link-hover flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                  <a href="https://github.com/otaruram/Berasku" target="_blank" rel="noopener noreferrer" className="text-sm link-hover flex items-center gap-1">
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </div>

            {/* OCR.WTF */}
            <div className="project-card">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-foreground" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">OCR.WTF</h3>
                  <p className="text-sm text-muted-foreground mb-3">Omni Scan Suite</p>
                  <p className="text-muted-foreground">
                    Platform AI OCR dengan Tesseract, GPT-4o-mini, dan Groq Llama 3. Auto-correction dengan sync ke Google Drive.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="tag">AI OCR</span>
                  <span className="tag">GPT-4o</span>
                  <span className="tag">Groq</span>
                </div>

                <div className="flex gap-3 pt-2">
                  <a href="https://ocr.wtf" target="_blank" rel="noopener noreferrer" className="text-sm link-hover flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                  <a href="https://github.com/otaruram/Logistic-Dokumen" target="_blank" rel="noopener noreferrer" className="text-sm link-hover flex items-center gap-1">
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </div>

            {/* GUDANGKU */}
            <div className="project-card">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-foreground" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">GUDANGKU</h3>
                  <p className="text-sm text-muted-foreground mb-3">Intelligent Logistics</p>
                  <p className="text-muted-foreground">
                    Sistem manajemen logistik dengan Sales Forecasting (Prophet ML), AI Document Assistant (Groq LLaMA + RAG).
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="tag">Prophet ML</span>
                  <span className="tag">LLaMA</span>
                  <span className="tag">RAG</span>
                </div>

                <div className="flex gap-3 pt-2">
                  <a href="https://gudangku.space" target="_blank" rel="noopener noreferrer" className="text-sm link-hover flex items-center gap-1">
                    <ExternalLink className="w-4 h-4" /> Demo
                  </a>
                  <a href="https://github.com/otaruram/gudangku-ai-core-main" target="_blank" rel="noopener noreferrer" className="text-sm link-hover flex items-center gap-1">
                    <Github className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </div>
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
      <section className="section-light section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="section-title text-center">Experience</h2>

            <div className="p-8 bg-background rounded-lg border border-border hover:border-foreground hover:scale-105 transition-all cursor-pointer">
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold">Profesional Operasional</h3>
                  <p className="text-foreground font-medium">PT Dirgantara Indonesia (Indonesian Aerospace)</p>
                  <p className="text-sm text-muted-foreground">Feb 2019 - Sekarang · 6 thn 10 bln · Bandung, Indonesia</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Mengawasi kelancaran operasional dan kesejahteraan karyawan, memastikan pelaksanaan tugas yang lancar
                  dan berkontribusi signifikan terhadap kesuksesan perusahaan.
                </p>
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
