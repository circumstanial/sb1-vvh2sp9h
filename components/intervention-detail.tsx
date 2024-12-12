"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StarIcon, BookOpen, Activity, AlertCircle } from "lucide-react";
import { Intervention } from "@/app/types";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface InterventionDetailProps {
  intervention: Intervention;
}

export function InterventionDetail({ intervention }: InterventionDetailProps) {
  const ratingColor = intervention.averageRating >= 4 ? "text-green-500" :
    intervention.averageRating >= 3 ? "text-yellow-500" : "text-red-500";

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Badge variant={intervention.type === 'medication' ? 'default' : 
                intervention.type === 'therapy' ? 'secondary' : 'outline'}>
                {intervention.type}
              </Badge>
              <CardTitle className="mt-2 text-3xl">{intervention.name}</CardTitle>
            </div>
            <div className="flex items-center gap-2">
              <StarIcon className={cn("w-6 h-6", ratingColor)} />
              <span className={cn("text-2xl font-bold", ratingColor)}>
                {intervention.averageRating.toFixed(1)}
              </span>
              <span className="text-muted-foreground">
                ({intervention.totalReviews} reviews)
              </span>
            </div>
          </div>
          <p className="text-lg text-muted-foreground">{intervention.description}</p>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="clinical">Clinical Evidence</TabsTrigger>
              <TabsTrigger value="sideEffects">Side Effects</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      Conditions Treated
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {intervention.conditions.map((condition) => (
                        <Badge key={condition} variant="secondary">
                          {condition}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="w-5 h-5" />
                      Effectiveness
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-green-500">
                      {intervention.clinicalEfficacy.rating}%
                    </div>
                    <p className="text-muted-foreground">
                      {intervention.clinicalEfficacy.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="clinical">
              <Card>
                <CardHeader>
                  <CardTitle>Clinical Studies</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {intervention.clinicalEfficacy.studies.map((study, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 mt-2 rounded-full bg-primary" />
                        <p>{study}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sideEffects">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Reported Side Effects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    {intervention.sideEffects.map((effect) => (
                      <div key={effect.id} className="p-4 rounded-lg border">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{effect.name}</h4>
                          <Badge variant="outline">
                            {(effect.frequency * 100).toFixed(0)}% of users
                          </Badge>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {effect.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}