function calcular(op1, operador, op2) {
    operador = operador.toLowerCase();
    let resultado;
    switch(operador) {
        case "+":
            resultado = op1 + op2;
            break;
        case "-":
            resultado = op1 - op2;
            break;
        case "*":
        case "x":
            resultado = op1 * op2;
            break;
        case "/":
            resultado = op1 / op2;
            break;
        default:
            console.log("O operador informado é inválido.")
            resultado = 0;
    }

    return resultado;
}

console.log(calcular(15, "+", 3));
console.log(calcular(15, "-", 3));
console.log(calcular(15, "x", 3));
console.log(calcular(15, "/", 3));
console.log(calcular(15, "d", 3));