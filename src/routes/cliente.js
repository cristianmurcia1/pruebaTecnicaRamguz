// Módulos necesarios para configurar los endpoints
const express = require('express');
const router = express.Router();
const controladorCliente = require('../controllers/controladorCliente');

// Endpoints
router.get('/', controladorCliente.listar);
router.post('/guardarPqr', controladorCliente.guardarPqr);
router.get('/visualizarPqr/:id', controladorCliente.visualizarPqr);

module.exports = router;