import React from "react";
import cn from 'classnames';

import {Counter} from './components'

interface Props {
  className?: string;
}

export const ActionsForAddCart: React.FC<Props> = ({ className }) => {
    const [count, setCount] = React.useState<number>(1)

  return <div className={cn(className, '')}>
    <Counter number={count} setNumber={setCount} />
  </div>;
};