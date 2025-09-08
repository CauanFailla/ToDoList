import { Router } from 'express'
import authRoutes from './authRoutes.js'
import pageRoutes from './pageRoutes.js'
const router = Router()

router.use('/', pageRoutes)
router.use('/auth', authRoutes)
export default router