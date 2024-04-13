const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

/*Retornando um array apenas com os precos
*Formas mais eficientes:
*precos = carrinho.map(json => JSON.parse(json).preco);
*precos = carrinho.map(json => JSON.parse(json)).map(obj => obj.preco);
*
*Forma mais didática:
*const paraObjeto = json => JSON.parse(json)
*const apenasPreco = produto => produto.preco
*const resultado = carrinho.map(paraObjeto).map(apenasPreco);*/

const produtos = carrinho.map(json => JSON.parse(json));
const precos = produtos.map(obj => obj.preco);

console.log(precos);