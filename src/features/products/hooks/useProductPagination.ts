import { useState } from 'react';

export const useProductPagination = () => {
  const [offset, setOffset] = useState<number>(1);

  const nextOffset = () => {
    setOffset((prevOffset) => prevOffset + 1);
  };

  const resetOffset = () => {
    setOffset(1);
  };

  return { offset, nextOffset, resetOffset };
};
