import React from 'react'
import AppointmentFloat from '../../components/AppointmentFloat/AppointmentFloat'
import Hero from './Hero/Hero'
import SuccessStory from './SuccessStory/SuccessStory'
import Testimonials from './Testimonials/Testimonials'
import Book from './Book/Book'
import YoutubeCarousel from '../../components/YoutubeEm/YoutubeEm'

export default function MensCare() {
    return (
        <div>
            <AppointmentFloat />
            <Hero />
            <YoutubeCarousel videos={["BFBoEE1Yvps", "Mjgd4mMzO1o", "yZAMkqHAJFg", "SyIWZMOclmk"]} />
            <Book />
            <SuccessStory />
            <Testimonials />
        </div>
    )
}
