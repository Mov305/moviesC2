import '../css/style.css';
import { loadTasks, addTask } from './modules/addRemovTasks.js';
import clearAll from './modules/modTask.js';

loadTasks();
addTask();
clearAll();
