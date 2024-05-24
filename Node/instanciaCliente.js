contadorA = require("./instanciaUnica");
contadorB = require("./instanciaUnica");

contadorC = require("./instanciaNova")();
contadorD = require("./instanciaNova")();

contadorA.inc();
contadorA.inc();

console.log(contadorA.valor)
console.log(contadorB.valor)

contadorC.inc();
contadorC.inc();
contadorC.inc();

contadorD.inc();
contadorD.inc();
contadorD.inc();
contadorD.inc();

console.log(contadorC.valor);
console.log(contadorD.valor);
