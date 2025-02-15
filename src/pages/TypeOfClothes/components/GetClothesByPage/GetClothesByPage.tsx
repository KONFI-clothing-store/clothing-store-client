import React from 'react';
import cn from 'classnames';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useFilter } from '@/zustand/filter';

import { useClothesFilter } from './hooks/useClothesFilter';
import { LIST_OF_URL } from './constants/listOfUrl';
import { ClothesCard } from '@/components/ui';

import { ClothesCardType } from '@/pages/Home/components';

interface Props {
  className?: string;
}

export const GetClothesByPage: React.FC<Props> = ({ className }) => {
  const [clothes, setClothes] = React.useState<ClothesCardType[]>([]);
  const { pathname } = useLocation();

  const isApplyFilter = useFilter((state) => state.isApplyFilter);
  const setApplyFilter = useFilter((state) => state.setApplyFilter);
  const { filter } = useClothesFilter();

  if (isApplyFilter) {
    setClothes((prevState) => filter(prevState));
    setApplyFilter(false);
  }

  console.log('clothes:', clothes);

  React.useEffect(() => {
    console.log('render in use effect');
    const getClothes = async () => {
      try {
        const res = await axios({
          method: 'get',
          url: `${import.meta.env.VITE_API_BASE_URL}/clothes/types/${
            LIST_OF_URL[pathname as keyof typeof LIST_OF_URL]
          }`,
        });

        setClothes(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getClothes();
  }, []);

  return (
    <div
      className={cn(
        className,
        'grid grid-cols-3 gap-x-5 gap-y-[36px] max-md:grid-cols-2',
      )}
    >
      {clothes.map((item) => (
        <ClothesCard item={item} />
      ))}
    </div>
  );
};
