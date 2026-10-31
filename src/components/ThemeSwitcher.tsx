import React, { useState, useRef, useEffect } from "react";
import { useHallmarkTheme, HALLMARK_THEMES, HallmarkTheme } from "@/context/ThemeContext";
import { Palette, Check, ChevronDown } from "lucide-react";

export function ThemeSwitcher({ className = "" }: { className?: string }) {
  const { theme, setTheme, currentThemeMeta } = useHallmarkTheme();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md border border-border bg-card hover:bg-secondary/70 text-foreground transition-all duration-150 text-xs font-mono shadow-2xs cursor-pointer focus:outline-none focus:ring-1 focus:ring-ring"
        aria-label="Select Hallmark Theme"
        title="Switch Hallmark Material Theme"
      >
        <span
          className="w-2.5 h-2.5 rounded-full border border-foreground/30 shrink-0"
          style={{ backgroundColor: currentThemeMeta.previewBg }}
        />
        <span className="font-medium hidden sm:inline">{currentThemeMeta.name}</span>
        <ChevronDown className="w-3 h-3 text-muted-foreground" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 rounded-md border border-border bg-card p-1.5 shadow-lg z-50 text-xs animate-in fade-in zoom-in-95 duration-100">
          <div className="px-2.5 py-1.5 border-b border-border/60 mb-1">
            <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center justify-between">
              <span>Hallmark Material Themes</span>
              <span className="text-[9px] px-1 py-0.2 bg-secondary rounded">Taste Layer</span>
            </div>
          </div>

          <div className="space-y-0.5">
            {HALLMARK_THEMES.map((t) => {
              const isSelected = t.id === theme;
              return (
                <button
                  key={t.id}
                  onClick={() => {
                    setTheme(t.id);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-2.5 py-2 rounded flex items-start gap-2.5 transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-secondary text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  {/* Color Swatch Circle */}
                  <div
                    className="w-3.5 h-3.5 rounded-full border border-border/80 shrink-0 mt-0.5"
                    style={{ backgroundColor: t.previewBg }}
                  />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-foreground text-xs">{t.name}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-primary" />}
                    </div>
                    <span className="text-[10px] text-muted-foreground block truncate">
                      {t.genre}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

