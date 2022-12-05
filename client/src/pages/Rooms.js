import React from 'react'
import RoomCards from '../components/RoomCards/RoomCards'
import NavBar from '../components/Navbar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';

function Rooms() {
    return (
        <>
            <NavBar />
            <RoomCards />
        </>
    )
}

export default Rooms