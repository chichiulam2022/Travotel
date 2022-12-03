import React, { useState, useContext } from 'react'
import './RoomCards.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MdLocationPin } from 'react-icons/md'
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';

import {
  faWifi,
  faMugHot,
  faPersonSwimming,
  faParking, faDumbbell,
  faStar,
  faPaw
} from '@fortawesome/free-solid-svg-icons';
import room1 from '../../assets/room1.jpg';
import room2 from '../../assets/room2.jpg';
import room3 from '../../assets/room3.jpg';
import room4 from '../../assets/room4.jpg';
import qrcode from '../../assets/qrcode.png'
import toronto from '../../assets/toronto2.jpg'
import { ThemeContext } from '../../contexts/ThemeContext'
import { useTranslation } from "react-i18next";



// function to select the stars rating
// function StarRating() {
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);
//   return (
//     <div className="star-rating">
//       {[...Array(5)].map((star, index) => {
//         index += 1;
//         return (
//           <button
//             type="button"
//             key={index}
//             className={index <= (hover || rating) ? "on" : "off"}
//             onClick={() => setRating(index)}
//             onMouseEnter={() => setHover(index)}
//             onMouseLeave={() => setHover(rating)}
//           >
//             <span className="star"><FontAwesomeIcon icon={faStar} /></span>
//           </button>
//         );
//       })}
//     </div>
//   );
// }

//translation




// room cards component
function RoomCards() {
  const { t } = useTranslation(["room_info"]);
  const roomData = [
    {
      hotel: 'Grand Gateway',
      image: room1,
      location: 'Downtown Toronto',
      description: t('description1'),
      price: `CAD $300 ${t('night')}`
    },
    {
      hotel: 'One King West Hotel and Residence',
      image: room3,
      location: 'Financial District Toronto',
      description: t('description2'),
      price: `CAD $300 ${t('night')}`
    },
    {
      hotel: 'Chelsea Hotel Toronto',
      image: room2,
      location: 'Downtown Toronto',
      description: t('description3'),
      price: `CAD $300 ${t('night')}`
    },
    {
      hotel: 'Grand Gateway',
      image: room4,
      location: 'Downtown Toronto',
      description: t('description4'),
      price: `CAD $300 ${t('night')}`
    },
    {
      hotel: 'Grand Gateway',
      image: room4,
      location: 'Downtown Toronto',
      description: t('description4'),
      price: `CAD $300 ${t('night')}`
    },
    {
      hotel: 'Grand Gateway',
      image: room4,
      location: 'Downtown Toronto',
      description: t('description4'),
      price: `CAD $300 ${t('night')}`
    },
  ]


  const { isDarkMode } = useContext(ThemeContext);
  // return (
  //   <>
  //     {/* first card */}
  //     <>
  //       <div className='m-3 room-card' style={{ backgroundColor: isDarkMode ? 'lavender' : 'black' }}>
  //         <div className='card col-md-10 room-card-container'
  //           style={{ backgroundColor: isDarkMode ? 'rgb(245, 242, 247)' : '#333366' }}>
  //           <div className="row align-items-center room-card-content">

  //             {/* hotel image */}
  //             <div className="col-md-5 text-center ">
  //               <div className="container">
  //                 <div className='row align-items-center img-container'>
  //                   <img src={room2} className='img-fluid rounded-start' alt='Room view'></img>
  //                 </div>
  //               </div>
  //             </div>

  //             {/* body */}
  //             <div class="col-md-5 body-container">
  //               <div className='card-body'>
  //                 <h4 className='card-title' style={{ color: isDarkMode ? 'black' : 'white' }}>Grand Gateway</h4>
  //                 <h6 style={{ color: isDarkMode ? 'black' : 'white' }}><i>Downtown Toronto</i></h6>
  //                 <br />
  //                 <h5 style={{ color: isDarkMode ? 'black' : 'white' }}>
  //                   Located in Downtown Toronto, just next to the Eaton Centre and Yorkdale Shopping Centre.
  //                 </h5>

  //                 <div className='icon-container' style={{ color: isDarkMode ? 'black' : 'plum' }}>
  //                   <p className="wifi"><FontAwesomeIcon icon={faWifi} />&nbsp;&nbsp;Wifi</p>
  //                   <p className="breakfast"><FontAwesomeIcon icon={faMugHot} />&nbsp;&nbsp;Breakfast included </p>
  //                   <p className="pool"><FontAwesomeIcon icon={faPersonSwimming} />&nbsp;&nbsp;Pool </p>
  //                   <p className="pet-friendly"><FontAwesomeIcon icon={faPaw} />&nbsp;&nbsp;Pet friendly </p>
  //                   <p className="parking"><FontAwesomeIcon icon={faParking} />&nbsp;&nbsp;Parking available </p>
  //                   <p className="gym"><FontAwesomeIcon icon={faDumbbell} />&nbsp;&nbsp;Gym </p>
  //                 </div>
  //                 <div>
  //                   <div className='reviews'>
  //                     <a className='p-3' href="https://www.google.com/"> See more details </a>
  //                     <StarRating />
  //                     <a className='p-3' href="https://www.google.com/"> See more reviews </a>
  //                   </div>
  //                 </div>
  //                 <div>
  //                 </div>
  //               </div>
  //             </div>

  //             {/* reserve section */}
  //             <div className="col-md-2 border-md-start align-self-center reserve-container">
  //               <div className='price text-body'>
  //                 <h6 style={{ color: isDarkMode ? 'black' : 'white' }}>CAD $5,000</h6>
  //                 <a href="/" className='reserve-btn'>Reserve Now</a>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </>

  //    


  // )

  return (
    <main style={{ backgroundColor: isDarkMode ? 'lavender' : 'black', height: 'auto' }}>
      <Container>
        <Row className='px-4'>
          <Col sm={7}>
            <Image
              src={toronto}
              fluid
              rounded
              className='mt-5'
              style={{ height: '400px', width: '900px' }}
            />
          </Col>
          <Col sm={5}>
            <h2
              className='mt-5'
              style={{ color: isDarkMode ? 'black' : 'white' }}
            >
              {t('welcome')}</h2>
            <h5
              style={{ color: isDarkMode ? 'black' : 'white' }}
            >{t('intro')}</h5>
          </Col>
        </Row>

        <Row>
          <Card className='mt-3 text-center text-white py-2'
            style={{ backgroundColor: isDarkMode ? '#e67e00' : '#6200b3' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
              <Image src={qrcode} style={{ height: '150px', width: '180px' }} />
              <Card.Body>

                <h5 style={{ fontWeight: '900', fontSize: '1.2rem', textDecoration: 'underline solid orange' }}>
                  {t('promotion-title')}
                </h5>
                <br />
                <h6 style={{ fontWeight: '300', fontSize: '1.2rem' }}>
                  {t('promotion')}
                </h6></Card.Body>
            </div>
          </Card>
        </Row>

        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
          {roomData.map((item) => (
            <div className="col">
              <div className="card" style={{ backgroundColor: isDarkMode ? '#F0FFFF' : '#483D8B' }}>
                <img src={item.image}
                  className="card-img-top"
                  style={{ height: '200px' }}
                  alt="room" />
                <div class="card-body">
                  <h5 class="card-title"
                    style={{ fontWeight: '500', color: isDarkMode ? 'purple' : '#00FFFF' }}
                  > {item.hotel}</h5>
                  <br />
                  <h5 className="card-title" style={{ color: isDarkMode ? 'black' : 'white' }}>
                    <MdLocationPin />&nbsp;{item.location}
                  </h5>
                  <p class="card-text" style={{ color: isDarkMode ? 'black' : 'white' }}>
                    {item.description}
                  </p>
                  <div className='icon-container' style={{ color: isDarkMode ? 'black' : 'white' }}>
                    <p className="wifi"><FontAwesomeIcon icon={faWifi} />&nbsp;&nbsp;Wifi</p>
                    <p className="breakfast"><FontAwesomeIcon icon={faMugHot} />&nbsp;&nbsp;Breakfast included </p>
                    <p className="pool"><FontAwesomeIcon icon={faPersonSwimming} />&nbsp;&nbsp;Pool </p>
                    <p className="pet-friendly"><FontAwesomeIcon icon={faPaw} />&nbsp;&nbsp;Pet friendly </p>
                    <p className="parking"><FontAwesomeIcon icon={faParking} />&nbsp;&nbsp;Parking available </p>
                    <p className="gym"><FontAwesomeIcon icon={faDumbbell} />&nbsp;&nbsp;Gym </p>
                  </div>
                  <br />
                  <h6 className='currency' style={{ color: isDarkMode ? 'black' : 'white' }}>{item.price}</h6>
                  <Button className='reserve-btn'>{t('reserve')}</Button>&nbsp;&nbsp;
                  {/* <Button className='reserve-btn'>{t('review')}</Button> */}
                  <a href='/review' style={{ textDecoration: 'underline orange' }}>{t('review')}</a>
                </div>
              </div>
            </div>))}
        </div>
      </Container>
    </main >
  )
}

export default RoomCards;