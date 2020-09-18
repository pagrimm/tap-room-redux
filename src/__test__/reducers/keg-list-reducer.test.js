import kegListReducer from '../../reducers/keg-list-reducer';

describe('kegListReducer', () => {
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
    action = {
      type: 'ADD_POST',
      name: name,
      brand: brand,
      price: price,
      alcohol: alcohol,
      pints: pints,
      id: id
    };
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

  
});