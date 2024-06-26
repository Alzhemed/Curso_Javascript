String.prototype.firstLetterToUpperCase = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7];

/*A variável declarada no "for" é atribuída com o índice que corresponderá ao local do valor atual do atributo/elemento 
* dentro da estrutura de dados sobre a qual está iterando. Este índice é retornado como string.
*
*/
for (let i in notas) { 
  console.log(`Nota ${Number(i)+1} = ${notas[i]}`);
}

const pessoa = {
  nome: "Ana",
  sobrenome: "Silva",
  idade: 29,
  peso: 64
}

for (let atributo in pessoa) {
  console.log(`${atributo.firstLetterToUpperCase()}: ${pessoa[atributo]}`);
}