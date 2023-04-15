import React, { useState, useEffect } from "react";

import "./Intro.scss";

function Intro() {
  //hook?
  const job = "<Frontend Software Engineer />";
  const [jobText, setJobText] = useState("");
  const [jobIndex, setJobIndex] = useState(0);

  useEffect(() => {
    if (jobIndex === 0) {
      setTimeout(() => {}, 500);
    }
    if (jobIndex < job.length) {
      setTimeout(() => {
        setJobText(jobText + job[jobIndex]);
        setJobIndex(jobIndex + 1);
      }, 150);
    }
  }, [jobIndex]);

  return (
    <div className="headerContent">
      {/* <h1 className="hello">Hi there</h1> */}
      <h1 className="name">Andrea Y Costas</h1>
      {/* <h2 className="job">&lt;Frontend Software Engineer /&gt;</h2> */}
      <h2 className="job">{jobText}</h2>
    </div>
  );
}

export default Intro;
