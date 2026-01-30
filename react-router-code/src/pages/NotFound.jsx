import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center mt-10'>
      <h1 className='text-2xl text-red-500'>Sorry, page not found!</h1>
      <div className='text-lg text-blue-700 underline'>
        <Link to={"/"}>Go Home</Link>
      </div>
    </div>
  )
}
