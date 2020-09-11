import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function Keg(props){
  let servePintButton = null;
  let stockMessage = null;
  if (props.pints > 0) {
    servePintButton = <Button style={{margin: 10}} variant="success" onClick={() => props.whenServePintClicked(props.id)}>Serve Pint</Button>
  }
  if (props.pints <= 10 && props.pints > 0){
    stockMessage = <p>ALMOST EMPTY</p>
  }
  if (props.pints === 0){
    stockMessage = <p>OUT OF STOCK</p>
  }
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name} - ${props.price}</h3>
        <div>Pints remaining: {props.pints}</div>
      </div>
      {servePintButton}
      {stockMessage}
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number,
  alcohol: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;