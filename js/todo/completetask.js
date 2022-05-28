function completeTask(id){
    for (item in localStorage.getItem(toDoList)){
        if (item[id] == id){
            if (item[completed] == false){
                item[completed] = true;
                document.getElementById('item_'+ id).setAttribute("class", "done");
            } else{
                item[completed] = false;
                document.getElementById('item_'+ id).setAttribute("class", "null");
            }
        }
        }
}