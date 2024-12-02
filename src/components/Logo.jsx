import React from 'react'
import logoImgUrl from '../assets/logo.png'

function Logo({
  className = "",
}) {
  return (
    <div>
      <img
        src= {logoImgUrl} alt="Logo"
        className={`${className} bg-yellow-300 rounded-full bg-cover w-14 h-14 `}
      />
    </div>
  )
}

export default Logo