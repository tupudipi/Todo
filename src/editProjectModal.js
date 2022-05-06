export default function editProjectModal() {
    const editProjectModal = document.createElement('div');
    editProjectModal.classList.add('edit-project');

    const editProjectForm = document.createElement('div');
    editProjectForm.classList.add('edit-project-form');

    const editProjectFormTitle = document.createElement('div');
    editProjectFormTitle.classList.add('form-title');
    editProjectFormTitle.innerHTML = '<h2>Edit selected project</h2>';
    editProjectForm.appendChild(editProjectFormTitle);

    const editProjectInputGroup1 = document.createElement('div');
    editProjectInputGroup1.classList.add('input-group');
    const editProjectInputLabel1 = document.createElement('label');
    editProjectInputLabel1.innerHTML = 'Project name';
    editProjectInputLabel1.setAttribute('for', 'edit-project-name');
    const editProjectInput1 = document.createElement('input');
    editProjectInput1.setAttribute('type', 'text');
    editProjectInput1.setAttribute('name', 'edit-project-name');
    editProjectInput1.setAttribute('id', 'edit-project-name');
    editProjectInput1.setAttribute('placeholder', 'Project name');
    editProjectInput1.setAttribute('required', '');
    editProjectInput1.setAttribute('autofocus', '');
    editProjectInputGroup1.appendChild(editProjectInputLabel1);
    editProjectInputGroup1.appendChild(editProjectInput1);
    editProjectForm.appendChild(editProjectInputGroup1);

    const editProjectInputGroup2 = document.createElement('div');
    editProjectInputGroup2.classList.add('input-group');
    const editProjectInputLabel2 = document.createElement('label');
    editProjectInputLabel2.innerHTML = 'Project description';
    editProjectInputLabel2.setAttribute('for', 'edit-project-description');
    const editProjectInput2 = document.createElement('input');
    editProjectInput2.setAttribute('type', 'text');
    editProjectInput2.setAttribute('name', 'edit-project-description');
    editProjectInput2.setAttribute('id', 'edit-project-description');
    editProjectInput2.setAttribute('placeholder', 'Project description');
    editProjectInputGroup2.appendChild(editProjectInputLabel2);
    editProjectInputGroup2.appendChild(editProjectInput2);
    editProjectForm.appendChild(editProjectInputGroup2);

    const editProjectBtnGroup = document.createElement('div');
    editProjectBtnGroup.classList.add('form-buttons');

    const addProjectBtn = document.createElement('button');
    addProjectBtn.classList.add('add-project-btn');
    addProjectBtn.innerHTML = 'Save';
    addProjectBtn.id='save-project-btn';
    editProjectBtnGroup.appendChild(addProjectBtn);

    const cancelProjectBtn = document.createElement('button');
    cancelProjectBtn.classList.add('cancel-btn');
    cancelProjectBtn.innerHTML = 'Cancel';
    cancelProjectBtn.id='cancel-edit-btn';

    editProjectBtnGroup.appendChild(cancelProjectBtn);
    editProjectForm.appendChild(editProjectBtnGroup);

    editProjectModal.appendChild(editProjectForm);
    return editProjectModal;
}