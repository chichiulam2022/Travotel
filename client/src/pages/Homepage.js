import React from 'react'
import Navbar from '../components/Navbar/NavBar'
import HotelSlider from '../components/Slider/HotelSlider'
import 'bootstrap/dist/css/bootstrap.min.css';
import FrontPage from '../components/FrontPage/FrontPage';
import Footer from '../components/Footer/Footer';
import Search from '../components/Search/Search';
import AboutUs from '../components/About/AboutUs'
function Homepage() {

    return (
        <div>
            <FrontPage />
            <Navbar />
            <HotelSlider />
            <Search />
            <AboutUs />
            <Footer />
        </div>
    )
}

export default Homepage