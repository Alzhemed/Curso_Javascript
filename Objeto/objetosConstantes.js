//pessoa -> 123 (Endereço de memória) -> {}
//A constante pessoa aponta para um endereço de memória, e o endereço de memória aponta para o objeto
const pessoa = {nome: "João"};
pessoa.nome = "Pedro";
//O que a constante mantém fixo é o endereço de memória, dessa forma,
//ao alterar o valor do atributo, a alteração é feita sem nenhum problema.
console.log(pessoa);

//pessoa -> 456 -> {nome: "Ana"}
//Nesse caso, como se trata de um novo objeto, o código irá gerar um erro,
//pois por ser um novo objeto, ele possui outro endereço de memória, e por ser uma constante,
//não é possível alterar esse endereço.
//pessoa = {nome: "Ana"}

//O método freeze previne a modificação, adição e/ou remoção de atributos do objeto passado como parâmetro.
Object.freeze(pessoa);
pessoa.nome = "Maria";
pessoa.end = "Rua ABC";
delete pessoa.nome;
console.log(pessoa);

const pessoaConstante = Object.freeze({nome: "João"});
pessoaConstante.nome = "Maria";
console.log(pessoaConstante);