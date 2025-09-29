import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import InternationalFee from '../InternationalFee/InternationalFee'

export default function Layout() {
  return (
    <div className={`bg-bgnd`}>
        <Navbar />
        <Outlet />
        <InternationalFee />
        <Footer />
    </div>
  )
}
