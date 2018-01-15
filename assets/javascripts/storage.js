const storage = {};
const key = 'tasks';

const getParsedItem = () => JSON.parse(localStorage.getItem(key));
const setStringifyItems = (list) => localStorage.setItem(key, JSON.stringify(list));

storage.add = (title, description) => {
  const newTask = { title, description };
  const taskList = getParsedItem() || [];

  taskList.push(newTask);
  setStringifyItems(taskList);

  return taskList.length - 1;
};

storage.update = (index, title, description) => {
  const taskList = getParsedItem() || [];

  taskList[index].title = title;
  taskList[index].description = description;

  setStringifyItems(taskList);
}

storage.getByIndex = (index) => {
  const taskList = getParsedItem() || [];
  return taskList[index];
};

storage.getAll = () => getParsedItem();

storage.count = () => storage.getAll() ? storage.getAll().length : 0;

storage.setActive = (index) => localStorage.setItem('active', index);

storage.getActive = () => parseInt(localStorage.getItem('active'));

