import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import EditKegForm from './EditKegForm';
import Button from 'react-bootstrap/Button';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null,
      editing: false
    };
  }
  
  // myStyle = () => { textAlign: 'center', padding: '20px' };
  // const myReturn = myStyle();

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
        });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false
    });
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !==id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null
    });
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
      masterKegList: editedMasterKegList,
      editing: false,
      selectedKeg: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing ) {      
      currentlyVisibleState = <EditKegForm
      keg = {this.state.selectedKeg}
      onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
        currentlyVisibleState = <KegDetail 
          keg = {this.state.selectedKeg} 
          onClickingDelete = {this.handleDeletingKeg} 
          onClickingEdit = {this.handleEditClick} />
        buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
        buttonText = "Return to Keg List";
    } else {
        currentlyVisibleState = 
          <KegList 
            kegList={this.state.masterKegList} 
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

export default KegControl;