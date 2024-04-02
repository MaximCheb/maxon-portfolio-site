import React  from 'react';
import {useParams} from "react-router-dom";
import { projects } from "../components/projects/Project.data";
import { useTranslation } from "react-i18next";
import TechIcon from '../components/tech/TechIcon';

const Project = () => {
    const { t } = useTranslation();
	const {id} = useParams();
	const project = projects[id]
    // const project = projects.find(item=>item.uuid === uuid)

	// console.log(uuid)
    return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					<h1 className="title-1">{project.title}</h1>
                    <h3 className="title-2">Description</h3>
                    <p className="project-details__desc">{project.description}</p>
                    <h3 className="title-2">Dates</h3>
                    <p className="project-details__desc">{project.dates}</p>
{/* 
					<img
						src={project.imgBig}
						alt={project.title}
						className="project-details__cover"
						roles.map(role=>t(role))
					/> */}
                    <h2 className="title-2">Roles</h2>
					<div className="project-details__desc">
						<p>{project.roles.map(role=>t(role)).join(", ")}</p>
					</div>
                    <h2 className="title-2">Techhology</h2>

                    <ul className="social">
						{/* {project.tech.join(", ")} */}
						{/* <TechIconDemo list={project.tech}></TechIconDemo> */}
						{project.tech.map((name) => <TechIcon origin={name}></TechIcon>)}
                        
                    </ul>
				</div>
			</div>
		</main>
	);
}

export default Project;