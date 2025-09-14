import { Router } from "express";
import { sendInfoUser } from "../controllers/userControllers.js"

const router = Router()
router.get('/', sendInfoUser)

export default router