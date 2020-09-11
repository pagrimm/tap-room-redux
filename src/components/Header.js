import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header(props) {
  return (
    <React.Fragment>
      <Navbar>
        <Navbar.Brand href="#home">Tap Room</Navbar.Brand>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;