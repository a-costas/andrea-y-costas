import React from "react";

import { Link } from "react-scroll";

import "./NavigationList.scss";

function NavigationList() {
  return (
    <ul className="navigationList">
      <li className="link">
        <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
          About
        </Link>
      </li>
      <li className="link">
        <Link to="skills" spy={true} smooth={true} offset={0} duration={500}>
          Skills
        </Link>
      </li>
      <li className="link">
        <Link to="projects" spy={true} smooth={true} offset={0} duration={500}>
          Projects
        </Link>
      </li>
      <li className="link">
        <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavigationList;
