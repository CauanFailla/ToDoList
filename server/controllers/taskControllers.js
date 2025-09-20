import { createTask, findTaskByUserId, deleteTask, updateStatusTask} from "../models/task.js"

export async function addTask(req, res) {
    try {
        const {title, date} = req.body
        if (!title) {
            return res.status(400).json({ success: false, message: "Preencha todos os campos" })
        }
        const taskId = await createTask(req.session.userId, title, date)
        res.status(201).json(taskId)
    } catch (err) {
        next(err)        
    }
}



export async function getDataTasks(req, res) {
    try {
        const allTasks = await findTaskByUserId(req.session.userId)
        if (allTasks) {
            res.json(allTasks)
        }    
    } catch (err) {
        next(err)
    }
}

export async function deleteDataTask(req, res) {
    try {
        const taskId = req.params.id
        if(!taskId) {
            return res.status(400).json({ success: false, message: "Id inválido" })
        }
        const result = await deleteTask(taskId, req.session.userId)
        if(result.affectedRows === 0) {
            return res.status(404).json({ success: false})
        }
        res.json({ success: true})
    } catch (err) {
        next(err)
    }
}

export async function updateDataTask(req, res) {
    try {
        const {status} = req.body
        const taskId = req.params.id
        if(!taskId || !status) {
            return res.status(400).json({ success: false, message: "Dados incompletos" })
        }
        const result = await updateStatusTask(status, taskId, req.session.userId)
        if(result.affectedRows === 0) {
            return res.status(404).json({ success: false})
        }
        res.json({ success: true})
    } catch (err) {
        next()
    }
}