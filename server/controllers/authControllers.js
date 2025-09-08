import bcrypt from 'bcrypt'
import {createUser, findUserByEmail, findUserById} from '../models/user.js'

export async function cadastro(req, res) {
    const {name, email, password} = req.body
    const hash = await bcrypt.hash(password, 10)
    const userId = await createUser(name, email, hash)
    const user = await findUserById(userId)
    req.session.userId = user.id
    req.session.userName = user.name
    req.session.userEmail = user.email
    res.redirect('/')
}

