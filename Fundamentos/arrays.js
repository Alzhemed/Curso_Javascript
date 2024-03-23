const valores = [7.7, 8.2, 9.5, 10.8];
console.log(valores[1], valores[3]);

valores[4] = 10;
console.log(valores);
console.log(valores.length);

console.log(valores.push({id: 3}, false, null, "teste"));

console.log(valores.pop());
delete valores[0];

console.log(valores);

console.log(typeof valores);
