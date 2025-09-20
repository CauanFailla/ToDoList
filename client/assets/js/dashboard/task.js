import { updateTasks } from "./taskUpdate.js"
import { createTaskInServer } from "../data/task.js"
import { createTaskInHtml } from "../ui/tasks.js"
import { initCheckbox } from "./taskStatus.js"
import { formClose } from "../ui/formTask.js"
import {initDeleteTask} from "./taskDelete.js"

export function initTask() {
    updateTasks()
    const form = document.getElementById("addTaskForm")
    const btnAddForm = document.querySelector('.btn__add__task')
    form.addEventListener('submit', async (e) =>{  
        const task = await createTaskInServer(form, e)
        createTaskInHtml(task)
        initCheckbox()
        initDeleteTask()
        formClose(form, btnAddForm)
    })
}