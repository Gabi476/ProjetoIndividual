const AvaliacaoModel = require('../models/avaliacaoModel');

async function inserir(req, res) {
    const { fkusuario, fkfilme, nota } = req.body;

    try {
        const resultado = await AvaliacaoModel.inserir(fkusuario, fkfilme, nota);
        res.status(200).json({ mensagem: 'Avaliação inserida com sucesso!', resultado });
    } catch (erro) {
        console.error('Erro ao inserir avaliação:', erro);
        res.status(500).json({ erro: 'Erro ao inserir avaliação' });
    }
}

module.exports = { inserir };
