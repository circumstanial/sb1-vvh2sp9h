import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
            Find the Right Treatment for You
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Real experiences. Real evidence. Make informed decisions about your mental health.
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg" variant="secondary">
            <Link href="/interventions">Explore Treatments</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10">
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}