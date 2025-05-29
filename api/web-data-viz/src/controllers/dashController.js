var dashModel = require("../models/dashModel");

function buscar(req, res) {
    var fkUsuario = req.params.fkUsuario;

    dashModel.buscar(fkUsuario)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o envio da pontuacao! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    buscar
}