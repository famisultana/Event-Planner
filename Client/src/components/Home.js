import React, { Component } from "react";
import Info from "./Info";
import Slideshow from "./Slideshow";
import Services from "./Services";
import Ribbon from "./Ribbon";
import ImageRibbon from "./ImageRibbon";
import Fade from 'react-reveal/Fade';

class Home extends Component {
  render() {
    return (
      <Fade>
        <Slideshow />
        <Info />
        <Ribbon />
        <Services />
 <ImageRibbon/>
      </Fade>
    );
  }
}

export default Home;
