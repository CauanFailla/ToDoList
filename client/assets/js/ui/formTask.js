const form = document.getElementById("addTaskForm")

export function formVisible(form, btn) {
    btn.classList.add('hidden')
    form.classList.remove('hidden')
}

export function formClose(form, btn) {
    btn.classList.remove('hidden')
    form.classList.add('hidden')
}

function listenBtnVisibleForm() {
    const btnVisible = document.querySelector('.btn__add__task')
    btnVisible.addEventListener('click',()=>{formVisible(form, btnVisible)})
}

function listenBtnCloseForm() {
    const btnClose = document.querySelector('.btn__close__form')
    const btnVisible = document.querySelector('.btn__add__task')
    btnClose.addEventListener('click', ()=>{formClose(form, btnVisible)})
}

export function initFormTaskUi() {
    listenBtnVisibleForm()
    listenBtnCloseForm()
}