import React from 'react';
import cn from 'classnames';
import { useFilter } from '@/zustand/filter';

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
      <h5 className='text-lg font-bold mb-5'>Price</h5>

      <div className='grid gap-y-2'>
        <div className='flex justify-between items-end gap-2'>
          <p className='text-lg'>from</p>
          <input
            type='number'
            placeholder='0$'
            className='border border-gray-200 rounded-[62px] px-4 py-2 focus:outline-black'
            min={0}
            value={fromInputValue}
            onChange={(e) => setFromInputValue(e.target.value)}
          />
        </div>

        <div className='flex justify-between items-end gap-2'>
          <p className='text-lg'>to</p>
          <input
            type='number'
            placeholder='1000$'
            className='border border-gray-200 rounded-[62px] px-4 py-2 focus:outline-black'
            min={0}
            value={toInputValue}
            onChange={(e) => setToInputValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
