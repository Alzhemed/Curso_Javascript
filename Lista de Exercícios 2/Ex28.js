function filtrarPorQuantidadeDeDigitos(numeros, qtdDigitos) {
    return numeros.filter(numero => numero.toString().length == qtdDigitos);
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2));
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1));