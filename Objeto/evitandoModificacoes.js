// Prevenindo o aumento/adição do número de atributos/extensões de um objeto.
const produto = Object.preventExtensions({
    nome: "Vassoura",
    preco: 15,
    tag: "Promoção"
})

console.log(`Extensível: ${Object.isExtensible(produto)}`);

produto.nome = "Rodo";
produto.descricao = "Rodo de alumínio";
delete produto.tag;

console.log(produto);

// Prevenindo a adição e exclusão de atributos do objeto.
const pessoa = {nome: "Juliana", idade: 35};
Object.seal(pessoa);
console.log(`Selado: ${Object.isSealed(pessoa)}`);
pessoa.nome = "Ana"
pessoa.sobrenome = "Silva";
delete pessoa.idade;
console.log(pessoa);

/* O método freeze é basicamente o método "seal" com a adição de que os valores dos atributos
não podem ser alterados.*/



