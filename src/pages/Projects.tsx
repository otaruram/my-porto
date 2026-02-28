import { ExternalLink, Github, Filter } from "lucide-react";
import { useState } from "react";

const Projects = () => {
    const [filter, setFilter] = useState("All");

    const projects = [
        {
            title: "BERASKU",
            subtitle: "Hybrid AI Computer Vision",
            image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2000&auto=format&fit=crop",
            url: "https://berasku-zhkp.vercel.app/",
            github: "https://github.com/otaruram/Berasku",
            tags: ["AI", "Web"],
            stack: ["TensorFlow.js", "React"],
            problem: "Validasi kualitas beras manual memakan waktu dan rawan error subjektif.",
            solution: "Sistem vision AI edge-based untuk mendeteksi anomali pada beras secara realtime.",
            impact: "Akurasi di atas 90% dengan validasi dalam hitungan detik.",
        },
        {
            title: "OCR.WTF",
            subtitle: "Omni Scan Suite",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2000&auto=format&fit=crop",
            url: "https://ocr.wtf",
            github: "https://github.com/otaruram/Logistic-Dokumen",
            tags: ["AI", "Logistics", "Web"],
            stack: ["AI OCR", "GPT-4o", "Groq"],
            problem: "Ekstraksi data dari bermacam format dokumen tidak terstruktur memakan waktu lama.",
            solution: "Pipeline OCR multi-model dengan auto-correction.",
            impact: "Ekstraksi data terstruktur langsung ke Google Drive secara otomatis tanpa manual entry.",
        },
        {
            title: "OCLite",
            subtitle: "AI Agents Platform",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
            url: "https://oclite.site",
            github: "https://github.com/otaruram/AIAAS-oclite-",
            tags: ["AI", "Web"],
            stack: ["Next.js", "AI Agents", "Azure"],
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
            tags: ["AI"],
            stack: ["TypeScript", "VS Code API"],
            problem: "Developer kehilangan konteks saat berpindah antara IDE dan platform AI eksternal.",
            solution: "Ekstensi VS Code yang terintegrasi langsung dengan OCLite API untuk asisten pintar.",
            impact: "Meningkatkan produktivitas developer dengan asisten AI yang on-the-fly di dalam editor.",
        }
    ];

    const filteredProjects = filter === "All" ? projects : projects.filter(p => p.tags.includes(filter));

    return (
        <div className="section-dark section-padding min-h-screen">
            <div className="container-custom space-y-12">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Project Gallery</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Kumpulan studi kasus dari sistem AI, aplikasi web, dan solusi logistik yang telah saya bangun.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 items-center">
                    <Filter className="w-5 h-5 text-muted-foreground" />
                    {["All", "AI", "Web", "Logistics"].map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === f ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, idx) => (
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
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary/50 rounded-full hover:bg-primary hover:text-white transition-colors">
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
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                                    {project.stack.map(tag => (
                                        <span key={tag} className="tag bg-secondary text-secondary-foreground text-xs hover:bg-primary/20 hover:text-primary transition-colors cursor-default">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
