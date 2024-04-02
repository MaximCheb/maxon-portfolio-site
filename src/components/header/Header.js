import React  from 'react';
import "./style.css"
import { useTranslation } from "react-i18next";

function Header() {
    const { t } = useTranslation();
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>{t('header_welcome')}</strong><br></br>
                    {t('header_work')}
                </h1>
                <div className="header__text">
                    <p>with passion for learning and creating.</p>
                </div>
                <a href="#!" className="btn">{t('header_download_cv')}</a>
            </div>
        </header>
    );
}

export default Header;