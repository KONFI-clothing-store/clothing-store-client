import React from 'react';

import cn from 'classnames';

import { Icon } from '@/components/ui/Icon/Icon';

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
        'flex h-[52px] w-[170px] items-center justify-between rounded-[62px] bg-gray-100 px-[22.6px]',
      )}
    >
      <button className='h-[30px]' onClick={() => handleClick('-')}>
        <Icon name='minus' className='h-[2.25px] w-[19px]' />
      </button>
      {number}
      <button onClick={() => handleClick('+')}>
        <Icon name='plus' className='h-[19px] w-[19px]' />
      </button>
    </div>
  );
};
