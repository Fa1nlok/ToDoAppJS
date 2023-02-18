const $content = document.querySelector("#content");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
todos.forEach((e, index) => {
  const todo = document.createElement("div");
  const title = document.createElement("p");
  title.innerHTML = `${index + 1} - ${e.title}`;
  todo.appendChild(title);
  $content.appendChild(todo);
});

function render(todoObj) {
  const todo = document.createElement("div");
  const title = document.createElement("p");
  title.innerHTML = todoObj.title;
  todo.appendChild(title);
  $content.appendChild(todo);
}

function readInput() {
  const inputTodo = document.getElementById("input").value;
  return inputTodo;
}

function addTodo() {
  const taskTitle = readInput();
  if (taskTitle.length > 0) {
    const todo = { title: taskTitle };
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    render(todo);
  }
}
window.addTodo = addTodo;
