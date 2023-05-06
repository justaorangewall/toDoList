import getDate from 'date-fns';
import ToDoList from "./toDoObject";
import Interface from "./interface";
import ProjectObject from "./projectObject";

import './style.css';

const firstlist = new ToDoList(1, "date", "firstToDo", "Description1" ,1, "checklist",[["item1", 0], ["item2",1]]);
const secondlist = new ToDoList(1, "date", "Default2", "Description2" ,1, "checklist",[["item1", 0], ["item2",1]]); 
const thirdlist = new ToDoList(1, "date", "Default3", "Description3" ,1, "checklist",[["item1", 0], ["item2",1]]); 
const fourthlist = new ToDoList(1, "date", "Default4", "Description4" ,1, "checklist",[["item1", 0], ["item2",1]]); 
// const fifthlist = new ToDoList((1, "date", "Default2", "Description3" ,1, "checklist",[["item1", 0], ["item2",1]])); 
// const sixthlist = new ToDoList((1, "date", "Default2", "Description3" ,1, "checklist",[["item1", 0], ["item2",1]])); 
// const seventhlist = new ToDoList((1, "date", "Default2", "Description3" ,1, "checklist",[["item1", 0], ["item2",1]])); 
// constructor( projectID, dueDate, title="Default", description="Description" ,priority=5, listorCheck="none",items=[[]])
firstlist.setToDoList(1, "date", "DefaultCHANGED", "DescriptionCHANGED" ,1, "checklist",[["item1", 1], ["item2",0]]);
firstlist.projectID = 5;

const defaultProject = new ProjectObject("Default0", "Description", new Date(),[] ); // constructor( name, description, createdDate, array)
const defaultProject1 = new ProjectObject("Default1", "Description", new Date(),[] );
const defaultProject2 = new ProjectObject("Default2", "Description", new Date(),[] );
const defaultProject3 = new ProjectObject("Default3", "Description", new Date(),[] );
const defaultProject4 = new ProjectObject("Default4", "Description", new Date(),[] );
defaultProject.array.push(firstlist);
defaultProject.array.push(secondlist);
defaultProject.array.push(thirdlist);
defaultProject.array.push(fourthlist);

const projArray = [ defaultProject, defaultProject1, defaultProject2, defaultProject3, defaultProject4 ]
console.log(defaultProject);

const dominterface = new Interface();

dominterface.setUpDOM();
console.log(defaultProject.array);
dominterface.displayProjectSide(projArray);
// dominterface.viewProjList(projArray[0]);
// dominterface.displayProjects([defaultProject]);