import React, { Component } from "react";
import ServiceItem from "./ServiceItem";
import { Row } from "react-bootstrap";
import "../styles/home.css";
import img1 from "../images/services1.jpg";
import img2 from "../images/services2.jpg";
import img3 from "../images/services3.jpg";
import img4 from "../images/services4.jpg";
import img5 from "../images/services5.jpg";
import img6 from "../images/services6.jpg";

export default class Services extends Component {
  render() {
    return (
      <div className="services">
        <h1>Our Services</h1>
          <ServiceItem
          position='left'
            image={img1}
            header="photography"
            content="We provide rental services such as marquee/tent, ,furniture, LED lights etc. Decor services are available as well. Please contact our Event Managers for further details."
          />

      </div>
    );
  }
}
