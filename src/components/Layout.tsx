import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Download, FileText, Menu, X, ArrowUpRight, Mail, Linkedin, Github, Terminal, Sparkles, Check, Copy } from "lucide-react";
import { Logo } from "@/components/Logo";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { useHallmarkTheme } from "@/context/ThemeContext";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const location = useLocation();
  const { currentThemeMeta } = useHallmarkTheme();

  const pdfUrl = "/cv/OKI_TARUNA_RAMADHAN_FlowCV_Resume_2026-10-17-1.pdf";

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / (windowHeight || 1)}`;
      setScrollProgress(Number(scroll) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("okitarunaramadhan@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const navLinks = [
    { index: "01", name: "Overview", path: "/" },
    { index: "02", name: "Systems & Projects", path: "/projects" },
    { index: "03", name: "Verified CV", path: "/cv", highlight: true },
    { index: "04", name: "Writing", path: "/writing" },
    { index: "05", name: "About", path: "/about" },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col bg-background text-foreground transition-colors duration-200">
      {/* Top Thin Scroll Indicator */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-primary z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hallmark Telemetry Ticker Strip */}
      <div className="w-full border-b border-border/80 bg-secondary/30 backdrop-blur-xs py-1.5 px-4 text-[11px] font-mono tracking-wider flex items-center justify-between text-muted-foreground select-none">
        <div className="hallmark-container w-full flex items-center justify-between">
          <div className="flex items-center gap-2.5 truncate">
            <span className="inline-flex items-center gap-1.5 text-foreground font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ACTIVE</span>
            </span>
            <span className="hidden sm:inline text-muted-foreground/60">•</span>
            <span className="truncate hidden sm:inline">
              OPERATIONS × GENERATIVE AI ARCHITECTURE
            </span>
            <span className="hidden md:inline text-muted-foreground/60">•</span>
            <span className="hidden md:inline font-mono">
              PT DIRGANTARA INDONESIA (AEROSPACE)
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden lg:inline text-[10px] text-muted-foreground">
              BANDUNG, ID (WIB • UTC+7)
            </span>
            <span className="hallmark-seal text-[9px] py-0.5 px-1.5 hidden xs:inline-flex">
              HALLMARK PROTOCOL
            </span>
          </div>
        </div>
      </div>

      {/* Main Architectural Masthead Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur-md transition-colors">
        <div className="hallmark-container py-3 sm:py-3.5 flex items-center justify-between gap-4">
          {/* Brand Signature */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-ring rounded-md p-1"
          >
            <Logo size={32} />
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-sm tracking-tight text-foreground group-hover:opacity-80 transition-opacity">
                OKI TARUNA RAMADHAN
              </span>
              <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest leading-none mt-0.5">
                Supply Chain & AI Specialist
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-xs font-medium px-3 py-1.5 rounded-md transition-all flex items-center gap-1.5 font-mono ${
                    isActive
                      ? "bg-primary text-primary-foreground font-semibold shadow-2xs"
                      : link.highlight
                      ? "text-foreground hover:bg-secondary font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
                >
                  <span className={`text-[10px] opacity-60 ${isActive ? "text-primary-foreground" : ""}`}>
                    [{link.index}]
                  </span>
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Header Action Tools */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Hallmark Material Theme Selector */}
            <ThemeSwitcher />

            {/* Quick CV Download Link */}
            <a
              href={pdfUrl}
              download="OKI_TARUNA_RAMADHAN_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-md border border-border bg-card text-foreground hover:bg-secondary transition-all shadow-2xs"
              title="Download Official PDF CV (94.5 KB)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF CV</span>
              <span className="text-[10px] text-muted-foreground hidden md:inline">[94KB]</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded-md border border-border text-foreground hover:bg-secondary transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card p-4 space-y-4 animate-in slide-in-from-top-2 duration-150">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-md font-mono text-xs transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground font-bold"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="opacity-50">[{link.index}]</span>
                      <span className="font-sans font-medium text-sm">{link.name}</span>
                    </span>
                    {link.highlight && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded border border-border bg-secondary font-mono">
                        VERIFIED
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-border/80 flex flex-col gap-2">
              <a
                href={pdfUrl}
                download="OKI_TARUNA_RAMADHAN_Resume.pdf"
                className="w-full py-2.5 px-4 bg-primary text-primary-foreground rounded-md text-xs font-mono font-semibold flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Official PDF Resume (94.5 KB)</span>
              </a>

              <div className="flex items-center justify-between text-xs font-mono pt-1 text-muted-foreground">
                <span className="text-[11px]">Theme: {currentThemeMeta.name}</span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 hover:text-foreground cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedEmail ? "Copied Email!" : "Copy Email"}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Page Content Viewport */}
      <main className="flex-1 w-full">{children}</main>

      {/* Architectural Hallmark Colophon & Footer */}
      <footer className="w-full border-t border-border bg-card/60 pt-12 pb-16 transition-colors">
        <div className="hallmark-container space-y-10">
          {/* Top Colophon Block */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-border/70">
            {/* Column 1: Identity */}
            <div className="space-y-3 md:col-span-2">
              <div className="flex items-center gap-3">
                <Logo size={28} />
                <div>
                  <span className="font-bold text-sm tracking-tight block text-foreground">
                    Oki Taruna Ramadhan
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    Supply Chain Operations & AI Systems Specialist
                  </span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-md pt-1">
                Combining 7+ years of operational systems optimization at PT Dirgantara Indonesia (Indonesian Aerospace) with production-grade AI engineering: Multimodal RAG, Agentic decision loops, pgvector semantic retrieval, and verifiable audit ledgers.
              </p>
              <div className="pt-1">
                <span className="hallmark-seal">
                  HALLMARK ANTI-SLOP SPECIFICATION • VERIFIED CRAFT
                </span>
              </div>
            </div>

            {/* Column 2: Quick Index */}
            <div className="space-y-2 text-xs font-mono">
              <span className="uppercase text-[11px] text-muted-foreground font-semibold block mb-2">
                [INDEX ROUTING]
              </span>
              <ul className="space-y-1.5 text-muted-foreground">
                <li>
                  <Link to="/" className="hover:text-foreground transition-colors">
                    01 // Overview
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="hover:text-foreground transition-colors">
                    02 // Systems & Projects
                  </Link>
                </li>
                <li>
                  <Link to="/cv" className="hover:text-foreground transition-colors">
                    03 // Verified Curriculum Vitae
                  </Link>
                </li>
                <li>
                  <Link to="/writing" className="hover:text-foreground transition-colors">
                    04 // Field Notes & Articles
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-foreground transition-colors">
                    05 // Dossier & Background
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Communication & Networks */}
            <div className="space-y-2 text-xs font-mono">
              <span className="uppercase text-[11px] text-muted-foreground font-semibold block mb-2">
                [COMMUNICATIONS]
              </span>
              <div className="space-y-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 text-foreground hover:opacity-80 transition-opacity cursor-pointer font-medium"
                >
                  <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                  <span>okitarunaramadhan@gmail.com</span>
                  {copiedEmail && <span className="text-[10px] text-emerald-600 font-bold ml-1">Copied!</span>}
                </button>
                <a
                  href="https://linkedin.com/in/otaruram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>linkedin.com/in/otaruram</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
                <a
                  href="https://github.com/otaruram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>github.com/otaruram</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
                <a
                  href="https://medium.com/@imardzuki61"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Terminal className="w-3.5 h-3.5" />
                  <span>medium.com/@imardzuki61</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Colophon Notes */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] font-mono text-muted-foreground">
            <div>
              <span>© {new Date().getFullYear()} Oki Taruna Ramadhan.</span>{" "}
              <span className="text-muted-foreground/60">
                All rights reserved. Typeset in Instrument Serif & JetBrains Mono.
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Theme: {currentThemeMeta.name}</span>
              </span>
              <span>•</span>
              <a
                href="https://www.usehallmark.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground hover:underline"
              >
                Style Guide: usehallmark.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
