function removeTask(id){
    for (item in localStorage.getItem(toDoList)){
        if (item[id] == id){
                localStorage.removeItem(item)
        }
    }
}
