import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, BookOpen, FileText, ArrowUpRight, ArrowRight } from "lucide-react";

export default function Writing() {
  const articles = [
    {
      index: "01",
      title: "Bagaimana Cara Memastikan Strategi Bisnis Berjalan dengan Perubahan Trend di Masa Depan",
      subtitle: "Business Strategy & Future Trend Adaptation",
      url: "https://medium.com/@imardzuki61/bagaimana-cara-memastikan-strategi-bisnis-berjalan-dengan-perubahan-trend-di-masa-depan-fc0a11847a65",
      readingTime: "5 min read",
      category: "Strategy & Operations",
      abstract: "A comprehensive analysis on aligning enterprise operational models with rapid macroeconomic shifts, technological acceleration, and sustainable competitive positioning.",
    },
    {
      index: "02",
      title: "Analisis Model Porter: Memahami Faktor-Faktor yang Mempengaruhi Kompetitif Bisnis",
      subtitle: "Porter's Five Forces in Modern Industrial Contexts",
      url: "https://medium.com/@imardzuki61/analisis-model-porter-memahami-faktor-faktor-yang-mempengaruhi-kompetitif-bisnis-28ec7d1bcae5",
      readingTime: "6 min read",
      category: "Strategic Analysis",
      abstract: "Deconstructing supplier power, buyer leverage, and competitive rivalry through the lens of modern supply chain networks and digitized procurement mechanisms.",
    },
    {
      index: "03",
      title: "Menulis Ringkasan Eksekutif yang Efektif: Tips untuk Membangun Kredibilitas Bisnis",
      subtitle: "Framing Executive Summaries for C-Suite Decision Makers",
      url: "https://medium.com/@imardzuki61/menulis-ringkasan-eksekutif-yang-efektif-tips-untuk-membangun-kredibilitas-bisnis-4751c8fcbe51",
      readingTime: "4 min read",
      category: "Executive Communication",
      abstract: "Practical principles on synthesizing complex operational data, technical feasibility studies, and financial KPIs into high-impact executive summaries.",
    },
    {
      index: "04",
      title: "Digitalisasi Merusak Generasi?",
      subtitle: "Sociotechnical Reflections on Digital Adoption Ethics",
      url: "https://medium.com/@imardzuki61/digitalisasi-merusak-generasi-a78b4f7114b2",
      readingTime: "5 min read",
      category: "Technology Ethics",
      abstract: "A critical perspective examining cognitive fragmentation, workforce digital transitions, and actionable strategies for cultivating intentional productivity.",
    },
  ];

  return (
    <div className="w-full pb-24">
      {/* HEADER */}
      <section className="border-b border-border py-12 sm:py-16 bg-secondary/30 hallmark-grid-bg">
        <div className="hallmark-container space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="hallmark-seal font-mono">
              PUBLICATIONS & ESSAYS
            </span>
            <span className="font-mono text-xs text-muted-foreground">
              MEDIUM JOURNAL // OKI TARUNA
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="hallmark-hero-headline font-serif font-normal text-foreground">
              Field Notes & Strategic Writing
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Essays, strategic analyses, and operational frameworks authored by Oki Taruna Ramadhan on Medium, exploring the intersections of business adaptation, systems design, and technological ethics.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://medium.com/@imardzuki61"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded bg-primary text-primary-foreground font-mono text-xs font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 shadow-2xs"
            >
              <span>Visit Medium Author Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <Link
              to="/cv"
              className="px-4 py-2 rounded border border-border bg-card text-foreground font-mono text-xs font-medium hover:bg-secondary transition-colors flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Review CV Document</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ARTICLES DISPATCH LEDGER */}
      <section className="py-12 sm:py-16">
        <div className="hallmark-container space-y-8">
          <div className="divide-y divide-border border border-border rounded-lg bg-card overflow-hidden">
            {articles.map((art) => (
              <article
                key={art.index}
                className="p-6 sm:p-8 hover:bg-secondary/30 transition-colors group space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-primary">
                      [{art.index}]
                    </span>
                    <span className="hallmark-tag text-[10px]">
                      {art.category}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-muted-foreground">
                    {art.readingTime} • Medium
                  </span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground group-hover:underline leading-snug">
                    <a
                      href={art.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus:outline-none"
                    >
                      {art.title}
                    </a>
                  </h2>

                  <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                    {art.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-normal pt-1">
                    {art.abstract}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={art.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-foreground hover:opacity-80 transition-opacity"
                  >
                    <span>Read complete essay on Medium</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="p-6 rounded-lg border border-border bg-secondary/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-xs font-bold text-foreground block">
                Have a topic or collaboration in mind?
              </span>
              <p className="text-xs text-muted-foreground">
                I regularly write about Generative AI architectures, Agentic workflows, and aerospace operational optimization.
              </p>
            </div>

            <a
              href="mailto:okitarunaramadhan@gmail.com"
              className="px-4 py-2 rounded bg-primary text-primary-foreground font-mono text-xs font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
