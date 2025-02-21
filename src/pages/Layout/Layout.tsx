import React from 'react'
import { Outlet } from 'react-router-dom'

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
        <Toaster className='bg-black' />
      </main>
      <Footer />
    </>
  )
}
