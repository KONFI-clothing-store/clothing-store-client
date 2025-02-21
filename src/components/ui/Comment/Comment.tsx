import React from 'react'

import { Icon, Rating } from '@/components/ui'
import { getFormattedDate } from '@/pages/ClothesPage/components/CommentsItem/utils/getFormattedDate'

import { CommentType } from './Comment.types'

interface Props {
  commentData: CommentType
  className?: string
}

export const Comment: React.FC<Props> = ({ commentData }) => {
  const { id, rating, comment, first_name, second_name, createdAt } =
    commentData

  return (
    <div
      className='flex h-full flex-col justify-between rounded-[20px] border border-black border-opacity-10 py-7 pl-8 pr-[34px]'
      key={id}
    >
      <div>
        <Rating className='mb-[15px]' rating={rating} />

        <p className='mb-3 flex items-center gap-x-2 text-lg font-bold'>
          {first_name} {second_name[0]}.
          <Icon
            className='h-[22px] w-[20px]'
            name={+rating >= 3 ? 'positive_icon' : 'negative_icon'}
          />
        </p>

        <p className='mb-6 opacity-60'>"{comment}"</p>
      </div>

      <p className='opacity-60'>Posted on {getFormattedDate(createdAt)}</p>
    </div>
  )
}
