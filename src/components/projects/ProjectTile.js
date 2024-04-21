import React  from 'react';
import { NavLink } from 'react-router-dom';

const ProjectTile = ({ title, img, index }) => {
	// const {uuid} = useParams();
	// const project = projects.find(item => item.uuid === uuid);

    return (
		<NavLink to={`/project/${index}`}>
			<li className="project">
				<img src={img} alt={title} className="project__img" />
				<h3 className="project__title">{title}</h3>
			</li>
		</NavLink>
	);
}

export default ProjectTile;