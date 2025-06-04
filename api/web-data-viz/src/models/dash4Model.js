var database = require("../database/config")

function contarGenero() {
    const sql = `
        SELECT 
            CASE 
                WHEN LOWER(genero) = 'feminino' THEN 'Mulheres'
                WHEN LOWER(genero) = 'masculino' THEN 'Homens'
            END AS genero_label,
            COUNT(*) AS quantidade
        FROM usuario
        WHERE LOWER(genero) IN ('feminino', 'masculino')
        GROUP BY genero_label
    `;
    return database.executar(sql);
}
function contarIdade() {
    const sql = `
        SELECT 
            CASE 
                WHEN TIMESTAMPDIFF(YEAR, data_nasc, CURDATE()) >= 18 THEN 'Maiores de 18'
                ELSE 'Menores de 18'
            END AS faixa_etaria,
            COUNT(*) AS quantidade
        FROM usuario
        GROUP BY faixa_etaria
    `;
    return database.executar(sql);
}

module.exports = {
    contarGenero,
    contarIdade
}