import React from "react";

import "./Project.scss";

import githubIcon from "../../assets/icons/github-mark-white.png";
import internetIcon from "../../assets/icons/internet.png";

function Project({ image, title, children, technologies, siteUrl, repoUrl }) {
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
        <div className="buttons">
          <button className="rowBtn">
            <img className="buttonIcon" src={internetIcon} alt="Visit site" />
            <a
              className="siteBtn"
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site
            </a>
          </button>
          <button className="rowBtn">
            <img className="buttonIcon" src={githubIcon} alt="Github" />
            <a
              className="siteBtn"
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
