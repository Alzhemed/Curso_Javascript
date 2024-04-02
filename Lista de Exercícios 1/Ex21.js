function valorParaReal(valor) {
    return valor.toFixed(2).replace(".", ",");
}

function calculaValorPlano(idade) {
    valorBase = 100;
    adicionalIdade = 0;
    valorFinal = 0;

    if(idade < 10) {
        adicionalIdade = 80;
    } else if(idade >= 10 && idade <= 30) {
        adicionalIdade = 50;
    } else if(idade >= 30 && idade <= 60) {
        adicionalIdade = 95;
    } else if(idade > 60) {
        adicionalIdade = 130;
    }

    valorFinal = valorBase + adicionalIdade;

    console.log(`Valor base do plano: R$ ${valorParaReal(valorBase)}`);
    console.log(`Valor adicional com base na idade: R$ ${valorParaReal(adicionalIdade)}`);
    console.log(`Valor final do plano: R$ ${valorParaReal(valorFinal)}`);

}

calculaValorPlano(5)