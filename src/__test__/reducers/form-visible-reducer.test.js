import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as a from './../../actions';

describe("formVisibleReducer", () => {
  
  test('Should return default state if no action type is recognized', () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle form visibility state to true', () =>
  {
    expect(formVisibleReducer(false, a.toggleForm())).toEqual(true);
  })

  test('Should set form visibility state to true', () =>
  {
    const currentState = false;
    expect(formVisibleReducer(currentState, a.formVisibleTrue())).toEqual(true);
  })

  test('Should set form visibility state to false', () =>
  {
    const currentState = true;
    expect(formVisibleReducer(currentState, a.formVisibleFalse())).toEqual(false);
  })

});