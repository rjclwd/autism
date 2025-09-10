import React from 'react'
import Hero from './sections/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import YoutubeEm from './sections/YoutubeEm/YoutubeEm'
import Book from './sections/Book/Book'
import SuccessStory from './sections/SuccessStory/SuccessStory'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='bg-gradient-to-b from-primary/30 to-white min-h-screen'>
      <header className=''>
        <Navbar />
      </header>
      <Hero />
      <YoutubeEm />
      <Book />
      <SuccessStory />
      <Footer />
    </div>
  )
}

export default App