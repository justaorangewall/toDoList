import ToDoList from "./toDoObject";

console.log("Hello World!");
const firstlist = new ToDoList(1, "date", "Default2", "Description3" ,1, "checklist",[["item1", 0], ["item2",1]]);
console.log(firstlist.getToDoList());
firstlist.setToDoList(1, "date", "DefaultCHANGED", "DescriptionCHANGED" ,1, "checklist",[["item1", 1], ["item2",0]]);
console.log(firstlist.getToDoList());