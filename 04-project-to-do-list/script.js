const mainContent = document.querySelector('#main-content');
const inputSection = document.createElement('section');
const taskEntry = document.createElement('input');
const taskButton = document.createElement('button');
const listSection = document.createElement('section');
const ordenedList = document.createElement('ol');
const miscellaneousButtons = document.createElement('section');
const eraseEverythingButton = document.createElement('button');
const deletesCompletedTasks = document.createElement('button');
const saveTasksButton = document.createElement('button');
const moveUpButton = document.createElement('button');
const moveDownButton = document.createElement('button');
const removeSelecionedTaskButton = document.createElement('button');
const footer = document.createElement('footer');
const textFooter = document.createElement('p');

function createsInputSection() {
  inputSection.id = 'input-section';
  mainContent.appendChild(inputSection);
}

function createsTaskEntry() {
  taskEntry.id = 'texto-tarefa';
  taskEntry.type = 'text';
  taskEntry.placeholder = 'Digite aqui a nova tarefa';
  inputSection.appendChild(taskEntry);
}

function createsTaskButton() {
  taskButton.id = 'criar-tarefa';
  taskButton.type = 'onclick';
  taskButton.textContent = 'Adicionar';
  inputSection.appendChild(taskButton);
}

function createListSection() {
  listSection.id = 'list-section';
  mainContent.appendChild(listSection);
}

function selectTask(event) {
  const selected = document.querySelector('.selected');
  const addEvent = event.target;
  if (selected !== null) {
    selected.classList.remove('selected');
  }
  addEvent.classList.add('selected');
}

function taskThrough(event) {
  const taskEvent = event.target;
  if (taskEvent.classList.contains('completed')) {
    taskEvent.classList.remove('completed');
  } else {
    taskEvent.classList.add('completed');
  }
}

function createOrdenedList() {
  ordenedList.id = 'lista-tarefas';
  listSection.appendChild(ordenedList);
}

function createsElementsInTheList() {
  const elementList = document.createElement('li');
  elementList.id = 'task';
  elementList.textContent = taskEntry.value;
  elementList.addEventListener('click', selectTask);
  elementList.addEventListener('dblclick', taskThrough);
  ordenedList.appendChild(elementList);
  taskEntry.value = '';
}

function taskButtonEvent() {
  taskButton.addEventListener('click', createsElementsInTheList);
}

function createSectionMiscellaneousButtons() {
  miscellaneousButtons.id = 'miscellaneousButtons';
  mainContent.appendChild(miscellaneousButtons);
}

function createRemoveSelecionedTaskButton() {
  removeSelecionedTaskButton.id = 'remover-selecionado';
  removeSelecionedTaskButton.textContent = 'X';
  miscellaneousButtons.appendChild(removeSelecionedTaskButton);
}
createRemoveSelecionedTaskButton();

function clearSelected() {
  const selected = document.querySelector('.selected');
  ordenedList.removeChild(selected);
}

function addEventClearSelected() {
  removeSelecionedTaskButton.addEventListener('click', clearSelected);
}

function createMoveUpButton() {
  moveUpButton.id = 'mover-cima';
  moveUpButton.textContent = '↑';
  miscellaneousButtons.appendChild(moveUpButton);
}
createMoveUpButton();

function createMoveDownButton() {
  moveDownButton.id = 'mover-baixo';
  moveDownButton.textContent = '↓';
  miscellaneousButtons.appendChild(moveDownButton);
}
createMoveDownButton();

function moveUp() {
  const selected = document.querySelector('.selected');
  if (selected === null || selected.previousElementSibling === null) {
    return;
  }
  const previous = selected.previousElementSibling;
  ordenedList.insertBefore(selected, previous);
}

function moveDown() {
  const selected = document.querySelector('.selected');
  if (selected === null || selected.nextElementSibling === null) {
    return;
  }
  const next = selected.nextElementSibling;
  ordenedList.insertBefore(next, selected);
}

function addEventMoveUp() {
  const button = document.getElementById('mover-cima');
  button.addEventListener('click', moveUp);
}

function addEventMoveDown() {
  const button = document.getElementById('mover-baixo');
  button.addEventListener('click', moveDown);
}

function createDeletesCompletedTasks() {
  deletesCompletedTasks.id = 'remover-finalizados';
  deletesCompletedTasks.textContent = 'Limpar Completos';
  miscellaneousButtons.appendChild(deletesCompletedTasks);
  const completedTask = document.getElementsByClassName('completed');
  const sizeOfCompletedTasks = completedTask.length;
  for (let index = sizeOfCompletedTasks - 1; index >= 0; index -= 1) {
    ordenedList.removeChild(completedTask[index]);
  }
}
createDeletesCompletedTasks();

function clearsFinish() {
  deletesCompletedTasks.addEventListener('click', createDeletesCompletedTasks);
}

function createEraseEverythingButton() {
  eraseEverythingButton.id = 'apaga-tudo';
  eraseEverythingButton.textContent = 'Limpar Lista';
  miscellaneousButtons.appendChild(eraseEverythingButton);
  const size = ordenedList.childElementCount;
  for (let index = 0; index < size; index += 1) {
    ordenedList.removeChild(ordenedList.lastElementChild);
  }
}
createEraseEverythingButton();

function eraseEverything() {
  eraseEverythingButton.addEventListener('click', createEraseEverythingButton);
}

function createSaveTasksButton() {
  saveTasksButton.id = 'salvar-tarefas';
  saveTasksButton.textContent = 'Salvar Lista';
  miscellaneousButtons.appendChild(saveTasksButton);
}
createSaveTasksButton();

function saveTaskList() {
  const tasks = ordenedList.children;
  const size = tasks.length;
  const saveInfo = [];
  for (let index = 0; index < size; index += 1) {
    saveInfo.push(tasks[index].innerText);
    if (tasks[index].classList.contains('completed')) {
      saveInfo.push('true');
    } else {
      saveInfo.push('false');
    }
  }
  localStorage.setItem('list', saveInfo);
}

function loadList() {
  const list = localStorage.getItem('list');
  if (list === null || list === '') {
    return;
  }
  const array = list.split(',');
  for (let index = 0; index < array.length; index += 2) {
    const element = document.createElement('li');
    element.innerText = array[index];
    element.classList.add('tarefa');
    element.addEventListener('click', selectTask);
    element.addEventListener('dblclick', taskThrough);
    if (array[index + 1] === 'true') {
      element.classList.add('completed');
    }
    ordenedList.appendChild(element);
  }
}

function addEventSaveList() {
  saveTasksButton.addEventListener('click', saveTaskList);
}

function cretateTagFooter() {
  footer.id = 'baseboard';
  footer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  document.body.appendChild(footer);
  textFooter.id = 'footer';
  textFooter.style.color = 'rgb(255, 255, 255)';
  textFooter.textContent = '@Savio Moraes - 2021';
  textFooter.style.marginLeft = 'auto';
  textFooter.style.marginRight = 'auto';
  footer.appendChild(textFooter);
}

window.onload = function loadPage() {
  createsInputSection();
  createsTaskEntry();
  createListSection();
  createOrdenedList();
  createsTaskButton();
  taskButtonEvent();
  createSectionMiscellaneousButtons();
  eraseEverything();
  clearsFinish();
  addEventSaveList();
  addEventClearSelected();
  loadList();
  addEventMoveUp();
  addEventMoveDown();
  cretateTagFooter();
};
