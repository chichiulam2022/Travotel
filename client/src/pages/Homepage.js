import React from 'react'
import Navbar from '../components/Navbar/NavBar'
import RoomSlider from '../components/Slider/RoomSlider'
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {

    return (
        <div>
            <Navbar />
            <RoomSlider />
        </div>
    )
}

export default Homepage