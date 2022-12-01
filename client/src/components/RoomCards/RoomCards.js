import React, { useState } from 'react'
import './Stars.css';
//import { useTranslation } from "react-i18next";
//import Button from 'react-bootstrap/Button';
//import Card from 'react-bootstrap/Card'


const StarRating = () => {
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
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};


function RoomCards(props) {
  return (
    <div className='card'>
      <div className='card-body'>
        <h4 className='card-title'>Name of Hotels</h4>
        <p className='card-text text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <div>
          <StarRating></StarRating>
        </div>

      </div>
    </div>
  )
}

export default RoomCards;