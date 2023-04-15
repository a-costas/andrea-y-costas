import React from "react";

import "./About.scss";

import profileImg from "../../assets/images/mobile/Andrea profile.jpeg";

function About() {
  return (
    <section className="about">
      <div className="imageContainer">
        <img src={profileImg} alt="Profile" />
      </div>
      <div className="textContent">
        <h2 className="greeting">Hi there!</h2>
        <p className="blurb">
          I'm Andrea. I've been a software engineer based out of Denver,
          Colorado since 2019. I've been working in the tech industry across the
          stack with an assortment of different technologies. Frontend
          development is what truly excites me and it's where I hope to move
          towards in the future.
        </p>
      </div>
    </section>
  );
}

export default About;
