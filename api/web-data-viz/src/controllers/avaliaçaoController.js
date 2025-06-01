const avaliacaoModel = require('../models/avaliacaoModel');

const avaliacaoController = {
    inserir: (req, res) => {
        const { fkusuario, fkfilme, nota } = req.body;
        avaliacaoModel.inserir(fkusuario, fkfilme, nota, (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ erro: 'Erro ao salvar avaliação' });
            }
            res.json({ sucesso: true });
        });
    }
};

module.exports = {
    avaliacaoController
};