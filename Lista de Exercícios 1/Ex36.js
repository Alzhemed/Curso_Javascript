function multiplicaVetor(conjunto = [], numInt) {
    conjMult = [];
    conjunto.forEach(valor => conjMult.push(valor * numInt));
    return conjMult;
}

function multiplicaVetorMaiorQueCinco(conjunto = [], numInt) {
    conjMult = [];
    conjunto.forEach(valor => valor > 5 ? conjMult.push(valor * numInt) : false);
    return conjMult;
}

console.log(multiplicaVetor([3, 4, 5], 5));

console.log("");

console.log(multiplicaVetorMaiorQueCinco([3, 6, 7], 5));