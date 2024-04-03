//Coleção dinâmica de pares chave/valor
const produto = new Object;
produto.nome = "Cadeira";
produto["marca"] = "Genérica";
produto.preco = 220;

console.log(produto);
delete produto.preco;
delete produto.marca;
console.log(produto);

const carro = {
    modelo: "A4",
    preco: 89000,
    proprietario: {
        nome: "Raul",
        idade: 56,
        endereco: {
            rua: "Alameda das Flores",
            numero: 456
        }
    },
    condutores: [{
        nome: "Junior",
        idade: 19
    }, {
        nome: "Ana",
        idade: 42
    }],
    calcularValorSeguro() {
        //...
    }
}

carro.proprietario.endereco.numero = 1000;
carro["proprietario"]["endereco"]["rua"] = "Avenida General Aranha";

console.log(carro);

delete carro.condutores;
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;

console.log(carro);
console.log(carro.condutores);
