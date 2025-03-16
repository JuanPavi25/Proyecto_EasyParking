const moongose = require('mongoose')

const userShema = new moongose.Schema({
    usuario: {type: String, required:true, unique:true },
    contrasena: {type: String, required:true},
    email: {type:String, required:true},
    slots: {type:Number, required:true}
});

module.exports = moongose.model("User", userShema);