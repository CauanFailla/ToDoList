import { getData } from "../data/getDataUser.js"

function addElementsInHtml(btnHeader, btnHero) {
    const containerNav = document.querySelector('header > nav')
    const containerHero = document.querySelector('.btn__container__hero')
    containerNav.appendChild(btnHeader)
    containerHero.appendChild(btnHero)
}

function createBtnDashboard() {
    const btnDashboard = document.createElement('a')
    btnDashboard.innerText = 'Dashboard'
    btnDashboard.href = '/dashboard'
    btnDashboard.classList.add('btn__contrast')
    return btnDashboard
}

function createElements(userName) {
    const btnDashboardHeader = createBtnDashboard()
    const btnDashboardHero = createBtnDashboard()
    addElementsInHtml(btnDashboardHeader, btnDashboardHero)
}

function removeElements() {
    const btnLoginHeader = document.querySelector('.btn__login')
    const btnRegisterHeader = document.querySelectorAll('.btn__contrast')
    if(btnLoginHeader) {
        btnLoginHeader.remove()
    } 
    btnRegisterHeader.forEach((btn)=>{
        btn.remove()
    })
}

export async function changeForUser() {
    const user = await getData()
    if(user) {
        removeElements()
        createElements(user.name)
    } else {
        return
    }
}