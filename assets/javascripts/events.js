const events = {};

const save = () => {
  const { index, title, description } = elements.inputs;
  storage.update(index.value, title.value, description.value);
  list.load();
};

events.setup = () => {
  elements.buttons.add.addEventListener('click', () => {
    const index = storage.count();

    details.open();
    storage.add('','');

    details.fill(index);
    storage.setActive(index);

    list.load();
    elements.inputs.title.focus();
  });

  elements.buttons.close.addEventListener('click', () => {
    details.close();
    storage.setActive(-1);
    list.load();
  });

  elements.inputs.title.addEventListener('blur', save);
  elements.inputs.title.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      save();
      elements.inputs.description.focus();
    }
  });

  elements.inputs.description.addEventListener('blur', save);
  elements.inputs.description.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
      save();
      elements.inputs.description.blur();
    }
  });
};
