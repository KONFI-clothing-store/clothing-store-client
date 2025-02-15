import React from 'react';
import cn from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'black' | 'white';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<Props> = ({
  color = 'black',
  children,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        className,
        `rounded-[62px] font-medium bg-${color} ${color === 'black' ? 'text-white' : 'text-black'} hover:bg-gray-600 duration-500`,
      )}
    >
      {children}
    </button>
  );
};
