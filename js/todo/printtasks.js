    let toDoList = localStorage.getItem("toDoList");
    let output = " "
    for(id in toDoList ){
        let item = id[content]
        output += "<button class = 'completeButton'> </button>"
        output += item;
        output += "<button class = 'deleteButton' onClick(removeTask())> X</button>"
    }

