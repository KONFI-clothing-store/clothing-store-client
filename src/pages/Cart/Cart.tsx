import React from 'react'

import { Breadcrumb, Button, Container } from '@/components/ui'
import { useCart } from '@/zustand/cart'

import { ClothesCard } from './components'

interface Props {
  className?: string
}

// доробити видалення з корзини

export const CartPage: React.FC<Props> = () => {
  const clothesCards = useCart((state) => state.clothesCards)
  console.log(clothesCards)
  return (
    <Container className='pb-[80px]'>
      <hr className='mb-6' />

      <Breadcrumb />

      <h1 className='mb-6 mt-6 font-integral_cf text-3xl font-bold uppercase'>
        Your cart
      </h1>

      <div className='flex gap-5'>
        <div className='grid w-[57.7%] gap-6 rounded-[20px] border px-6 py-5'>
          {clothesCards.length === 0 && <p>Nothing</p>}
          {clothesCards.map((card) => (
            <ClothesCard key={card.name} card={card} />
          ))}
        </div>

        <div className='w-[41%] self-start rounded-[20px] border px-6 py-5'>
          <h3 className='mb-6 text-xl font-bold'>Order Summary</h3>

          <div className='flex flex-col gap-5 text-lg'>
            <div className='flex items-center justify-between'>
              <p className='opacity-60'>Subtotal</p>
              <p className='font-bold'>$565</p>
            </div>
            <div className='flex items-center justify-between'>
              <p className='opacity-60'>Delivery</p>
              <p className='font-bold'>$20</p>
            </div>

            <hr className='my-5' />

            <div className='flex items-center justify-between'>
              <p>Total</p>
              <p className='text-xl font-bold'>$467</p>
            </div>

            <Button className='py-[19px] text-base'>Go to Checkout</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}
