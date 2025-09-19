import React from 'react';

import { Container } from '@/components/ui/Container/Container';
import { Icon } from '@/components/ui/Icon/Icon';

interface Props {
  className?: string;
}

export const Brands: React.FC<Props> = () => {
  return (
    <div className='bg-black'>
      <Container className='flex flex-wrap items-center justify-between gap-x-3 gap-y-3 py-11 max-md:py-5'>
        <Icon className='h-[34px] w-[167px]' name='versache' />
        <Icon className='h-[38px] w-[91px]' name='zara' />
        <Icon className='h-[36px] w-[156px]' name='gucci' />
        <Icon className='h-[32px] w-[194px]' name='prada' />
        <Icon className='h-[34px] w-[207px]' name='calvin' />
      </Container>
    </div>
  );
};
