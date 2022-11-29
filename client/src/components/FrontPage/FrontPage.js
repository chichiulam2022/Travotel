import React from 'react'
import './FrontPage.css'
// import video from '../../assets/video.mp4'
import { Typewriter } from 'react-simple-typewriter'
import Typography from "@mui/material/Typography"


function FrontPage() {
    return (
        <div className='main'>
            <div className='filter'></div>

            {/* <video src={video} autoPlay loop muted /> */}

            <div className='content'>
                <Typography variant="h2" className="intro-text"
                    sx={{
                        fontSize: {
                            lg: 40,
                            md: 30,
                            sm: 20,
                            xs: 20
                        }
                    }}
                    style={{
                        fontFamily: 'Orbitron'
                    }}
                >
                    We Make Your Stay &nbsp;
                    <span className='typewriter-text'>
                        <Typewriter
                            words={['Comfortable', 'Incredible', 'Unforgettable']}
                            loop={false}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={140}
                            delaySpeed={1200}
                        />
                    </span>
                </Typography>
                <br /><br /><br />
                <br /><br /><br />
                <Typography variant="h2" className="intro-text"
                    sx={{
                        fontSize: {
                            lg: 40,
                            md: 30,
                            sm: 20,
                            xs: 20
                        }
                    }}
                    style={{
                        fontFamily: 'Orbitron'
                    }}
                >
                    Nous rendons votre séjour &nbsp;
                    <span className='typewriter-text'>
                        <Typewriter
                            words={['Confortable', 'Inoubliable', 'Incroyable']}
                            loop={false}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={140}
                            delaySpeed={1200}
                        />
                    </span>
                </Typography>
            </div>
        </div >
    )
}

export default FrontPage