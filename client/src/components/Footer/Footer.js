import React, { useContext } from 'react'
import { ThemeContext } from "../../contexts/ThemeContext";
import './Footer.css'
import logo from '../../assets/footer-logo.png'
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsLinkedin, BsFillTelephoneFill } from 'react-icons/bs'
import { RiRoadMapFill } from 'react-icons/ri'
import { MdEmail } from 'react-icons/md'
import { useTranslation } from "react-i18next";



function Footer() {
    const today = new Date();
    const year = today.getFullYear();
    const { t } = useTranslation(["footer"]);
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <footer className="footer" style={{ backgroundColor: isDarkMode ? '#ba5106' : '#666699' }}>
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>{t('company')}</h4>
                        <ul>
                            <li><a href="/">{t('about_us')}</a></li>
                            <li><a href="/">{t('our_services')}</a></li>
                            <li><a href="/">{t('privacy_policy')}</a></li>
                            <li><a href="/">{t('career')}</a></li>
                        </ul>
                    </div>
                    <div class="footer-col">
                        <h4>{t('need_help')}</h4>
                        <ul>
                            <li><a href="/">{t('FAQ')}</a></li>
                            <li><a href="/">{t('return_policy')}</a></li>
                            <li><a href="/">{t('payment_options')}</a></li>
                        </ul>
                    </div>
                    <div className="footer-col contact-col">
                        <h4>{t('contact-us')}</h4>
                        <ul>
                            <li><RiRoadMapFill style={{ width: '20px', height: '25px' }} /> 123 Yonge St, Toronto(ON) Canada, A1B 1C2</li>
                            <li><BsFillTelephoneFill style={{ width: '17px', height: '25px' }} /> 416-567-8900</li>
                            <li><MdEmail style={{ width: '20px', height: '25px' }} /> travotel@hotel.ca</li>
                        </ul>
                    </div>


                    <div className="footer-col">
                        <h4>{t('follow-us')}</h4>
                        <div class="social-links">
                            <a href="/"><BsFacebook style={{ width: '45px', height: '25px' }} /></a>
                            <a href="/"><BsInstagram style={{ width: '45px', height: '25px' }} /></a>
                            <a href="/"><BsTwitter style={{ width: '45px', height: '25px' }} /></a>
                            <a href="/"><BsYoutube style={{ width: '45px', height: '25px' }} /></a>
                            <a href="/"><BsLinkedin style={{ width: '45px', height: '25px' }} /></a>
                        </div>
                    </div>
                    <div className="footer-row">
                        <img src={logo} alt='logo' className='logo' />
                        <p>{t('all-rights')} | Copyright &copy; {year} TRAVÔTEL
                        </p>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer