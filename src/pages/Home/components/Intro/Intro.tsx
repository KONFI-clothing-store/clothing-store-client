import React from 'react';
import { useNavigate } from 'react-router-dom';

import cn from 'classnames';

import { Button } from '@/components/ui/Button/Button';
import { Container } from '@/components/ui/Container/Container';
import { Icon } from '@/components/ui/Icon/Icon';

import models from '@/../public/images/models.png';

interface Props {
  className?: string;
}

export const Intro: React.FC<Props> = ({ className }) => {
  const navigate = useNavigate();

  return (
    <section className={cn(className, 'bg-hero-bg pt-[43px]')}>
      <Container className='flex items-center justify-between max-md:flex-col'>
        <div className='mb-[50px]'>
          <h1 className='max-w-[577px] font-integral_cf text-5xl max-xl:text-2xl'>
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className='mt-[28px] max-w-[545px] opacity-60'>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Button
            onClick={() => navigate('/shop')}
            className='mt-[37px] px-[67.5px] py-[15px] max-md:w-full'
          >
            Shop Now
          </Button>
        </div>

        <div className='relative max-w-[620px] max-lg:max-w-[400px]'>
          <Icon
            name='icon_star'
            className='absolute left-0 top-[35%] h-[56px] w-[56px] max-lg:h-[32px] max-lg:w-[32px]'
          />
          <Icon
            name='icon_star'
            className='max-lg: absolute right-[0%] right-[4%] top-[7%] h-[104px] w-[104px] max-lg:h-[56px] max-lg:w-[56px]'
          />
          <img src={models} className='w-full' />
        </div>
      </Container>
    </section>
  );
};
