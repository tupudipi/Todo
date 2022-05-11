export default function newNoteModal() {
    const newNoteModal = document.createElement('div');
    newNoteModal.classList.add('new-note-modal');

    const newNoteForm = document.createElement('div');
    newNoteForm.classList.add('new-note-form');

    const newNoteTitle = document.createElement('div');
    newNoteTitle.classList.add('form-title');
    newNoteTitle.innerHTML = '<h2>Add new note to project</h2>';
    newNoteForm.appendChild(newNoteTitle);

    const newNoteInputGroup1 = document.createElement('div');
    newNoteInputGroup1.classList.add('input-group');

    const newNoteText = document.createElement('textarea');
    newNoteText.placeholder = 'to do: write new note';
    newNoteText.id = 'new-note';
    newNoteText.required = true;
    newNoteText.autofocus = true;
    newNoteInputGroup1.appendChild(newNoteText);
    newNoteForm.appendChild(newNoteInputGroup1);

    const formButtons = document.createElement('div');
    formButtons.classList.add('form-buttons');
    const addNoteButton = document.createElement('button');
    addNoteButton.innerHTML = 'Add note';
    addNoteButton.id = 'add-note-button';
    formButtons.appendChild(addNoteButton);
    const cancelButton = document.createElement('button');
    cancelButton.innerHTML = 'Cancel';
    cancelButton.classList.add('cancel-btn');
    cancelButton.id='cancel-note-button';
    formButtons.appendChild(cancelButton);

    newNoteForm.appendChild(formButtons);

    newNoteModal.appendChild(newNoteForm);
    return newNoteModal;
}