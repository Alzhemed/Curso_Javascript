function menorNumero(numeros) {
    let menorNumero;

    numeros.forEach((num, idx) => {
        if(idx == 0) {
            menorNumero = num;
        } else if (num < menorNumero) {
            menorNumero = num;
        }
    } )

    return menorNumero;
}

console.log(menorNumero([10, 5, 35, 65]));
console.log(menorNumero([5, -15, 50, 3]));