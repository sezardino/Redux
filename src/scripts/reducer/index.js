import {combineReducers} from 'redux';
import counterReducer from './counter';
import themeReducer from './theme';
import {actionCreator, thunkCreator} from './actions';

const reducer = combineReducers({
  count: counterReducer,
  theme: themeReducer,
});

// const actionCreator = {
//   ...counterActionCreator,
//   ...themeActionCreator,
// };

// const thunkCreator = {...counterThunkCreator};

export {actionCreator, thunkCreator};
export default reducer;
