import { initFormTaskUi } from "./formTask.js"
import { setOnPage } from "../data/page.js"
import { getPreviousPage } from "../data/page.js"

const task = document.querySelector('.task__default')
const home = document.querySelector('.home__default')
const workspaces = document.querySelectorAll('.workspace')
const btnWorkspaceTask = document.querySelector('.btn__workspace__task')
const btnBackHome = document.querySelector('.btn__back__home')

function homeVisible() {
    workspaces.forEach((w)=>w.classList.add('hidden'))
    home.classList.remove('hidden')
}

async function taskVisible() {
    home.classList.add('hidden')
    task.classList.remove('hidden')
    initFormTaskUi()
}

async function listenBtnTask() {
    await setOnPage("task")
    taskVisible()
}

async function listenBtnHome() {
    await setOnPage("home")
    homeVisible()
}

async function validationPagePrevious() {
    const previousPage = await getPreviousPage()
    if (previousPage === "task") {
        taskVisible()
        return
    } 
    homeVisible()
}

export function initWorkspace() {
    validationPagePrevious()
    btnWorkspaceTask.addEventListener('click',()=>listenBtnTask())
    btnBackHome.addEventListener('click',()=>listenBtnHome())
}