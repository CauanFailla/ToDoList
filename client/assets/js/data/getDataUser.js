export async function getData() {
    const response = await fetch('http://127.0.0.1:3000/user')
    if(!response.ok) {
        throw new Error('Erro na requisição')
    }
    const user = await response.json()
    return user
}