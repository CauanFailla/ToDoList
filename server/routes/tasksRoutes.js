import { Router } from "express";
import { addTask, getDataTasks, deleteDataTask, updateDataTask } from "../controllers/taskControllers.js";
const router = Router()
router.post('/', addTask)
router.get('/', getDataTasks)
router.patch('/:id', updateDataTask)
router.delete('/:id', deleteDataTask)
export default router