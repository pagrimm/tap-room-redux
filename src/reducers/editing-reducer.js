export default(state = false, action) => {
  switch(action.type) {
    case 'EDITING_TOGGLE':
      return !state;
    case 'EDITING_TRUE':
      return true;
    case 'EDITING_FALSE':
      return false;
    default:
      return state;
  }
};