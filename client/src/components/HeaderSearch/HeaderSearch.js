import React, { useState } from 'react'
import { FaBed, FaCalendarAlt } from 'react-icons/fa'
import { BsPersonFill } from 'react-icons/bs'
import './HeaderSearch.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// import { frCA, enCA } from 'date-fns/locale'


function HeaderSearch() {
    const { t } = useTranslation(["headersearch"]);

    const [scroll, setScroll] = useState(false);
    const handleScroll = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 400) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };
    window.addEventListener("scroll", handleScroll);

    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const navigate = useNavigate();

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, options } });
    };

    return (
        <div className={`${scroll ? 'headerSearch-active' : 'hidden'} headerSearchContainer`}>
            <div className="headerSearch">

                <div className="headerSearchItem">
                    <FaBed className='header-icon' />
                    <input
                        type="text"
                        placeholder={t("your_destination")}
                        className="headerSearchInput"
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>

                <div className="headerSearchItem">
                    <FaCalendarAlt className='header-icon' />
                    <span
                        onClick={() => setOpenDate(!openDate)}
                        className="headerSearchText"
                    >{`${format(date[0].startDate, "MM/dd/yyyy")} - ${format(
                        date[0].endDate,
                        "MM/dd/yyyy"
                    )}`}</span>
                    {openDate && (
                        <DateRange
                            editableDateInputs={true}
                            onChange={(item) => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                            minDate={new Date()}
                        />
                    )}
                </div>

                <div className="headerSearchItem">
                    <BsPersonFill className='header-icon' />
                    <span
                        onClick={() => setOpenOptions(!openOptions)}
                        className="headerSearchText"
                    >
                        {`${options.adult} ${t('adult')} / ${options.children} ${t('child')} / ${options.room} ${t('room')}`}


                    </span>


                    {/* option menu shown when openOptions is true */}
                    {openOptions && (
                        <div className="options">
                            <div className="optionItem">
                                <span className="optionText">{t('adult')}</span>
                                <div className="optionCounter">
                                    <button
                                        disabled={options.adult <= 1}
                                        className="optionCounterButton"
                                        onClick={() => handleOption("adult", "d")}
                                    >
                                        -
                                    </button>
                                    <span className="optionCounterNumber">
                                        {options.adult}
                                    </span>
                                    <button
                                        className="optionCounterButton"
                                        onClick={() => handleOption("adult", "i")}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">{t('child')}</span>
                                <div className="optionCounter">
                                    <button
                                        disabled={options.children <= 0}
                                        className="optionCounterButton"
                                        onClick={() => handleOption("children", "d")}
                                    >
                                        -
                                    </button>
                                    <span className="optionCounterNumber">
                                        {options.children}
                                    </span>
                                    <button
                                        className="optionCounterButton"
                                        onClick={() => handleOption("children", "i")}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">{t('room')}</span>
                                <div className="optionCounter">
                                    <button
                                        disabled={options.room <= 1}
                                        className="optionCounterButton"
                                        onClick={() => handleOption("room", "d")}
                                    >
                                        -
                                    </button>
                                    <span className="optionCounterNumber">
                                        {options.room}
                                    </span>
                                    <button
                                        className="optionCounterButton"
                                        onClick={() => handleOption("room", "i")}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="headerSearchItem">
                    <button className="headerBtn" onClick={handleSearch}>
                        {t('search')}
                    </button>
                </div>
            </div>
        </div >
    )
}

export default HeaderSearch