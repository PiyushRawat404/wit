const taskInput = document.getElementById("taskInput")
const addBtn = document.getElementById("addBtn")
const taskList = document.getElementById("taskList")

let tasks = JSON.parse(localStorage.getItem("tasks")) || []
let currentFilter = "all"

addBtn.addEventListener("click", addTask)

taskInput.addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    addTask()
  }
})

function saveTasks(){
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

function addTask(){

  const text = taskInput.value.trim()

  if(text === "") return

  tasks.push({
    id: Date.now(),
    text:text,
    completed:false
  })

  taskInput.value=""

  saveTasks()
  renderTasks()
}

function deleteTask(id){
  tasks = tasks.filter(task => task.id !== id)
  saveTasks()
  renderTasks()
}

function toggleTask(id){

  const task = tasks.find(task => task.id === id)

  if(task){
    task.completed = !task.completed
  }

  tasks.sort((a,b)=>a.completed-b.completed)

  saveTasks()
  renderTasks()
}

function editTask(id){

  const task = tasks.find(task => task.id === id)

  const newText = prompt("Edit task", task.text)

  if(newText){
    task.text = newText
    saveTasks()
    renderTasks()
  }
}

function filterTasks(type){
  currentFilter = type
  renderTasks()
}

function renderTasks(){

  taskList.innerHTML=""

  let filteredTasks = tasks

  if(currentFilter==="pending"){
    filteredTasks = tasks.filter(t=>!t.completed)
  }

  if(currentFilter==="completed"){
    filteredTasks = tasks.filter(t=>t.completed)
  }

  filteredTasks.forEach((task)=>{

    const li=document.createElement("li")

    if(task.completed){
      li.classList.add("completed")
    }

    const span=document.createElement("span")
    span.textContent=task.text
   
    const completeBtn = document.createElement("button")
    completeBtn.textContent = task.completed ? "Uncomplete" : "Complete"
    completeBtn.onclick = () => toggleTask(task.id)

    const editBtn=document.createElement("button")
    editBtn.textContent="Edit"
    editBtn.onclick=()=>editTask(task.id)

    const deleteBtn=document.createElement("button")
    deleteBtn.textContent="Delete"
    deleteBtn.onclick=()=>deleteTask(task.id)

    li.appendChild(span)
    li.appendChild(completeBtn)
    li.appendChild(editBtn)
    li.appendChild(deleteBtn)

    taskList.appendChild(li)

  })
}

renderTasks()