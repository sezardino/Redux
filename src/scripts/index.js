import createStore from './ownRedux';
import reducer from './reducer';

const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const asyncBtn = document.querySelector('#async');
const themeBtn = document.querySelector('#theme');
const counter = document.querySelector('#counter');

const store = createStore(reducer, 0);

store.subscribe(() => {
  const state = store.getState();
  counter.textContent = state;
});

store.dispatch({type: 'INIT'});

addBtn.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'});
});

subBtn.addEventListener('click', () => {
  store.dispatch({type: 'DECREMENT'});
});

asyncBtn.addEventListener('click', () => {});

themeBtn.addEventListener('click', () => {});
