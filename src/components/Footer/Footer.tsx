import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import { Container, Icon } from '../ui';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Form } from './components';

import { PAYMENT_ITEMS } from './iconItems';

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn(className, 'bg-gray-100 py-20 max-md654:py-5')}>
      <Container>
        <div className='flex items-start justify-between gap-x-6 max-md654:grid max-md654:gap-y-4'>
          <div className=''>
            <Link to='/' className='font-integral_cf text-2xl relative z-50 '>
              SHOP.CO
            </Link>
            <p className='w-[248px] text-sm opacity-60 mt-[25px] max-md654:mt-4'>
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>

            <div className='flex items-center gap-x-3 mt-[35px] max-md654:mt-5'>
              <Link
                className='grid place-items-center rounded-full w-7 h-7 bg-white border border-gray-200'
                target='_blank'
                to='https://x.com/?lang=en-&mx=2'
              >
                <Twitter size={11} />
              </Link>
              <Link
                className='grid place-items-center rounded-full w-7 h-7 bg-black'
                target='_blank'
                to='https://www.facebook.com/?locale=uk_UA'
              >
                <Facebook color='white' size={15} />
              </Link>
              <Link
                className='grid place-items-center rounded-full w-7 h-7 bg-white border border-gray-200'
                target='_blank'
                to='https://x.com/?lang=en-&mx=2'
              >
                <Instagram size={15} />
              </Link>
            </div>
          </div>

          <div className='flex flex-col items-end max-md654:items-center'>
            <p className='font-integral_cf text-2xl mb-[25px] max-md:text-xl'>
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </p>

            <Form />
          </div>
        </div>

        <div className='w-full h-[1px] bg-gray-200 mt-[50px] mb-[25px] max-md654:mt-[30px] max-md654:mb-[15px]' />

        <div className='flex items-center justify-between max-md654:flex-col max-md654:gap-y-3'>
          <p className='text-sm opacity-60'>
            Shop.co © 2000-2023, All Rights Reserved
          </p>

          <div className='flex items-center gap-x-3'>
            {PAYMENT_ITEMS.map((item) => (
              <div
                className='w-[46px] h-[30px] bg-white rounded-[5.38px] px-1.5 py-[8px]'
                key={item.id}
              >
                <Icon className='w-full h-full' name={item.name} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};
