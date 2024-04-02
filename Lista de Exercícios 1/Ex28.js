function verificaParesEImpares(numeros = []) {
    let qtdPares = 0;
    let qtdImpares = 0;
    for(n in numeros) {
        if (numeros[n] % 2 == 0) {
            qtdPares += 1;
        } else {
            qtdImpares += 1;
        }
    }

    if(qtdPares == 1) {
        correcaoPar = "número par";
    } else if (qtdPares > 1) {
        correcaoPar = "números pares";
    }

    if(qtdImpares == 1) {
        correcaoImpar = "número ímpar";
    } else if (qtdImpares > 1) {
        correcaoImpar = "números ímpares";
    }

    if(qtdPares > 0 && qtdImpares > 0) {
        console.log(`O vetor informado possui ${qtdPares} ${correcaoPar} e ${qtdImpares} ${correcaoImpar}.`);
    } else if(qtdPares > 0 && qtdImpares == 0) {
        console.log(`O vetor informado possui ${qtdPares} ${correcaoPar} e nenhum número ímpar.`);
    } else if(qtdPares == 0 && qtdImpares > 0) {
        console.log(`O vetor informado não possui nenhum número par e possui ${qtdImpares} ${correcaoImpar}.`);
    } else {
        console.log("O vetor informado não possui nenhum número.");
    }
}

verificaParesEImpares([2]);

