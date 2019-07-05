import React, { Component } from "react";
import ServiceItem from "./ServiceItem";
import { Grid } from "semantic-ui-react";
import MainHeading from "./MainHeading";
import img1 from "../images/services1.jpg";
import img2 from "../images/services2.jpg";
import img3 from "../images/services3.jpg";
import img4 from "../images/services4.jpg";

export default class Services extends Component {
  render() {
    return (
      <div className="services" id="services">
        <MainHeading text="Our Services" />
        <Grid className="services-row">
          <ServiceItem
            position="right"
            image={img1}
            header="photography"
            content="We provide rental services such as marquee/tent, ,furniture, LED lights etc. Decor services are available as well. Please contact our Event Managers for further details."
            link='/photography'
          />
          <ServiceItem
            position="left"
            image={img2}
            header="Decor services"
            content="We provide rental services such as marquee/tent, ,furniture, LED lights etc. Decor services are available as well. Please contact our Event Managers for further details."
            link='/decor'
         />

          <ServiceItem
            position="right"
            image={img3}
            header="Food and catering"
            content="We provide rental services such as marquee/tent, ,furniture, LED lights etc. Decor services are available as well. Please contact our Event Managers for further details."
            link='/foodandcatering'
          />

          <ServiceItem
            position="left"
            image={img4}
            header="customized cakes"
            content="We provide rental services such as marquee/tent, ,furniture, LED lights etc. Decor services are available as well. Please contact our Event Managers for further details."
            link='/customizedcakes'
          />
        </Grid>
      </div>
    );
  }
}
