"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Intervention } from "@/app/types";
import Link from "next/link";

interface InterventionCardProps {
  intervention: Intervention;
}

export function InterventionCard({ intervention }: InterventionCardProps) {
  const ratingColor = intervention.averageRating >= 4 ? "text-green-500" :
    intervention.averageRating >= 3 ? "text-yellow-500" : "text-red-500";

  return (
    <Link href={`/interventions/${intervention.id}`}>
      <Card className="w-[280px] h-[400px] relative group hover:shadow-lg transition-all">
        <div className="w-full h-[200px] bg-muted rounded-t-lg overflow-hidden">
          <div className={cn(
            "w-full h-full flex items-center justify-center text-4xl",
            "bg-gradient-to-br from-primary/10 to-primary/5"
          )}>
            {intervention.name[0].toUpperCase()}
          </div>
        </div>
        <div className="p-4">
          <Badge variant={intervention.type === 'medication' ? 'default' : 
            intervention.type === 'therapy' ? 'secondary' : 'outline'}>
            {intervention.type}
          </Badge>
          <h3 className="text-lg font-semibold mt-2">{intervention.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {intervention.description}
          </p>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <StarIcon className={cn("w-5 h-5", ratingColor)} />
                <span className={cn("font-semibold", ratingColor)}>
                  {intervention.averageRating.toFixed(1)}
                </span>
                <span className="text-sm text-muted-foreground">
                  ({intervention.totalReviews})
                </span>
              </div>
              <Badge variant="outline" className="ml-2">
                View Details
              </Badge>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}