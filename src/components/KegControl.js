import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditKegForm from './EditKegForm';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as a from './../actions';

class KegControl extends React.Component {

  handleEditClick = () => {
    const thisKeg = this.props.selectedKeg;
    const {dispatch} = this.props;
    const action = a.editingTrue();
    dispatch(action);
    const action2 = a.selectKeg(thisKeg);
    dispatch(action2);
  }

  handleChangingSelectedKeg = (id) => {
    const {dispatch} = this.props;
    const thisKeg = this.props.masterKegList[id];
    const action = a.selectKeg(thisKeg)
    dispatch(action);
  }

  handleClick = () => {
    const {dispatch} = this.props;
    if (this.props.selectedKeg != null) {
      const action = a.formVisibleFalse();
      dispatch(action);
      const action2 = a.deselectKeg();
      dispatch(action2);
      const action3 = a.editingFalse();
      dispatch(action3);
    } else {
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const {dispatch} = this.props;
    const action = a.addKeg(newKeg)
    dispatch(action);
    const action2 = a.formVisibleFalse();
    dispatch(action2);
  }

  handleDeletingKeg = (id) => {
    const {dispatch} = this.props;
    const action = a.deleteKeg(id);
    dispatch(action);
    const action2 = a.deselectKeg();
    dispatch(action2);
  }

  handleServingPint = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    if (selectedKeg.pints > 0){
      const updatedKeg = {...selectedKeg, pints: selectedKeg.pints - 1};
      const action = a.addKeg(updatedKeg);
      const {dispatch} = this.props;
      dispatch(action);
    }
  }

  handleEditingKegInList = (kegToEdit) => {
    const updatedKeg = {...kegToEdit, pints: this.props.selectedKeg.pints, id: this.props.selectedKeg.id}
    const action = a.addKeg(updatedKeg);
    const {dispatch} = this.props;
    dispatch(action);
    const action2 = a.editingFalse();
    dispatch(action2);
    const action3 = a.deselectKeg();
    dispatch(action3);
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.editing) {      
      currentlyVisibleState = <EditKegForm
      keg = {this.props.selectedKeg}
      onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    } else if (this.props.selectedKeg != null) {
        currentlyVisibleState = <KegDetail 
          keg = {this.props.selectedKeg}
          onClickingDelete = {this.handleDeletingKeg} 
          onClickingEdit = {this.handleEditClick} />
        buttonText = "Return to Keg List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
        buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = 
        <KegList 
          kegList={this.props.masterKegList} 
          onServingPint={this.handleServingPint}
          onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add Keg"
    }
    return (
      <div style={{ 
        textAlign: 'center',
        padding: '20px',
      }}>
      <React.Fragment>
        {currentlyVisibleState}
        <Button variant="primary" onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
      </div>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  selectedKeg: PropTypes.object,
  formVisibleOnPage: PropTypes.bool,
  editing: PropTypes.bool
}

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    selectedKeg: state.selectedKeg,
    formVisibleOnPage: state.formVisibleOnPage,
    editing: state.editing
  }
}

KegControl = connect(mapStateToProps)(KegControl);
export default KegControl;