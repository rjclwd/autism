import AppointmentFloat from '../../components/AppointmentFloat/AppointmentFloat'
import Hero from './Hero/Hero'
import SuccessStory from './SuccessStory/SuccessStory'
import Testimonials from './Testimonials/Testimonials'
import YoutubeCarousel from '../../components/YoutubeEm/YoutubeEm'
import Products from './Products/Products'

export default function MensCare() {
    return (
        <div>
            <AppointmentFloat />
            <Hero />
            <YoutubeCarousel videos={["BFBoEE1Yvps", "Mjgd4mMzO1o", "yZAMkqHAJFg", "SyIWZMOclmk"]} />
            <Products />
            <SuccessStory />
            <Testimonials />
        </div>
    )
}
