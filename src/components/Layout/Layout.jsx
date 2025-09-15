import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {
   const location = useLocation()

  // Choose theme based on route
  const theme =
    location.pathname.startsWith("/awareness/autism") ? "theme-blue" :
    location.pathname.startsWith("/awareness/mencare") ? "theme-green" :
    ""
  return (
    <div className={`${theme} bg-bgnd`}>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}
