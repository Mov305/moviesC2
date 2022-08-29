const body = document.querySelector('body');

const addUI = () => {
  const main = document.createElement('main');
  const sec = document.createElement('section');
  const div = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');
  const ul = document.createElement('ul');
  const input = document.createElement('input');
  const h3 = document.createElement('h3');
  const button = document.createElement('button');
  const button2 = document.createElement('button');
  sec.id = 'sec1';
  h3.textContent = 'TO-DO';
  input.placeholder = 'Add your list ...';
  input.id = 'inputTask';
  button.innerHTML = '&#9166;';
  div2.id = 'inputDiv';
  button2.textContent = 'Clear All Completed';
  div3.id = 'clearTasks';
  ul.id = 'ulTasks';
  div3.appendChild(button2);
  [input, button].forEach((ele) => div2.appendChild(ele));
  [h3, div2, ul, div3].forEach((ele) => div.appendChild(ele));
  sec.appendChild(div);
  main.appendChild(sec);
  body.appendChild(main);
};

export default addUI;
