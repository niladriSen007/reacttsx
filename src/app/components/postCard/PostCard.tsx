import { dataType } from '@/app/types/dataType'
import React from 'react'

const PostCard = ({title,body}:dataType) => {
  return (
    <div className='w-96'>
        <h1 className='text-3xl font-bold'>{title}</h1>
        <h1 className='text-xl'>{body}</h1>
    </div>
  )
}

export default PostCard