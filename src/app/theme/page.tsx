import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col gap-4 h-[100vh] w-100 justify-center items-center'>
        <button className='p-1 rounded-md bg-violet-600 text-white'>Change Theme</button>
        <button className='p-1 rounded-md bg-blue-600 text-white'>Change Font Theme</button>
    </div>
  )
}

export default page