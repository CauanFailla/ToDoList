import express from "express";
import {cadastro, login} from "../controllers/authControllers.js"
const router = express.Router()
router.post('/enviarCadastro', cadastro)
router.post('/enviarLogin', login)
export default router