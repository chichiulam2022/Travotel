import React, { useContext } from 'react'
import './Search.css'
import { ThemeContext } from '../../contexts/ThemeContext'
import { useTranslation } from "react-i18next";
import PhotoAlbumCompo from '../PhotoAlbum/PhotoAlbumCompo';


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
                                            <option value="1">Toronto</option>
                                            <option value="1">Vancouver</option>
                                            <option value="1">{t('Montreal')}</option>
                                            <option value="1">{t('Mexico City')}</option>
                                            <option value="1">São Paulo</option>
                                            <option value="1">Paris</option>
                                            <option value="1">Barbados</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>{t('travelers')}</label>
                                        <select>
                                            <option value="1">1</option>
                                            <option value="1">2</option>
                                            <option value="1">3</option>
                                            <option value="1">4</option>
                                            <option value="1">5</option>
                                            <option value="1">6</option>
                                            <option value="1">7</option>
                                            <option value="1">8</option>
                                            <option value="1">9</option>
                                            <option value="1">10</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='date-container'>
                                <label>{t('check-in')}</label>
                                <input type="date" />
                            </div>
                            <div className='date-container'>
                                <label>{t('check-out')}</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button>{t('search')}</button>

                    </form>
                </div>
            </div >
        </div >
    )
}

export default Search