//import the getProjects function from the index.js file 
import { getProjects } from './index.js';
import projectDetails from './projectDetails.js';
import projectNotes from './projectNotes.js';
import projectTasks from './projectTasks.js';

export default function sidebar() {
  let currentProject = 'Home';
  const sidebar = document.createElement('div');
  sidebar.classList.add('sidebar');
  const sidebarHeader = document.createElement('div');
  sidebarHeader.classList.add('sidebar-header');
  const sidebarTitle = document.createElement('h1');
  sidebarTitle.innerHTML = 'To Do List';
  sidebarHeader.appendChild(sidebarTitle);
  sidebar.appendChild(sidebarHeader);

  const homeProjectList = document.createElement('ul');
  homeProjectList.classList.add('project-list');
  const homeProjectListItem = document.createElement('li');
  const homeProjectListItemLink = document.createElement('p');
  homeProjectListItemLink.innerHTML = 'Home';
  homeProjectListItemLink.classList.add('project-link');
  homeProjectListItem.appendChild(homeProjectListItemLink);
  homeProjectListItemLink.addEventListener('click', () => {
    const projectName = 'Home';
    const project = projects.find((project) => project.name === projectName);
    currentProject = project;
    const projectDiv = document.querySelector('.project');
    projectDiv.innerHTML = '';
    projectDiv.appendChild(projectDetails(currentProject));
    const projectContent = document.createElement('div');
    projectContent.classList.add('project-content');
    projectContent.appendChild(projectTasks(currentProject));
    projectContent.appendChild(projectNotes(currentProject));
    projectDiv.appendChild(projectContent);
  });

  homeProjectList.appendChild(homeProjectListItem);
  sidebar.appendChild(homeProjectList);

  const listTitle = document.createElement('h2');
  listTitle.classList.add('sidebar-list-title');
  listTitle.innerHTML = 'Projects';
  sidebar.appendChild(listTitle);

  const projectList = document.createElement('ul');
  projectList.classList.add('project-list');

  const projects = getProjects();
  projects.forEach((project) => {
    if (project.name !== 'Home') {
      const projectListItem = document.createElement('li');
      const projectListItemLink = document.createElement('p');
      projectListItemLink.innerHTML = `${project.name}`;
      projectListItemLink.classList.add('project-link');
      projectListItem.appendChild(projectListItemLink);
      const deleteProject = document.createElement('div');
      deleteProject.classList.add('delete-Project');
      deleteProject.classList.add('icon');
      deleteProject.innerHTML = 'X';

      deleteProject.addEventListener('click', (e) => {
        const projectListItem = e.target.parentNode;
        projectListItem.classList.add('deleted');
        setTimeout(() => {
          projectListItem.remove();
        }, 1000);
        localStorage.removeItem(project.name);
      });

      projectListItem.appendChild(deleteProject);

      projectListItem.addEventListener('click', (e) => {
        const projectName = e.target.innerHTML;
        const project = projects.find((project) => project.name === projectName);
        currentProject = project;
        const projectDiv = document.querySelector('.project');
        projectDiv.innerHTML = '';
        projectDiv.appendChild(projectDetails(currentProject));
        const projectContent = document.createElement('div');
        projectContent.classList.add('project-content');
        projectContent.appendChild(projectTasks(currentProject));
        projectContent.appendChild(projectNotes(currentProject));
        projectDiv.appendChild(projectContent);
      });

      projectList.appendChild(projectListItem);
    }
  });


  const newProjectBtn = document.createElement('button');
  newProjectBtn.classList.add('new-project-btn');
  newProjectBtn.innerHTML = 'New Project';
  projectList.appendChild(newProjectBtn);
  sidebar.appendChild(projectList);

  return sidebar;
}