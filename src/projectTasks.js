export default function projectTasks(currentProject) {
    const projectTasks = document.createElement('div');
    projectTasks.classList.add('project-tasks');
    const projectTasksTitle = document.createElement('h2');
    projectTasksTitle.innerHTML = 'Project tasks';
    projectTasks.appendChild(projectTasksTitle);
    const projectTaskList = document.createElement('ul');
    projectTaskList.classList.add('task-list');

    //get tasks from current project
    if (currentProject.tasks) {
        const tasks = currentProject.tasks;
        tasks.forEach((task) => {
            const taskListItem = document.createElement('li');
            taskListItem.classList.add('task');
            const taskListItemHeader = document.createElement('div');
            taskListItemHeader.classList.add('task-head');
            const taskCheckbox = document.createElement('div');
            taskCheckbox.classList.add('task-check');
            const taskCheckboxInput = document.createElement('input');
            taskCheckboxInput.type = 'checkbox';
            taskCheckboxInput.classList.add('task-checkbox');
            taskCheckbox.appendChild(taskCheckboxInput);
            taskListItemHeader.appendChild(taskCheckbox);
            const taskListItemTitle = document.createElement('div');
            taskListItemTitle.classList.add('task-title');
            taskListItemTitle.innerHTML = task.title;
            taskListItemHeader.appendChild(taskListItemTitle);
            taskListItem.appendChild(taskListItemHeader);

            const taskIcons = document.createElement('div');
            taskIcons.classList.add('task-icons');
            const taskDue = document.createElement('div');
            taskDue.classList.add('task-due');
            taskDue.innerHTML = 'Due: ' + task.due;
            taskIcons.appendChild(taskDue);

            const deleteTask = document.createElement('div');
            deleteTask.classList.add('delete-task');
            deleteTask.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16"
        height="16" fill="currentColor" class="icon" viewBox="0 0 16 16">
        <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
      </svg>`;
            taskIcons.appendChild(deleteTask);
            taskListItem.appendChild(taskIcons);
            projectTaskList.appendChild(taskListItem);
        });
    }

    const newTaskBtn = document.createElement('button');
    newTaskBtn.classList.add('add-task-btn');
    newTaskBtn.innerHTML = 'Add Task';
    projectTaskList.appendChild(newTaskBtn);
    projectTasks.appendChild(projectTaskList);
    return projectTasks;
}