const moongose = require('mongoose')

const vehiculosSchema = new moongose.Schema({
    placa: {type: String, required:true, },
    tipoVehiculo: {type: String, required:true},
    horaIngreso: {type:String, required:true},
    fechaIngreso: {type:Date, required:true},
    horaSalida: {type:String, required:true},
    fechaSalida: {type:Date, required:true}
});

module.exports = moongose.model("Vehiculos", vehiculosSchema)