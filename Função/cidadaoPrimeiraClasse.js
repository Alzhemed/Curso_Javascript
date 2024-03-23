//Função em Javascript é um objeto de primeira classe (First-Class Object ou Citizens).
//Higher-order function. A função é tratada como um dado.

//Função criada de forma literal
//Toda função em Javascript retorna pelo menos o valor "undefined", caso não tenha um retorno definido.
//O bloco em uma função tradicional é obrigatório, ao contrário do "if" por exemplo.
function fun1() {}

//Armazenando uma função em uma variável
const fun2 = function () {};

//Armazenando uma função em um array
const funcs = [function (a, b) {return a + b}, fun1, fun2];
console.log(funcs[0](5, 3));

//Armazenando uma função em um atributo de um objeto
const pessoa = {};
pessoa.falar = function () {console.log("Olá!")};
pessoa.falar();

//Passando uma função como parâmetro
function execute(fun) {
    fun();
}

execute(function () {console.log("Executando...")});

console.log("Fim!");

//Uma função pode retornar ou conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma(5, 10)(0);
const soma1 = soma(5, 5);
soma1(10);