export interface Campaign {
  id: number;
  image: string;
  title: string;
  organizer: string;
  description: string;
  progress: number;
  current: string;
  goal: string;
  daysLeft: string;
  category: string;
  keyPoints: string[];
  organizerImage?: string;
  location?: string;
}
