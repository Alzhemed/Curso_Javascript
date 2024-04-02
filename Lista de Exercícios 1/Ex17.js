function calculaAumento(salarioAntigo, planoTrabalho) {
    planoTrabalho = planoTrabalho.toUpperCase();
    let aumento = 0;
    let salarioNovo = 0;
    switch(planoTrabalho) {
        case "A":
            aumento = 0.10;
            break;
        case "B":
            aumento = 0.15;
            break;
        case "C":
            aumento = 0.20;
            break;
        default:
            console.log("O plano de trabalho informado é inválido.")
    }

    if(aumento != 0) {
        salarioNovo = salarioAntigo + (salarioAntigo*aumento);
        console.log(`Salário antigo: R$ ${salarioAntigo.toFixed(2).replace(".",",")}`);
        console.log(`Porcentagem de aumento: ${aumento*100}%`);
        console.log(`Novo salário: R$ ${salarioNovo.toFixed(2).replace(".",",")}`);
        console.log(`Valor do aumento: R$ ${(salarioNovo - salarioAntigo).toFixed(2).replace(".",",")}`);
    }
}

calculaAumento(2000, "A");