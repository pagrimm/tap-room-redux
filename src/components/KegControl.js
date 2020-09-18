import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditKegForm from './EditKegForm';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class KegControl extends React.Component {

  handleEditClick = () => {
    const {dispatch} = this.props;
    const action = {
      type: 'EDITING_TRUE'
    }
    dispatch(action);
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    const { name, brand, price, alcohol, pints} = selectedKeg;
    const {dispatch} = this.props;
    const action = {
      type: 'SELECT_KEG',
      name: name,
      brand: brand,
      price: price,
      alcohol: alcohol,
      pints: pints,
      id: id
    }
    dispatch(action);
  }

  handleClick = () => {
    const {dispatch} = this.props;
    if (this.props.selectedKeg != null) {
      const action = {
        type: 'FORM_VISIBLE_FALSE'
      }
      dispatch(action);
      const action2 = {
        type: 'DESELECT_KEG'
      }
      dispatch(action2);
      const action3 = {
        type: 'EDITING_FALSE'
      }
      dispatch(action3);
    } else {
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const {dispatch} = this.props;
    const { name, brand, price, alcohol, pints, id} = newKeg;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcohol: alcohol,
      pints: pints,
      id: id
    }
    dispatch(action);
    const action2 = {
      type: 'FORM_VISIBLE_FALSE'
    }
    dispatch(action2);
  }

  handleDeletingKeg = (id) => {
    const {dispatch} = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    const action2 = {
      type: 'DESELECT_KEG'
    }
    dispatch(action2);
  }

  handleServingPint = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    if (selectedKeg.pints > 0){
      const { name, brand, price, alcohol, pints, id } = selectedKeg;
      const action = {
        type: 'ADD_KEG',
        name: name,
        brand: brand,
        price: price,
        alcohol: alcohol,
        pints: pints - 1,
        id: id
      }
      const {dispatch} = this.props;
      dispatch(action);
    }
  }

  handleEditingKegInList = (kegToEdit) => {
    const { name, brand, price, alcohol, pints } = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcohol: alcohol,
      pints: pints,
      id: this.props.selectedKeg.id
    }
    const {dispatch} = this.props;
    dispatch(action);
    const action2 = {
      type: 'EDITING_FALSE'
    }
    dispatch(action2);
    const action3 = {
      type: 'DESELECT_KEG'
    }
    dispatch(action3);
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.editing ) {      
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