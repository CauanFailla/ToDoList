import { initDelete } from "./taskDelete.js"

export function createTaskInHtml(tasks) {
    const containerTasks = document.querySelector('.container__tasks')
    tasks.forEach((task)=>{
        const divTask = document.createElement('div')
        divTask.classList.add('tasks')
        divTask.id = task.id
        const divtitle = document.createElement('div')
        const inputTask = document.createElement('input')
        inputTask.type = 'checkbox'
        inputTask.id = 'icheck'
        inputTask.classList.add('check')
        const labelTask = document.createElement('label')
        labelTask.textContent = task.title
        labelTask.for = 'icheck'
        const iconDel = document.createElement('i')
        iconDel.id = task.id
        iconDel.classList.add('fa-solid')
        iconDel.classList.add('fa-xmark')
        iconDel.classList.add('btn__delete')
        divtitle.appendChild(inputTask)
        divtitle.appendChild(labelTask)
        divTask.appendChild(divtitle)
        divTask.appendChild(iconDel)
        containerTasks.appendChild(divTask)
    })
    initDelete()
}

export async function createTaskInServer(form, e) {
    document.querySelector
    e.preventDefault()
    const date = new Date()
    const formattedDate = date.toISOString().split("T")[0];  
    const formData = new FormData(form)
    const tasks = [Object.fromEntries(formData)]
    tasks[0].date = formattedDate
    const response = await fetch("http://127.0.0.1:3000/tasks", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(tasks[0])
    }) 
    const taskId = await response.json()
    tasks[0].id = taskId
    document.querySelector('#ititle').value = ''
    return tasks
}
