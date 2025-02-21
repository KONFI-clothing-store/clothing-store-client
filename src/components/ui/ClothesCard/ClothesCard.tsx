import React from 'react'
import { Link } from 'react-router-dom'

import cn from 'classnames'

import { Rating } from '@/components/ui'

import type { ClothesCardType } from '../../../pages/Home/components/Clothes/Clothes'

interface Props {
  className?: string
  item: ClothesCardType
}

export const ClothesCard: React.FC<Props> = ({ item, className }) => {
  const { name, price, images_url, rating, id, type } = item

  return (
    <Link
      to={`/shop/${type}s/${id}`}
      className={cn(className, 'max-w-[298px] max-2xs:max-w-full')}
    >
      <div className='grid w-full place-items-center overflow-hidden rounded-[20px] bg-card'>
        <img
          src={`${import.meta.env.VITE_API_BASE_URL}/files/${images_url[0]}`}
          className=''
          alt={name}
        />
      </div>
      <p className='mt-4 text-lg font-bold text-black max-lg:text-base'>
        {name}
      </p>
      <div className='flex items-center gap-x-1'>
        <Rating rating={rating} />
        <p className='text-sm'>
          {rating}/<span className='opacity-60'>5</span>
        </p>
      </div>
      <p className='text-xl font-bold max-lg:text-lg'>${price}</p>
    </Link>
  )
}
