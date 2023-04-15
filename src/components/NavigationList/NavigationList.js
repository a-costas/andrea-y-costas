import React from "react";

import "./NavigationList.scss";

function NavigationList() {
  return (
    <ul className="navigationList">
      <li>
        <a className="link" href="#About">
          About
        </a>
      </li>
      <li>
        <a className="link" href="#Skills">
          Skills
        </a>
      </li>
      <li>
        <a className="link" href="#Projects">
          Projects
        </a>
      </li>
      <li>
        <a className="link" href="#Contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavigationList;
