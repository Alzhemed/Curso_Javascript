const pessoa = {
    nome: "Rebeca",
    idade: 25,
    peso: 67
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

console.log("");

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`);
})

console.log("");

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`);
})

//Essa função permite adicionar e/ou modificar propriedades de um objeto, de forma que
//que atributos como listagem ou alteração do valor, sejam permitidos ou não para aquela propriedade.
Object.defineProperty(pessoa, "dataNascimento", {
    enumerable: true,
    writable: false,
    value: "05/03/1999"
})

pessoa.dataNascimento = "01/01/1998";
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

//Object.assign (ECMAScript 2015)
const dest = {a: 1};
const o1 = {b: 2};
const o2 = {c: 3, a: 4};
//Faz um cópia do objeto destino e insere nessa cópia todas as propriedades enumeráveis
//dos outros objetos passados como parâmetros e retorna essa cópia.
const obj = Object.assign(dest, o1, o2);
console.log(Object.entries(obj));

Object.freeze(obj);
obj.c = 1234;
console.log(obj);