import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import { Footer, Header } from '@/components'
import { Toaster } from '@/components/ui'

interface Props {
  className?: string
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
      </main>
      <Footer />
    </>
  )
}
