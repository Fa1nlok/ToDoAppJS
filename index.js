const $content = document.querySelector("#content");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
todos.forEach((e, index) => {
  const todo = document.createElement("div");
  todo.className = 'winForm'
  const title = document.createElement("p");
  const delButton = document.createElement("button");
  delButton.id =`${e.id}`
  delButton.innerHTML = 'Delete Task'
  title.innerHTML = `${index + 1} - ${e.title}`;
  todo.appendChild(title);
  todo.appendChild(delButton)
  $content.appendChild(todo);
});

function listener() {
  delButton.onclick = delTodo(delButton.id)
  console.log(delButton.id)
}

function render(todoObj) {
  const todo = document.createElement("div");
  const title = document.createElement("p");
  const delButton = document.createElement("button");
  title.innerHTML = todoObj.title;
  todo.appendChild(title)
  delButton.innerHTML = 'Delete Task'
  todo.appendChild(delButton)
  $content.appendChild(todo);
  
}

function readInput() {
  const inputTodo = document.getElementById("input").value;
  return inputTodo;
}

function addTodo() {
  const taskTitle = readInput();
  let index = todos.length
  if (taskTitle.length > 0) {
    const todo = { 
      id: index,  
      title: taskTitle };
      console.log(todo)
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
    render(todo);
  }
}
 function delTodo() {
 
  }
window.addTodo = addTodo;
window.delTodo = delTodo;
window.listener = listener;

  