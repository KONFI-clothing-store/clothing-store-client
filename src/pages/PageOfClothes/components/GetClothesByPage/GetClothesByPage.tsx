import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import cn from 'classnames';

import { apiClient } from '@/api/apiClient';
import { useFilter } from '@/core/zustand/filter';
import { ProductCard } from '@/features/products/components/ui/ProductCard/ProductCard';
import { ProductCardType } from '@/features/products/types/product.types';

import { LIST_OF_URL } from './constants/listOfUrl';
import { useClothesFilter } from './hooks/useClothesFilter';

interface Props {
  className?: string;
}

export const GetClothesByPage: React.FC<Props> = ({ className }) => {
  const [clothes, setClothes] = React.useState<ProductCardType[]>([]);
  const [copyOfClothes, setCopyOfClothes] = React.useState<ProductCardType[]>(
    [],
  );

  const { pathname } = useLocation();
  const { type } = useParams();

  const isApplyFilter = useFilter((state) => state.isApplyFilter);
  const setApplyFilter = useFilter((state) => state.setApplyFilter);
  const { filter } = useClothesFilter();

  React.useEffect(() => {
    const getClothes = async () => {
      try {
        const res = await apiClient({
          method: 'get',
          url: `${import.meta.env.VITE_API_BASE_URL}/clothes/${
            LIST_OF_URL[pathname as keyof typeof LIST_OF_URL]
          }`,
          params: {
            limit: 9999999,
          },
        });

        setClothes(res.data.data);
        setCopyOfClothes(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    if (!isApplyFilter) {
      getClothes();
    }
  }, [type]);

  React.useEffect(() => {
    if (isApplyFilter) {
      setClothes(() => filter(copyOfClothes));
      setApplyFilter(false);
    }
  }, [isApplyFilter, filter, setApplyFilter]);

  return (
    <div
      className={cn(
        className,
        'grid grid-cols-3 gap-x-5 gap-y-[36px] max-sm:grid-cols-2 max-2xs:grid-cols-1',
      )}
    >
      {clothes.length === 0 ? (
        <p>Noting</p>
      ) : (
        clothes.map((item) => <ProductCard item={item} key={item.id} />)
      )}
    </div>
  );
};
