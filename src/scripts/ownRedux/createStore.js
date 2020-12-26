const createStore = (reducer, initialState) => {
  const state = reducer(initialState, '__INIT__');
  const subscribers = [];
  return {
    getStore() {
      return this.state;
    },
    subscribe(callback) {
      subscribers.push(callback);
    },
    dispatch(action) {
      state = reducer(state, action);
      subscribers.forEach((item) => item());
    },
  };
};

export default createStore;
