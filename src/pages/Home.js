import React  from 'react';
import Header from "../components/header/Header";
import Education from "../components/about/Education"
import WorkComp from '../components/work/Work';

import { useTranslation } from "react-i18next";

import "./../styles/main.css"

const Home = () => {
	const { t } = useTranslation();
    return (
        <>
        <Header />
		<main className="section">
			<div className="container">
					<h2 className="title-section">{t('EducationTitle')}</h2>
					<div className="section-description">{t('EducationDescription')}</div>
					<Education />
					<h2 className="title-section">{t('WorkTitle')}</h2>
					<div className="section-description">{t('WorkDescription')}</div>
					<WorkComp />
					<h2 className="title-section">{t('SkillsTitle')}</h2>
					<div className="section-description">{t('SkillsDescription')}</div>
					<ul className="content-list">
						<li className="content-list__item">
							<h2 className="title-2">{t('BackendTitle')}</h2>
							<p>Spring Boot, PostgreSQl, MySQL, MongoDB, Java, Maven, Gradle</p>
						</li>

						<li className="content-list__item">
							<h2 className="title-2">{t('FrontendTitle')}</h2>
							<p>JavaScript, ReactJS, Flutter, HTML, CSS</p>
						</li>

						<li className="content-list__item">
							<h2 className="title-2">{t('AppDevTitle')}</h2>
							<p>Dart, Flutter, Docker</p>
						</li>

						<li className="content-list__item">
							<h2 className="title-2">{t('SystemAnaliticTitle')}</h2>
							<p>Draw.io, Plantuml, UML, BPMN2, ER, IDEF0</p>
						</li>

						<li className="content-list__item">
							<h2 className="title-2">{t('DesignTitle')}</h2>
							<p>Blender3D, GIMP, Inkscape, Figma</p>
						</li>
					</ul>
			</div>
		</main>
        </>
    );
}

export default Home;