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
    const projects = getProjects();
    if (projects.length === 0) {
        const homeProject = {
            id: 0,
            name: 'Home',
            description: "This is your Home project, which can't be deleted or edited. You can add uncategorized tasks and notes here.",
            tasks: [],
            notes: []
        };
        localStorage.setItem('Home', JSON.stringify(homeProject));
    } else {
        const homeProject = projects.find(project => project.name === 'Home');
        localStorage.removeItem('Home');
        localStorage.setItem('Home', JSON.stringify(homeProject));
        }
}());

//find the project with the name 'Home'
let currentProject = getProjects().find((project) => project.name === 'Home');

function content() {
    const content = document.createElement('div');
    content.id = 'content';

    content.appendChild(newProjectModal());
    content.appendChild(editProjectModal());
    content.appendChild(newTaskModal());
    content.appendChild(newNoteModal());

    return content;
}

document.body.appendChild(content());

const contentt = document.getElementById('content');
contentt.appendChild(sidebar());
contentt.appendChild(main(currentProject));

const newProjectBtn = document.querySelector('.new-project-btn');
const newProjectMenu = document.querySelector('.new-project');
const addProjectBtn = document.querySelector('#add-project-btn');
const cancelNewProjectBtn = document.querySelector('#cancel-add-btn');
const newProjectName = document.querySelector('#new-project-name');
const newProjectDescription = document.querySelector('#new-project-description');

export function closeModal(modal) {
    modal.style.opacity = 0;
    modal.style.visibility = 'hidden';
}

export function openModal(modal) {
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


function addProject() {
    const project = {
        id: Date.now(),
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
function validateNewProject() {
    if (newProjectName.value.length > 0 && newProjectDescription.value.length > 0) {
        addProjectBtn.disabled = false;
    } else {
        addProjectBtn.disabled = true;
    }
}











