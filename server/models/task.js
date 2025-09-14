import pool from '../config/db.js'

export async function createTask(userId, title, date) {
    const sql = 'INSERT INTO tasks (user_id, title, date) VALUES (?, ?, ?)'
    const [result] = await pool.query(sql, [userId, title, date])
    return result.insertId
}

export async function deleteTask(taskId, userId) {
    const sql = 'DELETE FROM tasks WHERE id = ? AND user_id = ?'
    const [result] = await pool.query(sql, [taskId, userId])
    return result
}


export async function findTaskByUserId(userId) {
    const sql = 'SELECT * FROM tasks WHERE user_id = ?'
    const [result] = await pool.query(sql, [userId])
    return result
}

export async function updateStatusTask(status, taskId, userId) {
    const sql = 'UPDATE tasks SET status = ? WHERE id = ? AND user_id = ?'
    const [result] = await pool.query(sql, [status, taskId, userId])
    return result
}