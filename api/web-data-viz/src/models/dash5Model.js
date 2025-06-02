const database = require('../database/config');

async function mediasAvaliacoes() {
    const sql = `
        SELECT f.nomefilme, AVG(a.nota) AS media
        FROM filme f
        LEFT JOIN avaliacao a ON f.idfilme = a.fkfilme
        GROUP BY f.idfilme
        ORDER BY f.idfilme
    `;
    return await database.executar(sql); // ✔ usa o método correto
}

module.exports = {
    mediasAvaliacoes
};
