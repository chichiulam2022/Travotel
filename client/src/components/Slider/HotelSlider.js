import React, { useContext } from 'react';
import Slider from 'react-slick';
import './HotelSlider.css';
import { ThemeContext } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import london from '../../assets/london.jpg'
import nyc from '../../assets/nyc.jpg'
import sao_paulo from '../../assets/sao_paulo.jpg'
import sfrancisco from '../../assets/sfrancisco.jpg'
import toronto from '../../assets/toronto.jpg'
import mexico from '../../assets/mexico.jpg'
import dubai from '../../assets/dubai.jpg'

// import HeaderSearch from '../HeaderSearch/HeaderSearch';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style }}
            onClick={onClick}
        />
    );
}

function HotelSlider() {

    const { t } = useTranslation(["slider"]);

    const dataDigitalBestSeller = [

        {
            id: 1,
            city: 'London',
            linkImg: london,
            link: '/london'
        },
        {
            id: 2,
            city: 'New York City',
            linkImg: nyc,
            link: '/nyc'
        },
        {
            id: 3,
            city: 'São Paulo',
            linkImg: sao_paulo,
            link: '/sao_paulo'
        },
        {
            id: 4,
            city: 'San Francisco',
            linkImg: sfrancisco,
            link: '/dubai'
        },
        {
            id: 5,
            city: 'Toronto',
            linkImg: toronto,
            link: '/toronto'
        },
        {
            id: 6,
            city: 'Mexico City',
            linkImg: mexico,
            link: '/mexico'
        },
        {
            id: 7,
            city: 'Dubai',
            linkImg: dubai,
            link: '/dubai'
        },

    ]

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 4000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],

    };

    const { isDarkMode } = useContext(ThemeContext)

    return (
        <div className='slider-container' style={{
            backgroundColor:
                isDarkMode ? 'lavender' : 'black',
        }
        }>

            {/* <HeaderSearch /> */}
            <div className='slider-blurb'>
                <h4 style={{ color: isDarkMode ? '#2C2323' : 'white' }}>
                    {t('blurb')}
                </h4>
            </div>
            <div className="slider">
                <Slider {...settings}>
                    {dataDigitalBestSeller.map((item) => (
                        <div className="hotel-slider-card" style={{ border: "none" }}>
                            <div className="card-top">
                                <img
                                    key={item.toString()}
                                    src={item.linkImg}
                                    alt={item.city}
                                />
                            </div>
                            <div className="card-bottom">
                                <a href={item.link} key={item.toString()} className='nav-link'><h5 key={item.toString()}>{item.city}</h5></a>
                                <span className="category" key={item.toString()}>{item.category}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div >
    );
}

export default HotelSlider;




