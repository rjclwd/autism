import React from 'react'
import AppointmentFloat from '../../components/AppointmentFloat/AppointmentFloat'
import Hero from './Hero/Hero'
import YoutubeCarousel from './YoutubeEm/YoutubeEm'
import SuccessStory from './SuccessStory/SuccessStory'
import Testimonials from './Testimonials/Testimonials'
import Book from './Book/Book'

export default function Autism() {
    return (
        <div>
            <AppointmentFloat />
            <Hero />
            <YoutubeCarousel />
            <Book />
            <SuccessStory />
            <Testimonials />
        </div>
    )
}
