import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as a from './../../actions';

describe("selectedKegReducer", () => {
  const testKeg = {
    type: 'SELECT_KEG',
    name: 'Barleybrew Scalder',
    brand: 'Barleybrew Brewery',
    price: 10,
    alcohol: 30,
    pints: 124,
    id: 1,
  }
  test('Should return default state if no action type is recognized', () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(null);
  });

  test('Should return selected keg', () => {
    const action = a.selectKeg(testKeg);
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