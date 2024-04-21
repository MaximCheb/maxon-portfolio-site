import React  from 'react';
import "./styles.css"

import {techs} from "./Tech.data"

// most icons from
// https://www.svgrepo.com

const TechIcon = ({origin}) => {
    const tech = techs.find((t) => t.origin === origin)
    console.log("origin")
    return (
        <a className="tech-icon" href={tech.link ? tech.link : '#'}>
            <img src={tech.icon} alt={tech.origin} />
            <div className="tech-icon-overlay">
                <div className="tech-icon-text">{tech.origin}</div>
            </div>
        </a>
);
};
export default TechIcon;