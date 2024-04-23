import React from 'react';
import "./../style.css";
import { useTranslation } from "react-i18next";


function Header() {
    const { t } = useTranslation();
    const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10)

    return (
        <header className="header">
            <div className="double-container">
                <div className="double-column-small">
                    <img src='/images/my_title_image.png' className='header-profile-photo' alt='#'/>
                </div>
                <div className="double-column-personal-big">
                    <div className="header__wrapper">
                        <h1 className="header__title">
                            <strong>{t('headerWelcome')}</strong><br></br>
                            {t('headerDescription')}
                        </h1>
                        <div className="header__text">
                            <strong>{t('headerTitle')}</strong><br></br>
                            <p>{t('headerText')}</p>
                            {t('headerAge1')}
                            {getAge('1999-03-01')}
                            {t('headerAge2')}
                        </div>
                        <a  
                            className="btn"
                            href="/docs/Maxim Chebola.pdf"
                            download="Max Cheb CV"
                            target="_blank"
                            rel="noreferrer"
                        >{t('headerDownloadCV')}</a>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;