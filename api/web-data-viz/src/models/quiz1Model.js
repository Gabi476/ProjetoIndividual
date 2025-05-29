var conexao = require("../database/config");

function salvar(req, res) {
    var { idUsuario, respostas } = req.body; // Obtenha idUsuario e respostas do corpo da requisição

    var queries = respostas.map(resposta => { // Iterar sobre cada resposta
        var { idPergunta, idAlternativa } = resposta; // Obter dados da resposta individual
        var instrucao =
            `INSERT INTO resposta_usuario (fkusuario, fkpergunta, fk_alternativa_escolhida)
            VALUES (${idUsuario}, ${idPergunta}, ${idAlternativa})
            ON DUPLICATE KEY UPDATE fk_alternativa_escolhida = ${idAlternativa};`;
        return new Promise((resolve, reject) => {
            conexao.query(instrucao, (erro, resultado) => {
                if (erro) {
                    reject(erro);
                } else {
                    resolve(resultado);
                }
            });
        });
    });

    Promise.all(queries)
        .then(() => res.status(200).json({ mensagem: "Respostas salvas com sucesso!" }))
        .catch(erro => res.status(500).json({ erro: "Erro ao salvar respostas", detalhes: erro }));
}

module.exports = {
    salvar
};