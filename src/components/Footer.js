import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import { Form, Button, Checkbox } from "semantic-ui-react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Row className="justify-content-md-center footer">
          <Col className="footer-item" lg={true}>
            <h2>About Us</h2>
            <p>
              Event Mania is an Event Management, Catering, Photography and PR
              company located in Pakistan, which specializes in weddings,
              parties, corporate events and much more. Dawat uses its expertise
              to create powerful impressions, to make your event leave a lasting
              impression.
            </p>
          </Col>
          <Col className="footer-item services-list" lg={true}>
            <h2>Our Services</h2>
            <ul>
              <li>Complete Event Management Company</li>
              <li>Wedding and Party Caterers</li>
              <li>Photography Studio</li>
              <li> Interior and Set Designers</li>
              <li>Customized Cakes</li>
            </ul>
          </Col>
          <Col className="footer-item contact" lg={true}>
            <h2>Contact Us</h2>
            <ul>
              <li>
                <i class="fas fa-phone" />
                <span>+92-334-1234567</span>
              </li>
              <li>
                <i class="fas fa-at" />
                <span>info@emania.com</span>
              </li>
              <li>
                <i class="fas fa-globe-asia" />
                <span>www.eventmania.com</span>
              </li>
              <li>
                <i class="fas fa-map-marker-alt" />
                <span>DHA Phase 4, Karachi</span>
              </li>
            </ul>
          </Col>
          <Col className="footer-item contact" lg={true} style={{ border: 'none'}}>
            <h2>Sign Up for Newsletter</h2>

            <form className='footer-form'>
              <label>Name</label>
              <input type='text'/><br/>
              <label>Email</label>
              <input type='email' /><br/>
              <Button>Submit</Button>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}
