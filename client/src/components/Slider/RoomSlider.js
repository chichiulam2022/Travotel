import React, { useContext } from 'react';
import Slider from 'react-slick';
import './RoomSlider.css';
import { ThemeContext } from "../../contexts/ThemeContext";
import { useTranslation } from "react-i18next";
import { FaBed, FaCalendarAlt } from 'react-icons/fa'
import { BsPersonFill } from 'react-icons/bs'
import room1 from '../../assets/room1.jpg'
import room2 from '../../assets/room2.jpg'
import room3 from '../../assets/room3.jpg'
import room4 from '../../assets/room4.jpg'
import HeaderSearch from '../HeaderSearch/HeaderSearch';


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

function RoomSlider() {

    const { t } = useTranslation(["slider"]);

    const dataDigitalBestSeller = [

        {
            id: 1,
            title: t("room"),
            price: '$59.99',
            category: 'Lorem ipsum',
            linkImg: room1,
        },
        {
            id: 2,
            title: t("room"),
            price: '$59.99',
            category: 'Nintendo Switch',
            linkImg: room2,
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet consectetur',
            price: '$59.99',
            linkImg: room3,
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit amet consectetur',
            price: '$59.99',
            linkImg: room4,
        },
        {
            id: 5,
            title: 'Cuphead',
            price: '$19.99',
            linkImg: room2,
        }
    ]

    const settings = {
        dots: true,
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
                isDarkMode ? 'white' : 'black',
        }}>

            <HeaderSearch />

            {/* add header search here! */}

            {/* <div className='header-search-item'>
                <FaBed className='header-icon' />
                <input type='text' placeholder="Where are you going?" className='header-search-input' />
            </div>

            <div className='header-search-item'>
                <FaCalendarAlt className='header-icon' />
                <span className='header-search-text'>date to date</span>
            </div>

            <div className='header-search-item'>
                <BsPersonFill className='header-icon' />
                <span className='header-search-text'>2 adults 2 children 1 room</span>
            </div> */}






            <div className='slider-blurb'>
                <h4 style={{ color: isDarkMode ? 'black' : 'white' }}>
                    {t('blurb')}
                </h4>
            </div>
            <div className="slider">
                <Slider {...settings}>
                    {dataDigitalBestSeller.map(item => (
                        <div className="card" style={{ border: "none" }}>
                            <div className="card-top">
                                <img
                                    src={item.linkImg}
                                    alt={item.title}
                                />
                                <h1>{item.title}</h1>
                            </div>
                            <div className="card-bottom">
                                <h3>{item.price}</h3>
                                <span className="category">{item.category}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div >
    );
}

export default RoomSlider;




