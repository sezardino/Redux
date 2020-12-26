const actionCreator = {
  increment: () => ({type: 'INCREMENT'}),
  decrement: () => ({type: 'DECREMENT'}),
  changeTheme: (theme) => ({type: 'CHANGE_THEME', payload: theme}),
  disableButtons: () => ({type: 'DISABLE_BUTTONS'}),
  enableButtons: () => ({type: 'ENABLE_BUTTONS'}),
};

const thunkCreator = {
  asyncIncrement: () => (dispatch) => {
    dispatch(actionCreator.disableButtons());
    setTimeout(() => {
      dispatch(actionCreator.increment());
      dispatch(actionCreator.enableButtons());
    }, 1500);
  },
};

export {actionCreator, thunkCreator};
