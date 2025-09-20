import { Router } from "express";
import { getUser, setOnPage, getPreviousPage} from "../controllers/userControllers.js"

const router = Router()
router.get('/getUser', getUser)
router.get('/getPreviousPage', getPreviousPage)
router.post('/setOnPage', setOnPage)
export default router