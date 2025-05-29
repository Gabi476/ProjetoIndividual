var quiz1Model = require("../models/quiz1Model");

function salvar(req, res) {
    const idUsuario = req.body.idUsuario;
    const respostas = req.body.respostas;

    if (!idUsuario || !respostas || !Array.isArray(respostas)) {
        return res.status(400).json({ erro: "Dados inválidos ou incompletos." });
    }
    // quiz1Model.salvar(req,res)
    //     .then(
    //         function (resultado){
    //             res.json(resultado);
    //         }
    //     ).catch(
    //         function(erro){
    //             console.log(erro);
    //             console.log(
    //                 "n/Houve um erro Erro:",
    //                 erro.sqlMessage
    //             );
    //             res.status(500).json(erro.sqlMessage);
    //         }
    //     );
    }
