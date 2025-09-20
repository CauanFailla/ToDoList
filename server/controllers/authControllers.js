import bcrypt from 'bcrypt'
import {createUser, findUserByEmail, findUserById} from '../models/user.js'

export async function cadastro(req, res) {
    try {
        const {name, email, password} = req.body
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "Preencha todos os campos" })
        }
        const hash = await bcrypt.hash(password, 10)
        const userId = await createUser(name, email, hash)
        const user = await findUserById(userId)
        req.session.userId = user.id
        req.session.userName = user.name
        req.session.userEmail = user.email
        return res.status(201).json({ success: true, redirect: "/dashboard" })
    } catch (err) {
        next(err)
    }
}

export async function login(req, res) {
    try {
        const {email, password} = req.body
        const user = await findUserByEmail(email)
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).send('Senha ou Email incorretos...');
        }
        req.session.userId = user.id
        req.session.userName = user.name
        req.session.userEmail = user.email
        res.redirect('/dashboard')
    } catch (err) {
        next(err)
    }
}

export function validationUser(req, res, next) {
    if (req.session.userId) {
        next()
    } else {
        res.status(401).redirect('/login')
    }
}
