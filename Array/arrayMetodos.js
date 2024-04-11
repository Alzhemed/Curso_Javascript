/*A constante sempre irá apontar para este array e ele pode ser alterado, mas
a variável não. Ela não pode apontar para outra coisa que não este array.*/
const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"];

pilotos.pop() //Remove o último elemento do array e o retorna.
console.log(pilotos);

pilotos.push("Verstappen"); //Adiciona um elemento na última posição.
console.log(pilotos);

pilotos.shift() //Remove o primeiro elemento do array e o retorna.
console.log(pilotos);

pilotos.unshift("Hamilton");
console.log(pilotos);

//O splice pode tanto adicionar como remover elementos.
//Adicionar:
pilotos.splice(2, 0, "Bottas", "Massa");
console.log(pilotos);

//Remover:
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); //Retorna um novo array que pode ser uma parte de um array já existente, ou ele inteiro.
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); //Para o final do slice, não inclui o elemento do índice informado.
console.log(algunsPilotos2);

