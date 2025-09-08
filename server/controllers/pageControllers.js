import path from "path";
import __dirname from "../utils/pathHelper.js";


export function pageLogin(req, res) {
    res.sendFile(path.join(__dirname, '../client/pages/login.html'))
}

export function pageCadastro(req, res) {
    res.sendFile(path.join(__dirname, '../client/pages/register.html'))
}

export function pageDashboard(req, res) {
    res.sendFile(path.join(__dirname, '../client/pages/dashboard.html'))
}