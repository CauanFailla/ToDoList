export function getUser(req, res) {
    res.json({name: req.session.userName})
}

export function setOnPage(req, res) {
    const {page} = req.body
    if(page) {
        req.session.onPage = page
        res.json(true)
    } else {
        res.json(false)
    }
    
}

export function getPreviousPage(req, res) {
    if(req.session.onPage) {
        res.json(req.session.onPage)
    } else {
        res.json(false)
    }
}