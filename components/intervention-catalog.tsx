import { InterventionRow } from "./intervention-row";
import { conditions } from "@/lib/data/conditions";

export function InterventionCatalog() {
  return (
    <div className="container mx-auto px-4 py-8">
      {conditions.map((condition) => (
        <InterventionRow
          key={condition.id}
          title={condition.name}
          interventions={condition.interventions}
        />
      ))}
    </div>
  );
}