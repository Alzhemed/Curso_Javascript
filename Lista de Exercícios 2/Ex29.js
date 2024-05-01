function segundoMaior(numeros) {
    let primeiro = numeros[0];
    let segundo = numeros[0];

    numeros.forEach(numero => {
        if(numero < primeiro) {
            primeiro = numero;
            segundo = numero;
        }
    })

    numeros.forEach(numero => {
        if(numero > primeiro) {
            segundo = primeiro;
            primeiro = numero;
        } else if (numero > segundo) {
            segundo = numero;
        }
    })

    return segundo;
}

console.log(segundoMaior([12, 16, 1, 5]));
console.log(segundoMaior([8, 4, 5, 6]));

