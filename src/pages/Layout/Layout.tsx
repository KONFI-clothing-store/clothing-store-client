import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ArrowScrollToTop } from '@/components/ui/ArrowScrollToTop/ArrowScrollToTop';
import { Toaster } from '@/components/ui/Sonner/sonner';

import { Footer, Header } from '@/components';

interface Props {
  className?: string;
}

export const Layout: React.FC<Props> = () => {
  return (
    <>
      <Header />
      <main className='flex-grow'>
        <Outlet />
        <Link to='/cart'>
          <Toaster className='bg-black' />
        </Link>

        <ArrowScrollToTop />
      </main>
      <Footer />
    </>
  );
};
