import React from 'react'
import Hero from './sections/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import YoutubeEm from './sections/YoutubeEm/YoutubeEm'
import Book from './sections/Book/Book'
import SuccessStory from './sections/SuccessStory/SuccessStory'
import Footer from './components/Footer/Footer'
import AppointmentFloat from './components/AppointmentFloat/AppointmentFloat'
import Testimonials from './sections/Testimonials/Testimonials'

function App() {
  return (
    <div className='min-h-screen bg-background'>
      <header className=''>
        <Navbar />
      </header>
      <AppointmentFloat />
      <Hero />
      <YoutubeEm />
      <Book />
      <SuccessStory />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App