function repetir(valor, repeticoes) {
    let valores = [];
    for(let i = 0; i < repeticoes; i++) {
        valores.push(valor);
    }

    return valores;
}

console.log(repetir("Código", 2));
console.log(repetir(7, 3));