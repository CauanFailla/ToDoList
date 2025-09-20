import express from "express";
import session from 'express-session'
import routes from './routes/index.js'
import path from "path";
import __dirname from "./utils/pathHelper.js"
const port = 3000;
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(session({
    secret: '34$#@16',
    resave: false,
    saveUninitialized: false,
    cookie: {secure:false}
}))
app.use(routes)
app.use((err, req, res, next) => {
    console.error("Erro interno:", err.stack)
    res.status(500).json({ success: false, message: "Erro interno no servidor" })
})
app.use(express.static(path.join(__dirname, '../client')));

app.listen(port, ()=>{
    console.log('Servidor Rodando...');
})