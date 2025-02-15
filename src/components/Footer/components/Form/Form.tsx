import React from 'react';
import cn from 'classnames';
import { Mail } from 'lucide-react';

interface Props {
  className?: string;
}

export const Form: React.FC<Props> = ({ className }) => {
  return (
    <form
      className={cn(
        className,
        'w-[350px] grid gap-y-[14px] max-md654:w-[300px]',
      )}
    >
      <div className='flex items-center gap-x-[14px] w-full bg-white py-2.5 rounded-[62px] px-[17px]'>
        <Mail size={20} color='#999999' absoluteStrokeWidth />
        <input
          className='w-full focus:outline-none placeholder:text-[#999999]'
          type='email'
          required
          placeholder='Enter your email address'
        />
      </div>
      <button className='w-full bg-white py-2.5 rounded-[62px]'>
        Subscribe to Newsletter
      </button>
    </form>
  );
};
