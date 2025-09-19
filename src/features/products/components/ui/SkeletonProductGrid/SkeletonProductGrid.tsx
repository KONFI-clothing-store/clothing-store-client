import { cn } from '@/shared/utils/utils';

import { ProductCardSkeleton } from '../ProductCardSkeleton/ProductCardSkeleton';

interface SkeletonProductGridProps {
  count: number;
  className?: string;
}

export const SkeletonProductGrid = ({
  count,
  className,
}: SkeletonProductGridProps) => (
  <div
    className={cn(
      'grid gap-4',
      'grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-2xs:grid-cols-1',
      className,
    )}
  >
    {Array.from({ length: count }, (_, index) => (
      <ProductCardSkeleton key={index} />
    ))}
  </div>
);
