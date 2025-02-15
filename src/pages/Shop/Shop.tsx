import React from 'react';

import { Breadcrumb, Container } from '@/components/ui';

import tShirtsImage from '@/assets/t-shirts-model.jpg';
import shortsImage from '@/assets/shorts-model.jpg';
import shirtsImage from '@/assets/shirts-model.jpg';
import jeansImage from '@/assets/jeans-model.jpg';
import { Link } from 'react-router-dom';

export const Shop: React.FC = () => {
  return (
    <Container>
      <hr className='mb-6' />

      <Breadcrumb />

      <div className='flex gap-[50px] mb-10 mt-6 max-md:grid max-md:gap-5'>
        <div className='grid gap-[50px] w-[48%] h-full max-md:h-auto max-md:gap-5 max-md:w-full'>
          <Link
            to='t-shirts'
            className='group block h-[491px] rounded-[20px] overflow-hidden relative max-md:max-h-[300px]'
          >
            <p
              className='absolute top-4 right-10 text-[36px] font-bold z-50 max-md:text-[28px] max-md:right-5 max-md:top-2'
              style={{ textShadow: '0px 0px 7px rgba(255, 255, 255, 1)' }}
            >
              T-shirts
            </p>
            <img
              className='w-full h-full transition-transform duration-300 group-hover:scale-110 object-cover'
              src={tShirtsImage}
              alt='T-shirt model'
            />
          </Link>
          <Link
            to='shorts'
            className='group rounded-[20px] h-[357px] overflow-hidden relative max-md:max-h-[300px]'
          >
            <p
              className='absolute top-4 right-10 text-[36px] font-bold z-50 max-md:text-[28px] max-md:right-5 max-md:top-2'
              style={{ textShadow: '0px 0px 7px rgba(255, 255, 255, 1)' }}
            >
              Shorts
            </p>
            <img
              className='w-full h-full transition-transform duration-300 group-hover:scale-110 object-cover'
              src={shortsImage}
              alt='Short model'
            />
          </Link>
        </div>

        <div className='grid gap-[50px] w-[48%] h-full max-md:h-auto max-md:gap-5 max-md:w-full'>
          <Link
            to='shirts'
            className='group h-[357px] rounded-[20px] overflow-hidden relative max-md:max-h-[300px]'
          >
            <p
              className='absolute top-4 left-6 text-[36px] font-bold z-50 max-md:left-auto max-md:right-5 max-md:text-[28px] max-md:top-2'
              style={{ textShadow: '0px 0px 7px rgba(255, 255, 255, 1)' }}
            >
              Shirts
            </p>
            <img
              className='w-full h-full transition-transform duration-300 group-hover:scale-110 object-cover'
              src={shirtsImage}
              alt='Shirt model'
            />
          </Link>
          <Link
            to='jeans'
            className='group h-[491px] rounded-[20px] overflow-hidden relative max-md:max-h-[300px]'
          >
            <p
              className='absolute top-3 left-6 text-[36px] font-bold z-50 max-md:left-auto max-md:right-5 max-md:text-[28px] max-md:top-2'
              style={{ textShadow: '0px 0px 7px rgba(255, 255, 255, 1)' }}
            >
              Jeans
            </p>
            <img
              className='w-full h-full transition-transform duration-300 group-hover:scale-110 object-cover'
              src={jeansImage}
              alt='Jean model'
            />
          </Link>
        </div>
      </div>
    </Container>
  );
};
