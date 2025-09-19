import { EmptyState } from '@/components/ui/EmptyState/EmptyState';
import { ErrorState } from '@/components/ui/ErrorState/ErrorState';

import { LoadMoreButton } from '@/features/products/components/ui/LoadMoreButton/LoadMoreButton';
import { useGetClothes } from '@/features/products/hooks/useGetClothes';

import { ProductFilterType } from '../../types/product.types';
import { ProductGrid } from '../ProductGrid/ProductGrid';
import { SkeletonProductGrid } from '../ui/SkeletonProductGrid/SkeletonProductGrid';

interface ProductItemsContainerProps {
  filterType: ProductFilterType;
  skeletonCount: number;
}

export function ProductItemsContainer({
  filterType,
  skeletonCount,
}: ProductItemsContainerProps) {
  const {
    data: clothesItems,
    error,
    totalCount,
    isLoading,
    loadMoreItems,
  } = useGetClothes(filterType);

  const hasMoreItems = totalCount ? totalCount > clothesItems.length : false;
  const showLoadMoreButton = !isLoading && hasMoreItems;

  if (error) {
    return <ErrorState title='Failed to load items' message={error} />;
  }

  const isEmpty = !isLoading && clothesItems.length === 0;
  if (isEmpty) {
    return (
      <EmptyState title='No items found' message='Please try again later' />
    );
  }

  return (
    <>
      {isLoading && clothesItems.length === 0 ? (
        <SkeletonProductGrid count={skeletonCount} />
      ) : (
        <>
          <ProductGrid items={clothesItems} />
          {isLoading && (
            <SkeletonProductGrid count={skeletonCount} className='mt-4' />
          )}
        </>
      )}

      {showLoadMoreButton ? (
        <LoadMoreButton addNewClothes={loadMoreItems} />
      ) : null}
    </>
  );
}
