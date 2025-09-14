import { updateTasks } from "./taskUpdate.js"
import { createTaskInServer, createTaskInHtml } from "./taskAdd.js"
import { initCheckbox } from "./taskStatus.js"
import { initDelete } from "./taskDelete.js"

export function initTask() {
    updateTasks()
    const form = document.getElementById("addTaskForm")
    form.addEventListener('submit', async (e) =>{  
        const task = await createTaskInServer(form, e)
        createTaskInHtml(task)
        initCheckbox()
        initDelete()
    })
}