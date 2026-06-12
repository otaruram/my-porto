import { ExternalLink, Github, Filter, Shield, Code2, Rocket } from "lucide-react";
import { useState } from "react";

const Projects = () => {
    const [filter, setFilter] = useState("All");

    const projects = [
        {
            title: "Oziktag",
            subtitle: "AI-Powered Digital Trust Seal & Anti-Dispute Shield",
            url: "https://www.oziktag.my.id",
            github: "#",
            tags: ["AI", "Security"],
            stack: ["FastAPI", "Node.js", "Supabase", "Gemini Flash", "Audit Log"],
            problem: "MSMEs struggle with logistics disputes and lack of trust in verification processes.",
            solution: "Friction-free, under-30s MVP that uses Gemini Flash to synthesize raw seller notes and an immutable audit log to prevent QR manipulation.",
            impact: "Established clear liability handover checkpoints and gained active field testing adoption.",
            icon: Shield
        },
        {
            title: "OtaruChain",
            subtitle: "Ecosystem Enabler Platform",
            url: "https://otaruchain.id",
            github: "#",
            tags: ["Security", "Backend"],
            stack: ["FastAPI", "TypeScript", "React", "Supabase", "SHA-256", "AES-256"],
            problem: "Lack of secure, unified cross-platform data flow and document authenticity.",
            solution: "API-First backend with SHA-256 validation dynamically integrated with ImageKit CDN. Strict RBAC and TLS 1.3.",
            impact: "Created an immutable audit trail without compromising processing speed, securing data-at-rest and in-transit.",
            icon: Code2
        },
        {
            title: "Berasku",
            subtitle: "AI-Based Rice Variety Identification",
            url: "#",
            github: "#",
            tags: ["AI", "Frontend"],
            stack: ["TensorFlow.js", "MobileNetV2", "Python", "TFJS"],
            problem: "Manual validation of rice varieties is error-prone, but server-side AI processing exposes user data.",
            solution: "Full client-side inference using TensorFlow.js adhering to strict Data Minimization principles.",
            impact: "Trained on 75,000 images, exporting an efficient architecture for cross-platform deployment while ensuring privacy.",
            icon: Rocket
        }
    ];

    const filteredProjects = filter === "All" ? projects : projects.filter(p => p.tags.includes(filter));

    return (
        <div className="section-dark section-padding min-h-screen">
            <div className="container-custom space-y-12">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Project Gallery</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A curated selection of systems emphasizing AI workflows and highly secure digital architectures.
                    </p>
                </div>

                <div className="flex flex-wrap gap-3 items-center">
                    <Filter className="w-5 h-5 text-muted-foreground mr-2" />
                    {["All", "AI", "Security", "Backend", "Frontend"].map(f => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={`px-4 py-2 rounded-full text-xs font-medium transition-colors border ${filter === f ? "bg-foreground text-background border-foreground" : "bg-transparent text-muted-foreground border-border/50 hover:border-foreground/50 hover:text-foreground"}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    {filteredProjects.map((project, idx) => {
                        const Icon = project.icon;
                        return (
                            <div key={idx} className="bg-card border border-border/60 rounded-xl p-8 hover:border-border transition-colors flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="flex gap-4 items-start">
                                        <div className="p-3 bg-secondary/50 rounded-lg border border-border/50">
                                            <Icon className="w-6 h-6 text-foreground" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold tracking-tight mb-1">{project.title}</h3>
                                            <p className="text-sm font-medium text-muted-foreground">{project.subtitle}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        {project.github !== "#" && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary/50 rounded-full hover:bg-foreground hover:text-background transition-colors">
                                                <Github className="w-4 h-4" />
                                            </a>
                                        )}
                                        {project.url !== "#" && (
                                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="p-2 bg-secondary/50 rounded-full hover:bg-foreground hover:text-background transition-colors">
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="space-y-6 flex-1">
                                    <div>
                                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Problem</span>
                                        <p className="text-sm text-foreground/80 leading-relaxed">{project.problem}</p>
                                    </div>
                                    <div>
                                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-1">Solution</span>
                                        <p className="text-sm text-foreground/90 font-medium leading-relaxed">{project.solution}</p>
                                    </div>
                                    <div className="pl-4 border-l-2 border-border/50 py-1">
                                        <span className="text-xs font-bold text-foreground uppercase tracking-wider block mb-1">Impact</span>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{project.impact}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-8 pt-4 border-t border-border/30">
                                    {project.stack.map(tag => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Projects;
