import React, { useState, useContext } from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link } from 'react-router-dom'
import "./NavBar.css";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";
import Flag from 'react-world-flags'
import Auth from '../../utils/auth'
import 'animate.css';

function NavBar() {
    // language handle check
    const [lang, setLang] = useState("en");
    // translation
    const { t, i18n } = useTranslation(["navbar"]);

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };
    const handleLangChange = (e) => {
        setLang(e.target.value);
    };
    // dark/light mode toggle
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    //when loggedout
    const logout = event => {
        event.preventDefault()
        Auth.logout()
    }

    return (
        <Navbar
            expand="lg"
            style={{
                backgroundColor: isDarkMode ? "rgb(72, 61, 139)" : "black",
            }}
            className="navbar-active animate__animated animate__fadeIn animate__slower animate__delay-2s"
        >
            <Container>
                <Navbar.Brand className="logo" href="/">
                    <img
                        src={logo}
                        alt="logo"
                        style={{ height: "65px", width: "198px" }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" >
                        <Nav.Link as={Link} to="/about_us" id="nav-link-about">{t("about-us")}</Nav.Link>

                        {/* login, logout, signup logic */}
                        {Auth.loggedIn() ? (
                            <Nav.Link as={Link} to="/login" id="nav-link-login" onClick={logout}>
                                {t("logout")}
                            </Nav.Link>
                        ) : (
                            <>
                                <Nav.Link as={Link} to="/login" id="nav-link-login">{t("login")}</Nav.Link>
                                <Nav.Link as={Link} to="/signup" id="nav-link-register">{t("register")}</Nav.Link>
                            </>
                        )}

                        <Form className="switchers">
                            <div
                                value={localStorage.getItem("i18nextLng")}
                                onChange={handleLanguageChange}
                            >

                                <Form.Check
                                    inline
                                    type="switch"
                                    id="lang-switch"
                                    label="ENGLISH"
                                    value="en"
                                    checked={lang === "en"}
                                    onChange={handleLangChange}
                                    className="nav-link-lang"
                                />
                                <Flag code={124} className='flag' />

                                <Form.Check
                                    inline
                                    type="switch"
                                    label="FRANÇAIS"
                                    id="lang-switch"
                                    value="fr"
                                    checked={lang === "fr"}
                                    onChange={handleLangChange}
                                    className="nav-link-lang"
                                />
                                <Flag code={124} className='flag' />
                            </div>
                            <Form.Check
                                inline
                                type="switch"
                                id="custom-switch"
                                onChange={toggleTheme}
                                label={
                                    isDarkMode ? (
                                        <MdDarkMode style={{ color: "black", fontSize: "18px" }} />
                                    ) : (
                                        <MdOutlineLightMode
                                            style={{ color: "white", fontSize: "18px" }}
                                        />
                                    )
                                }
                            />
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavBar;