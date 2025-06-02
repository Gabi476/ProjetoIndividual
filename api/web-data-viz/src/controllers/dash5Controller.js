const dash5Model = require('../models/dash5Model');

async function mediasAvaliacoes(req, res) {
    try {
        const resultado = await dash5Model.mediasAvaliacoes();
        res.status(200).json(resultado);
    } catch (erro) {
        console.error("Erro ao buscar médias:", erro);
        res.status(500).json({ erro: 'Erro ao buscar médias das avaliações' });
    }
}

module.exports = {
    mediasAvaliacoes
};
