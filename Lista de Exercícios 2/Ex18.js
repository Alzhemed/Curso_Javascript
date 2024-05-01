function calcularDespesa(despesas) {
    return despesas.map(despesa => despesa.preco).reduce((valorAcumulado, valorAtual) => valorAcumulado + valorAtual);
}


console.log(calcularDespesa([{nome: "Jornal Online", categoria: "Informação", preco: 89.99},
{nome: "Cinema", categoria: "Entretenimento", preco: 150}]));

console.log(calcularDespesa([{nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
{nome: "MacBook Pro", categoria: "Eletrônicos", preco: 30999.90}]));