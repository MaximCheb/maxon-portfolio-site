import React from 'react';
import "./../style.css";
import { useTranslation } from "react-i18next";
import geoIcon from "./../../images/icons/geo.svg";

function Education() {
    const { t } = useTranslation();

    return (
        <>
            <div className='education_container'>
                <div className="double-container-education">
                    <div className="double-column-small">
                        <div className='education_column'>
                            <h1 className="education_title">
                                <strong>{t('univercity1')}</strong>
                            </h1>
                            <p className="education_text">{t('education1Date')}</p>
                            <div />
                        </div>
                    </div>
                    <div className="double-column-big">
                        <div className="education_wrapper">
                            <h1 className="education_text">
                                <h1>{t('educationTitle1')}</h1>
                                {t('educationDescription1')}
                            </h1>
                            <p className="education_text">{t('educationDate1')}</p>
                            <div className="education_text">
                                <h1>{t('educationTitle2')}</h1>
                                {t('educationDescription2')}
                            </div>
                            <p className="education_text">{t('educationDate2')}</p>
                            <div className="education_text">
                                <div className='education_location'>
                                    <img src={geoIcon} alt='#'/>
                                    <p>{t('educationGeo1')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='education_container'>
                <div className="double-container-education">
                    <div className="double-column-small">
                        <div className='education_column'>
                            <h1 className="education_title">
                                <strong>{t('course1')}</strong>
                            </h1>
                            <div />
                        </div>
                    </div>
                    <div className="double-column-big">
                        <div className="education_wrapper">
                            <div className="education_text">
                                <h1>{t('courseTitle1')}</h1>
                                {t('courseDescription1')}
                            </div>
                            <p className="education_text">{t('courseDate1')}</p>                            
                            <a className="education_text" href='https://www.udemy.com/course/learn_flutter'>
                                <div className='education_location'>
                                    <img src={geoIcon} alt='#'/>
                                    <p>{t('courseNet')}</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Education;