export type ProductCardType = {
  id: number;
  name: string;
  images_url: string;
  price: number;
  type: string;
  rating: number;
  sizes: string[];
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type ProductFilterType = 'all' | 'latest' | 'rating';
