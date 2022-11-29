import React, { useContext } from 'react'
import Navbar from '../components/Navbar/NavBar'
// import Paper from '@mui/material/Paper'
import { ThemeContext } from '../contexts/ThemeContext'
import RoomSlider from '../components/Slider/RoomSlider'
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {
    const { isDarkMode } = useContext(ThemeContext)

    const style = {
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: isDarkMode ? "black" : "white"
    }

    return (
        <div>
            <Navbar style={style} />
            <RoomSlider />

        </div>
    )
}

export default Homepage