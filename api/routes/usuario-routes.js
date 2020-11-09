const express = require("express");
const router = express.Router();
const controlador = require("../controllers/usuario-controller");

router.post("/guardarUsuario",controlador.guardarUsuario);
router.post("/login",controlador.login);


module.exports = router;