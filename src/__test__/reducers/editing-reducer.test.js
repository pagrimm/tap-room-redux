import editingReducer from '../../reducers/editing-reducer';
import * as a from './../../actions';

describe("formVisibleReducer", () => {
  
  test('Should return default state if no action type is recognized', () => {
    expect(editingReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle form editing state', () =>
  {
    expect(editingReducer(false, a.editingToggle())).toEqual(true);
  })

  test('Should set form editing state to true', () =>
  {
    const currentState = false;
    expect(editingReducer(currentState, a.editingTrue())).toEqual(true);
  })

  test('Should set form editing state to false', () =>
  {
    const currentState = true;
    expect(editingReducer(currentState, a.editingFalse())).toEqual(false);
  })

});