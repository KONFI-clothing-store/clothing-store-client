import { useEffect } from 'react';

import { Container } from '@/components/ui/Container/Container';

import { ProductCard } from '@/features/products/components/ui/ProductCard/ProductCard';
import { ProductCardType } from '@/features/products/types/product.types';

import { useGetAllClothes } from './hooks/useGetAllClothes';

interface AllElementsProps {
  prompt: string;
  className?: string;
}

export const AllElements = ({ prompt }: AllElementsProps) => {
  const { clothes, getAllClothes } = useGetAllClothes();

  useEffect(() => {
    if (prompt.length >= 1) {
      getAllClothes();
    }
  }, []);

  // const newArray =
  //   clothes.length > 0
  //     ? clothes.filter((item: ProductCardType) =>
  //         item.name.toLowerCase().includes(prompt.toLowerCase()),
  //       )
  //     : [];

  const newArray: ProductCardType[] | null = [];

  return (
    <div className='absolute bottom-0 left-0 right-0 top-[120px] z-50 bg-[#000000b4] max-sm:top-[93px]'>
      <div className='h-full w-full overflow-y-scroll backdrop-blur-lg'>
        <Container className='py-5'>
          <div className='grid grid-cols-4 gap-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-2xs:grid-cols-1'>
            {newArray.length > 0 &&
              newArray?.map((item: ProductCardType) => (
                <ProductCard key={item.id} item={item} variant='secondary' />
              ))}
          </div>
        </Container>
      </div>
    </div>
  );
};
