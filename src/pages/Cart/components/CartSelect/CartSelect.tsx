import React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface Props {
  variant: 'month' | 'year'
  items: string[]
}

export const CartSelect: React.FC<Props> = ({ variant, items }) => {
  return (
    <span className='grid'>
      <h6>{variant === 'month' ? 'Expires' : 'Year'}</h6>
      <Select name={variant}>
        <SelectTrigger>
          <SelectValue placeholder={`Select a ${variant}`} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {items.map((item) => (
              <SelectItem value={item}>{item}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </span>
  )
}
