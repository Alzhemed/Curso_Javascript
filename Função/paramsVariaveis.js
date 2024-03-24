function soma() {
    let soma = 0;

    /*O token "arguments" é um array que contém todos os parâmetros que são informados na chamada de uma função,
    * mesmo que na declaração dela não tenham sido definidos parâmetros a serem passados.
    */
    for (i in arguments) {
        soma += arguments[i];
    }

    return soma;
}

console.log(soma(10, 5, 5));
console.log(soma());
console.log(soma(1));
console.log(soma(3, 5));
console.log(soma(3, 5, "Teste"));
console.log(soma('a', 'b', 'c'));