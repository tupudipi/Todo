export default function sidebar() {
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
  homeProjectList.appendChild(homeProjectListItem);
  sidebar.appendChild(homeProjectList);

  const listTitle = document.createElement('h2');
  listTitle.classList.add('sidebar-list-title');
  listTitle.innerHTML = 'Projects';
  sidebar.appendChild(listTitle);

  const projectList = document.createElement('ul');
  projectList.classList.add('project-list');

  //while there are projects, add them to the sidebar
  const projectListItem = document.createElement('li');
  const projectListItemLink = document.createElement('p');
  projectListItemLink.innerHTML = 'Project 1';
  projectListItemLink.classList.add('project-link');
  projectListItem.appendChild(projectListItemLink);
  const deleteProject = document.createElement('div');
  deleteProject.classList.add('delete-Project');
  deleteProject.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16"
  height="16" fill="currentColor" class="icon" viewBox="0 0 16 16">
  <path
      d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
  <path fill-rule="evenodd"
      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
</svg>`;
  projectListItem.appendChild(deleteProject);
  projectList.appendChild(projectListItem);

  const newProjectBtn = document.createElement('button');
  newProjectBtn.classList.add('new-project-btn');
  newProjectBtn.innerHTML = 'New Project';
  projectList.appendChild(newProjectBtn);
  sidebar.appendChild(projectList);

  return sidebar;
}