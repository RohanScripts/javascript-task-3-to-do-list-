const userInput = document.getElementById("userInput");
const addTaskButton = document.getElementById("addTaskButton");
const todos = document.getElementById("todos");

const renderTodos = () => {
    for(let i=0; i<=localStorage.length; i++){
        const key = localStorage.key(i)
        const gotValue = localStorage.getItem(key)
        if(gotValue!==null){
            const singleTodo = document.createElement("div")
        singleTodo.innerText = gotValue;
        todos.appendChild(singleTodo)
        singleTodo.classList.add("singleTodo")
        const deleteButton = document.createElement("button")
        deleteButton.innerText = "Delete"
        singleTodo.appendChild(deleteButton)
        deleteButton.addEventListener("click",function(){
            singleTodo.remove(key)
            localStorage.removeItem(key)
        })
        }
    }
}

renderTodos()

const addTodo = () => {
    let inputData = userInput.value;
    const singleTodo = document.createElement("div");
    singleTodo.innerText = inputData;
    todos.appendChild(singleTodo);
    userInput.value = "";
    singleTodo.classList.add("singleTodo");
    let todoId = singleTodo.id = Date.now()
    localStorage.setItem(todoId,inputData)
    
    const deleteButton = document.createElement("button")
    deleteButton.innerText = "Delete"
    singleTodo.appendChild(deleteButton)
    deleteButton.addEventListener("click",function(){
        singleTodo.remove(todoId)
        localStorage.removeItem(todoId)
    })
}

addTaskButton.addEventListener("click",addTodo);