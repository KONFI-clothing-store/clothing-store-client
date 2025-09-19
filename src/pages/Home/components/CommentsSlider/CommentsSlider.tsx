import React from 'react';

import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Comment } from '@/components/ui/Comment/Comment';
import type { CommentType } from '@/components/ui/Comment/Comment.types';
import { Container } from '@/components/ui/Container/Container';

import { apiClient } from '@/api/apiClient';

import './CommentSlider.css';

interface Props {
  className?: string;
}

export const CommentsSlider: React.FC<Props> = () => {
  const [commentsData, setCommentsData] = React.useState<CommentType[] | null>(
    null,
  );
  const [width, setWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const getComments = async () => {
      try {
        const res = await apiClient<CommentType[]>({
          method: 'get',
          url: `${import.meta.env.VITE_API_BASE_URL}/comments`,
        });

        console.log('status:', res.status);

        setCommentsData(res.data);
      } catch (err) {
        setCommentsData(null);
        throw new Error(`error: ${err}`);
      }
    };

    getComments();
  }, []);

  React.useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  console.log('commentsData:', commentsData);

  return (
    <Container className='mb-8'>
      {commentsData ? (
        <Swiper
          loop={true}
          slidesPerView={width < 768 ? 1 : 2}
          spaceBetween={30}
          autoplay={{
            delay: 5000,
          }}
          pagination={{
            clickable: true,
          }}
          className='mySwiper'
          modules={[Autoplay]}
        >
          {commentsData.map((el: CommentType) => (
            <SwiperSlide key={el.id}>
              <Comment commentData={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : null}
    </Container>
  );
};
