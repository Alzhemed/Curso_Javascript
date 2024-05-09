const moduloA = require("../../moduloA");
console.log(moduloA.bemVindo);

console.log("");

//Como a pasta está localizada em node_modules e possui o arquivo index.js,
//é possível importar colocando somente o nome da pasta.
const saudacao = require("saudacao");
console.log(saudacao.cumprimentar);

console.log("");

//Como possui o arquivo index.js, não é necessário colocar o nome do arquivo.
const c = require("./pastaC");
console.log(c.cumprimentar)

// const http = require("http");
// http.createServer((req, res) => {
//     res.write("Bem-vindo!");
//     res.end();
// }).listen(8080)