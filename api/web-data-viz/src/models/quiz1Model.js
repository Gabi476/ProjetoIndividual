var conexao = require("../database/config")

function salvar(req, res) {
    var queries = respostas.map(resp => {
        var {
            idPergunta, idAlternativa
        } = res;
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