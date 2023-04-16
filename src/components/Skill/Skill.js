import React from "react";

import "./Skill.scss";

function Skill({ icon, name }) {
  return (
    <div className="icon">
      <img className="icon" src={icon} alt={name} />
    </div>
  );
}

export default Skill;
