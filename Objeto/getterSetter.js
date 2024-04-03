const sequencia = {
    _valor: 1, //Convenção de que uma variável que começa com _, tem a pretensão de ser privada.
    get valor() {return this._valor++}, 
    //O ++ aumenta o valor na própria variável, caso fosse pra retornar somente o valor somado a mais 1 sem alterar
    //a variável em si, o código deveria ser: return this.valor + 1.
    //Na linha acima se trata de um pós incremento, primeiro é retornado o valor para depois ele ser incrementado.
    //Para incrementar antes de retornar, seria necessário colocar o operador antes, por exemplo: ++this._valor.
    set valor(valor) {
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

//Ao chamar o valor como se fosse uma variável, na verdade estamos usando
//o método get ao apenas retornar o valor, e ao tentar atribuir, o código
//está usando o método set.
console.log(sequencia.valor)
sequencia.valor = 1;
console.log(sequencia.valor);

