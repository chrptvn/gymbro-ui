export interface Supplement {
  id: number;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  dosage: string;
  sideEffects: string[];
  imageUrl: string;
}