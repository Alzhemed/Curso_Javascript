/*Se a diferença entre 5 e o resto da divisão da nota for menor que 3,
* a nota é arredondada para o próximo múltiplo de 5, ao somar o resto da divisão
* com o valor faltante para ficar como 5 à nota.
*/
function calculaNota(nota) {
    let situacao = "";

    if(nota%5 != 0 && ((5-(nota%5)) < 3) && nota >= 38) {
        nota = nota + (5-(nota%5))
    }

    if(nota < 38) {
        situacao = "Reprovado"
    } else if(nota >= 40 && nota < 70) {
        situacao = "Recuperação"
    } else if (nota >= 70) {
        situacao = "Aprovado"
    }

    console.log(`Nota final: ${nota}`)
    console.log(`Situação: ${situacao}`)
}

calculaNota(88);
