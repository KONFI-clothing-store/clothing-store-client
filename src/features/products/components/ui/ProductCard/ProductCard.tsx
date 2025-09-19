import { Link } from 'react-router-dom';

import { Rating } from '@/components/ui/Rating/Rating';

import { ProductCardType } from '@/features/products/types/product.types';
import { cn } from '@/utils/utils';

interface ProductCardProps {
  variant?: 'main' | 'secondary';
  className?: string;
  item: ProductCardType;
}

export const ProductCard = ({
  variant = 'main',
  item,
  className,
}: ProductCardProps) => {
  const { name, price, images_url, rating, id, type } = item;

  return (
    <Link
      to={`/shop/${type}s/${id}`}
      className={cn(className, 'max-w-[298px] max-2xs:max-w-full')}
    >
      <div className='grid w-full place-items-center overflow-hidden rounded-[20px] bg-card'>
        <img src={images_url} className='' alt={name} />
      </div>
      <p
        className={`mt-4 text-lg font-bold ${variant === 'main' ? 'text-black' : 'text-white'} max-lg:text-base`}
      >
        {name}
      </p>
      <div
        className={`flex items-center gap-x-1 ${variant === 'main' ? 'text-black' : 'text-white'}`}
      >
        <Rating rating={rating} />
        <p className='text-sm'>
          {rating}/<span className='opacity-60'>5</span>
        </p>
      </div>
      <p
        className={`text-xl font-bold ${variant === 'main' ? 'text-black' : 'text-white'} max-lg:text-lg`}
      >
        ${price}
      </p>
    </Link>
  );
};
