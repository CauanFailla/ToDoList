async function deleteTaskInServer(taskId) {
    console.log(taskId)
    const response = await fetch(`http://127.0.0.1:3000/tasks/${taskId}`, {
        method: "DELETE"
    })
    const result = await response.json()
    return result
}

function deleteTaskInHtml(task) {
    task.parentNode.remove()
}

export function initDelete() {
    const btnsDelete = document.querySelectorAll('.btn__delete')
    btnsDelete.forEach((btn)=>{
        btn.addEventListener('click', async ()=>{
            const result = await deleteTaskInServer(btn.id)
            if(result) {
                deleteTaskInHtml(btn)
            }
        })
    })
}
