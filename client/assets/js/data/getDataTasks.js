export async function getTasks() {
    const response = await fetch("http://127.0.0.1:3000/tasks")
    if(!response.ok) {
        throw new Error('Erro na requisição')
    }
    const tasks = await response.json()
    return tasks
}