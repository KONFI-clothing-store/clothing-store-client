import React from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';
import { ShoppingCart } from 'lucide-react';

import { Container } from '../ui/Container/Container';
import { BurgerButton, Navigation, SearchClothesByName } from './components';
import { useCloseMenuOnRouteChange } from './hooks/useCloseMenuOnRouteChange';
import { IsActiveMenuType } from './types/activeMenuTypes';

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const [isActiveMenu, setIsActiveMenu] =
    React.useState<IsActiveMenuType>(false);

  useCloseMenuOnRouteChange(setIsActiveMenu);

  return (
    <header className={cn(className, 'py-6 max-sm:py-3')}>
      <Container className='flex items-center justify-between gap-[40px] py-3 max-lg:gap-[30px]'>
        <div className='flex items-center gap-x-[18.63px]'>
          <BurgerButton
            isActiveMenu={isActiveMenu}
            setIsActiveMenu={setIsActiveMenu}
          />

          <Link
            to='/'
            className={`relative z-50 font-integral_cf text-2xl ${isActiveMenu && 'max-md:text-white'} duration-500`}
          >
            SHOP.CO
          </Link>
        </div>

        <Navigation isActiveMenu={isActiveMenu} />

        <div className='flex items-center gap-x-4 md:flex-1'>
          <SearchClothesByName />
          <Link to='/cart'>
            <ShoppingCart
              size={20}
              className='duration-300 supports-hover:hover:text-gray-600'
            />
          </Link>
        </div>
      </Container>
    </header>
  );
};
