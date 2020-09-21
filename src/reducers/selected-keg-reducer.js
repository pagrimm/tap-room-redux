import * as c from './../actions/ActionTypes';

export default (state, action) => {
  switch (action.type){
    case c.SELECT_KEG:
      const { name, brand, price, alcohol, pints, id} = action;
      return Object.assign({}, state, {
          name: name,
          brand: brand,
          price: price,
          alcohol: alcohol,
          pints: pints,
          id: id
      });
    case c.DESELECT_KEG:
      return null;
    default:
      return null;
  }
};