import React from 'react'
import { useNavigate } from 'react-router-dom'
import playClickSound from '../sound/sound'

function Category() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-[75vh] md:min-h-[80vh] w-full flex flex-col justify-center items-center text-center text-white">
      <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-6 px-5 md:px-12 pt-10 pb-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">
          This Page Is Under Devlopment !!!
        </h1>
        <button
          className='bg-emerald-500 px-6 py-3 text-lg font-bold rounded-lg hover:bg-emerald-700'
          onClick={() => {
            playClickSound()
            navigate('/')
          }}
        >
          Go Back To Home
        </button>
      </div>
    </div>
  )
}

export default Category