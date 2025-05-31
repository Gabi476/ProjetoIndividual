var database= require("../database/config")

function contarPersonalidades(fkUsuario) {
    const sql = `
 SELECT personalidade, COUNT(*) AS quantidade
        FROM quiz
        WHERE personalidade IS NOT NULL AND personalidade <> ''
        GROUP BY personalidade
    `;

    console.log("Executando a instrução SQL: \n" + sql);
    return database.executar(sql);
}

module.exports = {
    contarPersonalidades
}