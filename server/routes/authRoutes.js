import express from "express";
import {cadastro} from "../controllers/authControllers.js"
const router = express.Router()
router.post('/enviarCadastro', cadastro)
export default router