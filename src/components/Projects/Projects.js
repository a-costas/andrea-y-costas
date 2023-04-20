import React from "react";
// import MyCarousel from "../Carousel/MyCarousel";

import "./Projects.scss";

import Project from "../Project/Project";

import clockApp from "../../assets/images/mobile/clock_app.png";
import loopstudios from "../../assets/images/mobile/Loopstudios.png";
import wnews from "../../assets/images/mobile/W_news.png";
import pod from "../../assets/images/mobile/pod.png";
import productPreview from "../../assets/images/mobile/product_preview_modal.png";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="title">Projects</h2>
      <div className="projectsWrapper">
        <Project
          image={clockApp}
          title="Clock."
          technologies={["React", "HTML5", "CSS3", "JavaScript"]}
          siteUrl=""
          repoUrl="https://github.com/a-costas/FrontendMentor-clock-app"
        >
          A clock app that makes use of multiple APIs to create the full
          experience. Compatible with mobile, tablet and desktop. Created
          following Figma mocks as part of a Frontend Mentor challenge.
          <br />
          <br />
          APIs:
          <a className="apiLink" href="https://ipwhois.io/">
            ipwhois
          </a>
          ,
          <a className="apiLink" href="https://worldtimeapi.org/">
            World Time API
          </a>
          ,
          <a className="apiLink" href="https://api.quotable.io/">
            Quotable IO
          </a>
        </Project>
        <Project
          image={wnews}
          title="W news"
          technologies={["React", "HTML5", "CSS3", "JavaScript"]}
          siteUrl="https://64377cd55e35eb00081458de--majestic-wisp-69bfde.netlify.app/"
          repoUrl="https://github.com/a-costas/FrontendMentor-News-Homepage"
        >
          A responsive tech news website landing page created following Figma
          mocks as part of a Frontend Mentor challenge.
        </Project>
        <Project
          image={loopstudios}
          title="Loopstudios"
          technologies={["React", "HTML5", "CSS3", "JavaScript"]}
          siteUrl="https://64377800282e5b3d41d5f499--steady-biscotti-9ff7fe.netlify.app/"
          repoUrl="https://github.com/a-costas/FrontdoorMentor-Loopstudios-landing-page"
        >
          A responsive VR immersive experiences website landing page created
          following Figma mocks as part of a Frontend Mentor challenge.
        </Project>
        <Project
          image={pod}
          title="Podcast Launch"
          technologies={["HTML5", "CSS3", "JavaScript"]}
          siteUrl="https://a-costas.github.io/FrontendMentor-Pod-request-access-landing-page/"
          repoUrl="https://github.com/a-costas/FrontendMentor-Pod-request-access-landing-page"
        >
          A podcast announcement page created following Figma mocks as part of a
          Frontend Mentor challenge.
        </Project>
        <Project
          image={productPreview}
          title="Product Preview Component"
          technologies={["HTML5", "CSS3"]}
          siteUrl="https://a-costas.github.io/FrontendMentor-Product-Preview-Card/"
          repoUrl="https://github.com/a-costas/FrontendMentor-Product-Preview-Card"
        >
          A product preview modal for a perfume following Figma mocks as part of
          a Frontend Mentor challenge.
        </Project>
      </div>
    </section>
  );
}

export default Projects;
