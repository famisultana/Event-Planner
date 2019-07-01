import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../images/emlogo.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default class Menu extends Component {
  render() {
    const navBar = {
      backgroundColor: "black",
      opacity: 0.9,
      height: "12vh"
    };

    const navLinks = {
      fontVariant: "small-caps",
      fontSize: "20px",
      width: "100px",
      color: "white"
    };

    return (
      <Navbar
        sticky="top"
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
            <Link to="/">
              <Nav.Link style={navLinks}>Home</Nav.Link>
            </Link>

            <Nav.Link style={navLinks} href="#pricing">
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

            <Nav.Link style={navLinks} href="#pricing">
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
