let form = document.querySelector("form");
let inputTask = document.getElementById("event");
let taskListDOM = document.getElementById("list");

let taskList = []; // making the task list

const populate = () => {
  taskListDOM.innerHTML = "";

  taskList.forEach((task, index) => {
    taskListDOM.innerHTML += `
        <div class="task" id=${index}>
            <h4>${task.task}</h4>
            <div class="btn-cls">
                <button class="edit" data-edit="${index}">&#9998;</button>
                <button class="del" data-del="${index}">&#128465;</button>
            </div>
        </div> 
        
        `;
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  taskList.push({
    task: inputTask.value,
  });

  inputTask.value = "";
  console.log(taskList);

  populate();
});

taskListDOM.addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    const index = e.target.dataset.del;
    // console.log(index);
    taskList.splice(index, 1);
  }
  if (e.target.classList.contains("edit")) {
    let intput = prompt("Enter the new Task");
    const index = e.target.dataset.edit;
    taskList[index]["task"] = intput;
    // console.log(index);
  }
  populate();
});
