import React from 'react';

import cn from 'classnames';
import { SlidersHorizontal } from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import { FilterBar } from '../FilterBar/FilterBar';

interface Props {
  className?: string;
}

export const Filter: React.FC<Props> = ({ className }) => {
  const [width, setWidth] = React.useState<number>(window.innerWidth);

  React.useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className={cn(className, '')}>
      {width < 860 && (
        <Sheet>
          <SheetTrigger asChild>
            <button className='grid h-8 w-8 place-content-center rounded-[50%] bg-gray-100'>
              <SlidersHorizontal size={16} color='#000000' strokeWidth={2} />
            </button>
          </SheetTrigger>
          <SheetContent className='overflow-y-auto'>
            <FilterBar className='w-full flex-col border-none p-[19px]' />
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
};
