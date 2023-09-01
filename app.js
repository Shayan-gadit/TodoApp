var inp = document.getElementById('inp');
var list = document.getElementById('list');
var todoList = [];


// function add in todo 




function addTodo() {
    if (inp.value == "") {
        alert("Please enter a value");
        return;
    }
    todoList.push(inp.value);
    inp.value = "";
    render();
}
function render() {
    list.innerHTML = "";
    for (var i = 0; i < todoList.length; i++) {
        list.innerHTML += `<li class="lia">${todoList[i]}<button onclick = "editTodo(${i})" id="btn" ><i class=" fa-solid fa-pen-to-square " ></i></button> <button onclick = "deleteTodo(${i})" id="btn"><i class="fa-solid fa-delete-left" ></i></button>  </li>`;
    }
}

function editTodo(indexNum) {
    todoList[indexNum] = prompt("enter your Value")
    render();
}
function deleteTodo(indexNum) {
    todoList.splice(indexNum, 1);
    render();
}
function DeleteAll() {
    todoList = [];
    list.innerHTML = "";
}