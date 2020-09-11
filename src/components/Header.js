import React from "react";
import Navbar from "react-bootstrap/Navbar";

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