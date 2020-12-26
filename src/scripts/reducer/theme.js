const initialState = {
  theme: 'light',
  disabledButtons: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {...state, theme: action.payload};
    case 'DISABLE_BUTTONS':
      return {...state, disabledButtons: true};
    case 'ENABLE_BUTTONS':
      return {...state, disabledButtons: false};
    default:
      return state;
  }
};

export default reducer;
