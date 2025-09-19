import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Breadcrumb } from '@/components/ui/Breadcrumb/Breadcrumb';
import { Container } from '@/components/ui/Container/Container';

import { apiClient } from '@/api/apiClient';
import { useScrollToTop } from '@/shared/hooks/useScrollToTop';
import { cn } from '@/shared/utils/utils';

import { ClothesItem, CommentsItem } from './components';
import { ClothesItemType } from './components/ClothesItem/ClothesItem.types';

interface Props {
  className?: string;
}

export const ClothesPage = ({ className }: Props) => {
  const [clothesItemData, setClothesItemData] = useState<
    ClothesItemType | undefined
  >(undefined);

  const { type, id } = useParams();

  useScrollToTop();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await apiClient({
          method: 'get',
          url: `${import.meta.env.VITE_API_BASE_URL}/clothes/${id}`,
        });

        setClothesItemData(response.data);
      } catch (err) {
        throw new Error(`error: ${err}`);
      }
    };

    getData();
  }, [type, id]);

  if (!clothesItemData) {
    return <div>Loading...</div>;
  }

  const { name, images_url, price, rating, description, sizes, comments } =
    clothesItemData;

  return (
    <div className={cn(className, '')}>
      <Container>
        <hr className='mb-6' />

        <Breadcrumb />

        <ClothesItem
          id={id}
          name={name}
          images_url={images_url}
          price={price}
          rating={rating}
          description={description}
          sizes={sizes}
          className='mb-20 mt-6'
        />

        <CommentsItem className='mb-16' comments={comments} />
      </Container>
    </div>
  );
};
