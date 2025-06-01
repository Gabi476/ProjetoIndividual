const database = require('../database/config');

const AvaliacaoModel = {
    inserir: (fkusuario, fkfilme, nota) => {
        const sql = `INSERT INTO avaliacao (fkusuario, fkfilme, nota) VALUES (${fkusuario}, ${fkfilme}, ${nota})`;
        return database.executar(sql); // usa o método correto
    }
};

module.exports = AvaliacaoModel;
