
function addTask(){
    //let todolist = localStorage.getItem("toDoList");
    let item = document.getElementById("addItemInput").value;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = String(today.getFullYear());
    var hour = String(today.getHours());
    var min = String(today.getMinutes());
    var sec = String(today.getSeconds());

    let timestamp = mm + '/' + dd + '/' + yyyy + " "+ hour+":"+min+":"+sec;
    //document.getElementById("test_output").innerHTML = timestamp;
    var todo = {id : timestamp, content: item, completed:false};
    if (localStorage.toDoList){
    localStorage.toDoList.append(todo);
    } else{
        localStorage.toDoList = new Array;
        localStorage.toDoList.append(todo);
    }
document.getElementById("test_output").innerHTML = localStorage.getItem(toDoList);
}