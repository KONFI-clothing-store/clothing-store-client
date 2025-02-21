import React from 'react'

import cn from 'classnames'

interface Props {
  images: string[]
  className?: string
}

export const ShowImages: React.FC<Props> = ({ images, className }) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(0)
  console.log('activeIndex:', activeIndex)

  return (
    <div
      className={cn(
        className,
        'flex w-[610px] gap-[14px] max-lg:max-w-[550px] max-lg:flex-col max-sm:w-full',
      )}
    >
      <div className='grid w-[25%] gap-[14px] max-lg:order-2 max-lg:flex max-lg:w-auto'>
        {images.map((image, index) => (
          <button
            className={`overflow-hidden rounded-[20px] bg-gray-100 ${
              activeIndex === index && 'outline outline-black'
            } max-lg:w-[33%]`}
            onClick={() => setActiveIndex(index)}
          >
            <img
              className={`${activeIndex === index && 'scale-90'}`}
              src={import.meta.env.VITE_API_BASE_URL + '/files/' + image}
            />
          </button>
        ))}
      </div>
      <img
        className='w-[73%] rounded-[20px] max-lg:order-1 max-lg:w-full'
        src={
          import.meta.env.VITE_API_BASE_URL + '/files/' + images[activeIndex]
        }
      />
    </div>
  )
}
