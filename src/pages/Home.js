import React  from 'react';
import Header from "../components/header/Header";

import { useTranslation } from "react-i18next";

import "./../styles/main.css"

const Home = () => {
	const { t } = useTranslation();
    return (
        <>
        <Header />

		<main className="section">
			<div className="container">

					<ul className="content-list">
						<li className="content-list__item">
								<h2 className="title-2">Backend</h2>
								<p>Spring Boot, PostgreSQl, MySQL, MongoDB, Java, Maven, Gradle</p>
						</li>

						<li className="content-list__item">
							<h2 className="title-2">Frontend</h2>
							<p>JavaScript, ReactJS, Flutter, HTML, CSS</p>
						</li>

						<li className="content-list__item">
							<h2 className="title-2">App development</h2>
							<p>Dart, Flutter, Docker</p>
						</li>

						<li className="content-list__item">
							<h2 className="title-2">System analitic</h2>
							<p>Draw.io, Plantuml, UML, BPMN2, ER, IDEF0</p>
						</li>

						<li className="content-list__item">
							<h2 className="title-2">Design</h2>
							<p>Blender3D, GIMP, Inkscape, Figma</p>
						</li>
					</ul>

			</div>
		</main>
        </>
    );
}

export default Home;