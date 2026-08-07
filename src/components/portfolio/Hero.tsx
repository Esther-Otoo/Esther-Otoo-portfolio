import { Download, Mail, MapPin } from "lucide-react";
import avatar from "@/assets/avatar.jpg";
import cvAsset from "@/assets/cv.pdf.asset.json";
import { useCounter, useMagnetic, useTyping } from "./hooks";

const PHRASES = [
  "Freelance Digital Marketer",
  "Computer Science Graduate",
  "Going Beyond Clicks",
];

function Stat({ value, suffix, label }: { value: number; suffix?: string; label: string }) {
  const { ref, value: n } = useCounter(value);
  return (
    <div>
      <p className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
        <span ref={ref}>{n}</span>
        {suffix}
      </p>
      <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{label}</p>
    </div>
  );
}

export function Hero() {
  const typed = useTyping(PHRASES);
  const cvRef = useMagnetic<HTMLAnchorElement>();
  const contactRef = useMagnetic<HTMLAnchorElement>();

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Animated gradient background + floating abstract shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <span className="float-shape absolute left-[8%] top-24 size-24 rounded-3xl bg-primary/20 blur-[2px]" />
        <span
          className="float-shape absolute right-[12%] top-40 size-16 rounded-full bg-teal/30"
          style={{ animationDelay: "1.5s" }}
        />
        <span
          className="float-shape absolute bottom-16 left-[22%] size-10 rotate-45 rounded-lg bg-accent/40"
          style={{ animationDelay: "3s" }}
        />
        <span
          className="float-shape absolute bottom-24 right-[26%] size-28 rounded-full border border-primary/25"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="glass-panel p-7 sm:p-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-teal" />
            Open to opportunities
          </span>

          <h1 className="mt-5 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="gradient-text">Esther N. Otoo</span>
          </h1>

          <p
            className="mt-4 min-h-7 font-mono text-sm text-primary sm:text-base"
            aria-label={PHRASES.join(" | ")}
          >
            {typed}
            <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-primary align-middle text-transparent">
              |
            </span>
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Behind every click is an opportunity to build meaningful connections and grow a brand. I
            combine strategy, creativity and data-driven insight to help businesses strengthen their
            online presence — always going Beyond Clicks.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              ref={cvRef}
              href={cvAsset.url}
              download="Esther-Otoo-Portfolio.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-lift)] transition-[transform,box-shadow] duration-300"
            >
              <Download className="size-4" /> Download CV
            </a>
            <a
              ref={contactRef}
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-soft)] transition-[transform,box-shadow] duration-300"
            >
              <Mail className="size-4" /> Contact Me
            </a>
          </div>

          <div className="mt-9 grid grid-cols-3 gap-4 border-t border-border pt-6">
            <Stat value={4} suffix="" label="Roles & internships" />
            <Stat value={6} suffix="" label="Services offered" />
            <Stat value={4} suffix="+" label="Featured projects" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-[image:var(--gradient-brand)] opacity-20 blur-2xl" />
          <div className="card-surface overflow-hidden rounded-[2rem] p-3">
            <img
              src={avatar}
            alt="Portrait of Esther Ntiamoah Otoo, freelance digital marketer and Computer Science graduate"
              width={816}
              height={816}
              className="aspect-square w-full rounded-3xl object-cover"
            />
            <div className="flex items-center justify-between px-3 py-4">
              <div>
                <p className="font-display text-sm font-semibold">Esther N. Otoo</p>
                <p className="font-mono text-xs text-muted-foreground">Beyond Clicks</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                <MapPin className="size-3.5" /> Accra, Ghana
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}