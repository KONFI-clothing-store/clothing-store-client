import type { CommentType } from '@/components/ui/Comment/Comment.types'

export type ClothesItemType = {
  id: number
  name: string
  images_url: string[]
  price: number
  rating: string
  type: 't-shirt' | 'shirt' | 'jeans'
  description: string
  sizes: string[]
  comments: CommentType[]
  createdAt: string
  updatedAt: string
}
