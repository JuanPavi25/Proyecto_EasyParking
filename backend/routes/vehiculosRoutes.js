const express = require('express')
const router = express.Router()
const  vehiculos= require("../models/vehiculos")

router.post('/registerVehiculo', async (req, res) => {
const {placa, tipoVehiculo, horaIngreso, fechaIngreso, horaSalida, fechaSalida} = req.body;
    try{
        const Vehiculos = new vehiculos({placa, tipoVehiculo, horaIngreso, fechaIngreso, horaSalida, fechaSalida})
        await Vehiculos.save();
        res.status(201).json({ message: "Vehiculo Ingresado Con Éxito" });
    } catch(error){
        console.log(error)
        res.status(400).json({ error: error.message });
    }
});

router.put('/updateVehiculo/:placa', async (req, res) => {
    try {
      const { placa } = req.params;
      const { horaSalida, fechaSalida } = req.body;
  
      const result = await vehiculos.updateOne(
        { placa }, 
        { $set: { horaSalida, fechaSalida } }
      );
  
      if (result.modifiedCount > 0) {
        res.json({ message: "Vehículo actualizado con éxito" });
      } else {
        res.status(404).json({ message: "Vehículo no encontrado" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al actualizar el vehículo" });
    }
  });


module.exports = router;
