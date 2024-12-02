import React from 'react'

function Logo({
  className = "",
}) {
  return (
    <div>
      <img
        src="https://play-lh.googleusercontent.com/VpIV5wjUERZ-dTZxuIyiqv8XkZqbcgQTxqNJnwCcszLPGezPUEY-PSTxKySq-qhf" alt="Logo"
        className={`${className} bg-yellow-300 rounded-full bg-cover w-14 h-14 `}
      />
    </div>
  )
}

export default Logo