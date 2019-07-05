import React, { Component } from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import logo from "../images/emlogo2.png";
import "../styles/home.css";


export default class About extends Component {
  render() {
    return (
      <div>
        <Container className="container">
        <Row>
          <Col className="container-item container-image" lg={true}>
            <Image className="aboutImage" src={logo} />
          </Col>
          <Col className="container-item" lg={true}>
            <h2 style={{color:'#ff788b'}}>WHAT IS EVENT MANIA?</h2>
            <ul>
              <li>Complete Event Management Company</li>
              <li>Wedding and Party Caterers</li>
              <li>Photography Studio</li>
              <li> Interior and Set Designers</li>
              <li>Customized Cakes</li>
            </ul>
          </Col>
        </Row>
      </Container>
      


      </div>
    );
  }
}
