import React, { useContext } from 'react'
import { ThemeContext } from "../../contexts/ThemeContext";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AboutUs.css'
import { useTranslation } from "react-i18next";
import logo from '../../assets/footer-logo.png';
import dest from '../../assets/dest_card.jpg';
import destDetes from "../../assets/dest_details.jpg";
import destCheckOut from '../../assets/dest_checkout.jpg';
import reg from '../../assets/register.jpg';
import faq from '../../assets/faq.jpg'

function AboutUs() {
    const { t } = useTranslation([ "footer" ]);
    const { isDarkMode } = useContext(ThemeContext);

    const about = [
        'Here at TRAVÔTEL we value our your time and as such provide the most important information and search result first and foremost before other options. We try our best to make your experience "comfortable, unforgettable and incredible" and we certainly hope you enjoy your stay.'
    ]

    const cards = [
        "Start by simply clicking on you preferred destination. View through the available hotel room options."
    ]
    const compare = [
        "compare accommodation deals per destination. View the inside of the room along with their location, a bit about local famous spots around them, amenities available and the price. You can also read reviews by other travelers."
    ]
    const search = [
        "There is certainly also a way to search by destinations, number of travelers, check-in and check-out dates."
    ]
    const register = [
        "Register with your own account NOW!. This allows you to do more like having a favorites list, ease of future bookings , etc..."
    ]
    const support = [
        "Have questions or concerns about your experience with the website or it's partners?, Would you like to be added to the list to advertise your accommodation? Check the FAQ and/or contact the customer support service center any time (phone# and email mentioned in contact details)."
    ]

    return (
        <aboutUs class='About' style={{ backgroundColor: isDarkMode ? '#ba5106' : '#66699' }}>
            <section class='container'>
                <div class='row'>
                    <div class='col 3'>
                        <img class='TeamImage' src={ logo } alt='Team'/>
                    </div>
                    <div class='row main-col'>
                        <p>{t(about)}</p>
                    </div>
                    <div class='row cards'>
                        <div class='col 3'>
                            <img class='destI' src={ dest } height='450px' width='280px' alt='Card' />
                            <div class='col 9'>
                                <p class='dest'>{ t(cards) }</p>
                            </div>
                        </div>
                        <div class='col 3'>
                            <img class='compareI'  src={ destDetes } height='450px' width='auto' alt='compare' />
                            <div class='col 9'>
                                <p class='compare'>{ t(compare) }</p>
                            </div>
                        </div>
                        <div class='col 3'>
                            <img class='searchI' src={ destCheckOut } height='350px' width='auto'  alt='search' />
                            <div class='col 9'>
                                <p class='search'>{ t(search) }</p>
                            </div>
                        </div>
                        <div class='col 3 registration'>
                            <img class='regI' src={ reg } height='330px' width='auto' alt='register' />
                            <div class='col 9'>
                                <p class='register'>{ t(register) }</p>
                            </div>
                        </div>
                    </div>
                    <div class='col 3'>
                        <img class='supI' src={faq} height='300px'
                        width='auto' alt='support' />
                        <div class='col 6'>
                            <p class='support'>{ t(support) }</p>
                        </div>
                    </div>
                </div>
            </section>

        </aboutUs>
    )
}

export default AboutUs;
