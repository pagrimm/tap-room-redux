import * as c from './ActionTypes';

export const addKeg = (keg) => {
  const { name, brand, price, alcohol, pints, id } = keg;
  return {
    type: c.ADD_KEG,
    name: name,
    brand: brand,
    price: price,
    alcohol: alcohol,
    pints: pints,
    id: id
  }
}

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const selectKeg = (keg) => {
  const { name, brand, price, alcohol, pints, id } = keg;
  return {
    type: c.SELECT_KEG,
    name: name,
    brand: brand,
    price: price,
    alcohol: alcohol,
    pints: pints,
    id: id
  }
};

export const deselectKeg = () => ({
  type: c.DESELECT_KEG
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const formVisibleTrue = () => ({
  type: c.FORM_VISIBLE_TRUE
});

export const formVisibleFalse = () => ({
  type: c.FORM_VISIBLE_FALSE
});

export const editingToggle = () => ({
  type: c.EDITING_TOGGLE
});

export const editingTrue = () => ({
  type: c.EDITING_TRUE
});

export const editingFalse = () => ({
  type: c.EDITING_FALSE
});