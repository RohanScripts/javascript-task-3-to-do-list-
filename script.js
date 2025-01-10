const userInput = document.getElementById("userInput")
const addTaskButton = document.getElementById("addTaskButton")
const todos = document.getElementById("todos")

const addTodo = () => {
    let inputData = userInput.value;
    const singleTodo = document.createElement("div")
    singleTodo.innerText = inputData
    todos.appendChild(singleTodo)
    userInput.value = ""
    singleTodo.classList.add("singleTodo")
}

addTaskButton.addEventListener("click",addTodo)
