import React from 'react';
import cn from 'classnames';

import { ChooseSize, ActionsForAddCart, ShowImages } from './components';
import { Button, Rating } from '@/components/ui';

interface Props {
  name: string;
  price: string;
  images_url: string[];
  sizes: string[];
  rating: string;
  description: string;
  className?: string;
}

export const ClothesItem: React.FC<Props> = (props) => {
  return (
    <section
      className={cn(
        props.className,
        'flex items-stretch gap-x-10  max-md1024:flex-col max-md1024:items-center max-md1024:gap-y-10',
      )}
    >
      <ShowImages className='' images={props.images_url} />

      <div className='flex-1'>
        <h2 className='text-3xl font-integral_cf mb-3 max-md1205:text-2xl'>
          {props.name}
        </h2>
        <div className='flex items-center gap-x-1 mb-3'>
          <Rating rating={props.rating} />
          <p className='text-lg'>
            {props.rating}/<span className='opacity-60'>5</span>
          </p>
        </div>

        <p className='text-2xl font-bold mb-3'>${props.price}</p>

        <p className='opacity-60'>{props.description}</p>

        <hr className='my-6' />

        <ChooseSize sizes={props.sizes} />

        <hr className='my-6' />

        <div className='flex gap-x-5'>
          <ActionsForAddCart />
          <Button className='w-full'>Add to Cart</Button>
        </div>
      </div>
    </section>
  );
};
