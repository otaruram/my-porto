import { Mail, Linkedin, Github, Code2, Rocket, Shield, Server, Lock } from "lucide-react";

const About = () => {
    return (
        <div className="min-h-screen">
            {/* Intro Section */}
            <section className="section-dark section-padding">
                <div className="container-custom max-w-4xl space-y-8 animate-fade-up">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
                        Engineer <span className="text-muted-foreground">&</span> Architect
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                        Detail-oriented AI Product Engineer & Security Specialist. Highly proficient in maximizing AI-assisted development (vibe coding workflow) to rapidly build scalable, full-stack applications with elegant, minimalist frontends and robust, secure backend architectures.
                    </p>

                    <div className="flex gap-4 pt-8">
                        <a href="https://linkedin.com/in/otaruram" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#0077b5] text-white rounded-lg font-bold hover:bg-[#0077b5]/90 transition-all">
                            <Linkedin className="w-5 h-5" /> Connect on LinkedIn
                        </a>
                        <a href="mailto:okitarunaramadhan@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-bold hover:bg-secondary/80 transition-all">
                            <Mail className="w-5 h-5" /> Email Me
                        </a>
                        <a href="https://github.com/otaruram" target="_blank" rel="noopener noreferrer" className="p-3 bg-card rounded-lg border border-border/60 hover:border-foreground hover:bg-secondary/20 transition-all text-muted-foreground hover:text-foreground">
                            <Github className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Tech Stack Vault Section */}
            <section className="section-light section-padding border-y border-border/50">
                <div className="container-custom">
                    <div className="text-center space-y-4 mb-16">
                        <h2 className="section-title">The Engineering Arsenal</h2>
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

            {/* Experience Section */}
            <section className="section-dark section-padding">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <h2 className="section-title text-center mb-12">Experience & Impact</h2>

                        <div className="relative border-l-2 border-border/50 ml-3 md:ml-6 space-y-12">
                            {/* Dicoding */}
                            <div className="relative pl-8 md:pl-0 group">
                                <div className="md:hidden absolute w-4 h-4 bg-foreground rounded-full -left-[9px] top-1 ring-4 ring-background"></div>

                                <div className="md:grid md:grid-cols-5 gap-8 items-start">
                                    <div className="hidden md:block col-span-1 text-right pt-1 relative">
                                        <div className="absolute w-4 h-4 bg-foreground rounded-full -right-[25px] top-2 ring-4 ring-background border border-border/50"></div>
                                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">05/2026 - Present</span>
                                    </div>

                                    <div className="md:col-span-4 bg-card border border-border/60 rounded-xl p-6 relative">
                                        <span className="md:hidden text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">05/2026 - Present</span>
                                        <h3 className="text-xl font-bold mb-1">AI Capstone Advisor / Mentor</h3>
                                        <p className="text-muted-foreground font-medium text-sm mb-4">Dicoding Indonesia</p>
                                        <p className="text-sm text-foreground/80 leading-relaxed">
                                            Mentored participants in designing and developing AI-based projects, focusing on model integration, backend logic, and architectural efficiency. Diagnosed and resolved technical constraints including code debugging, API optimization, and system integration, achieving a perfect 5/5 satisfaction score.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* PT Dirgantara */}
                            <div className="relative pl-8 md:pl-0 group">
                                <div className="md:hidden absolute w-4 h-4 bg-foreground rounded-full -left-[9px] top-1 ring-4 ring-background"></div>

                                <div className="md:grid md:grid-cols-5 gap-8 items-start">
                                    <div className="hidden md:block col-span-1 text-right pt-1 relative">
                                        <div className="absolute w-4 h-4 bg-foreground rounded-full -right-[25px] top-2 ring-4 ring-background border border-border/50"></div>
                                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">02/2019 - Present</span>
                                    </div>

                                    <div className="md:col-span-4 bg-card border border-border/60 rounded-xl p-6 relative">
                                        <span className="md:hidden text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">02/2019 - Present</span>
                                        <h3 className="text-xl font-bold mb-1">Operations & General Affair Specialist</h3>
                                        <p className="text-muted-foreground font-medium text-sm mb-4">PT Dirgantara Indonesia</p>
                                        <p className="text-sm text-foreground/80 leading-relaxed">
                                            Conducting systematic risk audits and analyzing inefficiencies in operational workflows and inventory reconciliation. Designed secure digital transformation strategies and proposed software implementations to protect data integrity and automate manual processes, successfully reducing physical recording errors by ~20%. Acted as a central liaison translating complex business constraints into targeted technical solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Fydemy */}
                            <div className="relative pl-8 md:pl-0 group">
                                <div className="md:hidden absolute w-4 h-4 bg-foreground rounded-full -left-[9px] top-1 ring-4 ring-background"></div>

                                <div className="md:grid md:grid-cols-5 gap-8 items-start">
                                    <div className="hidden md:block col-span-1 text-right pt-1 relative">
                                        <div className="absolute w-4 h-4 bg-foreground rounded-full -right-[25px] top-2 ring-4 ring-background border border-border/50"></div>
                                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">01/2026 - Present</span>
                                    </div>

                                    <div className="md:col-span-4 bg-card border border-border/60 rounded-xl p-6 relative">
                                        <span className="md:hidden text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-2">01/2026 - Present</span>
                                        <h3 className="text-xl font-bold mb-1">Community Manager</h3>
                                        <p className="text-muted-foreground font-medium text-sm mb-4">Fydemy</p>
                                        <p className="text-sm text-foreground/80 leading-relaxed">
                                            Managed B2B partnerships, facilitated community member career/project structuring, and provided strategic guidance and technical support to members participating in competitive hackathons.
                                        </p>
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
