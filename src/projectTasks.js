export default function projectTasks() {
    const projectTasks = document.createElement('div');
    projectTasks.classList.add('project-tasks');
    const projectTasksTitle = document.createElement('h2');
    projectTasksTitle.innerHTML = 'Project tasks';
    projectTasks.appendChild(projectTasksTitle);
    const projectTaskList = document.createElement('ul');
    projectTaskList.classList.add('task-list');

//TO BE MADE IN A LOOP
//while there are tasks, add them to the project tasks
    const taskListItem = document.createElement('li');
    taskListItem.classList.add('task');
    const taskListItemHeader = document.createElement('div');
    taskListItemHeader.classList.add('task-head');
    const taskCheckbox = document.createElement('div');
    taskCheckbox.classList.add('task-check');
    const taskCheckboxInput = document.createElement('input');
    taskCheckboxInput.type = 'checkbox';
    taskCheckboxInput.setAttribute('id', 'taskCheck1');
    taskCheckboxInput.setAttribute('name', 'taskCheck1');
    taskCheckboxInput.classList.add('task-checkbox');
    taskCheckbox.appendChild(taskCheckboxInput);
    taskListItemHeader.appendChild(taskCheckbox);
    const taskListItemTitle = document.createElement('div');
    taskListItemTitle.classList.add('task-title');
    taskListItemTitle.innerHTML = 'Task title';
    taskListItemHeader.appendChild(taskListItemTitle);
    taskListItem.appendChild(taskListItemHeader);

    const taskIcons = document.createElement('div');
    taskIcons.classList.add('task-icons');
    const taskDue  = document.createElement('div');
    taskDue.classList.add('task-due');  
    taskDue.innerHTML = '3 days left';
    taskIcons.appendChild(taskDue);

    const editTask = document.createElement('div');
    editTask.classList.add('edit-task');
    editTask.innerHTML = `                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
    fill="currentColor" class="icon" viewBox="0 0 16 16">
    <path
        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
    <path fill-rule="evenodd"
        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
</svg>`;
    taskIcons.appendChild(editTask);

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

    ////////////////////////////////////

    const newTaskBtn = document.createElement('button');
    newTaskBtn.classList.add('add-task-btn');
    newTaskBtn.innerHTML = 'Add Task';
    projectTaskList.appendChild(newTaskBtn);
    projectTasks.appendChild(projectTaskList);
    return projectTasks;
}