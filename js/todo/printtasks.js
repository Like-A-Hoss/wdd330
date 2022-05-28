    let toDoList = localStorage.getItem("toDoList");
    let output = " "
    for(task in toDoList ){
        let item = task[content];
        let id = task[id];
        output += "<button class = 'completeButton'> </button>"
        output += "<label class = '' id='item_"+ id+"'>" +item+"</label>";
        output += "<button class = 'deleteButton' onClick(removeTask())> X</button>"
    }

