import folderimage from './images/file-folder-48.png';

export default class Interface {

    constructor() {
        this.browserDOM = document.querySelector('.toDoList-interface');

        this.content = document.createElement('div');
        this.content.classList.add('project-view');
    }

    setUpDOM() {
        const sideBar = document.createElement('div');
        sideBar.classList.add('sideBar');
        const header = document.createElement('div');
        header.classList.add('header');
        header.textContent="TO DO LIST!";

    
        this.browserDOM.appendChild(header);
        this.browserDOM.appendChild(sideBar);
        this.browserDOM.appendChild(this.content);
    }

    displayProjects(projectArray) {
        const sideBar=document.querySelector('.sideBar');
        for(let i = 0; i < projectArray.length; i+=1) {
           const  projectCard = document.createElement('div');
           projectCard.setAttribute('id',`project-${projectArray[i].name}`);
           projectCard.classList.add('sidebar-projectfolder');

           const projecticon = document.createElement('img');
           projecticon.setAttribute('src',`${folderimage}`);
           projectCard.appendChild(projecticon);
           const projTitle = document.createElement('div');
           projTitle.textContent=projectArray[i].name;
           projectCard.appendChild(projTitle);
           sideBar.appendChild(projectCard);

        }
    }
}
