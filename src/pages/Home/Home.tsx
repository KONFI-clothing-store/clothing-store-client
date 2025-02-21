import React from 'react'

import { Brands, Clothes, CommentsSlider, Intro } from './components'

interface Props {
  className?: string
}

export const Home: React.FC<Props> = () => {
  return (
    <>
      <Intro />
      <Brands />

      <Clothes
        title='New Arrivals'
        typeOfClothes='latest'
        className='mb-16 mt-[70px] max-md:mt-5'
      />
      <Clothes
        title='Top Rating'
        typeOfClothes='rating'
        className='mb-16 mt-[70px] max-md:mt-5'
      />

      <CommentsSlider />
    </>
  )
}
