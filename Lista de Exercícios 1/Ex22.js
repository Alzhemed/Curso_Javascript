function calculaJurosAnuidade(valor, mesPagamento) {
    //O vencimento do pagamento é em janeiro
    mesesAtraso = mesPagamento - 1;
    return valor * ((1 + 0.05) ** mesesAtraso);
}

console.log(`Valor de anuidade a ser pago: R$ ${calculaJurosAnuidade(300, 6).toFixed(2).replace(".", ",")}`);