import React from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, Terminal } from "lucide-react";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 hallmark-grid-bg">
      <div className="hallmark-card max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <span className="hallmark-seal text-xs font-mono">
            ERROR // CODE: 404_NOT_FOUND
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-5xl font-serif font-bold text-foreground">
            404
          </h1>
          <p className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
            Route Unrecognized by Hallmark Specification
          </p>
        </div>

        <p className="text-xs text-muted-foreground font-mono bg-secondary/50 p-2.5 rounded border border-border">
          Target: {location.pathname}
        </p>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-primary text-primary-foreground font-mono text-xs font-semibold hover:opacity-90 transition-opacity"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home Overview</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
