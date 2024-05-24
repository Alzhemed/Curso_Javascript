const criarSaudacoes = require("./passandoParametros");

const saudacoes1 = criarSaudacoes("Daniel", "Ana", "Gabriel", "Thiago")

console.log(saudacoes1);

const saudacoes2 = require("./passandoParametros")("José", "Mariana", "Letícia", "William");

console.log(saudacoes2);