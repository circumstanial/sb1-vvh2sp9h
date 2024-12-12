"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { StarIcon } from "lucide-react";
import { Intervention, Review, SideEffect } from "@/app/types";

interface ReviewSectionProps {
  intervention: Intervention;
}

export function ReviewSection({ intervention }: ReviewSectionProps) {
  const [effectiveness, setEffectiveness] = useState(5);
  const [comment, setComment] = useState("");
  const [sideEffects, setSideEffects] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle review submission
  };

  return (
    <div className="space-y-8 mt-8">
      <Card>
        <CardHeader>
          <CardTitle>Share Your Experience</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Label>How effective was this treatment?</Label>
              <Slider
                value={[effectiveness]}
                onValueChange={([value]) => setEffectiveness(value)}
                max={10}
                step={1}
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Not Effective</span>
                <span>Very Effective</span>
              </div>
            </div>

            <div className="space-y-4">
              <Label>Side Effects Experienced</Label>
              {intervention.sideEffects.map((effect) => (
                <div key={effect.id} className="space-y-2">
                  <Label>{effect.name}</Label>
                  <RadioGroup
                    value={sideEffects[effect.id]}
                    onValueChange={(value) => 
                      setSideEffects((prev) => ({ ...prev, [effect.id]: value }))
                    }
                  >
                    {['none', 'mild', 'medium', 'severe'].map((severity) => (
                      <div key={severity} className="flex items-center space-x-2">
                        <RadioGroupItem value={severity} id={`${effect.id}-${severity}`} />
                        <Label htmlFor={`${effect.id}-${severity}`}>
                          {severity.charAt(0).toUpperCase() + severity.slice(1)}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <Label>Your Review</Label>
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your experience with this treatment..."
                className="h-32"
              />
            </div>

            <Button type="submit" className="w-full">
              Submit Review
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>User Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Placeholder for reviews */}
            <div className="text-center text-muted-foreground">
              No reviews yet. Be the first to share your experience!
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}