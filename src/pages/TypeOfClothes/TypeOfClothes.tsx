import React from 'react';
import cn from 'classnames';

import { Breadcrumb, Container } from '@/components/ui';

import { FilterBar, GetClothesByPage } from './components';

interface Props {
  className?: string;
}

export const TypeOfClothes: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn(className, '')}>
      <Container>
        <hr className='mb-6' />

        <div>
          <Breadcrumb />
        </div>

        <div className='flex justify-between gap-5 mt-6 mb-10 max-md1024:justify-center'>
          <FilterBar className='min-h-[605px] self-start max-md1024:hidden' />
          <GetClothesByPage className='' />
        </div>
      </Container>
    </section>
  );
};
