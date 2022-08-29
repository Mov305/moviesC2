import { TaskList } from './addRemovTasks.js';

const clearAllButton = document.querySelector('#clearTasks button');

const clearAll = () => {
  clearAllButton.addEventListener('click', () => {
    TaskList.clearAll();
  });
};

export default clearAll;
