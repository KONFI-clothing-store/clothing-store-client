import React from 'react'

import cn from 'classnames'
import { Mail } from 'lucide-react'

interface Props {
  className?: string
}

export const Form: React.FC<Props> = ({ className }) => {
  return (
    <form
      className={cn(className, 'grid w-[350px] gap-y-[14px] max-sm:w-[300px]')}
    >
      <div className='flex w-full items-center gap-x-[14px] rounded-[62px] bg-white px-[17px] py-2.5'>
        <Mail size={20} color='#999999' absoluteStrokeWidth />
        <input
          className='w-full placeholder:text-[#999999] focus:outline-none'
          type='email'
          required
          placeholder='Enter your email address'
        />
      </div>
      <button className='w-full rounded-[62px] bg-white py-2.5'>
        Subscribe to Newsletter
      </button>
    </form>
  )
}
