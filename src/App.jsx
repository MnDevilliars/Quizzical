import React from 'react'
import { Header, Footer } from './components/index.js'
import { Outlet } from 'react-router-dom';
import GameContextProvider from './context/GameContextProvider.jsx'
import video from './assets/bg_video.mp4'

function App() {

  return (
    <GameContextProvider>
      <div className="relative flex flex-col justify-between">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          src={video}
          autoPlay
          loop
          muted
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-[-5]"></div>
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </GameContextProvider>
  )
}

export default App
