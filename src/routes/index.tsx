import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Nav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { VideoShowcase } from "@/components/site/video-showcase";
import { BeforeAfter } from "@/components/site/before-after";
import { Owner } from "@/components/site/owner";
import { CallToAction, Footer } from "@/components/site/cta";

const title = "Prosper Roofing | Premium Roofing — Call 512-632-6878";
const description =
  "Prosper Roofing builds and restores roofs made for desert extremes. Owner Moses Caballero. Free roof inspection — call or text 512-632-6878.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <div ref={ref} className="bg-background">
      <Nav />
      <main>
        <Hero />
        <Services />
        <VideoShowcase />
        <BeforeAfter />
        <Owner />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
