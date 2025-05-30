var database= require("../database/config")

function buscarTodosMenosUm(fkUsuario) {
    const sql = `
 SELECT q.resultado, q.fkusuario, u.nomeusuario AS nome_usuario
        FROM quiz q
        JOIN usuario u ON q.fkusuario = u.idusuario
        WHERE q.fkusuario <> ${fkUsuario}
        ORDER BY q.fkusuario, q.idQuiz;
    `;

    console.log("Executando a instrução SQL: \n" + sql);
    return database.executar(sql);
}

module.exports = {
    buscarTodosMenosUm
}