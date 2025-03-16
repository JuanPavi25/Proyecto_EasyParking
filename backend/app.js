const express = require('express')
const moongose = require('mongoose')
const User = require('./models/User')
const path = require('path')
require('dotenv').config()
const PORT = 3000

const app = express()
app.use(express.json())

moongose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Conectado'))
.catch((err) => console.error(err))

app.post('/registro', async (req, res) => {
    const {usuario, contrasena, email, slots} = req.body;
    try{
        const user = new User({usuario, contrasena, email, slots})
        await user.save();
        res.status(201).send('Usuario registrado')
    } catch(error){
        res.status(400).send('Error al registrar el usuario')
    }
});


app.use(express.static(path.join(__dirname, `../frontend/public`)))

app.use((req, res, next)=> {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`)
    next();
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/views', 'index.html'))
})

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/views', 'registro.html'))
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