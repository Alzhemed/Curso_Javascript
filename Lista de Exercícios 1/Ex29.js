function verificaIntervalo(conjunto = [], intervalo = [10, 20]) {
    let qtdNoIntervalo = 0;
    let qtdForaDoIntervalo = 0;
    for(n in conjunto) {
        if(conjunto[n] >= intervalo[0] && conjunto[n] <= intervalo[1]) {
            qtdNoIntervalo += 1;
        } else {
            qtdForaDoIntervalo += 1;
        }
    }

    console.log(`Quantidade de números dentro do intervalo: ${qtdNoIntervalo}`);
    console.log(`Quantidade de números fora do intervalo: ${qtdForaDoIntervalo}`);
}

verificaIntervalo([11, 15, 25, 13, 30]);
console.log("");
verificaIntervalo([11, 15, 25, 13, 30], [10, 30]);
