function calculaJurosSimples(valor, taxa, tempoAplicacao)  {
    return ("R$" + (valor * (1 + taxa * tempoAplicacao)).toFixed(2)).replace(".", ",");
}

function calculaJurosCompostos(valor, taxa, tempoAplicacao) {
    return ("R$" + (valor * ((1 + taxa) ** tempoAplicacao)).toFixed(2)).replace(".", ",");
}

console.log("Exemplo de juros de 15% aplicado no capital de R$100,00")
console.log(`Regime de juros simples: ${calculaJurosSimples(100, 0.15, 3)}`);
console.log(`Regime de juros compostos: ${calculaJurosCompostos(100, 0.15, 3)}`);