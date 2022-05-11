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
    }

    return projectDetails;
}