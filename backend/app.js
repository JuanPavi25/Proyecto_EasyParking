const express = require('express')
const moongose = require('mongoose')
const path = require('path')
require('dotenv').config()


const app = express()
const PORT = 3000

app.use(express.static(path.join(__dirname, `../frontend/public`)))

app.use((req, res, next)=> {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
    next();
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/views', 'index.html'))
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/views', 'home.html'))
})

app.get('/estadistica', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/views', 'estadistica.html'))
})


app.listen(PORT,()=>{
    console.log (`Servidor Corriendo en http://localhost:${PORT}`)
})