//Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a+b);
};

imprimirSoma(5, 3);

//Armazenado uma função arrow em uma variável
const soma = (a, b) => {
    return a + b;
}

console.log(soma(5, 4));

//Retorno implícito (função arrow)
const subtracao = (a, b) => a - b;

console.log(subtracao(12, 5));

const imprimir2 = a => console.log(a);

imprimir2("Teste");