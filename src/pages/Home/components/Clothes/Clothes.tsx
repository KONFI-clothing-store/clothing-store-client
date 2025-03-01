import React from 'react'

import { ClothesCard, Container } from '@/components/ui'
import { useGetClothes } from '@/hooks/getClothes'

export type ClothesCardType = {
  id: number
  name: string
  images_url: string[]
  price: number
  type: string
  rating: string
  sizes: string[]
  description: string
  createdAt: string
  updatedAt: string
}

interface Props {
  title: string
  typeOfClothes: 'all' | 'latest' | 'rating'
  className?: string
}

export const Clothes: React.FC<Props> = ({
  title,
  typeOfClothes,
  className,
}) => {
  const {
    data: clothes,
    getData,
    numberOfElements,
    addNewBatchOfClothes,
  } = useGetClothes(typeOfClothes)

  return (
    <section className={className}>
      <Container>
        <h2 className='mb-[52px] text-center font-integral_cf text-4xl'>
          {title}
        </h2>

        <div className='grid grid-cols-4 gap-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-2xs:grid-cols-1'>
          {clothes?.map((item: ClothesCardType) => (
            <ClothesCard key={item.id} item={item} />
          ))}
        </div>

        {numberOfElements > clothes.length && (
          <button
            onClick={addNewBatchOfClothes}
            className='mx-auto mt-[36px] block rounded-[62px] border border-gray-200 px-20 py-[13.5px] duration-500 hover:bg-gray-300'
          >
            Add more
          </button>
        )}
      </Container>
    </section>
  )
}
