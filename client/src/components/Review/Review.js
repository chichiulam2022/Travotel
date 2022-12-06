import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { useTranslation } from "react-i18next";
import './Review.css'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Carousel, Container, Image } from 'react-bootstrap'
import NavBar from '../Navbar/NavBar';
import ReviewForm from '../ReviewForm/ReviewForm'

import room1 from '../../assets/room1.jpg'
import room2 from '../../assets/room2.jpg'
import room3 from '../../assets/room3.jpg'


function Review() {
    const { isDarkMode } = useContext(ThemeContext);
    const { t } = useTranslation(["review"]);

    const customers = [
        {
            name: "Good hotel with great views",
            content: "Just returned from staying 3 nights at this hotel. Overall the hotel is very good, looked spotlessly clean throughout. Check in was seamless and the warm welcome cookie was a nice touch!",
            link: room1
        },
        {
            name: "Great hotel with first class facilities",
            content: "This hotel is centrally located in the tourist district. Clean, comfortable and convenient. Lot of ground parking and this time of the year the room rates are low.",
            link: room2
        },
        {
            name: "Bon Hôtel",
            content: "Très bon hôtel mais évitez l'option petit déjeuner qui est assez cher vu ce qui est proposé. La chambre est propre et la literie confortable. Même dans les étages supérieurs la vue n'est pas extraordinaire",
            link: room3
        }
    ];



    return (
        <>
            <NavBar />
            <div className="container-fluid px-1 py-5 mx-auto review" style={{ backgroundColor: isDarkMode ? 'lavender' : 'black' }} >
                <div className="row justify-content-center" >
                    <div className="col-xl-7 col-lg-8 col-md-10 col-12 text-center mb-5">
                        <div className='review-card'>
                            <div className='row justify-content-left d-flex'>
                                <div className='col-md-4 d-flex flex-column'>
                                    <h5>{t('average_rating')}</h5>
                                    <div className='rating-box mt-2'>
                                        <h1 className='pt-4'>4.0</h1>
                                        <p className=''>{t('out_of')}</p>
                                    </div>

                                    <div>
                                        <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                                        <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                                        <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                                        <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                                        <span className="star"><FontAwesomeIcon icon={faStar} /></span>
                                    </div>
                                </div>

                                <div className="col-md-8 mt-4">
                                    <div className="rating-bar0 justify-content-center">
                                        <table class="text-left mx-auto">
                                            <tr>
                                                <td className="rating-label">{t('excellent')}</td>
                                                <td className="rating-bar">
                                                    <div className="bar-container">
                                                        <div className="bar-5"></div>
                                                    </div>
                                                </td>
                                                <td className="text-right">123</td>
                                            </tr>
                                            <tr>
                                                <td className="rating-label">{t('good')}</td>
                                                <td className="rating-bar">
                                                    <div className="bar-container">
                                                        <div className="bar-4"></div>
                                                    </div>
                                                </td>
                                                <td className="text-right">23</td>
                                            </tr>
                                            <tr>
                                                <td className="rating-label">{t('average')}</td>
                                                <td className="rating-bar">
                                                    <div className="bar-container">
                                                        <div className="bar-3"></div>
                                                    </div>
                                                </td>
                                                <td className="text-right">10</td>
                                            </tr>
                                            <tr>
                                                <td className="rating-label">{t('poor')}</td>
                                                <td className="rating-bar">
                                                    <div className="bar-container">
                                                        <div className="bar-2"></div>
                                                    </div>
                                                </td>
                                                <td className="text-right">3</td>
                                            </tr>
                                            <tr>
                                                <td className="rating-label">{t('terrible')}</td>
                                                <td className="rating-bar">
                                                    <div className="bar-container">
                                                        <div className="bar-1"></div>
                                                    </div>
                                                </td>
                                                <td className="text-right">0</td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Container className="customers-container">
                            <h4 className="customer-review-heading"
                                style={{ color: isDarkMode ? 'black' : 'white' }}
                            >
                                {t('review_title')}</h4>
                            <p className="customers-container-intro"
                                style={{ color: isDarkMode ? 'black' : 'white' }}>
                                {t('review_intro')}</p>
                            <Carousel className="customers-carousel-container">
                                {customers.map((data, i) => (
                                    <Carousel.Item className="customers-carousel-item">
                                        <Image
                                            className="d-block customers-carousel-img mt-4 review-photo"
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
                        <ReviewForm />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Review