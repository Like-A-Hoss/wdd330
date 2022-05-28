function printTasks(){
    let toDoList = localStorage.getItem("toDoList");
    let output = " "
    for(task in toDoList ){
        let item = task[content];
        let id = task[id];
        output += "<button class = 'completeButton' onclick='completeTask()' value='"+id+ "> </button>";
        output += "<label class = '' id='item_"+ id+"'>" +item+"</label>";
        output += "<button class = 'deleteButton' onClick='removeTask()' value='"+id+"'> X</button>";
    }
}
