import React, { useState, useContext } from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./NavBar.css";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";

function NavBar() {
    //to check if scrollY is active
    const [scroll, setScroll] = useState(false);
    const handleScroll = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 500) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };
    window.addEventListener("scroll", handleScroll);


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

    return (
        <Navbar
            expand="lg"
            style={{
                backgroundColor: isDarkMode ? "Lavender" : "black",
            }}
            className={scroll ? "navbar-active" : "hidden"}
        >
            <Container>
                <Navbar.Brand className="logo" href="/">
                    <img
                        src={logo}
                        alt="logo"
                        style={{ height: "45px", width: "198px" }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link>{t("about-us")}</Nav.Link>

                        <Nav.Link>{t("login")}</Nav.Link>

                        <Form className="switchers">
                            <div
                                value={localStorage.getItem("i18nextLng")}
                                onChange={handleLanguageChange}
                            >
                                <Form.Check
                                    inline
                                    type="switch"
                                    id="lang-switch"
                                    label="ENGLISH 🇨🇦"
                                    value="en"
                                    checked={lang === "en"}
                                    onChange={handleLangChange}
                                />
                                <Form.Check
                                    inline
                                    type="switch"
                                    label="FRANÇAIS 🇨🇦"
                                    id="lang-switch"
                                    value="fr"
                                    checked={lang === "fr"}
                                    onChange={handleLangChange}
                                />
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
        </Navbar>
    );
}

export default NavBar;