var database= require("../database/config")

function buscar(fkUsuario){
    const sql=`SELECT idQuiz, resultado
        FROM quiz
        WHERE fkUsuario = ${fkUsuario} 
        ORDER BY idQuiz;`;

    console.log("Executando a instrução SQL: \n" + sql);
    return database.executar(sql);
}

module.exports = {
    buscar
}