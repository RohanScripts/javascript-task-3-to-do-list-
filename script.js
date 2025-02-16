const userInput = document.getElementById("userInput");
const addTaskButton = document.getElementById("addTaskButton");
const todos = document.getElementById("todos");

const renderTodos = () => {
  for (let i = 0; i <= localStorage.length; i++) {
    const key = localStorage.key(i);
    const gotValue = localStorage.getItem(key);
    if (gotValue !== null) {
      const singleTodo = document.createElement("div");
      singleTodo.innerText = gotValue;
      todos.appendChild(singleTodo);
      singleTodo.classList.add("singleTodo");
      const buttonWrapper = document.createElement("div");
      singleTodo.appendChild(buttonWrapper);
      buttonWrapper.classList.add("buttonWrapper");
      const editButton = document.createElement("button");
      editButton.innerText = "Edit";
      editButton.classList.add("editButton");
      buttonWrapper.appendChild(editButton);
      const deleteButton = document.createElement("button");
      deleteButton.innerText = "Delete";
      buttonWrapper.appendChild(deleteButton);
      deleteButton.classList.add("deleteButton");
      deleteButton.addEventListener("click", function () {
        singleTodo.remove(key);
        localStorage.removeItem(key);
      });
      editButton.addEventListener("click", function () {
        if (editButton.innerText === "Edit") {
          const editInput = document.createElement("input");
          editInput.classList.add("editInput");
          editInput.type = "text";
          editInput.value = gotValue;
          singleTodo.replaceChild(editInput, singleTodo.firstChild);
          editButton.innerText = "Save";

          editButton.addEventListener("click", function editSave() {
            const updatedValue = editInput.value.trim();
            if (updatedValue !== "") {
              const updatedTodoText = document.createElement("div");
              updatedTodoText.innerText = updatedValue;

              singleTodo.replaceChild(updatedTodoText, editInput);
              editButton.innerText = "Edit";
              localStorage.setItem(key, updatedValue);
              editButton.removeEventListener("click", editSave);
            } else {
              alert("Please enter your task...");
            }
          });
        }
      });
    }
  }
};

renderTodos();

const addTodo = () => {
  let inputData = userInput.value;
  if (inputData !== "") {
    const singleTodo = document.createElement("div");
    singleTodo.innerText = inputData;
    todos.appendChild(singleTodo);
    userInput.value = "";
    singleTodo.classList.add("singleTodo");
    let todoId = (singleTodo.id = Date.now());
    localStorage.setItem(todoId, inputData);
    const buttonWrapper = document.createElement("div");
    singleTodo.appendChild(buttonWrapper);
    buttonWrapper.classList.add("buttonWrapper");
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    buttonWrapper.appendChild(editButton);
    editButton.classList.add("editButton");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    buttonWrapper.appendChild(deleteButton);
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener("click", function () {
      singleTodo.remove(todoId);
      localStorage.removeItem(todoId);
    });
    editButton.addEventListener("click", function () {
      if (editButton.innerText === "Edit") {
        const editInput = document.createElement("input");
        editInput.classList.add("editInput");
        editInput.type = "text";
        editInput.value = inputData;
        singleTodo.replaceChild(editInput, singleTodo.firstChild);
        editButton.innerText = "Save";

        editButton.addEventListener("click", function editSave() {
          if (editInput.value !== "") {
            const updatedValue = editInput.value.trim();
            if (updatedValue) {
              const updatedTodoText = document.createElement("div");
              updatedTodoText.innerText = updatedValue;
              singleTodo.replaceChild(updatedTodoText, editInput);
              editButton.innerText = "Edit";
              localStorage.setItem(todoId, updatedValue);
              editButton.removeEventListener("click", editSave);
            }
          } else {
            alert("Please enter your task...");
          }
        });
      }
    });
  } else {
    alert("Please enter you task...");
  }
};

addTaskButton.addEventListener("click", addTodo);
