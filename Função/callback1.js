const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

/*Uma função callback é uma função que é passada como parâmetro de outra função e que
* posteriormente com o cumprimento de alguma condição ou ativação de algum evento é executada.
* No caso do forEach, o evento é a iteração de cada elemento.
*/
fabricantes.forEach(imprimir);
fabricantes.forEach(fabricante => console.log(fabricante));

