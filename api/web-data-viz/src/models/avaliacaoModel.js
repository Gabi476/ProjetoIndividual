const conexao = require('../database/conexao'); // ajuste o caminho se necessário

const AvaliacaoModel = {
    inserir: (fkusuario, fkfilme, nota, callback) => {
        const sql = 'INSERT INTO avaliacao (fkusuario, fkfilme, nota) VALUES (?, ?, ?)';
        conexao.query(sql, [fkusuario, fkfilme, nota], callback);
    },
    // Você pode adicionar mais métodos, como buscar médias, listar avaliações, etc.
};

module.exports = {
    avaliacaoController
};