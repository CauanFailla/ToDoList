export async function getPreviousPage() {
    try {
        const response = await fetch("http://127.0.0.1:3000/user/getPreviousPage")
        if(!response.ok) {
            throw new Error('Erro na requisição')
        }
        const result = await response.json()
        return result
    } catch (err) {
        console.error("Erro ao buscar página anterior", err.message)
    }
    
}

export async function setOnPage(pageOn) {
    try {
        const response = await fetch("http://127.0.0.1:3000/user/setOnPage", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({page: pageOn})
        })
        if(!response.ok) {
            throw new Error('Erro na requisição')
        }
        const result = await response.json()
        return result
    } catch(err) {
        console.error("Erro ao adicionar página atual:", err.message)
    }
    
}

