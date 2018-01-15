const list = {};

const checkIconHtml = '<img class="w32" src="assets/icons/check.svg">';
const circleIconHtml = '<img class="circle-icon" src="assets/icons/circle.svg">';
const taskContainer = elements.containers.task;

list.load = () => {
  const tasks = storage.getAll();

  taskContainer.innerHTML = '';

  if (!tasks) {
    return;
  }

  tasks.forEach((task, index) => {
    const taskTag = document.createElement('task');
    const spanHtml = '<span>' + task.title + '</span>';
    const activeIndex = storage.getActive();

    taskTag.innerHTML = checkIconHtml + spanHtml;

    if (activeIndex === index) {
      taskTag.innerHTML += circleIconHtml;
    }

    taskTag.addEventListener('click', () => {
      details.open();
      details.fill(index);
      storage.setActive(index);
      list.load();
    });

    taskContainer.appendChild(taskTag);
  });
};

