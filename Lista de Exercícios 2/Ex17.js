function somarNumeros(array) {
    return array.reduce((numAcumulado, numAtual) => numAcumulado + numAtual);
}

console.log(somarNumeros([10, 10, 10]));
console.log(somarNumeros([15, 15, 15, 15]));