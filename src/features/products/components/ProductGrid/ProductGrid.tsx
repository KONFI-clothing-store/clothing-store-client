import { cn } from '@/utils/utils';

import { ProductCardType } from '../../types/product.types';
import { ProductCard } from '../ui/ProductCard/ProductCard';

interface ProductGridProps {
  items: ProductCardType[];
  className?: string;
}

export function ProductGrid({ items, className }: ProductGridProps) {
  return (
    <div
      className={cn(
        'grid gap-4',
        'grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-2xs:grid-cols-1',
        className,
      )}
    >
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </div>
  );
}
