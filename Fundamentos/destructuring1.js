const pessoa = {
    nome: "Ana",
    idade: 18,
    endereco: {
        rua: "Rua ABC",
        numero: 123
    }
}

const {nome, idade} = pessoa;
console.log(nome, idade);
//Mudança no nome da variável criada
const {nome: n, idade: i} = pessoa;
console.log(n, i);
//Valor padrão definido na variável bemHumorada
const {sobrenome, bemHumorada = true} = pessoa;
console.log(sobrenome, bemHumorada);
//Cria apenas as variáveis dentro do objeto endereco
const {endereco: {rua, numero, cep}} = pessoa;
console.log(rua, numero, cep);