import React from "react";
// import MyCarousel from "../Carousel/MyCarousel";

import "./Projects.scss";

import loopstudios from "../../assets/images/mobile/Loopstudios.png";
import wnews from "../../assets/images/mobile/W_news.png";
import pod from "../../assets/images/mobile/pod.png";
import productPreview from "../../assets/images/mobile/product_preview_modal.png";

function Projects() {
  return (
    <section className="projects">
      <h2 className="title">Projects</h2>
      <div className="projectsWrapper">
        <div>
          <img className="project" src={wnews} alt="W news site" />
          <h3 className="siteCaption">W news</h3>
          <p className="siteSummary">
            A tech news website landing page created following Figma mocks as
            part of a Frontend Mentor challenge.
          </p>
        </div>
        <div>
          <img className="project" src={loopstudios} alt="Loopstudios" />
          <h3 className="siteCaption">Loopstudios</h3>
          <p className="siteSummary">
            A VR immersive experiences website landing page created following
            Figma mocks as part of a Frontend Mentor challenge.
          </p>
        </div>
        <div>
          <img className="project" src={pod} alt="Pod podcast" />
          <h3 className="siteCaption">Podcast</h3>
          <p className="siteSummary">
            A podcast announcement page created following Figma mocks as part of
            a Frontend Mentor challenge.
          </p>
        </div>
        <div>
          <img
            className="project"
            src={productPreview}
            alt="Product preview sample"
          />
          <h3 className="siteCaption">Product preview modal</h3>
          <p className="siteSummary">
            A product preview modal for a perfume following Figma mocks as part
            of a Frontend Mentor challenge.
          </p>
        </div>
      </div>
      {/* <div className="carouselWrapper">
        <MyCarousel />
      </div> */}
    </section>
  );
}

export default Projects;
