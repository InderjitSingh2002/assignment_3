/*
\   Query Selectors
\   Selects elements from HTML and makes them accessible in JS.
*/
var textInput = document.getElementById("list-input");
var addBtn = document.getElementById("add-btn");
var todoList = document.getElementById("todo-list");


/*
On click event listener is attached to addBtn.
*/
addBtn.onclick = createTaskItem;


//createTaskItem function

function createTaskItem() {

  //Creates Elements
  var task = document.createElement("li");
  var taskNode = document.createElement("input");
  var remove = document.createElement("button");

  //Adding attributes to the created elements
  remove.innerHTML = "Delete";
  //Removes a list item when remove button is pressed
  remove.addEventListener("click", function() {
    task.remove();
  });
  taskNode.type = "checkbox";
  taskNode.value = textInput.value;
  var taskLabel = document.createElement("label");
  taskLabel.innerHTML = taskNode.value;

  //Attaching a event listener to checkbox
  taskNode.addEventListener("change", function() {
    //If checkbox is checked, the following code will be executed
    if (taskNode.checked) {
      taskLabel.className = "checked";
    }
    //Else, the following code is executed
    else {
      taskLabel.className = "unchecked";
    }
  });

  //Appends created elemts to DOM
  task.append(taskNode);
  task.append(taskLabel);
  task.append(remove);
  todoList.append(task);
}
