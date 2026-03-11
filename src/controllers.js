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