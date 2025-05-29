var quiz1Model = require("../models/quiz1Model");

function salvar(req, res) {
    const idUsuario = req.body.idUsuario;
    const respostas = req.body.respostas;

    if (!idUsuario || !respostas || !Array.isArray(respostas)) {
        return res.status(400).json({ erro: "Dados inválidos ou incompletos." });
    }
    console.log("Respostas recebidas:", req.body);
    console.log("Salvando resposta: ", instrucao);

    quiz1Model.salvar(req, res)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.error(erro); // Use console.error para erros
                console.error("Detalhes do erro:", erro.stack);
                res.status(500).json({ erro: "Erro ao salvar respostas", detalhes: erro.message });
            }
        );
}

module.exports = {
    salvar
};