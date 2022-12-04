import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { useTranslation } from "react-i18next";
import './Review.css'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Carousel, Container, Image } from 'react-bootstrap'
import NavBar from '../Navbar/NavBar';

import sao_paulo from '../../assets/sao_paulo.jpg'
import sfrancisco from '../../assets/sfrancisco.jpg'
import toronto from '../../assets/toronto.jpg'
import mexico from '../../assets/mexico.jpg'
import dubai from '../../assets/dubai.jpg'



function Review() {
    const { isDarkMode } = useContext(ThemeContext);

    const customers = [
        {
            name: "Taylor Swift",
            content:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab officia numquam possimus illum officiis at sed quos doloremque molestias. Quae.",
            link: sao_paulo
        },
        {
            name: "Robert Downey Jr",
            content:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab officia numquam possimus illum officiis at sed quos doloremque molestias. Quae.",
            link: toronto
        },
        {
            name: "Rachel Green",
            content:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab officia numquam possimus illum officiis at sed quos doloremque molestias. Quae.",
            link: sfrancisco
        }
    ];



    return (
        <>
            <NavBar />
            <div className="container-fluid px-1 py-5 mx-auto" style={{ backgroundColor: isDarkMode ? 'white' : 'black' }} >
                <div className="row justify-content-center"  >
                    <div className="col-xl-7 col-lg-8 col-md-10 col-12 text-center mb-5">
                        <div className='card'>
                            <div className='row justify-content-left d-flex'>
                                <div className='col-md-4 d-flex flex-column'>
                                    <div className='rating-box'>
                                        <h1 className='pt-4'>4.0</h1>
                                        <p className=''>out of 5</p>
                                    </div>
                                    <div>
                                        <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                                        <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                                        <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                                        <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                                        <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                                    </div>
                                </div>

                                <div class="col-md-8">
                                    <div class="rating-bar0 justify-content-center">
                                        <table class="text-left mx-auto">
                                            <tr>
                                                <td class="rating-label">Excellent</td>
                                                <td class="rating-bar">
                                                    <div class="bar-container">
                                                        <div class="bar-5"></div>
                                                    </div>
                                                </td>
                                                <td class="text-right">123</td>
                                            </tr>
                                            <tr>
                                                <td class="rating-label">Good</td>
                                                <td class="rating-bar">
                                                    <div class="bar-container">
                                                        <div class="bar-4"></div>
                                                    </div>
                                                </td>
                                                <td class="text-right">23</td>
                                            </tr>
                                            <tr>
                                                <td class="rating-label">Average</td>
                                                <td class="rating-bar">
                                                    <div class="bar-container">
                                                        <div class="bar-3"></div>
                                                    </div>
                                                </td>
                                                <td class="text-right">10</td>
                                            </tr>
                                            <tr>
                                                <td class="rating-label">Poor</td>
                                                <td class="rating-bar">
                                                    <div class="bar-container">
                                                        <div class="bar-2"></div>
                                                    </div>
                                                </td>
                                                <td class="text-right">3</td>
                                            </tr>
                                            <tr>
                                                <td class="rating-label">Terrible</td>
                                                <td class="rating-bar">
                                                    <div class="bar-container">
                                                        <div class="bar-1"></div>
                                                    </div>
                                                </td>
                                                <td class="text-right">0</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Container className="customers-container">
                            <h2 className="customers-container-heading">Happy Customers</h2>
                            <Carousel className="customers-carousel-container">
                                {customers.map((data, i) => (
                                    <Carousel.Item className="customers-carousel-item">
                                        <Image
                                            className="d-block customers-carousel-img mt-4"
                                            src={data.link}
                                            alt={data.name}
                                        />
                                        <Carousel.Caption className="customers-carousel-caption">
                                            <h5 className="customers-caption-title">{data.name}</h5>
                                            <p>
                                                <q>
                                                    {data.content}
                                                </q>
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Container>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Review