export default class ToDoList{
    constructor( projectID, dueDate, title="Default", description="Description" ,priority=5, listorCheck="none",items=[[]]) {
        this.projID = projectID;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.listorCheck = listorCheck;
        this.items = items;
    }

    getToDoList() {
        return [ this.projectID, this.title, this.description, this.dueDate, this.priority, this.listorCheck, this.items ]
    }

    setToDoList( dueDate, title="Default", description="Description" ,priority=5, listorCheck="none",items=[] ) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.listorCheck = listorCheck;
        this.items = items;
    }

    get projectID() { return this.projID;}
    
    set projectID(num) { this.projID=num;}
}