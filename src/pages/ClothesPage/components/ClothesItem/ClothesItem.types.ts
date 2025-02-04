import type { Comment } from "@/components/ui/Comment/Comment.types";

export type ClothesItemType = {
  id: number;
  name: string;
  images_url: string[];
  price: string;
  rating: string;
  type: "t-shirt" | "shirt" | "jeans";
  description: string;
  sizes: string[];
  comments: Comment[];
  createdAt: string;
  updatedAt: string;
};
