import sidebar from './sidebar.js';
import main from './main.js';
import './styles/global.css';
import newProjectModal from './newProjectModal.js';
import editProjectModal from './editProjectModal.js';

function content() {
    const content = document.createElement('div');
    content.id='content';
    content.appendChild(sidebar());
    content.appendChild(main());
    
    return content;
}

document.body.appendChild(content());