import { getUser } from "../data/user.js";

export async function updateHeader() {
    const user = await getUser()
    if(user) {
        const username = document.querySelector('.user__name__info')
        username.textContent = user.name
    } else {
        return
    }
}