import React from 'react'

import cn from 'classnames'

import { Icon } from '../Icon/Icon'

interface Props {
  rating: string
  className?: string
}

export const Rating: React.FC<Props> = ({ rating, className }) => {
  return (
    <div className={cn(className, 'flex gap-x-[6.5px] max-md:gap-x-[4px]')}>
      {Array.from({ length: +rating }).map((_, index) => (
        <Icon className='h-[20px] w-[21px]' name='rating_star' key={index} />
      ))}
      {Number(rating.split('.')[1]) !== 0 && (
        <Icon className='h-[23px] w-[23px]' name='half_of_rating_star' />
      )}
    </div>
  )
}
