import React from "react";

import "./Contact.scss";

import githubIcon from "../../assets/icons/github-mark-white.png";
import linkedInIcon from "../../assets/icons/LI-In-Bug.png";
import gmailIcon from "../../assets/icons/gmail_icon.png";

function Contact() {
  return (
    <section className="contact">
      <h2 className="title">Contact me</h2>
      <div className="contactIcons">
        <img className="contactIcon" src={githubIcon} alt="Github" />
        <img className="contactIcon" src={linkedInIcon} alt="LinkedIn" />
        <img className="contactIcon" src={gmailIcon} alt="Gmail" />
      </div>
      <footer>Developed by Andrea Y Costas 2023</footer>
    </section>
  );
}

export default Contact;
