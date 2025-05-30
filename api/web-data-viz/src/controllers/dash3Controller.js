var dashModel = require("../models/dash3Model");

function listarPersonalidades(req, res) {
    dashModel.contarPersonalidades()
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    listarPersonalidades
}