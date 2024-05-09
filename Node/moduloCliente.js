const moduloA = require("./moduloA");
const moduloB = require("./moduloB");

console.log(moduloA.cumprimento);
console.log(moduloA.bemVindo);
console.log(moduloA.mensagem);

console.log(moduloB.cumprimento);
moduloB.cumprimentar();

console.log(moduloA);
console.log(moduloB);