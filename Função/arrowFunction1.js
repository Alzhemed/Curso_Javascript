let dobro = function (a) {
    return 2 * a;
}

console.log(dobro(8));

//Redução da palavra chave function ao declarar uma função arrow
dobro = (a) => {
    return 2 * a;
}

console.log(dobro(5));

/*Por ter somente um parâmetro não é necessário colocar parênteses, ao mesmo tempo em
* que ao retirar as chaves temos um retorno implícito na função.
*/
dobro = a => 2 * a;

console.log(dobro(6));

let saudacao = function () {
    return "Olá!";
}

saudacao = () => "Olá!"; //Não possui parâmetros
saudacao = _ => "Olá!"; //Possui um parâmetro

console.log(saudacao());
