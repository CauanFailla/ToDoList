import pool from '../config/db.js'

export async function createUser(name, email, hash) {
    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)'
    const [result] = await pool.query(sql, [name, email, hash])
    return result.insertId
}

export async function findUserByEmail(email) {
    const sql = 'SELECT * FROM users WHERE email = ?'
    const [result] = await pool.query(sql, [email])
    return result[0]
}

export async function findUserById(id) {
    const sql = 'SELECT * FROM users WHERE id = ?'
    const [result] = await pool.query(sql, [id])
    return result[0]
}