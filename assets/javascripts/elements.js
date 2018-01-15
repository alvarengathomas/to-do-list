const elements = {};

elements.containers = {
  list: document.querySelector('list'),
  details: document.querySelector('detail'),
  task: document.querySelector('items')
};

elements.buttons = {
  add: document.getElementById('btn-add-task'),
  close: document.getElementById('btn-close-detail')
};

elements.inputs = {
  index: document.getElementById('input-task-index'),
  title: document.getElementById('input-task-title'),
  description: document.getElementById('input-task-description'),
  comment: document.getElementById('input-task-comment'),
}
