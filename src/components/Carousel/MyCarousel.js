import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./MyCarousel.scss";

import loopstudios from "../../assets/images/mobile/Loopstudios.png";
import wnews from "../../assets/images/mobile/W_news.png";
import pod from "../../assets/images/mobile/pod.png";
import productPreview from "../../assets/images/mobile/product_preview_modal.png";

function MyCarousel() {
  return (
    <div className="carousel-wrapper">
      <Carousel infiniteLoop centerSlidePercentage={40}>
        <div>
          <img src={wnews} alt="W news site" />
          <p className="siteCaption">W news</p>
        </div>
        <div>
          <img src={loopstudios} alt="Loopstudios" />
          <p className="siteCaption">Loopstudios</p>
        </div>
        <div>
          <img src={pod} alt="Pod podcast" />
          <p className="siteCaption">Podcast</p>
        </div>
        <div>
          <img src={productPreview} alt="Product preview sample" />
          <p className="siteCaption">Product preview</p>
        </div>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
