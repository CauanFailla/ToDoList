export async function getUser() {
    try {
        const response = await fetch('http://127.0.0.1:3000/user/getUser')
        if(!response.ok) {
            throw new Error('Erro na requisição')
        }
        const user = await response.json()
        return user
    } catch (err) {
        console.error("Falha ao buscar dados do usuário:", err.message)
    }
}