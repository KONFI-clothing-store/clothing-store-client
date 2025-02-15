import React from 'react';

import sprite from '@/../public/sprite.svg';

interface Props {
  name: string;
  className?: string;
}

export const Icon: React.FC<Props> = ({ name, className }) => {
  return (
    <svg className={className}>
      <use href={`${sprite}#${name}`} />
    </svg>
  );
};
