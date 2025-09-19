import { supabase } from '@/services/supabase';

import { ProductFilterType } from '../types/product.types';

export const fetchPaginatedProduct = async (
  size: number,
  offset: number,
  sortBy: ProductFilterType,
) => {
  const limitOfItems = size || 4;
  const startIndex = offset ? (offset - 1) * limitOfItems : 0;
  const endIndex = startIndex + limitOfItems - 1;

  const queryProduct = supabase
    .from('clothes_items')
    .select('*', { count: 'exact' })
    .range(startIndex, endIndex);

  switch (sortBy) {
    case 'latest':
      return await queryProduct.order('updated_at', { ascending: false });

    case 'rating':
      return await queryProduct.order('rating', { ascending: false });

    default:
      return await queryProduct;
  }
};
