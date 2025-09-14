import { getTasks } from "../data/getDataTasks.js"
import { createTaskInHtml } from "./taskAdd.js"
import { initCheckbox } from "./taskStatus.js"
export async function updateTasks() {
    const tasks = await getTasks()
    createTaskInHtml(tasks)
    initCheckbox()
}

export async function updateTasksStatus(s, taskId) {
    const response = await fetch(`http://127.0.0.1:3000/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({status: s})
    })
    const result = await response.json()
    return result
}