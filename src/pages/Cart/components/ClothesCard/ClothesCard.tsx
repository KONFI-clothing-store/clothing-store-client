import React from 'react'

import cn from 'classnames'
import { Trash2 } from 'lucide-react'

import { ActionsForAddCart } from '@/components/ui'
import { useCart } from '@/zustand/cart'
import type { ClothesCardType } from '@/zustand/cart'

interface Props {
  card: ClothesCardType
  className?: string
}

export const ClothesCard: React.FC<Props> = ({ card, className }) => {
  const [count, setCount] = React.useState<number>(1)
  const addItemToCart = useCart((state) => state.addItemToCart)
  const clothesCards = useCart((state) => state.clothesCards)

  const handleAddingCountInCart = (count: number) => {
    console.log('count', count)
    setCount(count)

    const indexOfElement = clothesCards.findIndex((el) => el.name === card.name)
    if (indexOfElement === -1) {
      addItemToCart(card.name, card.size, card.price, card.img_url, count)
      return
    }
    clothesCards[indexOfElement].quantity = 0
    addItemToCart(card.name, card.size, card.price, card.img_url, count)
  }
  return (
    <div
      className={cn(
        className,
        'flex justify-between border-b pb-6 last:border-b-0 last:pb-0',
      )}
    >
      <div className='flex gap-4'>
        <img
          className='max-w-[124px] rounded-[8.66px]'
          src={import.meta.env.VITE_API_BASE_URL + '/files/' + card.img_url}
        />
        <div className='flex flex-col justify-between'>
          <div>
            <h5 className='mb-[2px] text-lg font-bold'>{card.name}</h5>
            <p>
              Size: <span className='opacity-60'>{card.size}</span>
            </p>
          </div>
          <p className='text-xl font-bold'>${card.price}</p>
        </div>
      </div>
      <div className='flex flex-col items-end justify-between'>
        <button className='bg-transparent'>
          <Trash2 size={20} color='#FF3333' />
        </button>
        <ActionsForAddCart count={count} setCount={handleAddingCountInCart} />
      </div>
    </div>
  )
}
