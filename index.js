const $content = document.querySelector("#content");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

todos.forEach((e, index) => {
  const todo = document.createElement("div");
  todo.classList.add("winForm");
  const title = document.createElement("p");
  const delButton = document.createElement("button");
  delButton.id = `${e.id}`;
  delButton.innerHTML = "Delete Task";
  delButton.onclick = function () {
    localStorage.removeItem("todos");
    todos = todos.filter((el) => {
      if (e != el) {
        return el;
      }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
    $content.removeChild(todo);
  };
  title.innerHTML = `${index + 1} - ${e.title}`;
  todo.appendChild(title);
  todo.appendChild(delButton);
  $content.appendChild(todo);
});

function render(todoObj) {
  const todo = document.createElement("div");
  const title = document.createElement("p");
  const delButton = document.createElement("button");
  delButton.id = todos.length - 1;
  delButton.onclick = function (event) {
    const todoId = event.target.id;
    localStorage.removeItem("todos");
    todos = todos.filter((el) => {
      if (todos[todoId] != el) {
        return el;
      }
    });
    localStorage.setItem("todos", JSON.stringify(todos));
    $content.removeChild(todo);
  };
  title.innerHTML = `${todos.length} - ${todoObj.title}`;
  todo.appendChild(title);
  delButton.innerHTML = "Delete Task";
  todo.appendChild(delButton);
  $content.appendChild(todo);
}

function readInput() {
  const inputTodo = document.getElementById("input").value;
  return inputTodo;
}

function addTodo() {
  const taskTitle = readInput();
  let index = todos.length;
  if (taskTitle.length > 0) {
    const todo = {
      id: index,
      title: taskTitle,
    };
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    render(todo);
  }
}

window.addTodo = addTodo;

// function (event) {
//   const todoId = event.target.id;
//   localStorage.removeItem("todos");

//   todos.filter(e, )
