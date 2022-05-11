import projectDetails from "./projectDetails";
import projectNotes from "./projectNotes";
import projectTasks from "./projectTasks";

export default function main (currentProject) {
    const main = document.createElement('main');
    
    const project = document.createElement('div');
    project.classList.add('project');
    main.appendChild(project);

    project.appendChild(projectDetails(currentProject));

    const projectContent = document.createElement('div');
    projectContent.classList.add('project-content');

    projectContent.appendChild(projectTasks(currentProject));
    projectContent.appendChild(projectNotes(currentProject));

    project.appendChild(projectContent);

    return main;
}