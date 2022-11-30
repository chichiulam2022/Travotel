import React from 'react'
import './FrontPage.css'
// import video from '../../assets/video.mp4'
import { Typewriter } from 'react-simple-typewriter'
import Typography from "@mui/material/Typography"
import Homepage from '../../pages/Homepage'
import { useTranslation } from "react-i18next";

function FrontPage() {
    const { t } = useTranslation(["frontpage"]);

    return (

        <div className='main'>

            <div className='filter'></div>

            {/* <video src={video} autoPlay loop muted /> */}
            <div className='content'>
                <Typography variant="h2" className="intro-text"
                    sx={{
                        fontSize: {
                            lg: 40,
                            md: 30,
                            sm: 20,
                            xs: 20
                        }
                    }}
                    style={{
                        fontFamily: 'Orbitron'
                    }}
                >
                    <span style={{
                        color: 'rgb(255, 111, 0)',
                        fontFamily: 'Fredericka the Great, cursive',
                        fontWeight: '500'
                    }}>{t('brand')}</span>{t("intro")} &nbsp;
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
                </Typography>
            </div>


            < Homepage />


        </div >




    )
}

export default FrontPage