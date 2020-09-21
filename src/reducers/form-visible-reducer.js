import * as c from './../actions/ActionTypes';

export default(state = false, action) => {
  switch(action.type) {
    case c.TOGGLE_FORM:
      return !state;
    case c.FORM_VISIBLE_TRUE:
      return true;
    case c.FORM_VISIBLE_FALSE:
      return false;
    default:
      return state;
  }
};