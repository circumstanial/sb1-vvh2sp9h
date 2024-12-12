import { Hero } from "@/components/hero";
import { InterventionDetail } from "@/components/intervention-detail";
import { ReviewSection } from "@/components/review-section";
import { conditions } from "@/lib/data/conditions";

export function generateStaticParams() {
  const interventions = conditions.flatMap((c) => c.interventions);
  return interventions.map((intervention) => ({
    id: intervention.id,
  }));
}

export default function InterventionPage({
  params,
}: {
  params: { id: string };
}) {
  const intervention = conditions
    .flatMap((c) => c.interventions)
    .find((i) => i.id === params.id);

  if (!intervention) {
    return <div>Intervention not found</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <InterventionDetail intervention={intervention} />
        <ReviewSection intervention={intervention} />
      </div>
    </main>
  );
}