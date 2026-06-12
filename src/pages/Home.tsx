import { ExternalLink, Github, Code2, Shield, Rocket, Mail, Linkedin, ChevronDown, Server, Lock } from "lucide-react";
import logoImage from "@/assets/logo.png";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center section-dark section-padding relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none opacity-50"></div>

        <div className="container-custom text-center space-y-8 animate-fade-up relative z-10">
          <div className="w-24 h-24 mx-auto mb-8 rounded-2xl overflow-hidden border border-border/50 bg-card p-1 shadow-sm">
            <img src={logoImage} alt="Oki Taruna Ramadhan Logo" className="w-full h-full object-cover rounded-xl" />
          </div>

          <div className="space-y-4">
            <h2 className="text-sm md:text-base font-semibold tracking-widest text-muted-foreground uppercase">Oki Taruna Ramadhan</h2>
            <h1 className="hero-title text-foreground">
              AI Product Engineer <br className="hidden md:block" />
              <span className="text-muted-foreground">& Security Specialist</span>
            </h1>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            Detail-oriented AI Product Engineer & Security Specialist combining 7+ years of operational, risk audit, and asset management experience at PT Dirgantara Indonesia with strong technical expertise in systems analysis and agile software engineering. Highly proficient in maximizing AI-assisted development (vibe coding workflow) to rapidly build scalable, full-stack applications with elegant, minimalist frontends and robust, secure backend architectures. Specializes in designing data-integrity systems, threat mitigation, and user-centric AI workflows that bridge the gap between complex business requirements and highly secure digital products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <a href="#projects" className="px-8 py-4 bg-foreground text-background rounded-lg font-semibold hover:bg-foreground/90 transition-all text-sm tracking-wide">
              View Case Studies
            </a>
            <a href="mailto:okitarunaramadhan@gmail.com" className="px-8 py-4 bg-transparent border border-border text-foreground rounded-lg font-semibold hover:bg-secondary/50 transition-all text-sm tracking-wide">
              Contact Me
            </a>
          </div>

          <div className="pt-16 animate-pulse">
            <ChevronDown className="w-6 h-6 mx-auto text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Core Skills Section */}
      <section className="section-light section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-16">
            <h2 className="section-title">Core Competencies</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Bridging the gap between intelligent systems and robust, secure infrastructure.</p>
          </div>

          <div className="bento-grid">
            {/* Product Engineering & AI */}
            <div className="bento-card group">
              <div className="w-10 h-10 bg-secondary/50 rounded-lg flex items-center justify-center mb-6 border border-border/50">
                <Code2 className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Product Engineering & AI</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                AI-Assisted Architecture (Vibe Coding), LLMs Integration (Gemini Flash, Claude), Rapid Prototyping, UI/UX Minimalism, Conversational AI, TensorFlow.js (Client-Side Processing).
              </p>
              <div className="flex flex-wrap gap-2">
                {["TensorFlow.js", "Gemini", "Claude", "UI/UX"].map(tech => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Backend & Core Tech */}
            <div className="bento-card group">
              <div className="w-10 h-10 bg-secondary/50 rounded-lg flex items-center justify-center mb-6 border border-border/50">
                <Server className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Backend & Core Tech</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Python, FastAPI, TypeScript, Node.js, JavaScript, PostgreSQL (Supabase), SQL, REST APIs. Building scalable and performant microservices.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "FastAPI", "TypeScript", "PostgreSQL"].map(tech => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Security & Infrastructure */}
            <div className="bento-card group">
              <div className="w-10 h-10 bg-secondary/50 rounded-lg flex items-center justify-center mb-6 border border-border/50">
                <Lock className="w-5 h-5 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">Security & Infrastructure</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Secure Audit Logging, Threat & Incident Analysis, RBAC, Cryptography (SHA-256, AES-256), TLS 1.3, Data Privacy (UU PDP), Docker, Server Administration.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Cryptography", "RBAC", "Docker", "Linux"].map(tech => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-dark section-padding" id="projects">
        <div className="container-custom space-y-16">
          <div className="text-center space-y-4">
            <h2 className="section-title">Featured Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Recent systems focusing on secure data integrity and AI workflows.</p>
          </div>

          <div className="grid md:grid-cols-1 gap-12">
            {[
              {
                title: "Oziktag",
                subtitle: "AI-Powered Digital Trust Seal & Anti-Dispute Shield",
                role: "Lead Product Engineer & Founder",
                link: "https://www.oziktag.my.id",
                description: "Designed and launched a live MVP tailored for MSMEs to mitigate logistics disputes within a friction-free, under-30-second operational workflow. Integrated Gemini Flash to automatically synthesize raw seller inspection notes into interactive AI summaries for consumer verification. Implemented a secure, time-stamped audit log that locks pre-shipping visual proofs, preventing post-print QR code manipulation and establishing clear liability handover checkpoints. Successfully achieved early-stage user adoption with active field testing.",
                stack: ["FastAPI", "Node.js", "Supabase", "Gemini Flash", "Secure Audit Log"]
              },
              {
                title: "OtaruChain",
                subtitle: "Ecosystem Enabler Platform",
                role: "Product Engineer & Security Lead",
                link: "https://otaruchain.id",
                description: "Designed an API-First backend using FastAPI alongside the TypeScript/JavaScript ecosystem, integrating centralized database management (Supabase) to ensure seamless cross-platform data flow. Built automated validation systems using SHA-256 cryptographic hashing dynamically integrated with ImageKit CDN URLs to ensure document authenticity, prevent fraud, and create an immutable audit trail without compromising processing speed. Implemented robust Role-Based Access Control (RBAC) on the React.js Partner Portal and secured data-at-rest via AES-256 and data-in-transit via TLS 1.3.",
                stack: ["FastAPI", "TypeScript", "React.js", "Supabase", "SHA-256", "ImageKit CDN"]
              },
              {
                title: "Berasku",
                subtitle: "AI-Based Rice Variety Identification",
                role: "AI & Security Implementation Engineer",
                link: "#",
                description: "Designed inference workflows utilizing TensorFlow.js (TFJS) for full client-side processing, strictly adhering to Data Minimization principles. Mitigated server-side exposure and safeguarded user data privacy by processing all visual inputs locally within the user's browser. Leveraged Transfer Learning via MobileNetV2 to train an efficient predictive model using a balanced dataset of 75,000 images, exporting the architecture into Saved Model, TFLite, and TFJS formats for versatile, cross-platform deployment.",
                stack: ["TensorFlow.js", "MobileNetV2", "Python", "Client-Side Architecture"]
              }
            ].map((project, idx) => (
              <div key={idx} className="bg-card border border-border/60 rounded-xl p-8 hover:border-border transition-colors">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight mb-1">{project.title}</h3>
                      <p className="text-sm font-medium text-muted-foreground">{project.subtitle}</p>
                    </div>
                    <div className="text-sm font-semibold text-foreground/80 py-1 px-3 bg-secondary/50 rounded-md inline-block">
                      {project.role}
                    </div>
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                        <ExternalLink className="w-4 h-4" /> {project.link.replace('https://', '')}
                      </a>
                    )}
                  </div>
                  
                  <div className="md:w-2/3 space-y-6">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
                      {project.stack.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Leadership Section */}
      <section className="section-light section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* Professional Experience */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-border/50 pb-4">
                <Rocket className="w-5 h-5 text-muted-foreground" />
                <h2 className="text-2xl font-bold">Professional Experience</h2>
              </div>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:via-border/50 before:to-transparent">
                {/* Dicoding */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-card border-2 border-border z-10 shadow-sm"></div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">05/2026 - Present</span>
                  <h3 className="text-lg font-bold">AI Capstone Advisor / Mentor</h3>
                  <p className="text-sm text-foreground/80 font-medium mb-3">Dicoding Indonesia</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Mentored participants in designing and developing AI-based projects, focusing on model integration, backend logic, and architectural efficiency. Diagnosed and resolved technical constraints including code debugging, API optimization, and system integration, achieving a perfect 5/5 satisfaction score.
                  </p>
                </div>

                {/* PT Dirgantara */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-card border-2 border-border z-10 shadow-sm"></div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">02/2019 - Present</span>
                  <h3 className="text-lg font-bold">Operations & General Affair Specialist</h3>
                  <p className="text-sm text-foreground/80 font-medium mb-3">PT Dirgantara Indonesia</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Conducting systematic risk audits and analyzing inefficiencies in operational workflows and inventory reconciliation. Designed secure digital transformation strategies and proposed software implementations to protect data integrity and automate manual processes, successfully reducing physical recording errors by ~20%. Acted as a central liaison translating complex business constraints into targeted technical solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Organizations & Leadership */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 border-b border-border/50 pb-4">
                <Shield className="w-5 h-5 text-muted-foreground" />
                <h2 className="text-2xl font-bold">Organizations & Leadership</h2>
              </div>

              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-border before:via-border/50 before:to-transparent">
                {/* Fydemy */}
                <div className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-card border-2 border-border z-10 shadow-sm"></div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-1">01/2026 - Present</span>
                  <h3 className="text-lg font-bold">Community Manager</h3>
                  <p className="text-sm text-foreground/80 font-medium mb-3">Fydemy</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Managed B2B partnerships, facilitated community member career/project structuring, and provided strategic guidance and technical support to members participating in competitive hackathons.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-dark py-12 border-t border-border/50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden border border-border/50 bg-card p-0.5">
                <img src={logoImage} alt="Logo" className="w-full h-full object-cover rounded-md opacity-80" />
              </div>
              <span className="font-semibold text-sm">Oki Taruna Ramadhan</span>
            </div>
            
            <div className="flex gap-4">
              <a href="mailto:okitarunaramadhan@gmail.com" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/otaruram" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/otaruram" target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center md:text-left text-xs text-muted-foreground">
            © {new Date().getFullYear()} Oki Taruna Ramadhan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
