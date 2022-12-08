import React from 'react'
import './FrontPage.css'
import video from '../../assets/video.mp4'
import { Typewriter } from 'react-simple-typewriter'
import { useTranslation } from "react-i18next";

function FrontPage() {
    const { t } = useTranslation(["frontpage"]);

    return (

        <div className='main'>
            <div className='filter'></div>
            <video src={video} autoPlay loop muted />
            <div className='content'>
                <h2 className="intro-text"
                    style={{
                        fontFamily: 'Orbitron'
                    }}
                >
                    <p style={{
                        color: 'rgb(255, 111, 0)',
                        fontFamily: 'Fredericka the Great, cursive',
                        fontWeight: '500',
                        textAlign: 'center',
                        fontSize: '2.6rem'
                    }}>{t('brand')}</p>{t("intro")} &nbsp;
                    <span className='typewriter-text'>
                        <Typewriter
                            words={[t('comfortable'), t('unforgettable'), t('incredible')]}
                            loop={false}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={140}
                            delaySpeed={1200}
                        />
                    </span>
                </h2>
            </div>
        </div >
    )
}
export default FrontPage
