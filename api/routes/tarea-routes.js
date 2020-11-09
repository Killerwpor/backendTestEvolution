const express = require("express");
const router = express.Router();
const controlador = require("../controllers/tarea-controller");

router.post("/nuevaTarea",controlador.nuevaTarea);
router.post("/editarTarea",controlador.editarTarea);
router.post("/traerTareas",controlador.traerTareas);
router.post("/eliminarTarea",controlador.eliminarTarea);


module.exports = router;