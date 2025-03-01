import React from 'react'

import cn from 'classnames'

import { ClothesCard, Container } from '@/components/ui'
import { ClothesCardType } from '@/pages/Home/components'

import { useGetAllClothes } from './hooks/useGetAllClothes'

interface Props {
  prompt: string
  className?: string
}

export const AllElements: React.FC<Props> = ({ prompt, className }) => {
  const { clothes, getAllClothes } = useGetAllClothes()

  React.useEffect(() => {
    if (prompt.length >= 1) {
      getAllClothes()
    }
  }, [])

  const newArray = clothes.filter((item) =>
    item.name.toLowerCase().includes(prompt.toLowerCase()),
  )

  return (
    <div className='absolute bottom-0 left-0 right-0 top-[120px] z-50 bg-[#000000b4] max-sm:top-[93px]'>
      <div className='h-full w-full overflow-y-scroll backdrop-blur-lg'>
        <Container className='py-5'>
          <div className='grid grid-cols-4 gap-4 max-md:grid-cols-3 max-sm:grid-cols-2 max-2xs:grid-cols-1'>
            {newArray?.map((item: ClothesCardType) => (
              <ClothesCard key={item.id} item={item} variant='secondary' />
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}
