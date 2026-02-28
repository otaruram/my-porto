import { Mail, Linkedin, Github, Code2, Sparkles, Rocket } from "lucide-react";

const About = () => {
    return (
        <div className="min-h-screen">
            {/* Intro Section */}
            <section className="section-dark section-padding">
                <div className="container-custom max-w-4xl space-y-8 animate-fade-up">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
                        Engineer <span className="text-primary">&</span> Architect
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                        Fokus pada menjembatani model Machine Learning dengan solusi operasional yang scalable.
                        Membangun sistem AI praktis, mulai dari Computer Vision, Document Scanning, hingga Orkestrasi AI Agents enterprise.
                    </p>

                    <div className="flex gap-4 pt-8">
                        <a href="https://linkedin.com/in/otaruram" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-lg font-bold hover:scale-105 transition-all shadow-[0_0_15px_rgba(0,119,181,0.4)]">
                            <Linkedin className="w-5 h-5" /> Connect on LinkedIn
                        </a>
                        <a href="mailto:okitarunaramadhan@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-bold hover:scale-105 transition-all">
                            <Mail className="w-5 h-5" /> Email Me
                        </a>
                        <a href="https://github.com/otaruram" target="_blank" rel="noopener noreferrer" className="p-3 bg-card rounded-lg border border-border hover:border-foreground hover:scale-110 transition-all text-muted-foreground hover:text-foreground">
                            <Github className="w-5 h-5" />
                        </a>
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
                                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 border border-primary/20">
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
        </div>
    );
};

export default About;
