export type LayoutType = 'tech' | 'editorial' | 'executive';

export interface SoftwareApp {
  id: string;
  name: string;
  badge: string;
  shortDescription: string;
  detailedDescription: string;
  features: string[];
  targetAudience: string;
  techHighlight: string;
  icon: string;
  imageUrl: string;
  moreUrl: string;
}
