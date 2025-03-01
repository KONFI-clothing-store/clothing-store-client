import React from 'react'

import cn from 'classnames'
import { Trash2 } from 'lucide-react'

import { Counter } from '@/components/ui/ActionsForAddCart/components'
import { useCart } from '@/zustand/cart'
import type { ClothesCardType } from '@/zustand/cart'

interface Props {
  card: ClothesCardType
  className?: string
}

export const ClothesCard: React.FC<Props> = ({ card, className }) => {
  const [count, setCount] = React.useState<number>(card.quantity)
  // const [widthOfWindow, setWidthOfWindow] = React.useState<number>(0)

  const updateItemInCart = useCart((state) => state.updateItemInCart)
  const deleteItemFromCart = useCart((state) => state.deleteItemFromCart)

  // React.useEffect(() => {
  //   window.innerWidth
  // }, [])

  const handleAddingCountInCart = (count: number) => {
    setCount(count)
    updateItemInCart(card.size, count, card.id)
  }

  return (
    <div
      className={cn(
        className,
        'flex justify-between border-b pb-6 last:border-b-0 last:pb-0 max-customSm:flex-col',
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
      <div className='flex flex-col items-end justify-between max-customSm:mt-6 max-customSm:flex-row max-customSm:items-center'>
        <button className='bg-transparent max-customSm:order-2'>
          <Trash2
            size={window.innerWidth > 540 ? 20 : 30}
            color='#FF3333'
            onClick={() => deleteItemFromCart(card.id, card.size)}
            className='max-customSm:w-[40px]'
          />
        </button>

        {/* <ActionsForAddCart count={count} setCount={handleAddingCountInCart} /> */}
        <Counter number={count} setNumber={handleAddingCountInCart} />
      </div>
    </div>
  )
}
