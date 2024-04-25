function multiplicar(n1, n2) {
    resultado = 0;
    for(let i = 0; i < n1; i++) {
        resultado += n2;
    }

    return resultado;
}

console.log(multiplicar(5, 5));
console.log(multiplicar(0, 7));
