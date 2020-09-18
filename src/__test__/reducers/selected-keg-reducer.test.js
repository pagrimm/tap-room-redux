import selectedKegReducer from '../../reducers/selected-keg-reducer';

describe("selectedKegReducer", () => {
  
  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(null);
  });

  test('Should return selected keg', () => {
    const action = {
      type: 'SELECT_KEG',
      name: 'Barleybrew Scalder',
      brand: 'Barleybrew Brewery',
      price: 10,
      alcohol: 30,
      pints: 124,
      id: 1,
    };
    expect(selectedKegReducer({}, action)).toEqual({
      name: 'Barleybrew Scalder',
      brand: 'Barleybrew Brewery',
      price: 10,
      alcohol: 30,
      pints: 124,
      id: 1,
    });
  });

  test('Should deselect selected keg', () => {
    const currentState = {
      name: 'Barleybrew Scalder',
      brand: 'Barleybrew Brewery',
      price: 10,
      alcohol: 30,
      pints: 124,
      id: 1,
    }
    const action = {
      type: 'DESELECT_KEG',
    };
    expect(selectedKegReducer(currentState, action)).toEqual(null);
  });
});