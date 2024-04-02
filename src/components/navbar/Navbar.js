import React from 'react';
import "./style.css"

import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import sun from "./../../images/icons/sun.svg";
import moon from "./../../images/icons/sun.svg";

import rus_lang from "./../../images/icons/rus-flag.svg";
import en_lang from "./../../images/icons/us-flag.svg";

function Navbar() {
    const [state, setState] = useState({ lang: "en" });
    const { i18n } = useTranslation();

    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    const changeLanguage = () => {
        setState((prevState) => {
            return { lang: prevState.lang === "en" ? "ru" : "en" };
        });

        i18n.changeLanguage(state.lang);
    };

    return (
        <nav className="nav">
            <div className="container">
                <div className="nav-row">
                    <NavLink to="/" className="logo">
						<strong>Freelancer</strong> portfolio
					</NavLink>
                    <button className="dark-mode-btn">
                        <img src={sun} alt="Light mode" className="dark-mode-btn__icon"></img>
                        <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"></img>
                    </button>
                    <button onClick={() => changeLanguage("en")} className="dark-mode-btn">
                        <img src={state.lang === "en" ? rus_lang : en_lang} alt="Light mode" className="dark-mode-btn__icon"></img>
                    </button>

                    <ul className="nav-list">

                        <li className="nav-list__item">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Home
                            </NavLink></li>
                            {/* TODO: create page */}
                        {/* <li className="nav-list__item">
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                About
                            </NavLink></li>     */}
                        <li className="nav-list__item">
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Projects
                            </NavLink></li>
                        <li className="nav-list__item">
                            <NavLink
                                to="/contacts"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;