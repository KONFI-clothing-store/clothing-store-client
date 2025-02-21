import React from 'react'

import { Comment } from '@/components/ui'
import type { CommentType } from '@/components/ui/Comment/Comment.types'

interface Props {
  comments: CommentType[]
  className?: string
}

export const CommentsItem: React.FC<Props> = ({ comments, className }) => {
  return (
    <section className={className}>
      <h2 className='mb-8 text-xl'>All reviews ({comments.length})</h2>

      <div className='grid grid-cols-2 gap-5 max-md:grid-cols-1'>
        {comments.map((el: CommentType) => (
          <Comment commentData={el} />
        ))}
      </div>
    </section>
  )
}
