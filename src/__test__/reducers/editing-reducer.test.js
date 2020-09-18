import editingReducer from '../../reducers/editing-reducer';

describe("formVisibleReducer", () => {
  
  test('Should return default state if no action type is recognized', () => {
    expect(editingReducer(false, { type: null })).toEqual(false);
  });

  test('Should toggle form visibility state', () =>
  {
    expect(editingReducer(false, {type:'EDITING_TOGGLE'})).toEqual(true);
  })

  test('Should set form visibility state to true', () =>
  {
    const currentState = false;
    expect(editingReducer(currentState, {type:'EDITING_TRUE'})).toEqual(true);
  })

  test('Should set form visibility state to false', () =>
  {
    const currentState = true;
    expect(editingReducer(currentState, {type:'EDITING_FALSE'})).toEqual(false);
  })

});