import { updateTasksStatus } from "./taskUpdate.js"

export function initCheckbox() {
    const checkboxs = document.querySelectorAll('.check')
    checkboxs.forEach((c)=>{
        c.addEventListener('change', async ()=>{
            const taskId = c.parentNode.parentNode.id
            console.log(taskId)
            if(c.checked) {
                const result = await updateTasksStatus('done', taskId)
            }
        })
    })
}