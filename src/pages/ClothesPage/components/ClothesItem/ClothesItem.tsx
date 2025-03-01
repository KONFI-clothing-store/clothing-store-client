import React from 'react'
import { Link } from 'react-router-dom'

import cn from 'classnames'
import { toast } from 'sonner'

import { ActionsForAddCart, Button, ChooseSize, Rating } from '@/components/ui'
import { useCart } from '@/zustand/cart'

import { ShowImages } from './components'

interface Props {
  id: string | undefined
  name: string
  price: number
  images_url: string[]
  sizes: string[]
  rating: string
  description: string
  className?: string
}

export const ClothesItem: React.FC<Props> = (props) => {
  const [size, setSize] = React.useState<string>('')
  const [count, setCount] = React.useState<number>(1)

  const { clothesCards, addItemToCart } = useCart((state) => state)

  console.log('clothesCards:', clothesCards)

  const addCLothesToCart = () => {
    addItemToCart(
      props.name,
      size,
      props.price,
      props.images_url[0],
      count,
      Number(props.id),
    )

    toast(
      `${props.name.toUpperCase()} with size ${size.toUpperCase()} added to cart`,
      {
        description: (
          <p>
            Price: {props.price}, Size: {size} <br />
          </p>
        ),
        action: {
          label: 'X',
          onClick: () => console.log('Undo'),
        },
      },
    )
  }

  return (
    <section
      className={cn(
        props.className,
        'flex items-stretch gap-x-10 max-lg:flex-col max-lg:items-center max-lg:gap-y-10',
      )}
    >
      <ShowImages className='' images={props.images_url} />

      <div className='flex-1'>
        <h2 className='mb-3 font-integral_cf text-3xl max-xl:text-2xl'>
          {props.name}
        </h2>
        <div className='mb-3 flex items-center gap-x-1'>
          <Rating rating={props.rating} />
          <p className='text-lg'>
            {props.rating}/<span className='opacity-60'>5</span>
          </p>
        </div>

        <p className='mb-3 text-2xl font-bold'>${props.price}</p>

        <p className='opacity-60'>{props.description}</p>

        <hr className='my-6' />

        <ChooseSize sizes={props.sizes} handleChangeSize={setSize} />

        <hr className='my-6' />

        <div className='flex gap-x-5'>
          <ActionsForAddCart count={count} setCount={setCount} />
          <Button
            disabled={size === ''}
            className='w-full'
            onClick={addCLothesToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </section>
  )
}
