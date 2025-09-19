import { Container } from '@/components/ui/Container/Container';

import { DEFAULT_SKELETON_COUNT } from '../../constants/product.constants';
import { ProductFilterType } from '../../types/product.types';
import { ProductItemsContainer } from '../ProductItemsContainer/ProductItemsContainer';

interface ProductSectionProps {
  title: string;
  filterType: ProductFilterType;
  className?: string;
  skeletonCount?: number;
}

export const ProductSection = ({
  title,
  filterType,
  skeletonCount = DEFAULT_SKELETON_COUNT,
  className,
}: ProductSectionProps) => {
  return (
    <section className={className}>
      <Container>
        <h2 className='mb-[52px] text-center font-integral_cf text-4xl'>
          {title}
        </h2>

        <ProductItemsContainer
          filterType={filterType}
          skeletonCount={skeletonCount}
        />
      </Container>
    </section>
  );
};
