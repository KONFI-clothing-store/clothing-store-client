import React from 'react'
import { Link } from 'react-router-dom'

import cn from 'classnames'
import { Facebook, Instagram, Twitter } from 'lucide-react'

import { Container, Icon } from '../ui'
import { Form } from './components'
import { PAYMENT_ITEMS } from './iconItems'

interface Props {
  className?: string
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn(className, 'bg-gray-100 py-20 max-sm:py-5')}>
      <Container>
        <div className='flex items-start justify-between gap-x-6 max-sm:grid max-sm:gap-y-4'>
          <div className=''>
            <Link to='/' className='relative z-50 font-integral_cf text-2xl'>
              SHOP.CO
            </Link>
            <p className='mt-[25px] w-[248px] text-sm opacity-60 max-sm:mt-4'>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>

            <div className='mt-[35px] flex items-center gap-x-3 max-sm:mt-5'>
              <Link
                className='grid h-7 w-7 place-items-center rounded-full border border-gray-200 bg-white'
                target='_blank'
                to='https://x.com/?lang=en-&mx=2'
              >
                <Twitter size={11} />
              </Link>
              <Link
                className='grid h-7 w-7 place-items-center rounded-full bg-black'
                target='_blank'
                to='https://www.facebook.com/?locale=uk_UA'
              >
                <Facebook color='white' size={15} />
              </Link>
              <Link
                className='grid h-7 w-7 place-items-center rounded-full border border-gray-200 bg-white'
                target='_blank'
                to='https://x.com/?lang=en-&mx=2'
              >
                <Instagram size={15} />
              </Link>
            </div>
          </div>

          <div className='flex flex-col items-end max-sm:items-center'>
            <p className='mb-[25px] font-integral_cf text-2xl max-md:text-xl'>
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </p>

            <Form />
          </div>
        </div>

        <div className='mb-[25px] mt-[50px] h-[1px] w-full bg-gray-200 max-sm:mb-[15px] max-sm:mt-[30px]' />

        <div className='flex items-center justify-between max-sm:flex-col max-sm:gap-y-3'>
          <p className='text-sm opacity-60'>
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          <div className='flex items-center gap-x-3'>
            {PAYMENT_ITEMS.map((item) => (
              <div
                className='h-[30px] w-[46px] rounded-[5.38px] bg-white px-1.5 py-[8px]'
                key={item.id}
              >
                <Icon className='h-full w-full' name={item.name} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
