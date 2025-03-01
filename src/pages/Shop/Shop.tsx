import React from 'react'
import { Link } from 'react-router-dom'

import jeansImage from '@/assets/jeans-model.jpg'
import shirtsImage from '@/assets/shirts-model.jpg'
import shortsImage from '@/assets/shorts-model.jpg'
import tShirtsImage from '@/assets/t-shirts-model.jpg'
import { Breadcrumb, Container } from '@/components/ui'

export const Shop: React.FC = () => {
  return (
    <Container>
      <hr className='mb-6' />

      <Breadcrumb />

      <div className='mb-10 mt-6 flex gap-[50px] max-md:grid max-md:gap-5'>
        <div className='grid h-full w-[48%] gap-[50px] max-md:h-auto max-md:w-full max-md:gap-5'>
          <Link
            to='t-shirts'
            className='group relative block h-[491px] overflow-hidden rounded-[20px] max-md:max-h-[300px]'
          >
            <p
              className='absolute right-10 top-4 z-10 text-[36px] font-bold max-md:right-5 max-md:top-2 max-md:text-[28px]'
              style={{ textShadow: '0px 0px 7px rgba(255, 255, 255, 1)' }}
            >
              T-shirts
            </p>
            <img
              className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
              src={tShirtsImage}
              alt='T-shirt model'
            />
          </Link>
          <Link
            to='shorts'
            className='group relative h-[357px] overflow-hidden rounded-[20px] max-md:max-h-[300px]'
          >
            <p
              className='absolute right-10 top-4 z-10 text-[36px] font-bold max-md:right-5 max-md:top-2 max-md:text-[28px]'
              style={{ textShadow: '0px 0px 7px rgba(255, 255, 255, 1)' }}
            >
              Shorts
            </p>
            <img
              className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
              src={shortsImage}
              alt='Short model'
            />
          </Link>
        </div>

        <div className='grid h-full w-[48%] gap-[50px] max-md:h-auto max-md:w-full max-md:gap-5'>
          <Link
            to='shirts'
            className='group relative h-[357px] overflow-hidden rounded-[20px] max-md:max-h-[300px]'
          >
            <p
              className='absolute left-6 top-4 z-10 text-[36px] font-bold max-md:left-auto max-md:right-5 max-md:top-2 max-md:text-[28px]'
              style={{ textShadow: '0px 0px 7px rgba(255, 255, 255, 1)' }}
            >
              Shirts
            </p>
            <img
              className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
              src={shirtsImage}
              alt='Shirt model'
            />
          </Link>
          <Link
            to='jeans'
            className='group relative h-[491px] overflow-hidden rounded-[20px] max-md:max-h-[300px]'
          >
            <p
              className='absolute left-6 top-3 z-10 text-[36px] font-bold max-md:left-auto max-md:right-5 max-md:top-2 max-md:text-[28px]'
              style={{ textShadow: '0px 0px 7px rgba(255, 255, 255, 1)' }}
            >
              Jeans
            </p>
            <img
              className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
              src={jeansImage}
              alt='Jean model'
            />
          </Link>
        </div>
      </div>
    </Container>
  )
}
