const createStore = (reducer, initialState) => {
  let state = reducer(initialState, '__INIT__');
  const subscribers = [];
  return {
    dispatch(action) {
      state = reducer(state, action);
      subscribers.forEach((item) => item());
    },
    subscribe(callback) {
      subscribers.push(callback);
    },
    getState() {
      return state;
    },
  };
};

export default createStore;
