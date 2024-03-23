console.log(Math.ceil(6.1));

const obj1 = {
    nome: "Teste"
}

console.log(obj1.nome);

function teste(nome) {
    this.nome = nome;
    this.exec = function() {
        console.log("Executando...")
    };
}

const testeObj1 = new teste("João");
const testeObj2 = new teste("José");

console.log(testeObj1.nome);
console.log(testeObj2.nome);
testeObj2.exec();