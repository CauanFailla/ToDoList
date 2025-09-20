import {initDeleteTask} from '../dashboard/taskDelete.js'

export function deleteTaskInHtml(task) {
    task.parentNode.remove()
}

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
    initDeleteTask()
}