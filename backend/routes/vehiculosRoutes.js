const express = require('express')
const router = express.Router()
const  vehiculos= require("../models/User")

router.post('/register', async (req, res) => {
const {usuario, contrasena, email, slots} = req.body;
    try{

        const usuarioExistente = await User.findOne({ usuario });
        if (usuarioExistente) return res.status(400).json({ message: 'Usuario ya registrado por favor inicie sesión'});

        const user = new User({usuario, contrasena, email, slots})
        await user.save();
        res.status(201).json({ message: "Usuario registrado Con Éxito por favor inicie sesión." });
    } catch(error){
        console.log(error)
        res.status(400).json({ error: error.message });
    }
});

router.post('/login', async (req, res) => {
    const { usuario, contrasena } = req.body;

    try {
        // Busca al usuario en la base de datos
        const user = await User.findOne({ usuario });

        if (!user) return res.status(404).json({message:'Usuario no encontrado', codError:'404'});


        // Comparar contraseñas directamente (no recomendado en sistemas reales)
        if (user.contrasena !== contrasena) return res.status(400).json({message:'Contraseña incorrecta',codError:'400'});

        res.status(200).json({
            message:'Inicio de sesión exitoso', 
            codError:'200', 
            user:{
                id: user._id,
                usuario: user.usuario,
                email: user.email,
                slots: user.slots
            }
        });
      
    } catch (error) {
        res.status(500).json({message:'Error en el inicio de sesión', codError:'500'});
    }
});


module.exports = router;
