import kegListReducer from '../../reducers/keg-list-reducer';
import * as a from './../../actions';

describe('kegListReducer', () => {
  const currentState = {
    1: {
      name: 'Barleybrew Scalder',
      brand: 'Barleybrew Brewery',
      price: 10,
      alcohol: 30,
      pints: 124,
      id: 1,
    },
    2: {
      name: 'Thunder Ale',
      brand: 'Barleybrew Brewery',
      price: 15,
      alcohol: 35,
      pints: 124,
      id: 2,
    }
  }
  let action;
  const kegData = {
    name: 'Barleybrew Scalder',
    brand: 'Barleybrew Brewery',
    price: 10,
    alcohol: 30,
    pints: 124,
    id: 1,
  };

  test('Should return default state if no action type passed into reducer', () => {
    expect(kegListReducer({}, {type: null})).toEqual({});
  });

  test('Should successfully add keg to keg list', () => {
    const { name, brand, price, alcohol, pints, id} = kegData;
    action = a.addKeg(kegData);
    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alcohol: alcohol,
        pints: pints,
        id: id
      }
    });
  });
  
  test('Should successfully delete a post', () => {
    action = a.deleteKeg(1);
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        name: 'Thunder Ale',
        brand: 'Barleybrew Brewery',
        price: 15,
        alcohol: 35,
        pints: 124,
        id: 2,
      }
    });
  });

});