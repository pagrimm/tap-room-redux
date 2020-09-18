export default(state = false, action) => {
  switch(action.type) {
    case 'TOGGLE_FORM':
      return !state;
    case 'FORM_VISIBLE_TRUE':
      return true;
    case 'FORM_VISIBLE_FALSE':
      return false;
    default:
      return state;
  }
};