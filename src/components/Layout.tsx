import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Download, FileText, Menu, X, Home as HomeIcon, Briefcase, User, Mail, Linkedin, Github } from "lucide-react";
import { Logo } from "@/components/Logo";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  // Close mobile menu whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "Projects", path: "/projects", icon: Briefcase },
    { name: "CV / Resume", path: "/cv", icon: FileText, highlight: true },
    { name: "About", path: "/about", icon: User },
  ];

  const pdfUrl = "/cv/OKI_TARUNA_RAMADHAN_FlowCV_Resume_2026-10-17-1.pdf";

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-white text-zinc-950 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-zinc-950 z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation Capsule */}
      <header className="fixed top-3 sm:top-4 z-40 w-[94%] sm:w-[92%] max-w-4xl bg-white/90 backdrop-blur-md border border-zinc-200/90 rounded-full px-3.5 sm:px-6 py-2 sm:py-2.5 flex justify-between items-center shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-2.5 font-bold text-sm sm:text-base tracking-tight text-zinc-950 hover:opacity-85 transition-opacity shrink-0"
        >
          <Logo size={22} variant="dark" className="sm:w-6 sm:h-6" />
          <span className="whitespace-nowrap">OKI TARUNA</span>
        </Link>

        {/* Desktop Navigation (>= 768px) */}
        <nav className="hidden md:flex items-center gap-1.5 lg:gap-3">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs md:text-sm font-medium transition-all px-3 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? "bg-zinc-950 text-white shadow-sm"
                    : link.highlight
                    ? "text-zinc-900 bg-zinc-100 hover:bg-zinc-200/80 font-semibold"
                    : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100/70"
                }`}
              >
                {link.highlight && <FileText className="w-3.5 h-3.5" />}
                {link.name}
              </Link>
            );
          })}

          <a
            href={pdfUrl}
            download="OKI_TARUNA_RAMADHAN_CV.pdf"
            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-zinc-100 hover:bg-zinc-900 hover:text-white text-zinc-900 rounded-full border border-zinc-200 transition-all ml-1 shadow-2xs"
            title="Download PDF CV"
          >
            <Download className="w-3.5 h-3.5" />
            <span>PDF</span>
          </a>
        </nav>

        {/* Mobile Actions (< 768px): CV Quick Pill + Hamburger Button */}
        <div className="flex md:hidden items-center gap-1.5 sm:gap-2">
          {/* Quick CV Button for mobile users */}
          <Link
            to="/cv"
            className={`flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-full border transition-all ${
              location.pathname === "/cv"
                ? "bg-zinc-950 text-white border-zinc-950 shadow-xs"
                : "bg-zinc-100 text-zinc-900 border-zinc-200 hover:bg-zinc-200"
            }`}
          >
            <FileText className="w-3 h-3" />
            <span>CV</span>
          </Link>

          {/* Hamburger Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 sm:p-2 rounded-full text-zinc-900 hover:bg-zinc-100 transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-30 md:hidden animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-[4.25rem] inset-x-3.5 sm:inset-x-6 max-w-sm mx-auto z-40 bg-white/95 backdrop-blur-xl border border-zinc-200 rounded-2xl p-4 shadow-[0_16px_40px_rgba(0,0,0,0.12)] animate-fade-up md:hidden space-y-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-zinc-950 text-white"
                      : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </div>
                  {link.highlight && !isActive && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-900 border border-zinc-200 uppercase tracking-wider">
                      PDF
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-2 border-t border-zinc-100 space-y-2">
            <a
              href={pdfUrl}
              download="OKI_TARUNA_RAMADHAN_CV.pdf"
              className="w-full py-2.5 px-4 bg-zinc-950 hover:bg-zinc-800 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official PDF CV (94.5 KB)</span>
            </a>

            {/* Quick Contact Icons */}
            <div className="flex items-center justify-center gap-3 pt-2 text-xs text-zinc-500 font-medium">
              <a
                href="mailto:okitarunaramadhan@gmail.com"
                className="p-2 rounded-lg bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border border-zinc-200 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/otaruram"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border border-zinc-200 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/otaruram"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-zinc-50 hover:bg-zinc-100 text-zinc-700 border border-zinc-200 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="w-full flex-1 pt-20 sm:pt-24 pb-8 overflow-x-hidden">{children}</main>
    </div>
  );
}
