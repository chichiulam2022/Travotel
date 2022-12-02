import React from 'react'
import RoomCards from '../components/RoomCards/RoomCards'
import NavBar from '../components/Navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer/Footer';



function Rooms() {
    return (
        <>
            <NavBar />
            <RoomCards />
            <Footer />
        </>
    )
}

export default Rooms