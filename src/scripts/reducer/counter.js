// const actionCreator = {
//   increment: () => ({type: 'INCREMENT'}),
//   decrement: () => ({type: 'DECREMENT'}),
// };

// const thunkCreator = {
//   asyncIncrement: () => (dispatch) => {
//     dispatch()
//     setTimeout(() => dispatch(actionCreator.increment()), 1500);
//   },
// };

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    default:
      return state;
  }
};

// export {actionCreator, thunkCreator};
export default reducer;
