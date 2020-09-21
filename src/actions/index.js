export const addKeg = (keg) => {
  const { name, brand, price, alcohol, pints, id } = keg;
  return {
    type: 'ADD_KEG',
    name: name,
    brand: brand,
    price: price,
    alcohol: alcohol,
    pints: pints,
    id: id
  }
}

export const deleteKeg = id => ({
  type: 'DELETE_KEG',
  id
});

export const selectKeg = (keg) => {
  const { name, brand, price, alcohol, pints, id } = keg;
  return {
    type: 'SELECT_KEG',
    name: name,
    brand: brand,
    price: price,
    alcohol: alcohol,
    pints: pints,
    id: id
  }
};

export const deselectKeg = () => ({
  type: 'DESELECT_KEG'
});

export const toggleForm = () => ({
  type: 'TOGGLE_FORM'
});

export const formVisibleTrue = () => ({
  type: 'FORM_VISIBLE_TRUE'
});

export const formVisibleFalse = () => ({
  type: 'FORM_VISIBLE_FALSE'
});

export const editingToggle = () => ({
  type: 'EDITING_TOGGLE'
});

export const editingTrue = () => ({
  type: 'EDITING_TRUE'
});

export const editingFalse = () => ({
  type: 'EDITING_FALSE'
});