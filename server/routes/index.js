import { Router } from 'express'
import authRoutes from './authRoutes.js'
import userRoutes from './userRoutes.js'
import pageRoutes from './pageRoutes.js'
import tasksRoutes from './tasksRoutes.js'
import { validationUser } from '../controllers/authControllers.js'
const router = Router()
router.use('/', pageRoutes)
router.use('/auth', authRoutes)
router.use('/user', validationUser, userRoutes)
router.use('/tasks', validationUser, tasksRoutes)
export default router