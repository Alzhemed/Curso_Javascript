console.log(soma(3, 7));

//Function declaration
/*Funções declaradas dessa forma são lidas antes do código em si pelo compilador
* do Javascript.
*/
function soma(a, b) {
    return a + b;
}

//Function expression
const sub = function (a, b) {
    return a-b;
}

console.log(sub(7, 3));

//Named function expression
const mult = function mult(a, b) {
    return a * b;
}

console.log(mult(7, 3));