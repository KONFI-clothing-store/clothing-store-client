import React from 'react'

import cn from 'classnames'

interface Props {
  children: React.ReactNode
  className?: string
}

export const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn(className, 'mx-auto max-w-[1272px] px-4')}>
      {children}
    </div>
  )
}
