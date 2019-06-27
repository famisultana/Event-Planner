import React, { Component } from "react";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import { Fade } from "react-slideshow-image";
import SlideshowItem from "./SlideshowItem";

const fadeImages = [img1, img2, img3];

const fadeProperties = {
  duration: 2000,
  transitionDuration: 1000,
  infinite: true,
  indicators: false
};

export default class Slideshow extends Component {
  render() {
    return (
      <Fade className="slideshow" {...fadeProperties}>
        <SlideshowItem
          header="Welcome to Event Mania"
          image={fadeImages[0]}
                caption="Perfection is not attainable, but if we chase perfection we can catch excellence"
                button='Read More'
        />
        <SlideshowItem
          header="We Help Companies and Companions"
          image={fadeImages[1]}
                caption="At Event Mania, we provide you with various interactive ideas. You can mix and match all elements to design the perfect event for you."
                button='Our Services'
        />
        <SlideshowItem
          header="We design your dreams"
          image={fadeImages[2]}
                caption="We take care of each and every detail of your dream to make your day the best!"
                button='Our Services'
        />
      </Fade>
    );
  }
}
