import React from 'react';
import "./style.css"

import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import homeIcon from "./../../images/icons/home.svg";
import cardIcon from "./../../images/icons/cards.svg";
import contactsIcon from "./../../images/icons/chat.svg";

import rus_lang from "./../../images/icons/rus-flag.svg";
import en_lang from "./../../images/icons/us-flag.svg";

function Navbar() {
    const [state, setState] = useState({ lang: "en" });
    const { i18n, t } = useTranslation();

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
						<strong>{t('title')}</strong>
					</NavLink>
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
                                <img src={homeIcon} className='nav-list__icon' alt='#'/>
                                <div className='nav-list__text'>{t('NavbarHome')}</div>
                            </NavLink></li>
                        <li className="nav-list__item">
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                <img src={cardIcon} className='nav-list__icon' alt='#'/>
                                <div className='nav-list__text'>{t('NavbarProjects')}</div>
                            </NavLink></li>
                        <li className="nav-list__item">
                            <NavLink
                                to="/contacts"
                                className={({ isActive }) =>
                                    isActive ? activeLink : normalLink
                                }
                            >
                                <img src={contactsIcon} className='nav-list__icon' alt='#'/>
                                <div className='nav-list__text'>{t('NavbarContacts')}</div>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;