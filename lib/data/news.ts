import { NewsItem } from "@/app/types";

export const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "New Research Shows Promise in Depression Treatment",
    description: "A groundbreaking study reveals novel approaches to treating resistant depression through targeted therapy combinations.",
    imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    type: "article",
    source: "Journal of Psychiatric Research",
    date: "2024-01-15",
    url: "/news/depression-treatment-breakthrough"
  },
  {
    id: "2",
    title: "Understanding ADHD Medications",
    description: "Expert psychiatrists explain how different ADHD medications work and their effects on the brain.",
    imageUrl: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=800",
    type: "video",
    source: "Mental Health Foundation",
    date: "2024-01-10",
    url: "/news/adhd-medications-explained"
  },
  {
    id: "3",
    title: "Mindfulness and Anxiety: Latest Research",
    description: "New studies demonstrate the long-term benefits of mindfulness practices in managing anxiety disorders.",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    type: "article",
    source: "Anxiety Research Quarterly",
    date: "2024-01-05",
    url: "/news/mindfulness-anxiety-research"
  }
];