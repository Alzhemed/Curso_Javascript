function calcularMedia(numeros) {
    return numeros.reduce((numAcumulado, numAtual) => numAcumulado + numAtual)/numeros.length;
}

console.log(calcularMedia([0, 10]));
console.log(calcularMedia([1, 2, 3, 4, 5]));