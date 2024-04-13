const nums = [1, 2, 3, 4, 5];

/*A função callback do map deve retornar um valor para ser colocado no novo
array de mesmo tamanho que o original, do contrário o valor ficará como
undefined em todas as posições do novo array.*/
let resultado = nums.map(numero => numero * 2);

console.log(resultado);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraReal = e => `R$ ${e.toFixed(2).replace(".", ",")}`

resultado = nums.map(soma10).map(triplo).map(paraReal);

console.log(resultado);
