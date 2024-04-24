function inverter(valor) {
    let valorInvertido = `Valor booleano ou numérico esperado, mas o valor é do tipo ${typeof(valor)}.`;

    if(typeof(valor) == "boolean") {
        valorInvertido = !valor;
    } else if (typeof(valor) == "number") {
        valorInvertido = valor * -1;
    }

    return valorInvertido;
}

console.log(inverter(10));
console.log(inverter(-1));
console.log(inverter(false));
console.log(inverter("A"));