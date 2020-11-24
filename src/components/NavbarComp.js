import React from "react";
import logo from "../images/Breaking_Bad_5.png";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

function NavbarComp(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img alt="Logo" src={logo} className="d-inline-block align-top" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Link className="link_name" href="#home">
            Home
          </Link>
          <Link className="link_name" href="#myspace">
            MySpace
          </Link>
          <Link className="link_name" href="#about">
            About
          </Link>
          <Link className="link_name" href="#contact">
            Contact us
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComp;
