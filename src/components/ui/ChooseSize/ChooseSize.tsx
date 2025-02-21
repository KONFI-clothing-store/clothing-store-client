import React from 'react'

import cn from 'classnames'

import { useFilter } from '@/zustand/filter'

interface Props {
  sizes: string[]
  handleChangeSize: (size: string) => void
  isTitle?: boolean
  className?: string
}

export const ChooseSize: React.FC<Props> = ({
  isTitle = true,
  sizes,
  handleChangeSize,
  className,
}) => {
  const [choice, setChoice] = React.useState<string>('')

  const changeSize = (size: string) => {
    handleChangeSize(size)
    setChoice(size)
  }

  return (
    <div className={cn(className, '')}>
      {isTitle && <p className='mb-5 opacity-60'>Choose Size</p>}

      <div className='flex flex-wrap gap-3'>
        {sizes.map((size) => (
          <button
            className={`rounded-[62px] px-6 py-3 duration-500 ${
              choice === size
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-600'
            } duration-500 hover:bg-black hover:text-white`}
            key={size}
            onClick={() => changeSize(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  )
}
