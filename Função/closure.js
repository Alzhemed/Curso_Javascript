/*Closure é o escopo criado quando uma função é declarada.
* Esse escopo permite a função acessar e manipular variáveis externas à função.
* No caso abaixo a função vai procurar primeiro a variável dentro dela,
* como não encontrou, procurou no escopo imediatamente mais abrangente,
* que foi onde ela foi definida, dentro da função fora.
* Caso não existisse a declaração da variável "x" dentro da função fora,
* a função dentro iria procurar no escopo Global que é o próximo escopo
* mais abrangente.
*/

//Contexto léxico em ação!
const x = "Global";

function fora() {
  const x = "Local";
  function dentro() {
    return x;
  }
  return dentro;
}

const minhaFunção = fora();

console.log(minhaFunção());