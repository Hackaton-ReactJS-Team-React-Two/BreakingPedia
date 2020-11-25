import React from "react";
import logo from "../images/Breaking_Bad_5.png";
import { Navbar, Nav } from "react-bootstrap";
import { Link, Route } from "react-router-dom";
import ContactUs from "../pages/ContactUs"
import "./styles/Navbar.css";

function NavbarComp(props) {
  return (
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <div className="container">
      <Navbar.Brand>
        <Link to="/">
        <img
          src={logo}
          className="d-inline-block align-top nav__logo"
          alt="Logo"
        />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
          <div className="container">
              <Nav>
                <Link className="link_name" to="/">
                  Home
                </Link>
                <Link className="link_name">
                  MySpace
                </Link>
                <Link className="link_name">
                  About
                </Link>
                <Link className="link_name">
                  Contact us
                </Link>
              </Nav>
          </div>
      </Navbar.Collapse>
    </div>
    </Navbar>
    
  );
}

export default NavbarComp;
