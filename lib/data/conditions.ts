import { Intervention } from "@/app/types";

interface Condition {
  id: string;
  name: string;
  interventions: Intervention[];
}

export const conditions: Condition[] = [
  {
    id: "depression",
    name: "Depression",
    interventions: [
      {
        id: "ssri-fluoxetine",
        name: "Fluoxetine (Prozac)",
        type: "medication",
        description: "Selective serotonin reuptake inhibitor (SSRI) antidepressant that works by increasing serotonin levels in the brain.",
        conditions: ["depression", "anxiety"],
        averageRating: 4.2,
        totalReviews: 1250,
        clinicalEfficacy: {
          rating: 75,
          description: "Shown to be effective in treating major depressive disorder with a response rate of 75%",
          studies: [
            "Meta-analysis of 24 clinical trials showed significant improvement in depressive symptoms",
            "Long-term follow-up studies indicate sustained benefits in 60-70% of patients",
            "Comparative studies show similar efficacy to other SSRIs with potentially fewer side effects"
          ]
        },
        sideEffects: [
          {
            id: "weight-changes",
            name: "Weight Changes",
            description: "May cause weight loss initially, followed by weight gain in some patients",
            frequency: 0.25
          },
          {
            id: "sleep-issues",
            name: "Sleep Issues",
            description: "Can cause insomnia or unusual dreams, especially in the first few weeks",
            frequency: 0.35
          },
          {
            id: "nausea",
            name: "Nausea",
            description: "Temporary nausea and digestive issues, usually improving over time",
            frequency: 0.30
          }
        ]
      },
      {
        id: "cbt-depression",
        name: "Cognitive Behavioral Therapy",
        type: "therapy",
        description: "Evidence-based therapy that helps identify and change negative thought patterns and behaviors.",
        conditions: ["depression", "anxiety"],
        averageRating: 4.5,
        totalReviews: 890,
        clinicalEfficacy: {
          rating: 80,
          description: "Highly effective in treating depression, especially when combined with medication",
          studies: [
            "Multiple randomized controlled trials show significant reduction in depressive symptoms",
            "Follow-up studies indicate lower relapse rates compared to medication alone",
            "Particularly effective for mild to moderate depression"
          ]
        },
        sideEffects: [
          {
            id: "emotional-discomfort",
            name: "Emotional Discomfort",
            description: "Temporary increase in emotional distress when processing difficult topics",
            frequency: 0.20
          },
          {
            id: "time-commitment",
            name: "Time Commitment",
            description: "Requires significant time and effort for homework and practice",
            frequency: 0.40
          }
        ]
      },
      {
        id: "exercise-depression",
        name: "Regular Exercise",
        type: "lifestyle",
        description: "Structured physical activity program shown to improve mood and reduce depressive symptoms.",
        conditions: ["depression"],
        averageRating: 4.3,
        totalReviews: 675,
        clinicalEfficacy: {
          rating: 65,
          description: "Moderate to high effectiveness as an adjunct treatment for depression",
          studies: [
            "Regular aerobic exercise shows comparable effects to some antidepressants",
            "Particularly effective when combined with other treatments",
            "Benefits include improved mood, sleep, and overall well-being"
          ]
        },
        sideEffects: [
          {
            id: "physical-soreness",
            name: "Physical Soreness",
            description: "Initial muscle soreness and fatigue",
            frequency: 0.45
          },
          {
            id: "time-management",
            name: "Time Management",
            description: "Difficulty maintaining regular exercise schedule",
            frequency: 0.35
          }
        ]
      }
    ]
  },
  {
    id: "adhd",
    name: "ADHD",
    interventions: [
      {
        id: "methylphenidate",
        name: "Methylphenidate (Ritalin)",
        type: "medication",
        description: "Stimulant medication that improves attention and reduces hyperactivity.",
        conditions: ["adhd"],
        averageRating: 4.1,
        totalReviews: 980,
        clinicalEfficacy: {
          rating: 85,
          description: "Highly effective in reducing ADHD symptoms in most patients",
          studies: [
            "Significant improvement in attention and focus in 70-80% of patients",
            "Shown to improve academic and work performance",
            "Effects are noticeable within hours of administration"
          ]
        },
        sideEffects: [
          {
            id: "appetite-loss",
            name: "Decreased Appetite",
            description: "Reduced hunger, especially during peak medication hours",
            frequency: 0.60
          },
          {
            id: "sleep-problems",
            name: "Sleep Problems",
            description: "Difficulty falling asleep, especially if taken late in the day",
            frequency: 0.40
          }
        ]
      }
    ]
  }
];