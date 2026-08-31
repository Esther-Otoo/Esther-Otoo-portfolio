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
  X,
} from "lucide-react";
import { toast } from "sonner";
import gbpAsset from "@/assets/bossesfit-gbp.jpeg.asset.json";
import auditAsset from "@/assets/danny-audit.docx.asset.json";
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
  { icon: Globe, title: "Website Creation", text: "Creating and improving websites that give businesses a stronger digital presence, while supporting usability, content, basic SEO, audits and ongoing maintenance." },
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

/* ------------------------------ proof of work ------------------------------ */

type Work = {
  title: string;
  type: string;
  role: string;
  text: string;
  skills: string[];
  image?: string;
  imageAlt?: string;
  cta?: { label: string; href: string };
  cta2?: { label: string; href: string };
  caseStudy?: {
    challenge: string;
    approach: string;
    reviewed: string[];
    deliverables: string[];
  };
};

const WORK_GROUPS: { category: string; icon: typeof Rocket; items: Work[] }[] = [
  {
    category: "Google Business Profile Management",
    icon: MapPin,
    items: [
      {
        title: "BossesFit | Clothing Store in Tema",
        type: "Google Business Profile Management",
        role: "Google Business Profile Manager",
        text: "Managed and supported the Google Business Profile for BossesFit, helping strengthen its local digital presence and make key business information and customer touchpoints more discoverable online.",
        skills: [
          "Google Business Profile Management",
          "Local SEO",
          "Digital Presence Management",
          "Business Information Optimization",
        ],
        image: gbpAsset.url,
        imageAlt:
          "Google Business Profile for BossesFit, a clothing store in Tema, managed by Esther Otoo",
      },
    ],
  },
  {
    category: "Website Creation, Audit & Digital Presence",
    icon: Globe,
    items: [
      {
        title: "Danny Computers",
        type: "Website Audit & SEO Optimization",
        role: "SEO & Website Auditor",
        text: "A practical website and SEO audit covering technical SEO, keyword research, blog content optimization, image SEO and website usability, delivered as a set of prioritised recommendations.",
        skills: [
          "SEO Auditing",
          "Keyword Research",
          "On Page SEO",
          "Content Optimization",
          "Technical SEO Fundamentals",
          "Website Analysis",
        ],
        caseStudy: {
          challenge:
            "Review Danny Computers' website and identify opportunities to improve its technical SEO, search visibility, content and user experience.",
          approach:
            "Conducted a website audit, keyword research, content review and SEO optimization analysis. The site uses HTTPS and was reviewed for mobile responsiveness. Large images were identified as an area for improvement, with recommendations to add alt text, captions and descriptions and to reduce image size. A robots.txt configuration was present, but no publicly accessible XML sitemap was found, so creating and submitting one through Google Search Console was recommended. Unnecessary characters were identified in the URL structure and cleaner URLs were recommended. Keyword research covered laptops, computers, accessories, repairs and IT support in Ghana, and a blog topic titled \u201c7 Things to Consider Before Buying Affordable Laptops in Ghana\u201d was developed and optimized using relevant keywords.",
          reviewed: [
            "Technical SEO",
            "Keyword Research",
            "On Page SEO",
            "Blog Optimization",
            "Image SEO",
            "Website Usability",
          ],
          deliverables: [
            "Technical SEO recommendations",
            "Keyword research",
            "SEO focused blog structure",
            "Image SEO recommendations (descriptive filenames, relevant alt text, compression, WebP where possible, placement and captions)",
            "On page SEO recommendations",
          ],
        },
        cta: { label: "View Audit", href: auditAsset.url },
      },
    ],
  },
  {
    category: "Content & Blog Writing",
    icon: PenTool,
    items: [
      {
        title: "Elegance in Every Stitch",
        type: "Fashion & Lifestyle Content",
        role: "Writer",
        text: "A published fashion and lifestyle article demonstrating creative writing, brand storytelling, and audience focused content creation.",
        skills: ["Content Writing", "Blog Writing", "Audience Focused Writing", "Brand Storytelling"],
        cta: {
          label: "Read Article",
          href: "https://otooest30.wordpress.com/2026/06/19/elegance-in-every-stitch/",
        },
      },
      {
        title:
          "How to Care for Hiking Boots: Clean, Waterproof, Condition and Store Them Properly",
        type: "SEO & Informational Content",
        role: "Writer",
        text: "An informative, search focused article demonstrating research, content structuring, practical information delivery, and SEO oriented writing.",
        skills: ["SEO Content", "Keyword Research", "Content Structuring", "Search Intent"],
        cta: { label: "Read Article", href: "https://otooest30.wordpress.com/2026/07/02/35/" },
      },
    ],
  },
  {
    category: "Brand & Business Strategy",
    icon: Rocket,
    items: [
      {
        title: "BossesFit Brand & Business Strategy",
        type: "Brand & Business Strategy",
        role: "Brand & Business Strategist",
        text: "Developed brand positioning and target audience analysis for BossesFit, shaping the marketing and social media strategy, campaign planning and brand communication that support a stronger digital presence.",
        skills: [
          "Brand Positioning",
          "Target Audience Analysis",
          "Business Strategy",
          "Marketing Planning",
          "Social Media Strategy",
          "Campaign Planning",
        ],
      },
      {
        title: "Wares Product Catalogue Launch",
        type: "Content & Digital Presence",
        role: "Content and Web Support",
        text: "Digital catalogue and web presence for a homeware range, with clear product storytelling across sizes and colours to make browsing effortless on mobile and tablet.",
        skills: ["Content", "Web", "E commerce"],
      },
      {
        title: "Data Informed Campaign Plan",
        type: "Campaign Strategy",
        role: "Campaign Planner",
        text: "Built and presented a full campaign plan during the Generation Ghana bootcamp: audience research, channel mix, budget and KPIs, with post campaign analysis and optimisation recommendations.",
        skills: ["Paid Ads", "Analytics", "Strategy"],
      },
    ],
  },
];

function WorkCard({ item, onZoom }: { item: Work; onZoom: (src: string, alt: string) => void }) {
  return (
    <Card className="flex flex-col overflow-hidden !p-0">
      {item.image ? (
        <button
          type="button"
          onClick={() => onZoom(item.image!, item.imageAlt ?? item.title)}
          className="group block w-full bg-secondary"
          aria-label={`Open larger view of ${item.title}`}
        >
          <img
            src={item.image}
            alt={item.imageAlt ?? item.title}
            loading="lazy"
            className="mx-auto max-h-72 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </button>
      ) : (
        <div className="flex h-28 items-end p-5" style={{ backgroundImage: "var(--gradient-hero)" }}>
          <span className="inline-flex size-10 items-center justify-center rounded-xl bg-card text-primary shadow-[var(--shadow-soft)]">
            <Rocket className="size-5" />
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">{item.type}</p>
        <h4 className="mt-2 text-xl leading-snug">{item.title}</h4>
        <p className="mt-1 text-sm text-muted-foreground">Role: {item.role}</p>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{item.text}</p>

        {item.caseStudy && (
          <div className="mt-5 grid gap-4 rounded-2xl border border-border bg-secondary/60 p-5">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">Challenge</p>
              <p className="mt-1.5 text-base leading-relaxed text-muted-foreground">
                {item.caseStudy.challenge}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                My approach
              </p>
              <p className="mt-1.5 text-base leading-relaxed text-muted-foreground">
                {item.caseStudy.approach}
              </p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                Key areas reviewed
              </p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {item.caseStudy.reviewed.map((r) => (
                  <li key={r}>
                    <Tag>{r}</Tag>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">
                Deliverables
              </p>
              <ul className="mt-2 space-y-1.5">
                {item.caseStudy.deliverables.map((d) => (
                  <li
                    key={d}
                    className="flex gap-2 text-base leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
          Skills demonstrated
        </p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {item.skills.map((s) => (
            <li key={s}>
              <Tag>{s}</Tag>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2.5 pt-1">
          <a
            href={
              item.cta?.href ??
              `mailto:otooest@gmail.com?subject=${encodeURIComponent(`Project enquiry: ${item.title}`)}&body=${encodeURIComponent(`Hello Esther, I would like to know more about ${item.title}.`)}`
            }
            target={item.cta?.href ? "_blank" : undefined}
            rel={item.cta?.href ? "noopener noreferrer" : undefined}
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            {item.cta?.label ?? "View Project"}
          </a>
          {!item.cta && (
            <a
              href={`mailto:otooest@gmail.com?subject=${encodeURIComponent(`Case study request: ${item.title}`)}&body=${encodeURIComponent(`Hello Esther, please share the case study for ${item.title}.`)}`}
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              View Case Study
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}

export function Projects() {
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);

  return (
    <Section
      id="projects"
      eyebrow="Proof of Work"
      title="Proof of Work"
      lead="Turning digital marketing skills into practical work that helps brands build, grow and connect online."
    >
      <div className="grid gap-12">
        {WORK_GROUPS.map(({ category, icon: Icon, items }) => (
          <div key={category}>
            <div className="flex items-center gap-3">
              <span className="inline-flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="size-5" />
              </span>
              <h3 className="text-xl sm:text-2xl">{category}</h3>
            </div>
            <div
              className={`mt-6 grid gap-6 ${items.length > 1 ? "sm:grid-cols-2" : ""}`}
            >
              {items.map((item) => (
                <WorkCard
                  key={item.title}
                  item={item}
                  onZoom={(src, alt) => setZoom({ src, alt })}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
        <a
          href="#contact"
          className="rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
        >
          Let's Build Your Digital Presence
        </a>
        <a
          href="mailto:otooest@gmail.com"
          className="rounded-full border border-border px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
        >
          Contact Me
        </a>
      </div>

      {zoom && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={zoom.alt}
          onClick={() => setZoom(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/70 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Close larger view"
            onClick={() => setZoom(null)}
            className="absolute right-5 top-5 inline-flex size-11 items-center justify-center rounded-full bg-card text-foreground shadow-[var(--shadow-lift)]"
          >
            <X className="size-5" />
          </button>
          <img
            src={zoom.src}
            alt={zoom.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[88vh] w-auto max-w-full rounded-2xl object-contain shadow-[var(--shadow-lift)]"
          />
        </div>
      )}
    </Section>
  );
}


/* ----------------------------- certifications ----------------------------- */

const CERTS = [
  { title: "Digital Marketing Bootcamp", issuer: "Generation Ghana", year: "2026" },
  { title: "BSc Computer Science", issuer: "KNUST", year: "2026" },
  { title: "Customer Service", issuer: "Goldmaxx Security Company", year: "2024" },
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
      lead="A natural progression from a Computer Science background into customer facing and digital roles, then into brand, business strategy and digital marketing."
    >
      <Timeline
        items={[
          {
            title: "Brand & Business Strategist",
            org: "BossesFit",
            period: "2026",
            text: "Shaped brand positioning and target audience analysis for BossesFit, contributing to business and marketing strategy, social media strategy, campaign planning and brand communication, while identifying opportunities to grow the brand and strengthen its digital presence.",
          },
          {
            title: "Digital Marketing Bootcamp Trainee",
            org: "Generation Ghana, Remote",
            period: "May to Aug 2026",
            text: "Built practical skills in SEO, social media, paid advertising, email marketing and analytics. Developed and presented data informed campaign plans, analysed results to identify optimisation opportunities, and collaborated with cross functional teams on client presentations under tight deadlines.",
          },
          {
            title: "National Service Personnel",
            org: "Driver and Vehicle Licensing Authority (DVLA)",
            period: "Nov 2023 to Oct 2024",
            text: "Supported daily vehicle registration and licensing operations, working with digital systems and handling data with a strong focus on accuracy and attention to detail. Engaged directly with customers, providing clear professional communication, resolving enquiries and understanding customer needs, alongside administrative support that built the problem solving and organisational skills I apply to client work today.",
          },
          {
            title: "IT Intern",
            org: "Tema Oil Refinery, Tema",
            period: "Oct 2022 to Dec 2022",
            text: "Performed computer system maintenance, repairs and software installation, and assisted with document management, printing and data processing. Produced detailed reports used for operational decision making.",
          },
          {
            title: "Customer Service",
            org: "Goldmaxx Security Company, Accra",
            period: "2024",
            text: "Handled client and employee enquiries by phone, email and in person, supported HR with attendance records and payroll, and strengthened customer satisfaction through clear communication and consistent follow ups.",
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
  { icon: Linkedin, label: "LinkedIn", value: "Connect with me", href: "https://www.linkedin.com/in/esther-otoo" },
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
            const isExternal = href?.startsWith("http");
            return href ? (
              <a
                key={label}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="card-surface card-hover flex items-center gap-4 p-5"
              >
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
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/esther-otoo" },
            { icon: Github, label: "GitHub", href: "#contact" },
            { icon: Mail, label: "Email", href: "mailto:otooest@gmail.com" },
            { icon: Search, label: "Portfolio", href: "#home" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
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