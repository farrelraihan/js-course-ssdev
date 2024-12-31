let todoList = [{
  name: 'make indomie', 
  dueDate: '2022-12-22'
}, {
  name: 'wash car',
  dueDate: '2022-12-22'
}];

renderTodoList();

// show each index of the array to the page
function renderTodoList () {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
      // const name = todoObject.name;
      // const dueDate = todoObject.dueDate;
    // shortcut for above
    const { name, dueDate} = todoObject;

    const html = `
    <div>${name}</div
    <div> ${dueDate} </div> 
    <button class= "delete-btn" onclick="
    todoList.splice(${i}, 1); 
    renderTodoList();
    console.log(todoList);
    "
    > Delete </button>
   `; // Generate HTML
    todoListHTML += html;
  }

  // console.log(todoListHTML);
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodoList () {
  const inputElement = document.querySelector('.js-todo-input'); //define or target the input box
  const dateInputElement = document.querySelector('.js-due-date-input');

    // save the value of the input in an variable
  const todoName = inputElement.value;
  const dueDate = dateInputElement.value;
  //console.log(todoName);

    // add the value to the array
  todoList.push({
    name: todoName,
    dueDate: dueDate
  });
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