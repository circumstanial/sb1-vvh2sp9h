export interface Intervention {
  id: string;
  name: string;
  type: 'medication' | 'therapy' | 'lifestyle' | 'other';
  description: string;
  conditions: string[];
  averageRating: number;
  totalReviews: number;
  clinicalEfficacy: {
    rating: number;
    description: string;
    studies: string[];
  };
  sideEffects: SideEffect[];
}

export interface SideEffect {
  id: string;
  name: string;
  description: string;
  frequency: number;
}

export interface Review {
  id: string;
  userId: string;
  interventionId: string;
  rating: number;
  effectiveness: number;
  sideEffects: UserSideEffect[];
  comment: string;
  createdAt: string;
  user: {
    name: string;
    avatar?: string;
  };
}

export interface UserSideEffect {
  id: string;
  severity: 'none' | 'mild' | 'medium' | 'severe';
}

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  type: 'video' | 'article';
  source: string;
  date: string;
  url: string;
}