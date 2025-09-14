export function sendInfoUser(req, res) {
    if(req.session.userId) {
        res.json({name: req.session.userName})
    } else {
        res.json(false)
    }
}