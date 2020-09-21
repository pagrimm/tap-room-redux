import React from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

function KegDetail(props){
  const { keg, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Keg Detail</h1>
      <h3>Keg: {keg.name} - {keg.brand}</h3>
      <div>Price: ${keg.price}</div>
      <div>ABV%: {keg.alcohol}</div>
      <div>Pints: {keg.pints}</div>
      <Button style={{margin: 10}} variant="success" onClick={ props.onClickingEdit }>Update Keg</Button>
      <Button variant="danger" onClick={() => onClickingDelete(keg.id) }>Remove Keg</Button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;