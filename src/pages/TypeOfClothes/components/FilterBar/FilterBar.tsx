import React from 'react'

import cn from 'classnames'

import { Button, ChooseSize } from '@/components/ui'
import { useFilter } from '@/zustand/filter'

import { ChoosePrice } from './components'

interface Props {
  className?: string
}

export const FilterBar: React.FC<Props> = ({ className }) => {
  const setApplyFilter = useFilter((state) => state.setApplyFilter)
  const addSizeToFilter = useFilter((state) => state.addSizeToFilter)

  const handleAddingSizeToFilter = (size: string) => {
    addSizeToFilter(size)
  }

  return (
    <aside
      className={cn(
        className,
        'tope-[-5px] w-[295px] rounded-[20px] border p-6',
      )}
    >
      <h5 className='mb-5 text-lg font-bold'>Filters</h5>

      <hr className='my-6' />

      {/* <div>
        <h5 className="text-lg font-bold mb-5">Type</h5>
        <ChooseSize className="w-full" isTitle={false} sizes={["All", "T-shirt", "Shirt", "Jeans", "Shorts"]} />
      </div>

      <hr className="my-6" /> */}

      <ChoosePrice />

      <hr className='my-6' />

      <div>
        <h5 className='mb-5 text-lg font-bold'>Size</h5>

        <ChooseSize
          className='w-full'
          isTitle={false}
          sizes={['X-Small', 'Small', 'Medium', 'X-Medium', 'Large', 'X-Large']}
          handleChangeSize={handleAddingSizeToFilter}
        />
      </div>

      <Button
        onClick={() => setApplyFilter(true)}
        className='mt-6 w-full bg-black py-[14.5px] text-sm'
      >
        Apply Filter
      </Button>
    </aside>
  )
}
