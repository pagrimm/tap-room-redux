import React from "react";
import Navbar from "react-bootstrap/Navbar";

function Header(props) {
  return (
    <React.Fragment>
      <Navbar style={{backgroundColor: '#8f3d3d'}}>
        <Navbar.Brand href="#home" style={{color: '#FFFFFF'}}>Tap Room</Navbar.Brand>
      </Navbar>
    </React.Fragment>
  );
}

export default Header;