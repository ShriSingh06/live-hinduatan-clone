export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  category: string;
  publishedAt: string;
  author: string;
  isPremium?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface SEOProps {
  title: string;
  description: string;
}