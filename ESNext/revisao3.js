//A função Object.values retorna um array com todos os valores de um objeto.
//A função Object.entries retorna um array contendo outros arrays binários contendo as chaves e valores de cada propriedade do objeto.

const obj = {a: 1, b: 2, c: 3};

console.log(Object.values(obj));

console.log(Object.entries(obj));

/*Houve uma melhoria na notação literal de objetos, de forma que
*ao definir um objeto de forma literal, é possível utilizar o nome
*de variáveis no lugar de um par chave/valor, desta forma evitando
*a repetição do nome da variável.
*
*Além disso, se tornou mais fácil definir funções dentro do objeto,
ao ser necessário apenas colocar o nome e definir o bloco.
*/

const nome = "Ana";

const pessoa = {
    nome,
    ola() {
        return "Olá!"
    }
}

console.log(pessoa.nome, pessoa.ola());

//Outra implementação foi a classe, que nada mais é que uma outra forma de definir uma função.

class Animal{};

class Cachorro extends Animal{
    falar() {
        return "Au Au!"
    }
}

console.log(new Cachorro().falar());