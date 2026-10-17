import { ExternalLink, BookOpen, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Writing = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-950 pb-20">
      <div className="container-custom max-w-4xl px-6 py-12 space-y-10">
        <div className="space-y-3 border-b border-zinc-200 pb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 rounded-full text-zinc-900 text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Publications & Technical Writing</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-950">Writing</h1>
          <p className="text-sm md:text-base text-zinc-600 max-w-2xl font-medium">
            A collection of thoughts, technical analyses, and business strategies published on Medium.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Business Strategy & Future Trends",
              url: "https://medium.com/@imardzuki61/bagaimana-cara-memastikan-strategi-bisnis-berjalan-dengan-perubahan-trend-di-masa-depan-fc0a11847a65",
              desc: "Analysis on business adaptation toward technology transformation and future operational acceleration."
            },
            {
              title: "Porter's Five Forces Analysis",
              url: "https://medium.com/@imardzuki61/analisis-model-porter-memahami-faktor-faktor-yang-mempengaruhi-kompetitif-bisnis-28ec7d1bcae5",
              desc: "Understanding industry competitive forces and modern supply chain dynamics."
            },
            {
              title: "Writing Effective Executive Summaries",
              url: "https://medium.com/@imardzuki61/menulis-ringkasan-eksekutif-yang-efektif-tips-untuk-membangun-kredibilitas-bisnis-4751c8fcbe51",
              desc: "Best practices in framing high-impact executive summaries for enterprise decision-makers."
            },
            {
              title: "Is Digitalization Impacting Society?",
              url: "https://medium.com/@imardzuki61/digitalisasi-merusak-generasi-a78b4f7114b2",
              desc: "Critical perspectives on technology adoption ethics and workforce productivity."
            }
          ].map((article, i) => (
            <a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-7 bg-white rounded-2xl border border-zinc-200/90 hover:border-zinc-400 hover:shadow-[0_8px_25px_rgba(0,0,0,0.05)] transition-all group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-zinc-950 group-hover:text-zinc-700 transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-xs text-zinc-500 leading-relaxed font-normal">
                  {article.desc}
                </p>
              </div>
              <span className="text-xs font-semibold text-zinc-800 flex items-center gap-1.5 mt-6 pt-4 border-t border-zinc-100 group-hover:underline">
                <span>Read on Medium</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </span>
            </a>
          ))}
        </div>

        <div className="pt-4 flex flex-wrap gap-4 items-center">
          <a
            href="https://medium.com/@imardzuki61"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-950 text-white rounded-xl text-sm font-semibold hover:bg-zinc-800 transition-all shadow-sm"
          >
            <span>Visit Medium Profile</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <Link
            to="/cv"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-100 text-zinc-900 rounded-xl text-sm font-semibold hover:bg-zinc-200 transition-all"
          >
            <FileText className="w-4 h-4" />
            <span>Review CV Document</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Writing;
