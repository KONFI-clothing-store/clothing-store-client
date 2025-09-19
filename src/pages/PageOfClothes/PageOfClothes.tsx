import React from 'react';
import { useLocation } from 'react-router-dom';

import cn from 'classnames';

import { Breadcrumb } from '@/components/ui/Breadcrumb/Breadcrumb';
import { Container } from '@/components/ui/Container/Container';

import { useScrollToTop } from '@/hooks/useScrollToTop';

import { Filter, FilterBar, GetClothesByPage } from './components';

interface Props {
  className?: string;
}

export const PageOfClothes: React.FC<Props> = ({ className }) => {
  const { pathname } = useLocation();
  const splitPath = pathname.split('/')[2];
  const title = splitPath[0].toUpperCase() + splitPath.slice(1);

  useScrollToTop();

  return (
    <section className={cn(className, '')}>
      <Container>
        <hr className='mb-6' />

        <div>
          <Breadcrumb />
        </div>

        <div className='mb-10 mt-6 flex gap-5 max-lg:justify-center'>
          <FilterBar className='min-h-[605px] self-start max-x-md:hidden' />

          <div className='max-2xs:w-full'>
            <div className='flex justify-between'>
              <h1 className='mb-4 text-2xl font-bold'>{title}</h1>

              <Filter />
            </div>

            <GetClothesByPage className='' />
          </div>
        </div>
      </Container>
    </section>
  );
};
