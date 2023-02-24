const $content = document.querySelector("#content");

const trashIcon = `<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59L13.59 5L15 6.41L11.41 10L15 13.59Z"/>
</svg>`;
let todos = JSON.parse(localStorage.getItem("todos")) || [];

todos.forEach((e, index) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");
  const title = document.createElement("p");
  
  const delButton = document.createElement("button");
  const checkBox = document.createElement("input");
  checkBox.type = `checkbox`;
  checkBox.classList.add (`checkbox`);
  delButton.id = `${e.id}`;
  delButton.classList.add(`delButton`);
  delButton.innerHTML = trashIcon;
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
  // checkBox.onchange = function() {
  //   if (){

  //   }
  // }
  title.innerHTML = `${index + 1} - ${e.title}`;
  todo.appendChild(checkBox);
  todo.appendChild(title);
  todo.appendChild(delButton);
  $content.appendChild(todo);
});

function render(todoObj) {
  const todo = document.createElement("div");
  todo.classList.add("todo");
  const title = document.createElement("p");
  const delButton = document.createElement("button");
  const checkBox = document.createElement("input");
  title.classList.add(`done`);
  checkBox.type = `checkbox`;
  checkBox.classList.add(`checkbox`);
  delButton.id = todos.length - 1;
  delButton.classList.add(`delButton`);
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
  todo.appendChild(checkBox);
  todo.appendChild(title);
  delButton.innerHTML = trashIcon;
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
