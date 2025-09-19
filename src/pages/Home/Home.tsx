import React from 'react';

import { ProductSection } from '@/features/products/components/ProuctSection/ProductSection';
import { useScrollToTop } from '@/shared/hooks/useScrollToTop';

import { Brands, CommentsSlider, Intro } from './components';

interface Props {
  className?: string;
}

export const Home: React.FC<Props> = () => {
  useScrollToTop();

  return (
    <>
      <Intro />
      <Brands />

      <ProductSection
        title='New Arrivals'
        filterType='latest'
        className='mb-16 mt-[70px] max-md:mt-5'
      />

      <ProductSection
        title='Top Rating'
        filterType='rating'
        className='mb-16 mt-[70px] max-md:mt-5'
      />

      <CommentsSlider />
    </>
  );
};
