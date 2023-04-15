import React from "react";

import "./Project.scss";

function Project({ image, title, children, technologies }) {
  return (
    <div className="projectCard">
      <img className="projectImage" src={image} alt={title} />
      <div className="cardText">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardSummary">{children}</p>
        <ul className="techUsed">
          {technologies.map((tech, index) => (
            <li key={index}>#{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Project;
