function analisaPontuacao(valores) {
    const pontuacao = valores.split(" ");
    let qtRecordes = 0;
    let maiorValor = 0;
    let menorValor = 0;
    let piorJogo = 0;
    //let valorAtual;

    /*for (p in pontuacao) {
        valorAtual = Number(pontuacao[p]);
        p = Number(p);
        if (p == 0) {
            maiorValor = valorAtual;
            menorValor = valorAtual;
        } else if (valorAtual > maiorValor) {
            maiorValor = valorAtual;
            qtRecordes++;
        } else if (valorAtual < menorValor) {
            menorValor = valorAtual;
            piorJogo = p + 1;
        }
    }
    */

    pontuacao.forEach((p, i) => {
        p = Number(p);
        if (i == 0) {
            maiorValor = p;
            menorValor = p;
            piorJogo = 1;
        } else if (p > maiorValor) {
            maiorValor = p;
            qtRecordes++;
        } else if (p < menorValor) {
            menorValor = p;
            piorJogo = i + 1;
        }
    })

    return {
        maiorPontuacao: maiorValor,
        menorPontuacao: menorValor,
        piorJogo,
        qtRecordes
    }

}

console.log(analisaPontuacao("10 20 20 8 25 3 0 30 1"));
