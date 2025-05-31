var quiz1Model = require("../models/qui43Model");

function inserir(req, res) {
    var fkUsuario = req.body.fkUsuarioServer;
    var personalidade = req.body.personalidade;

    quiz1Model.inserir(fkUsuario, personalidade)
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
    inserir
}