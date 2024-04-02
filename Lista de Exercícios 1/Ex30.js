function verificaMaiorEMenor(conjunto = []) {
    let maiorNum = conjunto[0];
    let menorNum = conjunto[0];
    conjunto.forEach(num => {
        if(num > maiorNum) {
            maiorNum = num;
        } else if(num < menorNum) {
            menorNum = num;
        }
    })

    console.log(`Maior número do conjunto informado: ${maiorNum}`);
    console.log(`Menor número do conjunto informado: ${menorNum}`);
}

verificaMaiorEMenor([3, 6, 1, 2, 4, 9]);