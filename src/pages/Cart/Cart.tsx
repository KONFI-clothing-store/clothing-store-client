import React from 'react'
import { Link } from 'react-router-dom'

import CheckoutButton from '@/components/CheckoutButton/CheckoutButton'
import { Breadcrumb, Button, Container } from '@/components/ui'
import { useCart } from '@/zustand/cart'

import { ClothesCard } from './components'

interface Props {
  className?: string
}

export const CartPage: React.FC<Props> = () => {
  const clothesCards = useCart((state) => state.clothesCards)
  const totalSum = useCart((state) => state.totalSum)
  const delivery = 15

  return (
    <Container className='pb-[80px]'>
      <hr className='mb-6' />

      <Breadcrumb />

      <h1 className='mb-6 mt-6 font-integral_cf text-3xl font-bold uppercase'>
        Your cart
      </h1>

      <div className={`${totalSum > 0 ? 'flex max-lg:flex-col' : ''} gap-5`}>
        {clothesCards.length === 0 ? (
          <div>
            <p className='text-center text-lg font-bold'>The cart is empty</p>
            <div className='flex justify-center gap-2 text-center'>
              <p className='opacity-60'>To fill the cart, go to the section</p>
              <Link className='underline opacity-100' to='/shop'>
                Shop
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div
              className={`grid w-[57%] gap-6 self-start rounded-[20px] border px-6 py-5 max-lg:w-full`}
            >
              {clothesCards.map((card) => (
                <ClothesCard key={card.name} card={card} />
              ))}
            </div>
            <div className='w-[41%] self-start rounded-[20px] border px-6 py-5 max-lg:w-full'>
              <h3 className='mb-6 text-xl font-bold'>Order Summary</h3>

              <div className='flex flex-col gap-5 text-lg'>
                <div className='flex items-center justify-between'>
                  <p className='opacity-60'>Subtotal</p>
                  <p className='font-bold'>${totalSum}</p>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='opacity-60'>Delivery</p>
                  <p className='font-bold'>${delivery}</p>
                </div>

                <hr className='my-5' />

                <div className='flex items-center justify-between'>
                  <p>Total</p>
                  <p className='text-xl font-bold'>${totalSum + delivery}</p>
                </div>

                <Button className='py-[19px] text-base'>Go to Checkout</Button>
              </div>
            </div>
          </>
        )}
      </div>

      <CheckoutButton />
    </Container>
  )
}
