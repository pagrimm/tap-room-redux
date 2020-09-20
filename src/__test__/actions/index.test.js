import * as actions from './../../actions';

describe('tap room actions', () => {
  const testKeg = {
    name: 'Barleybrew Scalder',
    brand: 'Barleybrew Brewery',
    price: 10,
    alcohol: 30,
    pints: 124,
    id: 1,
  }
  
  test('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg(testKeg)).toEqual({
      type: 'ADD_KEG',
      name: 'Barleybrew Scalder',
      brand: 'Barleybrew Brewery',
      price: 10,
      alcohol: 30,
      pints: 124,
      id: 1
    });
  });
  
  test('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: 'DELETE_KEG',
      id: 1
    });
  });

  test('selectKeg should create SELECT_KEG action', () => {
    expect(actions.selectKeg(testKeg)).toEqual({
      type: 'SELECT_KEG',
      name: 'Barleybrew Scalder',
      brand: 'Barleybrew Brewery',
      price: 10,
      alcohol: 30,
      pints: 124,
      id: 1
    });
  });

  test('deselectKeg should create DESELECT_KEG action', () => {
    expect(actions.deselectKeg()).toEqual({
      type: 'DESELECT_KEG',
    });
  });

  test('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM',
    });
  });

  test('formVisibleTrue should create FORM_VISIBLE_TRUE action', () => {
    expect(actions.formVisibleTrue()).toEqual({
      type: 'FORM_VISIBLE_TRUE',
    });
  });

  test('formVisibleFalse should create FORM_VISIBLE_FALSE action', () => {
    expect(actions.formVisibleFalse()).toEqual({
      type: 'FORM_VISIBLE_FALSE',
    });
  });

  test('editingToggle should create EDITING_TOGGLE action', () => {
    expect(actions.editingToggle()).toEqual({
      type: 'EDITING_TOGGLE',
    });
  });

  test('editingTrue should create EDITING_TRUE action', () => {
    expect(actions.editingTrue()).toEqual({
      type: 'EDITING_TRUE',
    });
  });

  test('editingFalse should create EDITING_FALSE action', () => {
    expect(actions.editingFalse()).toEqual({
      type: 'EDITING_FALSE',
    });
  });
});