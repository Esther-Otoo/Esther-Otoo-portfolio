import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Certifications,
  Contact,
  Education,
  Experience,
  Footer,
  Projects,
  Services,
  Skills,
  Testimonials,
} from "@/components/portfolio/Sections";

const TITLE = "Esther Otoo — Computer Science Graduate & Digital Marketer";
const DESCRIPTION =
  "Portfolio of Esther Otoo: Computer Science graduate and digital marketer skilled in SEO, social media, IT support and customer service.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Esther Otoo",
          jobTitle: "Digital Marketer & IT Support Professional",
          description: DESCRIPTION,
          knowsAbout: ["SEO", "SEM", "Social Media Marketing", "IT Support", "Web Development"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Certifications />
        <Experience />
        <Education />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
