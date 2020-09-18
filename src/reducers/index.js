import { combineReducers } from "redux";
import formVisibleReducer from './form-visible-reducer';
import kegListReducer from './keg-list-reducer';
import editingReducer from './editing-reducer';
import selectedKegReducer from './selected-keg-reducer';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterKegList: kegListReducer,
  editing: editingReducer,
  selectedKeg: selectedKegReducer
});

export default rootReducer;