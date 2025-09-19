import { useEffect, useState } from 'react';

import { fetchPaginatedProduct } from '../services/fetchPaginatedProduct.api';
import { ProductCardType, ProductFilterType } from '../types/product.types';
import { useProductPagination } from './useProductPagination';

const SIZE_OF_PRODUCTS = 4;

export const useGetClothes = (filterType: 'all' | 'latest' | 'rating') => {
  const [data, setData] = useState<ProductCardType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [totalCount, setTotalCount] = useState<number | null>(null);

  const { offset, nextOffset } = useProductPagination();

  const loadProductData = async (filterType: ProductFilterType) => {
    setIsLoading(true);
    try {
      const response = await fetchPaginatedProduct(
        SIZE_OF_PRODUCTS,
        offset,
        filterType,
      );
      if (response.error) {
        throw new Error(response.error.message);
      }

      setTotalCount(response.count);
      setData((prevState: ProductCardType[]) => {
        if (offset === 1) return [...(response.data || [])];

        return [...prevState, ...(response.data || [])];
      });
    } catch (error: any) {
      console.error('Server error:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreItems = async () => {
    nextOffset();
  };

  useEffect(() => {
    loadProductData(filterType);
  }, [offset]);

  return {
    data,
    error,
    isLoading,
    totalCount,
    loadMoreItems,
  };
};
