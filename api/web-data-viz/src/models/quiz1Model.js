var conexao = require("../database/config");

function salvarquiz(idUsuario, respostas) {

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

    return Promise.all(queries) // ✅ RETORNE A PROMISE AQUI!
        .then(() => res.status(200).json({ mensagem: "OK" }))
        .catch(erro => res.status(500).json({ erro: "Erro ao salvar", detalhes: erro }));
}

module.exports = {
    salvarquiz
};