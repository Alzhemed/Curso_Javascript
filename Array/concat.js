const filhas = ["Vanessa", "Larissa"];
const filhos = ["Lucas", "Pedro"];
const todos = filhas.concat(filhos, "José");
console.log(todos, filhas, filhos);

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]));