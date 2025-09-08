import { Router } from "express";
import {pageCadastro} from "../controllers/pageControllers.js";
const router = Router()
router.get('/cadastro', pageCadastro)
export default router