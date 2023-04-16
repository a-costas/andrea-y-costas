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
import Skill from "../Skill/Skill";

function Skills() {
  //Could put mountain backdrop behind this with dark filter
  return (
    <section className="skills" id="skills">
      <h2 className="title">Skills</h2>
      <div className="icons">
        <Skill icon={htmlIcon} name="HTML5" />
        <Skill icon={cssIcon} name="CSS3" />
        <Skill icon={reactIcon} name="React" />
        <Skill icon={sassIcon} name="Sass" />
        <Skill icon={nodeIcon} name="Node JS" />
        <Skill icon={jsIcon} name="JavaScript" />
        <Skill icon={tsIcon} name="TypeScript" />
        <Skill icon={graphqlIcon} name="GraphQL" />
        <Skill icon={gitIcon} name="Git" />
        <Skill icon={pythonIcon} name="Python" />
        <Skill icon={javaIcon} name="Java" />
      </div>
    </section>
  );
}

export default Skills;
