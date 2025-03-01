import React from 'react'
import { Link } from 'react-router-dom'

import cn from 'classnames'
import { ShoppingCart } from 'lucide-react'

import { Container } from '../ui'
import { SearchClothesByName } from './components'
import { NAVIGATION_LIST } from './navigationList'

interface Props {
  className?: string
}

export const Header: React.FC<Props> = ({ className }) => {
  const [isActiveMenu, setIsActiveMenu] = React.useState<boolean>(false)

  return (
    <header className={cn(className, 'py-6 max-sm:py-3')}>
      <Container className='flex items-center justify-between gap-[40px] py-3 max-lg:gap-[30px]'>
        <div className='flex items-center gap-x-[18.63px]'>
          <button
            onClick={() => setIsActiveMenu((prevState) => !prevState)}
            className={
              'relative z-50 hidden h-[14.25px] w-[18.75px] gap-y-[4px] max-md:grid'
            }
          >
            <span
              className={`block h-[2px] w-[18.75px] rounded-[10px] bg-black ${
                isActiveMenu && 'max-md:bg-white'
              } duration-500`}
            />
            <span
              className={`block h-[2px] w-[18.75px] rounded-[10px] bg-black ${
                isActiveMenu && 'max-md:bg-white'
              } duration-500`}
            />
            <span
              className={`block h-[2px] w-[18.75px] rounded-[10px] bg-black ${
                isActiveMenu && 'max-md:bg-white'
              } duration-500`}
            />
          </button>

          <Link
            to='/'
            className={`relative z-50 font-integral_cf text-2xl ${isActiveMenu && 'max-md:text-white'} duration-500`}
          >
            SHOP.CO
          </Link>
        </div>

        <nav
          className={`z-20 max-md:absolute max-md:left-[-100%] max-md:top-0 max-md:h-full max-md:w-[300px] max-md:bg-black ${
            isActiveMenu && 'max-md:left-[0%]'
          } duration-500`}
        >
          <ul className='flex items-center gap-x-6 max-md:ml-4 max-md:mt-[120px] max-md:grid max-md:gap-y-4'>
            {NAVIGATION_LIST.map((el) => (
              <li key={el.id}>
                <Link
                  className='text-base duration-300 hover:text-gray-600 max-md:text-xl max-md:text-white'
                  to={el.path}
                >
                  {el.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex items-center gap-x-4 md:flex-1'>
          <SearchClothesByName />
          <Link to='/cart'>
            <ShoppingCart
              size={20}
              className='duration-300 hover:text-gray-600'
            />
          </Link>
        </div>
      </Container>
    </header>
  )
}
