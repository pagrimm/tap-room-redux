
import React from "react";
import Header from "./Header";
import TicketControl from "./TicketControl";
import Container from "react-bootstrap/Container";

function App(){
  return (
    <React.Fragment>
        <Header />
      <Container>
        <TicketControl />
      </Container>
    </React.Fragment>
  );
}

export default App;