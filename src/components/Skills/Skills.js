import React from "react";

import "./Skills.scss";
import htmlIcon from "../../assets/icons/html5_icon.png";
import cssIcon from "../../assets/icons/css3_icon.png";
import reactIcon from "../../assets/icons/react_icon.png";
import sassIcon from "../../assets/icons/sass_icon.png";
import jsIcon from "../../assets/icons/js_icon2.png";
import tsIcon from "../../assets/icons/ts_icon.png";
import nodeIcon from "../../assets/icons/nodejs_icon2.png";
import graphqlIcon from "../../assets/icons/graphql_icon.png";
import gitIcon from "../../assets/icons/git_icon.png";
import pythonIcon from "../../assets/icons/python_icon.png";
import javaIcon from "../../assets/icons/java_icon.png";

function Skills() {
  //Could put mountain backdrop behind this with dark filter
  return (
    <section className="skills" id="skills">
      <h2 className="title">Skills</h2>
      <div className="icons">
        <img className="icon" src={htmlIcon} alt="HTML5" />
        <img className="icon" src={cssIcon} alt="CSS3" />
        <img className="icon" src={reactIcon} alt="React" />
        <img className="icon" src={sassIcon} alt="Sass" />
        <img className="icon" src={nodeIcon} alt="Node JS" />
        <img className="icon" src={jsIcon} alt="JavaScript" />
        <img className="icon" src={tsIcon} alt="TypeScript" />
        <img className="icon" src={graphqlIcon} alt="GraphQL" />
        <img className="icon" src={gitIcon} alt="Git" />
        <img className="icon" src={pythonIcon} alt="Python" />
        <img className="icon" src={javaIcon} alt="Java" />
      </div>
    </section>
  );
}

export default Skills;
