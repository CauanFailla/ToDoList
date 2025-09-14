import { Router } from "express";
import {pageCadastro, pageLogin, pageDashboard} from "../controllers/pageControllers.js";
import { validationUser } from "../controllers/authControllers.js";
const router = Router()
router.get('/login', pageLogin)
router.get('/cadastro', pageCadastro)
router.get('/dashboard', validationUser, pageDashboard)
export default router