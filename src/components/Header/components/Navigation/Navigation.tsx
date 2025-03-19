import React from 'react'
import { Link } from 'react-router-dom'

import cn from 'classnames'

import { IsActiveMenuType } from '../../types/activeMenuTypes'
import { NAVIGATION_LIST } from './navigationList'

interface Props {
  isActiveMenu: IsActiveMenuType
  className?: string
}

export const Navigation: React.FC<Props> = ({ isActiveMenu, className }) => {
  return (
    <nav
      className={cn(
        className,
        `z-20 max-md:absolute max-md:left-[-100%] max-md:top-0 max-md:h-full max-md:w-[300px] max-md:bg-black ${
          isActiveMenu && 'max-md:left-[0%]'
        } duration-500`,
      )}
    >
      <ul className='flex items-center gap-x-6 max-md:ml-4 max-md:mt-[120px] max-md:grid max-md:gap-y-4'>
        {NAVIGATION_LIST.map((el) => (
          <li key={el.id}>
            <Link
              className='text-base duration-300 supports-hover:hover:text-gray-600 max-md:text-xl max-md:text-white'
              to={el.path}
            >
              {el.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
