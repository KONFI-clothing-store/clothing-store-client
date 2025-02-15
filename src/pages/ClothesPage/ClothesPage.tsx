import React from 'react';
import cn from 'classnames';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { ClothesItem, CommentsItem } from './components';
import { Container, Breadcrumb } from '@/components/ui';

import { ClothesItemType } from './components/ClothesItem/ClothesItem.types';

interface Props {
  className?: string;
}

export const ClothesPage: React.FC<Props> = ({ className }) => {
  const { id } = useParams();
  const [clothesItemData, setClothesItemData] = React.useState<
    ClothesItemType | undefined
  >(undefined);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: `${import.meta.env.VITE_API_BASE_URL}/clothes/${id}`,
        });

        setClothesItemData(response.data);
      } catch (err) {
        throw new Error(`error: ${err}`);
      }
    };

    getData();
  }, []);

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
          name={name}
          images_url={images_url}
          price={price}
          rating={rating}
          description={description}
          sizes={sizes}
          className='mt-6 mb-20'
        />

        <CommentsItem className='mb-16' comments={comments} />
      </Container>
    </div>
  );
};
