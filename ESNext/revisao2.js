/*A função arrow funciona como uma função anônima mas que
*possui uma sintaxe mais simplificada, tendo como padrão o
*exemplo a seguir:
*/

const soma = (a, b) => a + b;

/*Como a função ficou armazenada em uma váriavel, basta utilizar o nome da variável
*como o nome da função para utilizá-la.
*/

console.log(soma(4, 6));

/*Caso possua apena um parâmetro, não é necessário utilizar os parênteses.
*Sendo necessário utilizar mais de uma linha de código, depois do "=>", pode ser
*colocado o bloco de código como em uma função normal, "{}", e escrever o código normalmente lá.
*No caso de possuir somente uma linha e não ter o bloco definido, o retorno dessa função é implícito/automático.
*Caso o código da linha não resulte em um retorno válido, é retornado null.
*/

/*Falando sobre o contexto léxico, no caso da função arrow, o contexto léxico dela, ou escopo, será
*sempre fixado no local onde ela foi definida, diferente das outras formas de definir função em JS.
*/

/*No caso abaixo ela foi definida no escopo global, e o this sempre apontará para o módulo do Node.
*Por mais que tente alterar a força, uma vez definido o escopo da função arrow, ele não pode ser
*alterado.
*/
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({})

lexico1();
lexico2();

/*Para todos os tipos de função é possível definir parâmetros padrão, de forma que
*caso o parâmetro de um função não seja passado ou seja passado como undefined em sua chamada, ele é preenchido com
*o que foi definido como padrão.
*/

function log(texto = "Node") {
    console.log(texto);
}

log();
log("Teste");

/*O operador rest tem a função de agrupar vários valores informados separadamente
*em um array, de forma que possam ser acessados mais facilmente. O seu uso se dá pela
*sintaxe ...nomeDoArrayRest.
*/

function total(...numeros) {
    let total = 0;

    numeros.forEach(n => total += n);

    return total;
}

console.log(total(2, 5, 8));

