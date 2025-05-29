var database= require("../database/config")

function inserir(fkUsuario, pontuacao){
    const sql=`INSERT INTO quiz(fkusuario, resultado) values('${fkUsuario}', '${pontuacao}')`;

    console.log("Executando a instrução SQL: \n" + sql);
    return database.executar(sql);
}

module.exports = {
    inserir
}