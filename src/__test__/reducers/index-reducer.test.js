import rootReducer from '../../reducers/index';
import {createStore} from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import kegListReducer from '../../reducers/keg-list-reducer';
import editingReducer from '../../reducers/editing-reducer';
import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as a from './../../actions';

let store = createStore(rootReducer);

describe("rootReducer", () => {
  const testKeg = {
    name: 'Barleybrew Scalder',
    brand: 'Barleybrew Brewery',
    price: 10,
    alcohol: 30,
    pints: 124,
    id: 1,
  }

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, {type:null})).toEqual({
      editing: false,
      masterKegList: {},
      formVisibleOnPage: false,
      selectedKeg: null
    });
  });
  
  test('Check that initial state of kegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches rootReducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that state of kegListReducer matches rootReducer', () => {
    const action = a.addKeg(testKeg);
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(kegListReducer(undefined, action));
  });

  test('Check that state of formVisibleReducer matches rootReducer', () => {
    const action = a.toggleForm();
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

  test('Check that state of editingReducer matches rootReducer', () => {
    const action = a.editingToggle();
    store.dispatch(action);
    expect(store.getState().editing).toEqual(editingReducer(undefined, action));
  });

  test('Check that state of selectedKegReducer matches rootReducer', () => {
    const action = a.selectKeg(testKeg);
    store.dispatch(action);
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, action));
  });

});