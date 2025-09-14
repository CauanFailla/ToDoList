import { getData } from "../data/getDataUser.js";

export async function updateHeader() {
    const user = await getData()
    if(user) {
        const username = document.querySelector('.user__name__info')
        username.textContent = user.name
    } else {
        return
    }
}