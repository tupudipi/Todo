export default function newProjectModal() {
    const newProjectModal = document.createElement('div');
    newProjectModal.classList.add('new-project');

    const newProjectForm = document.createElement('div');
    newProjectForm.classList.add('new-project-form');

    const newProjectFormTitle = document.createElement('div');
    newProjectFormTitle.classList.add('form-title');
    newProjectFormTitle.innerHTML = '<h2>Add new project</h2>';
    newProjectForm.appendChild(newProjectFormTitle);

    const newProjectInputGroup1 = document.createElement('div');
    newProjectInputGroup1.classList.add('input-group');
    const newProjectInputLabel1 = document.createElement('label');
    newProjectInputLabel1.innerHTML = 'Project name';
    newProjectInputLabel1.setAttribute('for', 'new-project-name');
    const newProjectInput1 = document.createElement('input');
    newProjectInput1.setAttribute('type', 'text');
    newProjectInput1.setAttribute('name', 'new-project-name');
    newProjectInput1.setAttribute('id', 'new-project-name');
    newProjectInput1.setAttribute('placeholder', 'Project name');
    newProjectInput1.setAttribute('required', '');
    newProjectInput1.setAttribute('autofocus', '');
    newProjectInputGroup1.appendChild(newProjectInputLabel1);
    newProjectInputGroup1.appendChild(newProjectInput1);
    newProjectForm.appendChild(newProjectInputGroup1);

    const newProjectInputGroup2 = document.createElement('div');
    newProjectInputGroup2.classList.add('input-group');
    const newProjectInputLabel2 = document.createElement('label');
    newProjectInputLabel2.innerHTML = 'Project description';
    newProjectInputLabel2.setAttribute('for', 'new-project-description');
    const newProjectInput2 = document.createElement('input');
    newProjectInput2.setAttribute('type', 'text');
    newProjectInput2.setAttribute('name', 'new-project-description');
    newProjectInput2.setAttribute('id', 'new-project-description');
    newProjectInput2.setAttribute('placeholder', 'Project description');
    newProjectInputGroup2.appendChild(newProjectInputLabel2);
    newProjectInputGroup2.appendChild(newProjectInput2);
    newProjectForm.appendChild(newProjectInputGroup2);

    const newProjectBtnGroup = document.createElement('div');
    newProjectBtnGroup.classList.add('form-buttons');

    const addProjectBtn = document.createElement('button');
    addProjectBtn.classList.add('add-project-btn');
    addProjectBtn.innerHTML = 'Add project';
    newProjectBtnGroup.appendChild(addProjectBtn);

    const cancelProjectBtn = document.createElement('button');
    cancelProjectBtn.classList.add('cancel-btn');
    cancelProjectBtn.innerHTML = 'Cancel';

    newProjectBtnGroup.appendChild(cancelProjectBtn);
    newProjectForm.appendChild(newProjectBtnGroup);

    newProjectModal.appendChild(newProjectForm);
    return newProjectModal;
}