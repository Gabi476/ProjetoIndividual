var express = require('express');
var router = express.Router();
var dash2Controller = require('../controllers/dash2Controller'); // <-- Adicione esta linha

// Exemplo de rota:
router.get('/:fkUsuario', dash2Controller.buscarTodosMenosUm);

module.exports = router;