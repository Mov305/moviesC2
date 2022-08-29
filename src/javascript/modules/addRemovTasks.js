import Tasks from './tasks.js';
import addUI from './layout.js';

addUI();
const ulTasks = document.querySelector('#ulTasks');
const TaskList = new Tasks(ulTasks);
const loadTasks = () => {
  TaskList.renderTasks();
};

const addTask = () => {
  const input = document.querySelector('#inputDiv > input');
  const enter = document.querySelector('#inputDiv > button');

  enter.addEventListener('click', () => {
    if (input.value.length > 0) {
      TaskList.add(input.value);
      loadTasks();
    }
    input.value = '';
  });
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && input.value.length > 0) {
      TaskList.add(input.value);
      loadTasks();
      input.value = '';
    }
  });
};

export { loadTasks, addTask, TaskList };
