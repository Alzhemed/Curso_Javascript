console.log(typeof Array);
console.log(typeof new Array);
console.log(typeof []);

let aprovados = new Array("Ana", "Bia", "Carlos");

console.log(aprovados);

aprovados = ["Ana", "Bia", "Carlos"];

console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = "Paulo";
aprovados.push("Pedro");

console.log(aprovados.length);

aprovados[9] = "Rafael";
console.log(aprovados.length);

console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort();
console.log(aprovados);

//Apaga o valor e insere undefined na posição informada do array.
delete aprovados[1];
console.log(aprovados);

aprovados = ["Bia", "Carlos", "Ana"];
//Ao remover, remove a posição inteira e não somente o valor.
aprovados.splice(1, 1);

console.log(aprovados);


