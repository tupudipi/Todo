export default function projectDetails() {
    const projectDetails = document.createElement('div');
    projectDetails.classList.add('project-details');
    const projectDetailsText = document.createElement('div');
    projectDetailsText.classList.add('proj-details-text');
    const projectName = document.createElement('h1');
    projectName.innerHTML = 'Project Name';
    projectDetailsText.appendChild(projectName);
    const projectDescription = document.createElement('p');
    projectDescription.classList.add('project-description');
    projectDescription.innerHTML = 'Project Description';
    projectDetailsText.appendChild(projectDescription);
    projectDetails.appendChild(projectDetailsText);
    const editProjectBtn = document.createElement('button');
    editProjectBtn.classList.add('edit-project-btn');
    editProjectBtn.innerHTML = 'Edit Project';
    projectDetails.appendChild(editProjectBtn);
    
    return projectDetails;
}