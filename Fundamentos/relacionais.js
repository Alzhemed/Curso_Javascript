console.log("1)", "'1' == 1:", "1" == 1); //Comparação de valor
console.log("2)", "'1' === 1:", "1" === 1); //Comparação de valor e tipo
console.log("3)", "'3' != 3:", "3" != 3); //Diferença
console.log("4)", "'3' !== 3:", "3" !== 3); //Diferença com observação do tipo
console.log("5)", "3 < 2:", 3 < 2); //Menor que
console.log("6)", "3 <= 3:", 3 <= 3); //Menor ou igual a
console.log("7)", "3 > 2:", 3 > 2); //Maior que
console.log("8)", "2 >= 2:", 2 >= 2); //Maior ou igual a

const d1 = new Date(0);
const d2 = new Date(0);

console.log("9)", "d1 === d2:", d1 === d2); //Comparação de endereço de memória
console.log("10)", "d1 == d2:", d1 == d2); //Comparação de endereço de memória
console.log("11)", "d1.getTime() === d2.getTime():", d1.getTime() === d2.getTime());
console.log("12)", "d1.getTime() == d2.getTime():", d1.getTime() == d2.getTime());
console.log("13)", "undefined == null:", undefined == null);
console.log("14)", "undefined === null:", undefined === null);