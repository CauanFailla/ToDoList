import { deleteTaskInHtml } from "../ui/tasks.js"
import { deleteTaskInServer } from "../data/task.js"

export function initDeleteTask() {
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
