import React, { useState, useContext } from 'react'
import './RoomCards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faWifi,
  faMugHot,
  faPersonSwimming,
  faParking, faDumbbell,
  faStar,
  faPaw
} from '@fortawesome/free-solid-svg-icons';
import room2 from '../../assets/room2.jpg';
import Slider from "react-slick";

import { ThemeContext } from '../../contexts/ThemeContext'
//import { useTranslation } from "react-i18next";


// function to select the stars rating
function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star"><FontAwesomeIcon icon={faStar} /></span>
          </button>
        );
      })}
    </div>
  );
}




// room cards component
function RoomCards() {

  const { isDarkMode } = useContext(ThemeContext);
  return (
    <>
      <>
        <div className='m-3 room-card' style={{ backgroundColor: isDarkMode ? 'lavender' : 'black' }}>
          <div className='card col-md-10 room-card-container'>
            <div className="row align-items-center room-card-content">

              {/* hotel image */}
              <div className="col-md-5 text-center ">
                <div className="container">
                  <div className='row align-items-center img-container'>
                    <img src={room2} className='img-fluid rounded-start' alt='Room view'></img>
                  </div>
                </div>

              </div>

              {/* body */}

              <div class="col-md-5 body-container">
                <div className='card-body'>
                  <h4 className='card-title'>Grand Gateway</h4>
                  <h6 className='text-muted text-'>Downtown Toronto</h6>
                  <p className='card-text text-body'>Located in Downtown Toronto, just next to the Eaton Centre and Yorkdale Shopping Centre.</p>

                  <div className='icon-container'>
                    <div className="wifi"><FontAwesomeIcon icon={faWifi} /> Wifi </div>
                    <div className="breakfast"><FontAwesomeIcon icon={faMugHot} /> Breakfast included </div>
                    <div className="pool"><FontAwesomeIcon icon={faPersonSwimming} /> Pool </div>
                    <div className="pet-friendly"><FontAwesomeIcon icon={faPaw} /> Pet friendly </div>
                    <div className="parking"><FontAwesomeIcon icon={faParking} /> Parking available </div>
                    <div className="gym"><FontAwesomeIcon icon={faDumbbell} /> Gym </div>
                  </div>
                  <div>
                    <div className='reviews'>
                      <a className='p-3' href="https://www.google.com/"> See more details </a>
                      <StarRating />
                      <a className='p-3' href="https://www.google.com/"> See more reviews </a>

                    </div>

                  </div>
                  {/* <div className='reviews'>
                  <StarRating />
                  <a className='' href="https://www.google.com/"> See more reviews </a>
                </div> */}
                  <div>
                  </div>
                </div>
              </div>

              {/* reserve section */}

              <div className="col-md-2 border-md-start align-self-center reserve-container">
                <h6 className='text-body'> Reserve a room </h6>
                <div className='price text-body'>
                  <div className='currency'> CAD
                    <span className='total-price'> $5,000</span>
                  </div>
                  <a href="/" className='reserve-btn'>Reserve</a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </>

      {/* second card */}
      <>
        <div className='m-3 room-card' style={{ backgroundColor: isDarkMode ? 'lavender' : 'black' }}>
          <div className='card col-md-10 room-card-container'>
            <div className="row align-items-center room-card-content">

              {/* hotel image */}
              <div className="col-md-5 text-center ">
                <div className="container">
                  <div className='row align-items-center img-container'>
                    <img src={room2} className='img-fluid rounded-start' alt='Room view'></img>
                  </div>
                </div>

              </div>

              {/* body */}

              <div class="col-md-5 body-container">
                <div className='card-body'>
                  <h4 className='card-title'>Grand Gateway</h4>
                  <h6 className='text-muted text-'>Downtown Toronto</h6>
                  <p className='card-text text-body'>Located in Downtown Toronto, just next to the Eaton Centre and Yorkdale Shopping Centre.</p>

                  <div className='icon-container'>
                    <div className="wifi"><FontAwesomeIcon icon={faWifi} /> Wifi </div>
                    <div className="breakfast"><FontAwesomeIcon icon={faMugHot} /> Breakfast included </div>
                    <div className="pool"><FontAwesomeIcon icon={faPersonSwimming} /> Pool </div>
                    <div className="pet-friendly"><FontAwesomeIcon icon={faPaw} /> Pet friendly </div>
                    <div className="parking"><FontAwesomeIcon icon={faParking} /> Parking available </div>
                    <div className="gym"><FontAwesomeIcon icon={faDumbbell} /> Gym </div>
                  </div>
                  <div>
                    <div className='reviews'>
                      <a className='p-3' href="https://www.google.com/"> See more details </a>
                      <StarRating />
                      <a className='p-3' href="https://www.google.com/"> See more reviews </a>

                    </div>

                  </div>
                  {/* <div className='reviews'>
                  <StarRating />
                  <a className='' href="https://www.google.com/"> See more reviews </a>
                </div> */}
                  <div>
                  </div>
                </div>
              </div>

              {/* reserve section */}

              <div className="col-md-2 border-md-start align-self-center reserve-container">
                <h6 className='text-body'> Reserve a room </h6>
                <div className='price text-body'>
                  <div className='currency'> CAD
                    <span className='total-price'> $5,000</span>
                  </div>
                  <a href="/" className='reserve-btn'>Reserve</a>
                </div>
              </div>

            </div>
          </div>
        </div>

      </>



    </>


  )
}

export default RoomCards;