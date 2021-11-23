import { Grid } from "@material-ui/core";
import React from "react";
import { Navbar, Nav, Brand, Link } from "react-bootstrap";
import $ from "jquery";

class Header extends React.Component {
  render() {
    $(document).on("click", "ul li", function () {
      $(this).addClass("active").siblings().removeClass("active");
    });

    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="" variant="dark" className="navbarClr sticky">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto justify-content-end">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
