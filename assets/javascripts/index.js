const storageKey = 'tasks';
let storageTasks = JSON.parse(localStorage.getItem(storageKey));

if (!storageTasks) {
  const storageSeedData = [{
    title: 'Work it harder',
    description: 'Make ir better'
  }];

  localStorage.setItem(storageKey, JSON.stringify(storageSeedData));
  storageTasks = storageSeedData;
}

const addTaskButton = document.getElementById('btn-add-task');
const closeDetailButton = document.getElementById('btn-close-detail');
const listContainer = document.querySelector('list');
const detailContainer = document.querySelector('detail');
const taskContainer = document.querySelector('items');

const closeDetails = () => {
  listContainer.style['grid-area'] = '1/2/2/4';
  detailContainer.style.display = 'none';
};

const openDetails = () => {
  listContainer.style['grid-area'] = '1/1/2/3';
  detailContainer.style.display = 'block';
};

const checkIconHtml = '<img class="w32" src="assets/icons/check.svg">';
const circleIconHtml = '<img class="circle-icon" src="assets/icons/circle.svg">';

storageTasks.forEach((item, index) => {
  const taskTag = document.createElement('task');
  const spanHtml = '<span>' + item.title + '</span>';

  taskTag.innerHTML = checkIconHtml + spanHtml + circleIconHtml;
  taskTag.setAttribute('storage-index', index);
  taskTag.addEventListener('click', openDetails);

  taskContainer.appendChild(taskTag);
});

addTaskButton.addEventListener('click', openDetails);
closeDetailButton.addEventListener('click', closeDetails);
