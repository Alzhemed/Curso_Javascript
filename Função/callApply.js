function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${Math.ceil(this.preco * (1 - this.desc) * (1 + imposto))}`
}

produto = {
    nome: "Poco F5 Pro",
    preco: 3000,
    desc: 0.10,
    getPreco
}

global.preco = 20;
global.desc = 0.10
console.log(getPreco())

console.log(produto.getPreco(0.15));

const carro = {preco: 50000, desc: 0.20};
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17, "U$"));
console.log(getPreco.apply(carro, [0.17, "U$"]));