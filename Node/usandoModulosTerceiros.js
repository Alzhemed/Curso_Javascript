/*Quando é informado só um nome no require,
*o Node procura na pasta node_modules por esse nome de pasta
*e caso encontre, procura o arquivo index.js que vai ter o código
*do que será exportado daquele módulo e importado no código que tem o require.
*/
const _ = require("lodash");

setInterval(() => console.log(_.random(1, 10)), 1000);
