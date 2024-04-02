function calculaNota(codigoAluno, n1, n2, n3) {
    const notas = [n1, n2, n3];
    let maiorNota = n1;
    let idxMaiorNota = 0;
    let situacao;

    for(n in notas) {
        if(notas[n] > maiorNota) {
            idxMaiorNota = n;
        }
    }
    
    const menoresNotas = notas.filter((n, i) => i != idxMaiorNota ? true: false);

    if(n1 == n2 && n2 == n3) {
        media = n1;
    } else {
        media = ((notas[idxMaiorNota] * 4) + (menoresNotas[0] * 3) + (menoresNotas[1] * 3))/10
    }
    

    if(media >= 5) {
        situacao = "Aprovado";
    } else {
        situacao = "Reprovado";
    }
    
    console.log(`Código do aluno: ${codigoAluno}`);
    console.log(`Notas: ${n1}, ${n2}, ${n3}`);
    console.log(`Média: ${media}`);
    console.log(`Situação: ${situacao}`);
}

calculaNota(100, 4, 5, 6);
console.log("");
calculaNota(20, 4, 5, 5);
console.log("");
calculaNota(10, 4, 4, 4);