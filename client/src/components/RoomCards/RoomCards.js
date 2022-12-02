import React, { useState } from 'react'
import './RoomCards.css';
//import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { faPersonSwimming } from '@fortawesome/free-solid-svg-icons';
import { faParking } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import room2 from '../../assets/room2.jpg';
//import { useTranslation } from "react-i18next";
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card'

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
function RoomCards(props) {

  return (
    <div className='row m-2'>

      {/* <Card style={{ width: '40rem' }} lass="m-2">
        <Card.Img variant="fluid" className='rounded-start' src={weatherPng} />
        <Card.Body>
          <Card.Title>Miyana Condos</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}

      <div className='card col-8 p-2'>
        <div class="row g-0">

          {/* hotel image */}
          <div class="col-md-5 text-center">
            <div class="container text-center">
              <div className='row align-items-center'>
                <img src={room2} className="img-fluid rounded-start" alt="Room view"></img>
              </div>
            </div>
          </div>

          <div class="col-md-5">
            <div className='card-body'>
              <h4 className='card-title'>Grand Gateway</h4>
              <h6 className='text-muted text-'>Downtown Toronto</h6>
              <p className='card-text text-body'>Located in Downtown Toronto, just next to the Eaton Centre and Yorkdale Shopping Centre.</p>
              <span className="wifi"><FontAwesomeIcon icon={faWifi} /> Wifi </span>
              <span className="breakfast"><FontAwesomeIcon icon={faMugHot} /> Breakfast included </span>
              <span className="pool"><FontAwesomeIcon icon={faPersonSwimming} /> Pool </span>
              <span className="parking"><FontAwesomeIcon icon={faParking} /> Parking available </span>
              <span className="gym"><FontAwesomeIcon icon={faDumbbell} /> Gym </span>
              <div>
                <div className='reviews'>
                  <a className='p-2' href="https://www.google.com/"> See more details </a>
                </div>
                <br></br>
              </div>
              <div className='reviews'>
                <StarRating></StarRating>
                <a className='p-2' href="https://www.google.com/"> See all reviews </a>
              </div>
              <div>
              </div>
            </div>
          </div>
          <div class="col-md-2 border-start p-2">
            <h6 className='text-body'> Reserve a room </h6>
            <div className='price text-body'>
              <div>CAD <span className='total-price'>$5,000</span></div>
              <Button variant="primary" size="sm">Reserve</Button>
            </div>
          </div>
        </div>
      </div>


    </div >
  )
}

export default RoomCards;