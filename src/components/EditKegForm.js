import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm(props){
  const {keg, onEditKeg} = props;
  function handleEditKegFormSubmission(event){
    event.preventDefault();
    onEditKeg({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcohol: event.target.alcohol.value, pints: keg.pints, id: keg.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditKegFormSubmission}
        buttonText="Update Keg" />
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
};

export default EditKegForm;