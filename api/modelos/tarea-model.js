const mongoose = require("mongoose");

const tareaSchema = mongoose.Schema({
  nombre: { type: String, required: false },
  prioridad: { type: String, required: false },
  fecha: { type: String, required: false },
  usuario: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'
  }

});


module.exports = mongoose.model("Tarea", tareaSchema);