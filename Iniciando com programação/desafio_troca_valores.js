let a = 7;
let b = 94;
let temp;

console.log(`Valor inicial de a: ${a}`);
console.log(`Valor inicial de b: ${b}`);

console.log("");

//Forma tradicional de trocar
//temp = a;
//a = b;
//b = temp;

//Forma do JavaScript de trocar
[a, b] = [b, a];

console.log(`Valor final de a: ${a}`);
console.log(`Valor final de b: ${b}`);