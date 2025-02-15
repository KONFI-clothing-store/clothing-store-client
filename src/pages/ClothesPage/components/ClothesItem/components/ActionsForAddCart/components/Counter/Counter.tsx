import React from 'react';
import cn from 'classnames';

import { Icon } from '@/components/ui';

interface Props {
  number: number;
  setNumber: (count: number) => void;
  className?: string;
}

export const Counter: React.FC<Props> = ({ number, setNumber, className }) => {
  const handleClick = (str: string) => {
    if (str === '-') {
      if (number === 1) return;
      setNumber(number - 1);
    } else {
      setNumber(number + 1);
    }
  };

  return (
    <div
      className={cn(
        className,
        'flex items-center justify-between w-[170px] h-[52px] bg-gray-100 px-[22.6px] rounded-[62px]',
      )}
    >
      <button className='h-[30px]' onClick={() => handleClick('-')}>
        <Icon name='minus' className='w-[19px] h-[2.25px]' />
      </button>
      {number}
      <button onClick={() => handleClick('+')}>
        <Icon name='plus' className='w-[19px] h-[19px]' />
      </button>
    </div>
  );
};
