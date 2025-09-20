export async function getTasks() {
    try {
        const response = await fetch("http://127.0.0.1:3000/tasks")
        if(!response.ok) {
            throw new Error('Erro na requisição')
        }
        const tasks = await response.json()
        return tasks
    } catch (err) {
        console.error("Erro ao buscar dados da tarefa", err.message)
    }  
}

export async function createTaskInServer(form, e) {
    try {
        document.querySelector
        e.preventDefault()
        const date = new Date()
        const formattedDate = date.toISOString().split("T")[0];  
        const formData = new FormData(form)
        const tasks = [Object.fromEntries(formData)]
        tasks[0].date = formattedDate
        const response = await fetch("http://127.0.0.1:3000/tasks", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(tasks[0])
        }) 
        const taskId = await response.json()
        tasks[0].id = taskId
        document.querySelector('#ititle').value = ''
        return tasks
    } catch (err) {
        console.error("Erro ao adicionar tarefa", err.message)
    }
    
}

export async function deleteTaskInServer(taskId) {
    try {
        const response = await fetch(`http://127.0.0.1:3000/tasks/${taskId}`, {
            method: "DELETE"
        })
        const result = await response.json()
        return result
    } catch(err) {
        console.error("Erro ao remover tarefa", err.message)
    }   
}
