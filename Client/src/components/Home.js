import React, { Component } from "react";
import Info from "./Info";
import Slideshow from "./Slideshow";
import Services from "./Services";
import Ribbon from "./Ribbon";
import Header from "./Header";

//importing image for testing header componenet below
import img4 from "../images/services4.jpg";

class Home extends Component {
  render() {
    return (
      <div>
        <Slideshow />
        <Info />
        <Ribbon />
        <Services />
        <Header
          image={img4}
          imgheight="300px"
          title="Title here"
          text="write text here if any"
        />
      </div>
    );
  }
}

export default Home;
