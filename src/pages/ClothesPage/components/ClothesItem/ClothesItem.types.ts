export type ClothesComment = {
  id: number;
  clothes_item_id: number;
  comment: string;
  rating: string;
  first_name: string;
  second_name: string;
  createdAt: string;
  updatedAt: string;
}

export type ClothesItemType = {
  id: number;
  name: string;
  images_url: string[];
  price: string;
  rating: string;
  type: 't-shirt' | 'shirt' | 'jeans';
  description: string;
  sizes: string[];
  comments: ClothesComment[];
  createdAt: string;
  updatedAt: string;
};
