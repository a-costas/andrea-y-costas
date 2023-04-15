import React from "react";
// import MyCarousel from "../Carousel/MyCarousel";

import "./Projects.scss";

import Project from "../Project/Project";

import loopstudios from "../../assets/images/mobile/Loopstudios.png";
import wnews from "../../assets/images/mobile/W_news.png";
import pod from "../../assets/images/mobile/pod.png";
import productPreview from "../../assets/images/mobile/product_preview_modal.png";

function Projects() {
  return (
    <section className="projects">
      <h2 className="title">Projects</h2>
      <div className="projectsWrapper">
        <Project
          image={wnews}
          title="W news"
          technologies={["React", "HTML5", "CSS3", "JavaScript"]}
        >
          A tech news website landing page created following Figma mocks as part
          of a Frontend Mentor challenge.
        </Project>
        <Project
          image={loopstudios}
          title="Loopstudios"
          technologies={["React", "HTML5", "CSS3", "JavaScript"]}
        >
          A VR immersive experiences website landing page created following
          Figma mocks as part of a Frontend Mentor challenge.
        </Project>
        <Project
          image={pod}
          title="Podcast Launch"
          technologies={["HTML5", "CSS3", "JavaScript"]}
        >
          A podcast announcement page created following Figma mocks as part of a
          Frontend Mentor challenge.
        </Project>
        <Project
          image={productPreview}
          title="Product Preview Component"
          technologies={["HTML5", "CSS3"]}
        >
          A product preview modal for a perfume following Figma mocks as part of
          a Frontend Mentor challenge.
        </Project>
      </div>
      {/* <div className="carouselWrapper">
        <MyCarousel />
      </div> */}
    </section>
  );
}

export default Projects;
