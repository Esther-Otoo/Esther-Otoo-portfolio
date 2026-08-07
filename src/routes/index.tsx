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
  VisionMission,
} from "@/components/portfolio/Sections";

const TITLE = "Esther N. Otoo, Freelance Digital Marketer | Beyond Clicks";
const DESCRIPTION =
  "Beyond Clicks: portfolio of Esther Ntiamoah Otoo, freelance digital marketer and KNUST Computer Science graduate in Accra, SEO, social media, paid ads and analytics.";

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
          name: "Esther Ntiamoah Otoo",
          jobTitle: "Freelance Digital Marketer",
          email: "otooest@gmail.com",
          telephone: "+233558521997",
          address: { "@type": "PostalAddress", addressLocality: "Accra", addressCountry: "GH" },
          description: DESCRIPTION,
          knowsAbout: [
            "SEO",
            "Social Media Marketing",
            "Paid Advertising",
            "Email Marketing",
            "Marketing Analytics",
          ],
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
        <VisionMission />
        <Skills />
        <Services />
        <Projects />
        <Certifications />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
