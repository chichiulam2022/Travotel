import React, { useContext } from 'react'
import './Search.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { useTranslation } from "react-i18next";
import PhotoAlbumCompo from '../PhotoAlbum/PhotoAlbumCompo';
import { Link } from 'react-router-dom'


function Search() {
    const { isDarkMode } = useContext(ThemeContext)
    const { t } = useTranslation(["search"]);

    return (
        <div className='search' style={{ backgroundColor: isDarkMode ? 'lavender' : 'black' }}>
            <div className="container">
                <div className="left">
                    <h2 style={{ color: isDarkMode ? '#2C2323' : 'white' }}>
                        {t('welcome-title')}</h2>
                    <p style={{ color: isDarkMode ? '#2C2323' : 'white' }}>
                        {t('welcome-text1')} </p>
                    <div className="search-col-2">
                        <PhotoAlbumCompo />
                    </div>
                </div>

                <div className="right">
                    <form className='room-search-form'>
                        <div className="input-wrap">
                            <div className='location-container'>
                                <div className='room-search-form-text'>
                                    <p>{t('form-text')}</p>
                                </div>
                                <div className='room-search-form-options'>
                                    <div>
                                        <label>{t('destination')}</label>
                                        <select>
                                            <option value="Toronto">Toronto</option>
                                            <option value="Vancouver">Vancouver</option>
                                            <option value="Montreal">{t('Montreal')}</option>
                                            <option value="Mexico City">{t('Mexico City')}</option>
                                            <option value="São Paulo">São Paulo</option>
                                            <option value="Paris">Paris</option>
                                            <option value="Barbados">Barbados</option>

                                        </select>
                                    </div>
                                    <div>
                                        <label>{t('travelers')}</label>
                                        <select>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='date-container'>
                                <label>{t('number_nights')}</label>
                                <input type="input" />
                            </div>
                            <div className='date-container'>
                                <label>{t('check-out')}</label>
                                <input type="date" />
                            </div>
                        </div>
                        <Link to='/toronto' onClick={() => { window.location.href = "/toronto" }}>
                            <button>{t('search')}</button>
                        </Link>
                    </form>
                </div>
            </div >
        </div >
    )
}

export default Search