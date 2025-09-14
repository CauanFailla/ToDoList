import { createTask, findTaskByUserId, deleteTask, updateStatusTask} from "../models/task.js"

export async function addTask(req, res) {
    const {title, date} = req.body
    if (title) {
        const taskId = await createTask(req.session.userId, title, date)
        res.json(taskId)
    } else {
        res.json(false)
    }
}

export async function getDataTasks(req, res) {
    const allTasks = await findTaskByUserId(req.session.userId)
    if (allTasks) {
        res.json(allTasks)
    }
}

export async function deleteDataTask(req, res) {
    const taskId = req.params.id
    if (taskId) {
        const result = await deleteTask(taskId, req.session.userId)
        if(result.affectedRows === 0) {
            res.json(false)
            return
        }
        res.json(true)
    }
}

export async function updateDataTask(req, res) {
    const {status} = req.body
    const taskId = req.params.id
    if (taskId) {
        const result = await updateStatusTask(status, taskId, req.session.userId)
        if(result.affectedRows === 0) {
            res.json(false)
            return
        }
        res.json(true)
    }
}