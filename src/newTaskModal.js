export default function newTaskModal() {
    const newTaskModal = document.createElement('div');
    newTaskModal.classList.add('new-task-modal');

    const newTaskModalForm = document.createElement('div');
    newTaskModalForm.classList.add('new-task-form');

    const newTaskModalTitle = document.createElement('div');
    newTaskModalTitle.classList.add('form-title');
    newTaskModalTitle.innerHTML = '<h2>Add new task to project</h2>';
    newTaskModalForm.appendChild(newTaskModalTitle);


    const newTaskInputGroup1 = document.createElement('div');
    newTaskInputGroup1.classList.add('input-group');
    const newTaskTitle = document.createElement('input');
    newTaskTitle.type = 'text';
    newTaskTitle.placeholder = 'to do: write new task';
    newTaskTitle.id = 'new-task-name';
    newTaskTitle.required = true;
    newTaskTitle.autofocus = true;
    newTaskInputGroup1.appendChild(newTaskTitle);
    newTaskModalForm.appendChild(newTaskInputGroup1);

    const newTaskInputGroup2 = document.createElement('div');
    newTaskInputGroup2.classList.add('input-group');

    const newTaskDueDate = document.createElement('input');
    newTaskDueDate.type = 'date';
    newTaskDueDate.id = 'new-task-due-date';
    newTaskInputGroup2.appendChild(newTaskDueDate);
    newTaskModalForm.appendChild(newTaskInputGroup2);

    const newTaskInputGroup3 = document.createElement('div');
    newTaskInputGroup3.classList.add('form-buttons');
    const addTaskButton = document.createElement('button');
    addTaskButton.innerHTML = 'Add task';
    addTaskButton.id = 'add-task-button';
    newTaskInputGroup3.appendChild(addTaskButton);
    const cancelButton = document.createElement('button');
    cancelButton.innerHTML = 'Cancel';
    cancelButton.classList.add('cancel-btn');
    cancelButton.id='cancel-task-button';
    newTaskInputGroup3.appendChild(cancelButton);

    newTaskModalForm.appendChild(newTaskInputGroup3);

    newTaskModal.appendChild(newTaskModalForm);
    return newTaskModal;
}