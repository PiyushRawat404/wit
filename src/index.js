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
text:text,
completed:false
})

taskInput.value=""

saveTasks()
renderTasks()
}

function deleteTask(index){
tasks.splice(index,1)
saveTasks()
renderTasks()
}

function toggleTask(index){

tasks[index].completed=!tasks[index].completed

tasks.sort((a,b)=>a.completed-b.completed)

saveTasks()
renderTasks()
}

function editTask(index){

const newText = prompt("Edit task", tasks[index].text)

if(newText){
tasks[index].text=newText
saveTasks()
renderTasks()
}

}

function filterTasks(type){
currentFilter=type
renderTasks()
}

function renderTasks(){

taskList.innerHTML=""

let filteredTasks=tasks

if(currentFilter==="pending"){
filteredTasks=tasks.filter(t=>!t.completed)
}

if(currentFilter==="completed"){
filteredTasks=tasks.filter(t=>t.completed)
}

filteredTasks.forEach((task,index)=>{

const li=document.createElement("li")

if(task.completed){
li.classList.add("completed")
}

const span=document.createElement("span")
span.textContent=task.text

const completeBtn=document.createElement("button")
completeBtn.textContent="✓"
completeBtn.onclick=()=>toggleTask(index)

const editBtn=document.createElement("button")
editBtn.textContent="Edit"
editBtn.onclick=()=>editTask(index)

const deleteBtn=document.createElement("button")
deleteBtn.textContent="X"
deleteBtn.onclick=()=>deleteTask(index)

li.appendChild(span)
li.appendChild(completeBtn)
li.appendChild(editBtn)
li.appendChild(deleteBtn)

taskList.appendChild(li)

})
}

renderTasks()