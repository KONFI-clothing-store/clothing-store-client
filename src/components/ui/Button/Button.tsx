import React from 'react';

import { cn } from '@/utils/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'black' | 'white';
  children: React.ReactNode;
  className?: string;
}

export const Button = ({
  color = 'black',
  children,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        className,
        `rounded-[62px] font-medium bg-${color} ${color === 'black' ? 'text-white' : 'text-black'} duration-500 hover:bg-gray-600`,
      )}
    >
      {children}
    </button>
  );
};
