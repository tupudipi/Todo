import { closeModal, openModal } from './index.js';

export default function projectNotes(currentProject) {
    const projectNotes = document.createElement('div');
    projectNotes.classList.add('project-notes');
    const projectNotesTitle = document.createElement('h2');
    projectNotesTitle.innerHTML = 'Project notes';
    projectNotes.appendChild(projectNotesTitle);
    const projectNotesContent = document.createElement('div');
    projectNotesContent.classList.add('notes-content');
    const projectNoteList = document.createElement('ul');
    projectNoteList.classList.add('notes-list');

    if (currentProject.notes) {
        const notes = currentProject.notes;
        notes.forEach((note) => {
            const noteListItem = document.createElement('li');
            noteListItem.classList.add('note');
            const noteText = document.createElement('div');
            noteText.classList.add('note-text');
            noteText.innerHTML = note.text;
            noteListItem.appendChild(noteText);

            const noteDetails = document.createElement('div');
            noteDetails.classList.add('note-details');
            const deleteNote = document.createElement('div');
            deleteNote.classList.add('delete-note');
            deleteNote.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16"
        height="16" fill="currentColor" class="icon" viewBox="0 0 16 16">
        <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
    </svg>`;
            const noteDate = document.createElement('div');
            noteDate.classList.add('note-date');
            noteDate.innerHTML = note.date;
            noteDetails.appendChild(noteDate);
            noteDetails.appendChild(deleteNote);
            noteListItem.appendChild(noteDetails);
            projectNoteList.appendChild(noteListItem);
        });
    }

    const newNoteBtn = document.createElement('button');
    newNoteBtn.classList.add('add-note-btn');
    newNoteBtn.innerHTML = 'Add Note';
    projectNoteList.appendChild(newNoteBtn);
    projectNotesContent.appendChild(projectNoteList);
    projectNotes.appendChild(projectNotesContent);

    //const newNoteBtn = document.querySelector('.add-note-btn');
    const newNoteMenu = document.querySelector('.new-note-modal');
    const addNoteBtn = document.querySelector('#add-note-button');
    const cancelNoteBtn = document.querySelector('#cancel-note-button');
    const newNoteText = document.querySelector('#new-note');
    newNoteBtn.addEventListener('click', () => {
        openModal(newNoteMenu);
        validateNewNote();
    });
    cancelNoteBtn.addEventListener('click', () => {
        newNoteText.value = '';
        closeModal(newNoteMenu);
    });
    addNoteBtn.addEventListener('click', () => {
        console.log(newNoteText.value);
        newNoteText.value = '';
        closeModal(newNoteMenu);
    });
    newNoteText.addEventListener('keyup', () => {
        validateNewNote();
    });
    function validateNewNote() {
        if (newNoteText.value) {
            addNoteBtn.disabled = false;
        } else {
            addNoteBtn.disabled = true;
        }
    }

    return projectNotes;
}