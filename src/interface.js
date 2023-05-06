import folderimage from './images/file-folder-48.png';

// this.name= name;
// this.description = description;
// this.createdDate = createdDate; 
// this.array = array;
function makeHtmlEle ( eleName, value, className ) {
    const element = document.createElement(eleName);
    element.textContent = `${className}: ${value}`;
    element.classList.add(className);
    return element;
}

function viewProjList(projectObject) {
    const projectContent = document.createElement(`div`);
    projectContent.classList.add(`projectcontent`);
    const projectView = document.querySelector('.project-view');
    projectView.textContent = `${projectObject.name}`;
     console.log(projectObject.name);
     console.log(projectObject.description);
     console.log(projectObject.createdDate);
    //     0 this.projectID
    //     1 this.#title
    //     2 this.#description
    //     3 this.#dueDate
    //     4 this.#priority,
    //     5 this.#listorCheck
    //     6 this.#items ]
     for (let i = 0; i < projectObject.array.length ; i+=1) {
        const tDObj = projectObject.array[i].getToDoList()
        const toDoCard = document.createElement('div')
        toDoCard.classList.add(`${tDObj[0]}`);
        toDoCard.classList.add(`toDoCard`);
        toDoCard.appendChild(makeHtmlEle(`div`,tDObj[1], `Name`));
        toDoCard.appendChild(makeHtmlEle(`div`,tDObj[4], `Priority`));
        toDoCard.appendChild(makeHtmlEle(`div`,tDObj[2], `Description`));
        toDoCard.appendChild(makeHtmlEle(`div`,tDObj[3], `DueDate`));
        toDoCard.addEventListener("click",() => {
            tojgsdiosdf
        });
        projectView.appendChild(toDoCard);
     }
     

     
}

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

    displayProjectSide(projectArray) {
        const sideBar=document.querySelector('.sideBar');
        for(let i = 0; i < projectArray.length; i+=1) {

           const  projectCard = document.createElement('button');
           projectCard.setAttribute('id',`${projectArray[i].name}`);
           projectCard.classList.add('sidebar-projectfolder');
           projectCard.addEventListener("click",() => {viewProjList(projectArray[i])});

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

