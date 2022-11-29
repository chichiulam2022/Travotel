import React, { useState, useContext } from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { MdDarkMode } from 'react-icons/md'
// import { ThemeContext } from "../../contexts/ThemeContext";

import "./NavBar.css";
import { useTranslation } from "react-i18next";

function NavBar() {
    const [activeLink, setActiveLink] = useState("/home");

    const onUpdateActiveLink = value => {
        setActiveLink(value);
    };

    // language handle check
    const [lang, setLang] = useState("en");

    // translation
    const { t, i18n } = useTranslation(["navbar"]);

    const handleLanguageChange = e => {
        i18n.changeLanguage(e.target.value);
    };

    const handleLangChange = e => {
        setLang(e.target.value);
    };

    //dark/light mode toggle
    // const [isDarkMode, toggleTheme] = useContext(ThemeContext)

    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand className="logo" href="/">
                    <h1>Testing </h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="#home"
                            className={
                                activeLink === "home" ? "active navbar-link" : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("home")}
                        >
                            {t("home")}
                        </Nav.Link>

                        <Form
                            value={localStorage.getItem("i18nextLng")}
                            onChange={handleLanguageChange}
                            className="lang-form"
                        >

                            <Form.Check
                                inline
                                type="switch"
                                id="custom-switch"
                                label={<MdDarkMode style={{ color: 'white', fontSize: '20px' }} />}



                            />

                            <Form.Check
                                inline
                                type="switch"
                                id="custom-switch"
                                label="English 🇨🇦"
                                value="en"
                                checked={lang === "en"}
                                onChange={handleLangChange}
                            />
                            <Form.Check
                                inline
                                type="switch"
                                label="Français 🇨🇦"
                                id="disabled-custom-switch"
                                value="fr"
                                checked={lang === "fr"}
                                onChange={handleLangChange}
                            />
                        </Form>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );


}

export default NavBar