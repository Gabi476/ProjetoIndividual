var express = require('express');
var router = express.Router();
var dash4Controller = require('../controllers/dash4Controller');

router.get('/genero', dash4Controller.graficoGenero);
router.get('/idade', dash4Controller.graficoIdade);

module.exports = router;