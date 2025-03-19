const express = require('express')
const moongose = require('mongoose')
const regRoutes = require("../backend/routes/userRoutes")
const vehRoutes = require("../backend/routes/vehiculosRoutes")
const cors = require('cors');


const path = require('path')
require('dotenv').config()
const PORT = 3000

const app = express()
app.use(cors());
app.use(express.json())

moongose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Conectado'))
.catch((err) => console.error(err))

app.use("/userRoutes", regRoutes);
app.use("/vehiculosRoutes", vehRoutes);
/* app.use("/", ) */


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