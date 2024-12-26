let todoList = ['make indomie', 'wash car'];

// show each index of the array to the page
function renderTodoList () {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`; // Generate HTML
    todoListHTML = todoListHTML + html;
  }

  // console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodoList () {
  const inputElement = document.querySelector('.js-todo-input'); //define or target the input box

    // save the value of the input in an variable
  const todoName = inputElement.value;
  //console.log(todoName);

    // add the value to the array
  todoList.push(todoName);
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}

// handle enter. put in input box
function handleEnterSubmit (event) {
  if (event.key === 'Enter'){
    addTodoList();
  }
}