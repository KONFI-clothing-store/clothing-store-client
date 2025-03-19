import React from 'react'

import cn from 'classnames'

import {
  IsActiveMenuType,
  SetIsActiveMenuType,
} from '../../types/activeMenuTypes'
import { toggleMenuState } from '../../utils/toggleMenuState'

interface Props {
  isActiveMenu: IsActiveMenuType
  setIsActiveMenu: SetIsActiveMenuType
  className?: string
}

export const BurgerButton: React.FC<Props> = ({
  isActiveMenu,
  setIsActiveMenu,
  className,
}) => {
  return (
    <button
      onClick={() => toggleMenuState(isActiveMenu, setIsActiveMenu)}
      className={cn(
        'relative z-50 hidden h-[14.25px] w-[18.75px] gap-y-[4px] max-md:grid',
        className,
      )}
    >
      <span
        className={`block h-[2px] w-[18.75px] rounded-[10px] bg-black ${
          isActiveMenu && 'translate-y-[3.8px] rotate-45 max-md:bg-white'
        } duration-500`}
      />
      <span
        className={`block h-[2px] w-[18.75px] rounded-[10px] bg-black ${
          isActiveMenu && 'scale-0 max-md:bg-white'
        } duration-500`}
      />
      <span
        className={`block h-[2px] w-[18.75px] rounded-[10px] bg-black ${
          isActiveMenu && '-translate-y-2 -rotate-45 max-md:bg-white'
        } duration-500`}
      />
    </button>
  )
}
