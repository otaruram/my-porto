import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Download, FileText } from "lucide-react";
import { Logo } from "@/components/Logo";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Proyek", path: "/projects" },
    { name: "CV / Resume", path: "/cv", highlight: true },
    { name: "Tentang", path: "/about" },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-white text-zinc-950">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2.5px] bg-zinc-950 z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <header className="fixed top-4 z-40 w-[95%] md:w-[90%] max-w-4xl bg-white/85 backdrop-blur-md border border-zinc-200/90 rounded-full px-4 md:px-6 py-2.5 flex justify-between items-center shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
        <Link to="/" className="flex items-center gap-2.5 font-bold text-sm md:text-base tracking-tight text-zinc-950 hover:opacity-85 transition-opacity">
          <Logo size={24} variant="dark" />
          <span>OKI TARUNA</span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2 md:gap-4">
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
            href="/cv/OKI_TARUNA_RAMADHAN_FlowCV_Resume_2026-10-17-1.pdf"
            download="OKI_TARUNA_RAMADHAN_CV.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 bg-zinc-100 hover:bg-zinc-900 hover:text-white text-zinc-900 rounded-full border border-zinc-200 transition-all ml-1"
            title="Download PDF CV"
          >
            <Download className="w-3.5 h-3.5" />
            <span>PDF</span>
          </a>
        </nav>
      </header>

      <main className="w-full flex-1 pt-24 pb-8">{children}</main>
    </div>
  );
}

