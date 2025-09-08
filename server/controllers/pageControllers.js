import path from "path";
import __dirname from "../utils/pathHelper.js";

export function pageCadastro(req, res) {
    res.sendFile(path.join(__dirname, '../client/pages/register.html'))
}