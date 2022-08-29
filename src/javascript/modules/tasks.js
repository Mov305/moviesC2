class Tasks {
  constructor(parent) {
    this.parent = parent;
  }

  tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  addLS() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  check(id) {
    this.tasks.forEach((ele, index) => {
      if (id === index) {
        ele.completed = !ele.completed;
      }
    });
    this.renderTasks();
  }

  clearAll() {
    this.tasks.forEach((ele, ind) => {
      if (ele.completed) {
        if (this.tasks.length === 1) {
          this.tasks = [];
        } else {
          const newTasks = this.tasks.filter((ele) => ele.index !== ind + 1);
          this.tasks = newTasks;
        }
      }
    });
    this.indexCrr();
  }

  indexCrr() {
    const newTasks = this.tasks.map((ele, index) => ({ ...ele, index: index + 1 }));
    this.tasks = newTasks;
    this.renderTasks();
  }

  add(discription) {
    this.tasks.push({
      discription,
      completed: false,
      index: this.tasks.length + 1,
    });
    this.indexCrr();
  }

  edit(id, text) {
    this.tasks.forEach((ele) => {
      if (ele.index === id) {
        ele.discription = text;
      }
    });
  }

  remove(index) {
    if (this.tasks.length === 1) {
      this.tasks = [];
    } else {
      const newTasks = this.tasks.filter((ele) => ele.index !== index + 1);
      this.tasks = newTasks;
    }
    this.indexCrr();
  }

  renderTasks() {
    this.addLS();
    this.parent.innerHTML = '';
    this.tasks
      .sort((a, b) => a.index - b.index)
      .forEach((ele, ind) => {
        const li = document.createElement('li');
        const input = document.createElement('input');
        const div = document.createElement('div');
        const textarea = document.createElement('textarea');
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        li.className = 'task-item';
        input.type = 'checkbox';
        input.checked = ele.completed;
        input.onchange = () => {
          this.check(ind);
        };
        div.className = 'task-edit';
        textarea.maxLength = '255';
        textarea.rows = '1';
        textarea.textContent = ele.discription;
        textarea.style.textDecoration = ele.completed && 'line-through';
        textarea.onkeyup = (e) => {
          ele.discription = e.target.value;
          this.addLS();
        };
        span1.className = 'delTask';
        span1.innerHTML = '🗑';
        span1.onclick = () => this.remove(ind);
        span2.className = 'moveTask';
        span2.innerHTML = '&#8230;';
        div.appendChild(textarea);
        [input, div, span1, span2].forEach((child) => li.appendChild(child));
        this.parent.appendChild(li);
      });
  }
}

export default Tasks;
