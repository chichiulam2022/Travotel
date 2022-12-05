import React from 'react'
import NavBar from '../../components/Navbar/NavBar'
import about_icon from '../../assets/about_icon_1.png'
import logo from '../../assets/logo.png'
import './AboutUs.css'


function AboutUs() {


    return (
        <div>
            <NavBar />
            <div className="about-us-color-overlay d-flex
        justify-content-center align-items-center">
                {/* <div className='about-us-col'> */}
                <div className='about-us-text-container'>
                    <h3 className='mb-3 pt-3 who-text' >
                        Who Are We?
                    </h3>
                    <img src={logo} alt='logo' className='about-us-logo' />
                    <h5 className='pt-5 px-4 info-text' >
                        Here at TRAVÔTEL, we value our your time and provide the most important information and search result first and foremost before other options. We try our best to make your experience "comfortable, unforgettable and incredible". We certainly hope you enjoy your stay.</h5>
                    <h4 className='mt-5 team-members-title'>
                        Our Awesome Team Members:</h4>
                    <div className='team-members-info mt-4 pb-3'>
                        <div>
                            <img src={about_icon} alt='logo' className='about-icon mx-1' />
                            <a href='https://github.com/AlexJCturbo'>Alejandro</a>
                        </div>
                        <div>
                            <img src={about_icon} alt='logo' className='about-icon mx-1' />
                            <a href='https://github.com/A-N26'>Ashay</a>
                        </div>
                        <div>
                            <img src={about_icon} alt='logo' className='about-icon mx-1' />
                            <a href='https://github.com/andyloo416'>Andy</a>
                        </div>
                        <div>
                            <img src={about_icon} alt='logo' className='about-icon mx-1' />
                            <a href='https://github.com/chichiulam2022'>Chi&nbsp;Chiu</a>
                        </div>
                        <div>
                            <img src={about_icon} alt='logo' className='about-icon mx-1' />
                            <a href='https://github.com/KeeveRW11'>Keeve</a>
                        </div>
                        <div>
                            <img src={about_icon} alt='logo' className='about-icon' />
                            <a href='https://github.com/nab-man'>Nabeel</a>
                        </div>

                    </div>
                </div>
                {/* <div className='about-us-text-container'>
                        <h5>Who Are We?</h5>
                        <img src={logo} alt='logo' className='about-us-logo' />
                        <p className='pt-3'>Here at TRAVÔTEL we value our your time and as such provide the most important information and search result first and foremost before other options. We try our best to make your experience "comfortable, unforgettable and incredible" and we certainly hope you enjoy your stay.</p>
                    </div> */}
                {/* </div> */}
            </div>
        </div>



    )
}

export default AboutUs