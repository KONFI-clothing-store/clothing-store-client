import React from 'react';

import { Header, Footer } from '@/components';
import { Outlet } from 'react-router-dom';

interface Props {
  className?: string;
}

export const Layout: React.FC<Props> = () => {
  return (
    <>
      <Header />
      <main className='flex-grow'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
