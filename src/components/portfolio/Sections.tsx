import { useState, type ReactNode } from "react";
import {
  Award,
  BarChart3,
  Brain,
  Briefcase,
  Code2,
  Github,
  Globe,
  GraduationCap,
  Headset,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Megaphone,
  MessageSquare,
  PenTool,
  Phone,
  Quote,
  Rocket,
  Search,
  Send,
  Share2,
  Sparkles,
  Users,
} from "lucide-react";
import { toast } from "sonner";
import { useReveal } from "./hooks";

/* ---------------------------------- shell --------------------------------- */

function Section({
  id,
  eyebrow,
  title,
  lead,
  children,
  muted,
}: {
  id: string;
  eyebrow: string;
  title: string;
  lead?: string;
  children: ReactNode;
  muted?: boolean;
}) {
  const reveal = useReveal<HTMLDivElement>();
  return (
    <section id={id} className={muted ? "bg-card/60 py-20 sm:py-24" : "py-20 sm:py-24"}>
      <div ref={reveal.ref} className={`mx-auto max-w-6xl px-5 sm:px-8 ${reveal.className}`}>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">{title}</h2>
        {lead && <p className="mt-4 max-w-2xl text-muted-foreground">{lead}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`card-surface card-hover p-6 ${className}`}>{children}</div>;
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
      {children}
    </span>
  );
}

/* ---------------------------------- about --------------------------------- */

const HIGHLIGHTS = [
  { icon: Code2, title: "Computer Science graduate", text: "BSc Computer Science from KNUST, web development, databases and problem solving." },
  { icon: Megaphone, title: "Digital marketing training", text: "Generation Ghana bootcamp: SEO, social media, paid ads, email marketing and analytics." },
  { icon: Brain, title: "Data-driven strategy", text: "Analysing campaign results to find opportunities and make measurable recommendations." },
  { icon: Heart, title: "Beyond Clicks", text: "Marketing that builds lasting value and real connections, not just traffic." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About me"
      title="Behind every click is an opportunity"
      lead="Hello, I'm Esther N. Otoo, a freelance digital marketer and Computer Science graduate. Brands need someone who combines strategy, creativity and data-driven insight to grow their online presence. Beyond Clicks reflects my belief that successful marketing isn't just about traffic, it's about creating lasting value and measurable impact."
      muted
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {HIGHLIGHTS.map(({ icon: Icon, title, text }) => (
          <Card key={title}>
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-4 text-lg">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------------- skills --------------------------------- */

const SKILL_GROUPS = [
  {
    icon: Code2,
    title: "Technical",
    items: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Java", "Microsoft Office"],
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    items: [
      "SEO",
      "SEM",
      "Social Media Marketing",
      "Google Analytics",
      "Content Strategy",
      "Email Marketing",
      "Keyword Research",
      "Canva",
    ],
  },
  {
    icon: Users,
    title: "Professional",
    items: [
      "Customer Service",
      "Communication",
      "Problem Solving",
      "Teamwork",
      "Time Management",
      "Organization",
    ],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="What I bring to a team"
      lead="A practical mix of technical ability, marketing know-how and the soft skills that keep projects moving."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        {SKILL_GROUPS.map(({ icon: Icon, title, items }) => (
          <Card key={title}>
            <div className="flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-teal/15 text-teal">
                <Icon className="size-5" />
              </span>
              <h3 className="text-lg">{title}</h3>
            </div>
            <ul className="mt-5 flex flex-wrap gap-2">
              {items.map((item) => (
                <li key={item}>
                  <span className="inline-block rounded-lg border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------- services -------------------------------- */

const SERVICES = [
  { icon: Megaphone, title: "Digital Marketing", text: "SEO, SEM and campaign planning that grows visibility and leads." },
  { icon: Headset, title: "IT Support", text: "Troubleshooting, setup and friendly first-line technical help." },
  { icon: Share2, title: "Social Media Management", text: "Content calendars, community engagement and reporting." },
  { icon: PenTool, title: "Content Creation", text: "Copy, graphics and Canva visuals aligned to your brand." },
  { icon: Globe, title: "Website Assistance", text: "Updates, maintenance and simple front-end improvements." },
  { icon: Briefcase, title: "Administrative Support", text: "Organised data entry, scheduling and document handling." },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="How I can help"
      lead="Flexible support for small teams and growing businesses."
      muted
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(({ icon: Icon, title, text }) => (
          <Card key={title}>
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/20 text-foreground">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-4 text-lg">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------- projects -------------------------------- */

const PROJECTS = [
  {
    title: "BOSSES: For The Boss Within",
    text: "Brand and campaign concept for an all-genders clothing store: positioning as affordable luxury, a launch offer for the first 50 shoppers, and creatives across tops, bottoms, footwear and accessories.",
    tags: ["Brand Strategy", "Campaign", "Canva"],
  },
  {
    title: "Wares Product Catalogue Launch",
    text: "Digital catalogue and web presence for a homeware range, with clear product storytelling across sizes and colours to make browsing effortless on mobile and tablet.",
    tags: ["Content", "Web", "E-commerce"],
  },
  {
    title: "Data-Informed Campaign Plan",
    text: "Built and presented a full campaign plan during the Generation Ghana bootcamp, audience research, channel mix, budget and KPIs, with post-campaign analysis and optimisation recommendations.",
    tags: ["Paid Ads", "Analytics", "Strategy"],
  },
  {
    title: "SEO & Social Growth Sprint",
    text: "Keyword research, on-page optimisation and a content calendar designed to lift organic visibility and sustain engagement week over week.",
    tags: ["SEO", "Keyword Research", "Social Media"],
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      lead="Where strategy meets creativity, projects that analyse the challenge, tailor the solution and deliver lasting business impact."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <Card key={p.title} className="flex flex-col overflow-hidden !p-0">
            <div
              className="flex h-36 items-end p-5"
              style={{ backgroundImage: "var(--gradient-hero)" }}
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-card text-primary shadow-[var(--shadow-soft)]">
                <Rocket className="size-5" />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t}>
                    <Tag>{t}</Tag>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-2 pt-2">
                <a
                  href={`mailto:otooest@gmail.com?subject=${encodeURIComponent(`Live demo request: ${p.title}`)}&body=${encodeURIComponent(`Hello Esther, I would like to see the live work for ${p.title}.`)}`}
                  className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  Live demo
                </a>
                <a
                  href={`mailto:otooest@gmail.com?subject=${encodeURIComponent(`Case study request: ${p.title}`)}&body=${encodeURIComponent(`Hello Esther, please share the case study for ${p.title}.`)}`}
                  className="rounded-full border border-border px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  Case study
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------- certifications ----------------------------- */

const CERTS = [
  { title: "Digital Marketing Bootcamp", issuer: "Generation Ghana", year: "2026" },
  { title: "BSc Computer Science", issuer: "KNUST", year: "2026" },
  { title: "Customer Service", issuer: "Goldmaxx Security Company", year: "2021" },
  { title: "National Service Certificate", issuer: "DVLA, Ghana", year: "2024" },
  { title: "IT Internship", issuer: "Tema Oil Refinery", year: "2022" },
];

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Continuous learning"
      lead="Training and credentials that back up the work."
      muted
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CERTS.map((c) => (
          <Card key={c.title}>
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Award className="size-5" />
            </span>
            <h3 className="mt-4 text-base">{c.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
            <p className="mt-3 font-mono text-xs text-primary">{c.year}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* -------------------------- experience / education ------------------------- */

function Timeline({
  items,
}: {
  items: { title: string; org: string; period: string; text: string }[];
}) {
  return (
    <ol className="relative space-y-6 border-l border-border pl-6">
      {items.map((i) => (
        <li key={i.title + i.period} className="relative">
          <span className="absolute -left-[31px] top-6 size-3 rounded-full border-2 border-card bg-primary" />
          <Card>
            <p className="font-mono text-xs text-primary">{i.period}</p>
            <h3 className="mt-2 text-lg">{i.title}</h3>
            <p className="text-sm text-muted-foreground">{i.org}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.text}</p>
          </Card>
        </li>
      ))}
    </ol>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've worked"
      lead="Marketing, technology and customer-facing roles across Ghana."
    >
      <Timeline
        items={[
          {
            title: "Digital Marketing Bootcamp Trainee",
            org: "Generation Ghana, Remote",
            period: "May to Aug 2026",
            text: "Built practical skills in SEO, social media, paid advertising, email marketing and analytics. Developed and presented data-informed campaign plans, analysed results to identify optimisation opportunities, and collaborated with cross-functional teams on client presentations under tight deadlines.",
          },
          {
            title: "National Service Personnel",
            org: "Driver and Vehicle Licensing Authority (DVLA)",
            period: "Nov 2023 to Oct 2024",
            text: "Supported daily vehicle registration and licensing operations with a focus on data accuracy, delivered customer service and administrative assistance, and worked with teams to streamline processes and improve customer satisfaction.",
          },
          {
            title: "IT Intern",
            org: "Tema Oil Refinery, Tema",
            period: "Oct 2022 to Dec 2022",
            text: "Performed computer system maintenance, repairs and software installation, and assisted with document management, printing and data processing. Produced detailed reports used for operational decision-making.",
          },
          {
            title: "Customer Service Intern",
            org: "Goldmaxx Security Company, Accra",
            period: "Oct 2021 to Nov 2021",
            text: "Handled client and employee enquiries by phone, email and in person, supported HR with attendance records and payroll, and improved customer satisfaction through clear communication and follow-ups.",
          },
        ]}
      />
    </Section>
  );
}

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Academic & professional training"
      muted
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {[
          {
            icon: GraduationCap,
            title: "BSc Computer Science",
            org: "Kwame Nkrumah University of Science and Technology (KNUST)",
            period: "2026",
            text: "Software development, databases, networking and problem solving, the technical foundation behind my marketing work.",
          },
          {
            icon: Sparkles,
            title: "Digital Marketing Bootcamp Training",
            org: "Generation Ghana",
            period: "2026",
            text: "SEO, social media marketing, paid advertising, email marketing and analytics, delivered through hands-on projects.",
          },
        ].map(({ icon: Icon, ...e }) => (
          <Card key={e.title}>
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-teal/15 text-teal">
              <Icon className="size-5" />
            </span>
            <p className="mt-4 font-mono text-xs text-primary">{e.period}</p>
            <h3 className="mt-1 text-lg">{e.title}</h3>
            <p className="text-sm text-muted-foreground">{e.org}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------- vision & mission ---------------------------- */

export function VisionMission() {
  return (
    <Section
      id="vision"
      eyebrow="Vision & Mission"
      title="Going Beyond Clicks"
      lead="The principles that guide every campaign I plan and every brand I work with."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {[
          {
            label: "Vision",
            text: "To inspire business growth by delivering innovative digital marketing strategies that cultivate meaningful connections, enhance brand credibility, and create lasting value in an ever-evolving digital landscape.",
          },
          {
            label: "Mission",
            text: "To empower businesses with strategic, creative and insight-driven digital marketing solutions that elevate their online presence, strengthen audience engagement, and generate measurable results, always going Beyond Clicks.",
          },
        ].map((v) => (
          <Card key={v.label}>
            <Quote className="size-6 text-accent" />
            <h3 className="mt-4 text-lg">{v.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

/* --------------------------------- contact -------------------------------- */

const CONTACTS = [
  { icon: Mail, label: "Email", value: "otooest@gmail.com", href: "mailto:otooest@gmail.com" },
  { icon: Phone, label: "Telephone", value: "+233 558 521 997", href: "tel:+233558521997" },
  { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/" },
  { icon: MapPin, label: "Location", value: "Accra, Ghana", href: undefined },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's work together!"
      lead="Every successful brand begins with a meaningful conversation. Whether you want to strengthen your online presence, improve your marketing strategy or bring a new idea to life, I'd love to collaborate."
      muted
    >
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {CONTACTS.map(({ icon: Icon, label, value, href }) => {
            const inner = (
              <>
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-xs text-muted-foreground">{label}</span>
                  <span className="block truncate text-sm text-foreground">{value}</span>
                </span>
              </>
            );
            return href ? (
              <a key={label} href={href} className="card-surface card-hover flex items-center gap-4 p-5">
                {inner}
              </a>
            ) : (
              <div key={label} className="card-surface flex items-center gap-4 p-5">
                {inner}
              </div>
            );
          })}
        </div>

        <form
          className="card-surface grid gap-4 p-6 sm:p-8"
          onSubmit={(e) => {
            e.preventDefault();
            setSending(true);
            const form = e.target as HTMLFormElement;
            const data = new FormData(form);
            const name = String(data.get("name") ?? "");
            const email = String(data.get("email") ?? "");
            const subject = String(data.get("subject") ?? "") || "Portfolio enquiry";
            const message = String(data.get("message") ?? "");
            const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
            window.location.href = `mailto:otooest@gmail.com?subject=${encodeURIComponent(
              subject,
            )}&body=${encodeURIComponent(body)}`;
            window.setTimeout(() => {
              setSending(false);
              form.reset();
              toast.success("Your email app is opening with the message ready to send.");
            }, 700);
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm">
              <span className="text-muted-foreground">Name</span>
              <input
                required
                name="name"
                className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm">
              <span className="text-muted-foreground">Email</span>
              <input
                required
                type="email"
                name="email"
                className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                placeholder="you@email.com"
              />
            </label>
          </div>
          <label className="grid gap-2 text-sm">
            <span className="text-muted-foreground">Subject</span>
            <input
              name="subject"
              className="rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              placeholder="Role or project"
            />
          </label>
          <label className="grid gap-2 text-sm">
            <span className="text-muted-foreground">Message</span>
            <textarea
              required
              name="message"
              rows={5}
              className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
              placeholder="Tell me a little about the opportunity…"
            />
          </label>
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5 disabled:opacity-70"
          >
            <Send className="size-4" /> {sending ? "Sending…" : "Send message"}
          </button>
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <MessageSquare className="size-3.5" /> Sending opens your email app with the message
            addressed to otooest@gmail.com.
          </p>
        </form>
      </div>
    </Section>
  );
}

/* --------------------------------- footer --------------------------------- */

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 sm:flex-row sm:px-8">
        <p className="font-display text-sm font-semibold">
          Esther Otoo<span className="text-primary">.</span>
        </p>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Esther Otoo. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {[
            { icon: Linkedin, label: "LinkedIn" },
            { icon: Github, label: "GitHub" },
            { icon: Mail, label: "Email" },
            { icon: Search, label: "Portfolio" },
          ].map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#contact"
              aria-label={label}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}