var database = require("../database/config")

function inserir(fkUsuario, personalidade) {
    const sql = `INSERT INTO quiz(fkusuario, resultado, personalidade) VALUES ('${fkUsuario}', NULL, '${personalidade}')`;

    console.log("Executando a instrução SQL: \n" + sql);
    return database.executar(sql);
}

module.exports = {
    inserir
}