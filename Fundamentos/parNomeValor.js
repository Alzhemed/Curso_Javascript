//Par nome/valor
const saudacao = "Olá!"; //Contexto léxico 1

function exec() {
    const saudacao = "Bom dia!"; //Contexto léxico 2
    console.log(saudacao);
}

//Objetos são grupos aninhados de pares chave/valor
const cliente1 = {
    nome: "Pedro",
    idade: 32,
    peso: 90,
    endereco: {
        rua: "General Oswaldo",
        numero: 456,
        complemento: "Casa",
        bairro: "César Filho",
        cidade: "Curitiba",
        estado: "Paraná"
    }
};

console.log(saudacao);
console.log(cliente1);