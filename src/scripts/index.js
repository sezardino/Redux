const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const asyncBtn = document.querySelector('#async');
const themeBtn = document.querySelector('#theme');
const counter = document.querySelector('#counter');

let count = 0;

const render = () => {
  counter.textContent = count;
};

render();

addBtn.addEventListener('click', () => {
  count++;
  render();
});

subBtn.addEventListener('click', () => {
  count--;
  render();
});

asyncBtn.addEventListener('click', () => {
  setTimeout(() => {
    count++;
    render();
  }, 2000);
});

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
