//Uma função factory é uma função que sempre retorna um novo objeto.
//Serve por exemplo para instanciar uma classe ou função.
//Função factory simples.
function criarProduto(nome, preco, desconto=0.1) {
    return {
        nome,
        preco,
        desconto
    }
}

console.log(criarProduto("Vassoura", 10));
console.log(criarProduto("Pá", 10));
console.log(criarProduto("Mop", 40));

