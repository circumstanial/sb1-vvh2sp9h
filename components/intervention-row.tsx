import { InterventionCard } from "./intervention-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Intervention } from "@/app/types";

interface InterventionRowProps {
  title: string;
  interventions: Intervention[];
}

export function InterventionRow({ title, interventions }: InterventionRowProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <ScrollArea className="w-full whitespace-nowrap rounded-lg">
        <div className="flex w-max space-x-4 p-4">
          {interventions.map((intervention) => (
            <InterventionCard
              key={intervention.id}
              intervention={intervention}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}