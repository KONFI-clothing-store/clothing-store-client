import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import { Rating } from '@/components/ui';

import type { ClothesCardType } from '../../../pages/Home/components/Clothes/Clothes';

interface Props {
  className?: string;
  item: ClothesCardType;
}

export const ClothesCard: React.FC<Props> = ({ item, className }) => {
  const { name, price, images_url, rating, id, type } = item;

  return (
    <Link
      to={`/shop/${type}s/${id}`}
      className={cn(className, 'max-w-[298px]')}
    >
      <div className='w-full grid place-items-center bg-gray-400 rounded-[20px] overflow-hidden'>
        <img
          src={`${import.meta.env.VITE_API_BASE_URL}/files/${images_url[0]}`}
          className=''
          alt={name}
        />
      </div>
      <p className='text-black text-lg mt-4 font-bold max-md1024:text-base'>
        {name}
      </p>
      <div className='flex gap-x-1 items-center'>
        <Rating rating={rating} />
        <p className='text-sm'>
          {rating}/<span className='opacity-60'>5</span>
        </p>
      </div>
      <p className='text-xl font-bold max-md1024:text-lg'>${price}</p>
    </Link>
  );
};
