import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer, {actionCreator, thunkCreator} from './reducer';

const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const asyncBtn = document.querySelector('#async');
const themeBtn = document.querySelector('#theme');
const counter = document.querySelector('#counter');

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => {
  const {count, theme} = store.getState();
  counter.textContent = count.count;

  document.body.className = theme.theme;
  [addBtn, subBtn, asyncBtn, themeBtn].map(
    (btn) => (btn.disabled = theme.disabledButtons)
  );
});

store.dispatch({type: 'INIT'});

addBtn.addEventListener('click', () => {
  store.dispatch(actionCreator.increment());
});

subBtn.addEventListener('click', () => {
  store.dispatch(actionCreator.decrement());
});

asyncBtn.addEventListener('click', () => {
  store.dispatch(thunkCreator.asyncIncrement());
});

themeBtn.addEventListener('click', () => {
  if (document.body.classList.contains('dark')) {
    store.dispatch(actionCreator.changeTheme('light'));
  } else if (document.body.classList.contains('light')) {
    store.dispatch(actionCreator.changeTheme('dark'));
  }
});
