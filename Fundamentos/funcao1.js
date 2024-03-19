//Função sem retorno
function imprimirSoma(a, b){
    console.log(`A soma de ${a} + ${b} é igual a: ${a+b}`);
}
//Função com retorno
function soma(a = 0, b = 0) {
    return a + b;
}

imprimirSoma(5, 7);
imprimirSoma(2);
imprimirSoma(5, 7, 8, 9, 10);
imprimirSoma();

console.log(soma(5, 8));