const { error } = require("console");
const fs = require("fs");

const caminho = __dirname + "/arquivo.json";

//Síncrono
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);

console.log("");

//Assíncrono
fs.readFile(caminho, "utf-8", (error, conteudo) => {
    //O arquivo foi lido como string
    const config = JSON.parse(conteudo);
    console.log(`${config.db.host}:${config.db.port}`);
})

const config = require("./arquivo.json")
console.log(config.db);

fs.readdir(__dirname, (error, arquivos) => {
    console.log("Arquivos da pasta:");
    console.log(arquivos);
})


