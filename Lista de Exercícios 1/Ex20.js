function calculaCedulas(valor) {
    console.log(`Valor informado: R$ ${valor.toFixed(2).replace(".", ",")}`);
    let n100 = 0, n50 = 0, n20 = 0, n10 = 0, n5 = 0, n2 = 0, n1 = 0;
    while(valor > 0) {
        if(valor-100 >= 0) {
            valor -= 100;
            n100 += 1;
        } else if(valor-50 >= 0) {
            valor -= 50;
            n50 += 1;
        } else if(valor-20 >= 0) {
            valor -= 20;
            n20 += 1;
        } else if(valor-10 >= 0) {
            valor -= 10;
            n10 += 1;
        } else if(valor-5 >= 0) {
            valor -= 5;
            n5 += 1;
        } else if(valor-2 >= 0) {
            valor -= 2;
            n2 += 1;
        } else if(valor-1 >= 0) {
            valor -= 1;
            n1 += 1;
        }
    }

    const cedulas = [n100, n50, n20, n10, n5, n2, n1];

    for(nota in cedulas) {
        qtdCedula = cedulas[nota];
        nota = Number(nota);
        if(qtdCedula > 0) {
            if(qtdCedula == 1) {
                correcaoTexto = "nota"
            } else {
                correcaoTexto = "notas"
            }
            switch(nota) {
                case 0:
                    console.log(`${qtdCedula} ${correcaoTexto} de R$ 100,00.`)
                    break;
                case 1:
                    console.log(`${qtdCedula} ${correcaoTexto} de R$ 50,00.`)
                    break;
                case 2:
                    console.log(`${qtdCedula} ${correcaoTexto} de R$ 20,00.`)
                    break;
                case 3:
                    console.log(`${qtdCedula} ${correcaoTexto} de R$ 10,00.`)
                    break;
                case 4:
                    console.log(`${qtdCedula} ${correcaoTexto} de R$ 5,00.`)
                    break;
                case 5:
                    console.log(`${qtdCedula} ${correcaoTexto} de R$ 2,00.`)
                    break;
                case 6:
                    console.log(`${qtdCedula} ${correcaoTexto} de R$ 1,00.`)
                    break;
                default:
                    console.log("Cédula inválida.");
            }
        }
    }
}

calculaCedulas(47);