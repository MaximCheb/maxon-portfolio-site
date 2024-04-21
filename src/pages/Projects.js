import React  from 'react';

import {projects} from "./../components/projects/Project.data"

// import { useTranslation } from "react-i18next";
import ProjectTile from '../components/projects/ProjectTile';

const Projects = () => {
    // const { t } = useTranslation();
	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Projects</h2>
				<ul className="projects">
					{projects.map((project, id) => {
						return (
							<ProjectTile
								key={id}
								title={project.title}
								img={project.img}
								index={project.id}
							/>
						);
					})}
				</ul>
			</div>
		</main>
	);
};

export default Projects;
