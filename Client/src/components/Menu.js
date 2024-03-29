import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/emlogo.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default class Menu extends Component {

  componentDidMount(){
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.opacity = "0.7";
    } else {
      document.getElementById("navbar").style.opacity = "0.9";
    }
    prevScrollpos = currentScrollPos;
  }
}

  render() {
    const navBar = {
      backgroundColor: "black",
      opacity: 0.7,
      height: "12vh",
      width: '100%',
      position: 'fixed',
      zIndex: '12'
    };

    const navLinks = {
      fontVariant: "small-caps",
      fontSize: "20px",
      width: "100px",
      color: "white"
    };


    return (
      <Navbar id='navbar'
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={navBar}
      >
        <Navbar.Brand href="#home">
          <img src={logo} style={{ maxHeight: 50 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" s />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={navLinks} href="/">
              Home
            </Nav.Link>

            <Nav.Link style={navLinks} href="/about">
              About
            </Nav.Link>
            {/* link tag will scroll it down to the section given name id */}
            <ScrollLink
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-50}
              duration={800}
            >
              <Nav.Link style={navLinks} href="#features">
                Services
              </Nav.Link>
            </ScrollLink>

            <Nav.Link style={navLinks} href="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link style={navLinks} href="#deets">
              Sign In
            </Nav.Link>
            <Nav.Link style={navLinks} href="#deets">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
