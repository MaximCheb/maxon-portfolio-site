import React  from 'react';
import {useParams} from "react-router-dom";
import { projects } from "../components/projects/Project.data";
import { useTranslation } from "react-i18next";
import TechIcon from '../components/tech/TechIcon';

const Project = () => {
    const { t } = useTranslation();
	const {id} = useParams();
	const project = projects[id]
    return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					<h1 className="title-1">{t(project.title)}</h1>
                    <h3 className="title-2">{t('ProjectDescription')}</h3>
                    <p className="project-details__desc">{t(project.description)}</p>
                    <h3 className="title-2">{t('ProjectDates')}</h3>
                    <p className="project-details__desc">{t(project.date)}</p>
                    <h2 className="title-2">{t('ProjectRoles')}</h2>
					<div className="project-details__desc">
						<p>{project.roles.map(role=>t(role)).join(", ")}</p>
					</div>
					<h2 className="title-2">{t('ProjectStatus')}</h2>
					<p className="project-details__desc">{t(project.state)}</p>
                    <h2 className="title-2">{t('ProjectTechhology')}</h2>

                    <ul className="social">
						{project.tech.map((name) => <TechIcon origin={name}></TechIcon>)}
                        
                    </ul>
				</div>
			</div>
		</main>
	);
}

export default Project;