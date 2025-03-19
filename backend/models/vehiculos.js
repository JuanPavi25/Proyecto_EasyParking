const moongose = require('mongoose')

const vehiculosSchema = new moongose.Schema({
    placa: {type: String, required:true, },
    tipoVehiculo: {type: String, required:true},
    horaIngreso: {type:String, required:true},
    fechaIngreso: {type:String, required:true},
    horaSalida: {type:String, required:false},
    fechaSalida: {type:String, required:false}
});

module.exports = moongose.model("Vehiculos", vehiculosSchema)