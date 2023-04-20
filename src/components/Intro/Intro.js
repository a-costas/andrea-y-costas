import React from "react";
import Typewriter from "typewriter-effect";

import "./Intro.scss";

function Intro() {
  return (
    <div className="headerContent">
      <h1 className="name">Andrea Y Costas</h1>
      <h2 className="job">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2000)
              .typeString("Frontend Software Engineer")
              .pauseFor(10000)
              .deleteAll()
              .typeString("Are you going to scroll down or what?")
              .pauseFor(4000)
              .deleteAll()
              .typeString("There's more stuff down there, go look!")
              .pauseFor(4000)
              .deleteAll()
              .typeString("Frontend Software Engineer")
              .start();
          }}
          options={{
            autoStart: true,
          }}
        />
      </h2>
    </div>
  );
}

export default Intro;
