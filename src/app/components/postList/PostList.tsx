import React from 'react'
import PostCard from '../postCard/PostCard'
import { dataType } from '@/app/types/dataType'

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const PostList =async () => {

  const data:dataType[] = await getData();
  return (
    <div className='flex gap-6 flex-wrap px-10 py-8'>
        {/* <PostCard title='Niladri' desc='Hi I am Niladri'/> */}
        {
          data.map((post)=>(
            <PostCard key={post.id} {...post} />
          ))
        }
    </div>
  )
}

export default PostList