document.getElementById("todo-form").addEventListener("submit", e => {
    e.preventDefault();
    let todoInput = document.getElementById("form-input");
    let todoList = document.getElementById("todo-list");

    if (!todoInput.value.trim()) {
        alert("You must add a chore!")
    } else {
        let newTodo = document.createElement("li");
        newTodo.innerHTML = todoInput.value + '<button type="button" class="btn btn-danger btn-small float-end delete">Delete</button>';

        newTodo.classList.add("list-group-item");
        todoList.appendChild(newTodo);
        todoInput.value = "";
    }
})

document.getElementById("todo-list").addEventListener("click", e => {
    if (e.target.classList.contains("delete"));
})


