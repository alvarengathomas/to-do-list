const details = {};

details.close = () => {
  elements.containers.list.style['grid-area'] = '1/2/2/4';
  elements.containers.details.style.display = 'none';
};

details.open = () => {
  elements.containers.list.style['grid-area'] = '1/1/2/3';
  elements.containers.details.style.display = 'block';
};

details.fill = (index) => {
  const item = storage.getByIndex(index);

  elements.inputs.index.value = index;
  elements.inputs.title.value = item.title;
  elements.inputs.description.value = item.description;
  elements.inputs.comment.value = '';
};

