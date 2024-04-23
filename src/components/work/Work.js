import React from 'react';
import "./../style.css";
import { useTranslation } from "react-i18next";
import geoIcon from "./../../images/icons/geo.svg";

function WorkComp() {
    const { t } = useTranslation();

    return (
        <>
            <div className='education_container'>
                <div className="double-container-education">
                    <div className="double-column-small">
                        <div className='education_column'>
                            <h1 className="education_title">
                                <strong>{t('work1Title')}</strong>
                            </h1>
                            <p className="education_text">{t('workDate1')}</p>
                            <div />
                        </div>
                    </div>
                    <div className="double-column-big">
                        <div className="education_wrapper">
                            <h1 className="education_text">
                                <h1>{t('work1')}</h1>
                                {t('workDescription1')}
                            </h1>
                            <p className="education_text">{t('workDate1')}</p>
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
                                <strong>{t('work2Title')}</strong>
                            </h1>
                            <p className="education_text">{t('work2Date')}</p>
                            <div />
                        </div>
                    </div>
                    <div className="double-column-big">
                        <div className="education_wrapper">
                            <h1 className="education_text">
                                <h1>{t('work2')}</h1>
                                {t('workDescription2')}
                            </h1>
                            <p className="education_text">{t('workDate2')}</p>
                            <h1 className="education_text">
                                <h1>{t('work3')}</h1>
                                {t('workDescription3')}
                            </h1>
                            <p className="education_text">{t('workDate3')}</p>
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
        </>

    );
}

export default WorkComp;