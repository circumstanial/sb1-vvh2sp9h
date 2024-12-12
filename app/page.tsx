import { InterventionCatalog } from "@/components/intervention-catalog";
import { NewsSection } from "@/components/news-section";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Hero />
      <InterventionCatalog />
      <NewsSection />
    </main>
  );
}