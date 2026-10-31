import React, { createContext, useContext, useEffect, useState } from "react";

export type HallmarkTheme = "atelier" | "studio" | "cobalt" | "newsprint";

export interface ThemeMeta {
  id: HallmarkTheme;
  name: string;
  genre: string;
  description: string;
  previewBg: string;
  previewFg: string;
  previewAccent: string;
}

export const HALLMARK_THEMES: ThemeMeta[] = [
  {
    id: "atelier",
    name: "Atelier",
    genre: "Editorial Warm Paper",
    description: "Curated linen canvas, deep carbon ink, and high-contrast editorial serif typography.",
    previewBg: "#FAF8F5",
    previewFg: "#191918",
    previewAccent: "#2A2927",
  },
  {
    id: "studio",
    name: "Studio",
    genre: "Obsidian Minimalist",
    description: "Pitch black carbon background with bone titanium typography and razor-sharp hairline borders.",
    previewBg: "#090A0D",
    previewFg: "#F3F3F5",
    previewAccent: "#FFFFFF",
  },
  {
    id: "cobalt",
    name: "Cobalt",
    genre: "Technical Deep Slate",
    description: "Deep oceanic navy canvas with electric cyan telemetry and engineered monospace precision.",
    previewBg: "#0A101D",
    previewFg: "#F1F5F9",
    previewAccent: "#0EA5E9",
  },
  {
    id: "newsprint",
    name: "Newsprint",
    genre: "Broadsheet Monolith",
    description: "High-contrast editorial broadsheet with crisp 1px ruled lines and traditional print discipline.",
    previewBg: "#F3F1EC",
    previewFg: "#121212",
    previewAccent: "#121212",
  },
];

interface ThemeContextType {
  theme: HallmarkTheme;
  setTheme: (theme: HallmarkTheme) => void;
  currentThemeMeta: ThemeMeta;
  toggleNextTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<HallmarkTheme>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("hallmark_theme") as HallmarkTheme;
      if (saved && ["atelier", "studio", "cobalt", "newsprint"].includes(saved)) {
        return saved;
      }
    }
    return "atelier";
  });

  const setTheme = (newTheme: HallmarkTheme) => {
    setThemeState(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("hallmark_theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
      if (newTheme === "studio" || newTheme === "cobalt") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "studio" || theme === "cobalt") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleNextTheme = () => {
    const ids: HallmarkTheme[] = ["atelier", "studio", "cobalt", "newsprint"];
    const nextIdx = (ids.indexOf(theme) + 1) % ids.length;
    setTheme(ids[nextIdx]);
  };

  const currentThemeMeta =
    HALLMARK_THEMES.find((t) => t.id === theme) || HALLMARK_THEMES[0];

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        currentThemeMeta,
        toggleNextTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useHallmarkTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useHallmarkTheme must be used within a ThemeProvider");
  }
  return context;
};

