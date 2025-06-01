const express = require('express');
const router = express.Router();
const avaliacaoController = require('../controllers/avaliacaoController');

// Rota para inserir uma avaliação
router.post('/', avaliacaoController.inserir);

// (Opcional) Rota para buscar avaliações de um filme
// router.get('/filme/:fkfilme', avaliacaoController.buscarPorFilme);

module.exports = router;