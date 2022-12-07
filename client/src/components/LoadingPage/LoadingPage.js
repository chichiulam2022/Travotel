import React from 'react'
import '../LoadingPage/LoadingPage.css'
import logo from "../../assets/logo.png";
import { Typewriter } from 'react-simple-typewriter'

function LoadingPage() {
    return (
        <div className='loader-bx'>
            <img
                src={logo}
                alt="logo"
                style={{ height: "65px", width: "198px" }}
            />
            <div className='loading-txt-container mb-1 mt-3'>
                <span className='typewriter-text'>
                    <Typewriter
                        words={['loading...']}
                        loop={false}
                        cursor
                        typeSpeed={100}
                        deleteSpeed={140}
                        delaySpeed={1200}
                        className='loading-typwriter'
                    />
                </span>
                <span className='typewriter-text'>
                    <Typewriter
                        words={['télécharger...']}
                        loop={false}
                        cursor
                        typeSpeed={100}
                        deleteSpeed={140}
                        delaySpeed={1200}
                        className='loading-typwriter'
                    />
                </span>
            </div>

        </div>
    )
}

export default LoadingPage