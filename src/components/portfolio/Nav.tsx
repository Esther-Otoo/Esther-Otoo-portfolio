import { useState } from "react";
import { Menu, X, ArrowUp } from "lucide-react";
import { useActiveSection, useScrollProgress } from "./hooks";
import { cn } from "@/lib/utils";

export const SECTIONS = [
  { id: "about", label: "About" },
  { id: "vision", label: "Vision" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const IDS = ["home", ...SECTIONS.map((s) => s.id)];

export function Nav() {
  const [open, setOpen] = useState(false);
  const { progress, scrolled } = useScrollProgress();
  const active = useActiveSection(IDS);

  return (
    <>
      <div
        aria-hidden
        className="fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-primary transition-transform duration-150"
        style={{ transform: `scaleX(${progress / 100})` }}
      />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-all duration-300",
          scrolled ? "bg-card/80 shadow-[var(--shadow-soft)] backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="font-display text-lg font-semibold tracking-tight">
            Esther<span className="text-primary">.</span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm transition-colors",
                    active === s.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 lg:inline-flex"
          >
            Hire me
          </a>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-border bg-card/95 backdrop-blur-xl lg:hidden">
            <ul className="mx-auto grid max-w-6xl gap-1 px-5 py-4 sm:px-8">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block rounded-xl px-3 py-2.5 text-sm",
                      active === s.id
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-secondary",
                    )}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <a
        href="#home"
        aria-label="Back to top"
        className={cn(
          "fixed bottom-6 right-6 z-40 inline-flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-lift)] transition-all duration-300",
          scrolled ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <ArrowUp className="size-5" />
      </a>
    </>
  );
}