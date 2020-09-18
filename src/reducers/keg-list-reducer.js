export default (state = {}, action) => {
  const { name, brand, price, alcohol, pints, id} = action;
  switch (action.type){
    case 'ADD_KEG':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          alcohol: alcohol,
          pints: pints,
          id: id
        }
      });
    case 'DELETE_KEG':
      const newState = {...state};
      delete newState[id];
      return newState;
    default:
      return state;
  }
};