import React from 'react';

import cn from 'classnames';

import { useFilter } from '@/core/zustand/filter';

interface Props {
  className?: string;
}

export const ChoosePrice: React.FC<Props> = ({ className }) => {
  const [fromInputValue, setFromInputValue] = React.useState<string>('');
  const [toInputValue, setToInputValue] = React.useState<string>('');

  const addPriceToFilter = useFilter((state) => state.addPriceToFilter);

  React.useEffect(() => {
    if (
      fromInputValue !== '' &&
      toInputValue !== '' &&
      toInputValue >= fromInputValue
    ) {
      addPriceToFilter(Number(fromInputValue), Number(toInputValue));
    }
  }, [fromInputValue, toInputValue]);

  return (
    <div className={cn(className, '')}>
      <h5 className='mb-5 text-lg font-bold'>Price</h5>

      <div className='grid gap-y-2'>
        <div className='flex items-end justify-between gap-2'>
          <p className='text-lg'>from</p>
          <input
            type='number'
            placeholder='0$'
            className='rounded-[62px] border border-gray-200 px-4 py-2 focus:outline-black'
            min={0}
            value={fromInputValue}
            onChange={(e) => setFromInputValue(e.target.value)}
          />
        </div>

        <div className='flex items-end justify-between gap-2'>
          <p className='text-lg'>to</p>
          <input
            type='number'
            placeholder='1000$'
            className='rounded-[62px] border border-gray-200 px-4 py-2 focus:outline-black'
            min={0}
            value={toInputValue}
            onChange={(e) => setToInputValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
