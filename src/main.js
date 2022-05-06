import projectDetails from "./projectDetails";
import projectNotes from "./projectNotes";
import projectTasks from "./projectTasks";
import editProjectModal from "./editProjectModal";

export default function main () {
    const main = document.createElement('main');
    const project = document.createElement('div');
    project.classList.add('project');
    main.appendChild(project);

    project.appendChild(projectDetails());

    const projectContent = document.createElement('div');
    projectContent.classList.add('project-content');

    projectContent.appendChild(projectTasks());
    projectContent.appendChild(projectNotes());
    project.appendChild(projectContent);

    return main;
}