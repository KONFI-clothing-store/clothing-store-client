import React from "react";
import axios from "axios";

import { Comment, Container } from "@/components/ui";

import type { CommentType } from "@/components/ui/Comment/Comment.types";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./CommentSlider.css";

interface Props {
  className?: string;
}

export const CommentsSlider: React.FC<Props> = () => {
  const [commentsData, setCommentsData] = React.useState<CommentType[] | []>([]);
  const [width, setWidth] = React.useState(0);

  const updateWidth = () => {
    const fullDocumentWidth = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
    setWidth(fullDocumentWidth);
  };

  React.useEffect(() => {
    const getComments = async () => {
      try {
        const res = await axios({
          method: "get",
          url: `${import.meta.env.VITE_API_BASE_URL}/comments`,
        });

        setCommentsData(res.data);
      } catch (err) {
        throw new Error(`error: ${err}`);
      }
    };

    getComments();
    updateWidth();
  }, []);
  console.log("width:", width);

  if (!commentsData) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Swiper
        loop={true}
        slidesPerView={width <= 767.98 ? 1 : 2}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {commentsData.map((el: CommentType) => (
          <SwiperSlide key={el.id}>
            <Comment commentData={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
