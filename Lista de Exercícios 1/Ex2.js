function verificaTriangulo(a, b, c) {
    let classificacao;
    if ((Math.abs(b-c) < a && a < b + c) && (Math.abs(a-c) < b && b < a + c) && (Math.abs(a-b) < c && c < a + b)) {
        if (a == b && b == c) {
            classificacao = "Triângulo equilátero";
        } else if (a == b || b == c || a == c) {
            classificacao = "Triângulo isósceles";
        } else {
            classificacao =  "Triângulo escaleno";
        }
    } else {
        classificacao = "Com os valores informados não é possível formar um triângulo."
    }

    console.log("Valores informados para os lados de um triângulo:");
    console.log(`a = ${a} / b = ${b} / c = ${c}`);
    console.log(`Classificação: ${classificacao}`)
}

verificaTriangulo(5, 5, 5);
console.log("")
verificaTriangulo(5, 6, 5);
console.log("")
verificaTriangulo(5, 6, 7);
console.log("")
verificaTriangulo(5, 25, 15);

