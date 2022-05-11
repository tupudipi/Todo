import sidebar from './sidebar.js';
import main from './main.js';
import './styles/global.css';
import newProjectModal from './newProjectModal.js';
import editProjectModal from './editProjectModal.js';
import newTaskModal from './newTaskModal.js';
import newNoteModal from './newNoteModal.js';

//export function that checks localstorage for projects and builds an array of project objects
export function getProjects() {
    const projects = [];
    for (let i = 0; i < localStorage.length; i++) {
        const project = JSON.parse(localStorage.getItem(localStorage.key(i)));
        projects.push(project);
    }
    return projects;
}

(function () {
    const homeProject = {
        name: 'Home',
        description: "This is your Home project, which can't be deleted or edited. You can add uncategorized tasks and notes here."
    }
    localStorage.setItem('Home', JSON.stringify(homeProject));
})();

//find the project with the name 'Home'
const currentProject = getProjects().find((project) => project.name === 'Home');

function content() {
    const content = document.createElement('div');
    content.id = 'content';
    content.appendChild(sidebar());
    content.appendChild(main(currentProject));

    content.appendChild(newProjectModal());
    content.appendChild(editProjectModal());
    content.appendChild(newTaskModal());
    content.appendChild(newNoteModal());

    return content;
}

document.body.appendChild(content());

const newProjectBtn = document.querySelector('.new-project-btn');
const newProjectMenu = document.querySelector('.new-project');
const addProjectBtn = document.querySelector('#add-project-btn');
const cancelNewProjectBtn = document.querySelector('#cancel-add-btn');
const newProjectName = document.querySelector('#new-project-name');
const newProjectDescription = document.querySelector('#new-project-description');

//function that checks when currentProject is changed
currentProject.addEventListener('change', () => {
    if (currentProject.name !== 'Home') {
        const editProjectBtn = document.querySelector('.edit-project-btn');
        const editProjectMenu = document.querySelector('.edit-project');
        const cancelEditProjectBtn = document.querySelector('#cancel-edit-btn');
        const saveProjectBtn = document.querySelector('#save-project-btn');
        const editProjectName = document.querySelector('#edit-project-name');
        const editProjectDescription = document.querySelector('#edit-project-description');

        function validateProjectEdit() {
            if (editProjectName.value.length > 0 && editProjectDescription.value.length > 0) {
                saveProjectBtn.disabled = false;
            } else {
                saveProjectBtn.disabled = true;
            }
        }

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
    }
});


const newTaskBtn = document.querySelector('.add-task-btn');
const newTaskMenu = document.querySelector('.new-task-modal');
const addTaskBtn = document.querySelector('#add-task-button');
const cancelTaskBtn = document.querySelector('#cancel-task-button');
const newTaskName = document.querySelector('#new-task-name');
const newTaskDueDate = document.querySelector('#new-task-due-date');

const newNoteBtn = document.querySelector('.add-note-btn');
const newNoteMenu = document.querySelector('.new-note-modal');
const addNoteBtn = document.querySelector('#add-note-button');
const cancelNoteBtn = document.querySelector('#cancel-note-button');
const newNoteText = document.querySelector('#new-note');


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
    if (e.target.classList.contains('new-task-modal')) {
        newTaskName.value = '';
        newTaskDueDate.value = '';
        closeModal(newTaskMenu);
    }
    if (e.target.classList.contains('new-note-modal')) {
        newNote.value = '';
        closeModal(newNoteMenu);
    }

});


function validateNewProject() {
    if (newProjectName.value.length > 0 && newProjectDescription.value.length > 0) {
        addProjectBtn.disabled = false;
    } else {
        addProjectBtn.disabled = true;
    }
}

function validateNewTask() {
    if (newTaskName.value) {
        addTaskBtn.disabled = false;
    } else {
        addTaskBtn.disabled = true;
    }
}

function validateNewNote() {
    if (newNoteText.value) {
        addNoteBtn.disabled = false;
    } else {
        addNoteBtn.disabled = true;
    }
}

//function that adds a new project to local storage
function addProject() {
    const project = {
        name: newProjectName.value,
        description: newProjectDescription.value,
        tasks: [],
        notes: []
    };
    localStorage.setItem(project.name, JSON.stringify(project));
    newProjectName.value = '';
    newProjectDescription.value = '';
    closeModal(newProjectMenu);
    location.reload();
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
addProjectBtn.addEventListener('click', addProject);


newTaskName.addEventListener('keyup', () => {
    validateNewTask();
});

newTaskBtn.addEventListener('click', () => {
    openModal(newTaskMenu);
    validateNewTask();
});
cancelTaskBtn.addEventListener('click', () => {
    newTaskName.value = '';
    newTaskDueDate.value = '';
    closeModal(newTaskMenu);
});
addTaskBtn.addEventListener('click', () => {
    console.log(newTaskName.value);
    console.log(newTaskDueDate.value);
    newTaskName.value = '';
    newTaskDueDate.value = '';
    closeModal(newTaskMenu);
});

newNoteBtn.addEventListener('click', () => {
    openModal(newNoteMenu);
    validateNewNote();
});
cancelNoteBtn.addEventListener('click', () => {
    newNoteText.value = '';
    closeModal(newNoteMenu);
});
addNoteBtn.addEventListener('click', () => {
    console.log(newNoteText.value);
    newNoteText.value = '';
    closeModal(newNoteMenu);
});
newNoteText.addEventListener('keyup', () => {
    validateNewNote();
});



