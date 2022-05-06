import sidebar from './sidebar.js';
import main from './main.js';
import './styles/global.css';
import newProjectModal from './newProjectModal.js';
import editProjectModal from './editProjectModal.js';

function content() {
    const content = document.createElement('div');
    content.id='content';
    content.appendChild(sidebar());
    content.appendChild(main());
    content.appendChild(newProjectModal());
    content.appendChild(editProjectModal());

    return content;
}

document.body.appendChild(content());

const newProjectBtn = document.querySelector('.new-project-btn');
const newProjectMenu = document.querySelector('.new-project');
const addProjectBtn = document.querySelector('#add-project-btn');
const cancelNewProjectBtn = document.querySelector('#cancel-add-btn');
const newProjectName = document.querySelector('#new-project-name');
const newProjectDescription = document.querySelector('#new-project-description');

const editProjectBtn = document.querySelector('.edit-project-btn');
const editProjectMenu = document.querySelector('.edit-project');
const cancelEditProjectBtn = document.querySelector('#cancel-edit-btn');
const saveProjectBtn = document.querySelector('#save-project-btn');
const editProjectName = document.querySelector('#edit-project-name');
const editProjectDescription = document.querySelector('#edit-project-description');

function closeModal(modal) {
    modal.style.opacity = 0;
    modal.style.visibility = 'hidden';
}

function openModal(modal) {
    modal.style.opacity = 1;
    modal.style.visibility = 'visible';
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('new-project')) {
        newProjectName.value = '';
        newProjectDescription.value = '';
        closeModal(newProjectMenu);
    }
    if (e.target.classList.contains('edit-project')) {
        editProjectName.value = '';
        editProjectDescription.value = '';
        closeModal(editProjectMenu);
    }
});


function validateNewProject() {
    if (newProjectName.value.length > 0 && newProjectDescription.value.length > 0) {
        addProjectBtn.disabled = false;
    } else {
        addProjectBtn.disabled = true;
    }
}

function validateProjectEdit() {
    if (editProjectName.value.length > 0 && editProjectDescription.value.length > 0) {
        saveProjectBtn.disabled = false;
    } else {
        saveProjectBtn.disabled = true;
    }
}

newProjectName.addEventListener('keyup', () => {
    validateNewProject();
});
newProjectDescription.addEventListener('keyup', () => {
    validateNewProject();
});
newProjectBtn.addEventListener('click', () => {
    openModal(newProjectMenu);
    validateNewProject();
});
cancelNewProjectBtn.addEventListener('click', () => {
    newProjectName.value = '';
    newProjectDescription.value = '';
    closeModal(newProjectMenu);
});
addProjectBtn.addEventListener('click', () => {
    console.log(newProjectName.value);
    console.log(newProjectDescription.value);
    newProjectName.value = '';
    newProjectDescription.value = '';
    closeModal(newProjectMenu);
});


editProjectName.addEventListener('keyup', () => {
    validateProjectEdit();
});
editProjectDescription.addEventListener('keyup', () => {
    validateProjectEdit();
});
editProjectBtn.addEventListener('click', () => {
    openModal(editProjectMenu);
    validateProjectEdit();
});
cancelEditProjectBtn.addEventListener('click', () => {
    editProjectName.value = '';
    editProjectDescription.value = '';
    closeModal(editProjectMenu);
});
saveProjectBtn.addEventListener('click', () => {
    console.log(editProjectName.value);
    console.log(editProjectDescription.value);
    editProjectName.value = '';
    editProjectDescription.value = '';
    closeModal(editProjectMenu);
});




