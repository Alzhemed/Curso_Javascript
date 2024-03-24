//Estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1; //Nesse caso o operador "ou" serve para retornar o primeiro valor verdadeiro encontrado. Null e undefined são falsos.
    b = b || 1;
    c = c || 1;

    return a + b + c;
}

console.log("Função soma1 resultados:");
console.log(soma1());
console.log(soma1(3));
console.log(soma1(3, 4));
console.log(soma1(0, 0, 0));
console.log();

//Estratégias 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a != undefined ? a : 1; //Valida se o parâmetro é null ou undefined
    b = 1 in arguments ? b : 1; //Valida se o parâmetro foi informado
    c = isNaN(c) ? 1 : c; //Valida se o parâmetro é um número

    return a + b + c;
}

console.log("Função soma2 resultado:");
console.log(soma2());
console.log(soma2(0, 0, 0));
console.log(soma2(3));
console.log(soma2(3, 2, 1));
console.log(soma2(NaN, NaN, "1"));
console.log();

//Valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c;
}

console.log("Função soma3 resultado:")
console.log(soma3());
console.log(soma3(3, 4));
console.log(soma3(0, 0, 0));