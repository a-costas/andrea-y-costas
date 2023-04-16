import React from "react";

import "./Contact.scss";

import githubIcon from "../../assets/icons/github-mark-white.png";
import linkedInIcon from "../../assets/icons/LI-In-Bug.png";
import gmailIcon from "../../assets/icons/gmail_icon.png";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="title">Contact me</h2>
      <div className="contactIcons">
        <a
          href="https://github.com/a-costas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="contactIcon" src={githubIcon} alt="Github" />
        </a>
        <a
          href="https://www.linkedin.com/in/andrea-costas98/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="contactIcon" src={linkedInIcon} alt="LinkedIn" />
        </a>
        <a href="mailto:andrea.costas98@gmail.com">
          <img className="contactIcon" src={gmailIcon} alt="Gmail" />
        </a>
      </div>
      <footer>Developed by Andrea Y Costas 2023</footer>
    </section>
  );
}

export default Contact;
