var express = require('express');
var router = express.Router();
var dash5Controller = require('../controllers/dash5Controller'); // <-- Adicione esta linha

// Exemplo de rota:
router.get('/:medias', dash5Controller.mediasAvaliacoes);

module.exports = router;