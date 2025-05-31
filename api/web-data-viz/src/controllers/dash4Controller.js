var dash4Model = require("../models/dash4Model");

function graficoGenero(req, res) {
    dash4Model.contarGenero()
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

function graficoIdade(req, res) {
    dash4Model.contarIdade()
        .then(resultado => res.json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

module.exports = {
    graficoGenero,
    graficoIdade
}