import React from 'react'

import cn from 'classnames'

import { Counter } from './components'

interface Props {
  count: number
  setCount: (count: number) => void
  className?: string
}

export const ActionsForAddCart: React.FC<Props> = ({
  count,
  setCount,
  className,
}) => {
  return (
    <div className={cn(className, '')}>
      <Counter number={count} setNumber={setCount} />
    </div>
  )
}
