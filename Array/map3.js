Array.prototype.map2 = function(callback) {
    const newArray = [];

    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }

    return newArray;
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const produtos = carrinho.map2(json => JSON.parse(json));
const precos = produtos.map2(prod => prod.preco);

console.log(precos);