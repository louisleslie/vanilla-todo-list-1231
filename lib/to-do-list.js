const todos = [
  { title: "Code a to-do list", done: true },
  { title: "Eat breakfast", done: true },
  { title: "Do some exercise", done: false },
  { title: "Water the plants", done: true }
];

// TODO: Use the template in the `index.html` to dynamically generate a list based on `todos` array
const container = document.querySelector("#todosContainer");

const addTaskToContainer = (task) => {
  const template = document.querySelector("#todoItemTemplate");
  const clone = template.content.cloneNode(true);
  clone.querySelector(".title").innerHTML = task.title;
  clone.querySelector("input").checked = task.done;
  console.log(clone);
  clone.querySelector(".trash").addEventListener("click", (e) => {
    console.log(e.currentTarget.parentElement);
    e.currentTarget.parentElement.remove();
  })
  container.appendChild(clone);
}

const removeTask = () => {

}

todos.forEach((task) => {
  addTaskToContainer(task);
})
// TODO: Add a form to add new todos to the list.
const add = document.querySelector("#add");
const taskInput = document.querySelector("#taskInput");
add.addEventListener("click", (e) => {
  console.log(e);
  const title = taskInput.value;
  console.log(title);
  const newTask = { title: title, done: false };
  addTaskToContainer(newTask);
  taskInput.value = "";
  taskInput.focus();
});

// TODO: Add a delete button to each task


