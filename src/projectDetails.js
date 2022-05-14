import { closeModal, openModal } from './index.js';

export default function projectDetails(currentProject) {
    const projectDetails = document.createElement('div');
    projectDetails.classList.add('project-details');
    const projectDetailsText = document.createElement('div');
    projectDetailsText.classList.add('proj-details-text');
    const projectName = document.createElement('h1');
    projectName.innerHTML = currentProject.name;
    projectDetailsText.appendChild(projectName);
    const projectDescription = document.createElement('p');
    projectDescription.classList.add('project-description');
    projectDescription.innerHTML = currentProject.description;
    projectDetailsText.appendChild(projectDescription);
    projectDetails.appendChild(projectDetailsText);

    if (currentProject.name !== 'Home') {
        const editProjectBtn = document.createElement('button');
        editProjectBtn.classList.add('edit-project-btn');
        editProjectBtn.innerHTML = 'Edit Project';
        projectDetails.appendChild(editProjectBtn);

        const editProjectMenu = document.querySelector('.edit-project');
        const cancelEditProjectBtn = document.querySelector('#cancel-edit-btn');
        const saveProjectBtn = document.querySelector('#save-project-btn');
        const editProjectName = document.querySelector('#edit-project-name');
        editProjectName.value = currentProject.name;
        const editProjectDescription = document.querySelector('#edit-project-description');
        editProjectDescription.value = currentProject.description;

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
            console.log(currentProject);
            console.log(editProjectName.value);
            console.log(editProjectDescription.value);

            const projects = [];
            for (let i = 0; i < localStorage.length; i++) {
                const project = JSON.parse(localStorage.getItem(localStorage.key(i)));
                projects.push(project);
            }
            const projectIndex = projects.findIndex(project => project.id === currentProject.id);
            projects[projectIndex].name = editProjectName.value;
            projects[projectIndex].description = editProjectDescription.value;
            
            localStorage.clear();
            for (let i = 0; i < projects.length; i++) {
                localStorage.setItem(projects[i].name, JSON.stringify(projects[i]));
            }

            closeModal(editProjectMenu);
            projectName.innerHTML = editProjectName.value;
            projectDescription.innerHTML = editProjectDescription.value;

        });
    }

    return projectDetails;
}