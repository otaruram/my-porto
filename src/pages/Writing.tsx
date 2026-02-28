import { ExternalLink } from "lucide-react";

const Writing = () => {
    return (
        <div className="section-dark section-padding min-h-screen">
            <div className="container-custom space-y-12">
                <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Writing</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Kumpulan pemikiran, analisis teknis, dan strategi bisnis yang dipublikasikan di Medium.
                    </p>
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
                            className="p-8 bg-card rounded-xl border border-border hover:border-primary/50 hover:-translate-y-1 transition-all group shadow-sm hover:shadow-[0_0_15px_rgba(14,165,233,0.15)] flex flex-col justify-between"
                        >
                            <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">{article.title}</h3>
                            <span className="text-sm font-semibold text-muted-foreground flex items-center gap-2 group-hover:text-foreground mt-4 pt-4 border-t border-border">
                                Baca di Medium <ExternalLink className="w-4 h-4" />
                            </span>
                        </a>
                    ))}
                </div>

                <div className="pt-8">
                    <a href="https://medium.com/@imardzuki61" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                        Kunjungi Medium Profil <ExternalLink className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Writing;
