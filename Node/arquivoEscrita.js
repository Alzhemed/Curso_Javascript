const fs = require("fs");

const produto = {
    nome:"Galaxy S23 Ultra",
    preco: 7299.99,
    desconto: 0.15
}

fs.writeFile(__dirname + "/arquivoGerado.json", JSON.stringify(produto), error => {
    console.log(error || "Arquivo gerado com sucesso!");
})