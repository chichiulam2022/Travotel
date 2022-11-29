import React from 'react';
import Slider from 'react-slick';
import './RoomSlider.css';
import { dataDigitalBestSeller } from '../../data/data.js';

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
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
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

    return (
        <div className="slider">
            <Slider {...settings}>

                {dataDigitalBestSeller.map(item => (
                    <div className="card">
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
    );
}

export default RoomSlider;




