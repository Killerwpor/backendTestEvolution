const mongoose = require("mongoose");

const abstractUserSchema = mongoose.Schema({
  nombre: { type: String, required: false },
  correo: { type: String, required: false },
  password: { type: String, required: false },
  sexo: { type: String, required: false }

});


module.exports = mongoose.model("Usuario", abstractUserSchema);