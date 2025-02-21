import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Icon } from '..'
import { BREADCRUMB_DATA } from './BREADCRUMB_DATA'

interface Props {
  className?: string
}

export const Breadcrumb: React.FC<Props> = ({ className }) => {
  const location = useLocation()
  return (
    <div className={className}>
      <ul className='flex gap-x-4'>
        <Link to='/' className='text-gray-600'>
          Home
        </Link>
        {/* {location.pathname.includes('/')} */}

        {BREADCRUMB_DATA.map(
          (el) =>
            location.pathname.includes(el.path) && (
              <Link
                className='flex items-center gap-x-4 text-gray-600 last:text-black'
                to={el.path}
                key={el.path}
              >
                <Icon className='h-[12.19px] w-[7px]' name='arrow' />
                {el.text}
              </Link>
            ),
        )}
      </ul>
    </div>
  )
}
