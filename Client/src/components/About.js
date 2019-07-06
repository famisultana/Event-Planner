import React, { Component } from "react";
import Header from "./Header";
import img from "../images/1.jpg";
import { Grid } from "semantic-ui-react";
import ServiceItem from "./ServiceItem";
import { Container } from "semantic-ui-react";
import MainHeading from "./MainHeading";
import TeamMember from "./TeamMember";
// IMAGES
import img1 from "../images/services1.jpg";
import img2 from "../images/services2.jpg";
import img3 from "../images/services3.jpg";
import img4 from "../images/services4.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <Header image={img} title="About us" imgheight="300px" />
        <hr />
        <Grid className="services-row">
          <ServiceItem
            position="right"
            image={img1}
            header="OUR STORY"
            content="DAWAT is an Event management, Catering, Photography and PR,company located in Pakistan. We specialize in weddings, parties, corporate events and much more. We use our expertise to create powerful impressions in all of our endeavours, to make your event leave a lasting impression for years to come."
          />
          <ServiceItem
            position="left"
            image={img2}
            header="OUR MISSION"
            content="We provide rental services such as marquee/tent, ,furniture, LED lights etc. Decor services are available as well. Please contact our Event Managers for further details."
          />

          <ServiceItem
            position="right"
            image={img3}
            header="OUR VISION"
            content="We provide rental services such as marquee/tent, ,furniture, LED lights etc. Decor services are available as well. Please contact our Event Managers for further details."
          />
        </Grid>

        {/* CODE FOR ---OUR TEAM SECTION --  */}
        <hr />
        <MainHeading text="Know Our Team" />
        <Container fluid style={{ paddingTop: "10px", paddingBottom: "10px" }}>
          <Grid className="category-row" columns={2}>
            <TeamMember
              img=""
              position="Marketing manager"
              name="Hassan Raza"
            />
            <TeamMember img="" position="Developer" name="Fami Sultana" />
            <TeamMember img="" position="CEO" name="Hassan Raza" />
            <TeamMember img="" position="peon" name="Fatima " />
          </Grid>
        </Container>
        <br />
      </div>
    );
  }
}

export default About;
