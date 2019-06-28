import React, { Component } from "react";
import { Navbar, Nav} from "react-bootstrap";
import logo from "../images/emlogo.png";
import {Link} from 'react-router-dom';

export default class Menu extends Component {
  render() {
    const navBar = {
      backgroundColor: "black",
      opacity: 0.9,
      height: '12vh',
    };

    const navLinks = {
      fontVariant: "small-caps",
      fontSize: "20px",
      width: "100px",
      color:'white'
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
          <Nav.Link style={navLinks}>
              Home
            </Nav.Link>
            </Link>
            
            <Nav.Link style={navLinks} href="#pricing">
              About
            </Nav.Link>
            <Nav.Link style={navLinks} href="#features">
              Services
            </Nav.Link>
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
