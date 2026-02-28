import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

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
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Writing", path: "/writing" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <header className="fixed top-4 z-40 w-[95%] md:w-[90%] max-w-2xl bg-black/50 backdrop-blur-md border border-border rounded-full px-4 md:px-6 py-3 flex justify-between items-center shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <Link to="/" className="font-bold text-base md:text-lg tracking-tight hover:text-primary transition-colors">
          OKI.
        </Link>
        <nav className="flex gap-3 md:gap-6 relative overflow-x-auto hide-scrollbar">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs md:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${location.pathname === link.path ? "text-primary flex items-center gap-1 border-b border-primary pb-1" : "text-muted-foreground"}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </header>

      <main className="w-full flex-1 pt-24 pb-8">{children}</main>
    </div>
  );
}

