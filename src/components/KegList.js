import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props){
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.kegList).map((keg) =>
        <Keg
        whenKegClicked = { props.onKegSelection }
        whenServePintClicked = { props.onServingPint }
        name={keg.name}
        brand={keg.brand}
        price={parseInt(keg.price)}
        alcohol={parseInt(keg.alcohol)}
        pints={parseInt(keg.pints)}
        id={keg.id}
        key={keg.id} />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;