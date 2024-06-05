//O let possui escopo de bloco, enquanto o var possui escopo global e de função.
{
    var a = 2;
    let b = 3;
    console.log(b);
}

console.log(a);

/*A template string é uma string interpolada, delimitada por crases "``",
*na qual pode ser inserida variáveis, resultado de funções, propriedades de objeto e
*etc.... Para mostrar um valor deve ser interpolado(interpretado) ele deve ser apresentado
*conforme o exemplo a seguir: ${soma}.
*
*A template string também possui a vantagem de poder ser quebrada em várias linhas.
*/

let produto = "Ipad";
let preco = "R$ 4599,99";

console.log(`Produto: ${produto}`);
console.log(`Preço: ${preco}`);

/*O operador destructuring permite retirar de dentro de uma estrutura de dados
*qualquer valor de forma que possa ser utilizado imediatamente ou atribuído em
*outra variável sem utilizar os acessos padrões que já conhecemos dessas estruturas.
*/

const [l, e, ...tras] = "Cod3r";

console.log(l, e, tras);

const [x, ,y] = [1, 2, 3];

console.log(x, y);

const {idade: i, nome} = {nome: "Ana", idade: 21};

console.log(i, nome);
