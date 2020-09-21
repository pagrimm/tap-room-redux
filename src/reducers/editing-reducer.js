import * as c from './../actions/ActionTypes';

export default(state = false, action) => {
  switch(action.type) {
    case c.EDITING_TOGGLE:
      return !state;
    case c.EDITING_TRUE:
      return true;
    case c.EDITING_FALSE:
      return false;
    default:
      return state;
  }
};