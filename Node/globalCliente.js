/*Ao fazer alguma alteração no objeto global, não é necessário atribuir o módulo em uma variável para utilizar,
*pois ao usar o "require", o Node já carregará o objeto global do modulo exterior no módulo atual.
*/
require("./global");

MinhaApp.saudacao();

MinhaApp.nome = "Sistema Secundário";
console.log(MinhaApp.nome);