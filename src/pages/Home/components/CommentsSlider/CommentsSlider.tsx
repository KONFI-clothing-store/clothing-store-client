import React from 'react'

import axios from 'axios'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Comment, Container } from '@/components/ui'
import type { CommentType } from '@/components/ui/Comment/Comment.types'

import './CommentSlider.css'

interface Props {
  className?: string
}

export const CommentsSlider: React.FC<Props> = () => {
  const [commentsData, setCommentsData] = React.useState<CommentType[] | []>([])
  const [width, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    const getComments = async () => {
      try {
        const res = await axios({
          method: 'get',
          url: `${import.meta.env.VITE_API_BASE_URL}/comments`,
        })

        setCommentsData(res.data)
      } catch (err) {
        throw new Error(`error: ${err}`)
      }
    }

    getComments()
  }, [])

  React.useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', updateWidth)

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  if (!commentsData) {
    return <p>Loading...</p>
  }

  return (
    <Container className='mb-8'>
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
    </Container>
  )
}
