export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  category: string;
  publishDate: Date;
  affiliateProducts: AffiliateProduct[];
}

export interface AffiliateProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  affiliateLink: string;
  imageUrl: string;
}