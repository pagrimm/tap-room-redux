import formVisibleReducer from '../../reducers/form-visible-reducer';

describe("formVisibleReducer", () => {
  
  test('Should return default state if no action type is recognized', () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle form visibility state to true', () =>
  {
    expect(formVisibleReducer(false, {type:'TOGGLE_FORM'})).toEqual(true);
  })

  test('Should set form visibility state to true', () =>
  {
    const currentState = false;
    expect(formVisibleReducer(currentState, {type:'FORM_VISIBLE_TRUE'})).toEqual(true);
  })

  test('Should set form visibility state to false', () =>
  {
    const currentState = true;
    expect(formVisibleReducer(currentState, {type:'FORM_VISIBLE_FALSE'})).toEqual(false);
  })

});