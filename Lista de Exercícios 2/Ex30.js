function obterMelhorEstudante(objEstudantes) {
    const arrayEstudantes = Object.entries(objEstudantes);
    const calcularMedia = (notaAcumulada, notaAtual) => notaAcumulada + notaAtual
    let melhorEstudante = arrayEstudantes[0];
    let melhorMedia = melhorEstudante[1].reduce(calcularMedia)/melhorEstudante[1].length;
    arrayEstudantes.forEach(estudante => {
        mediaEstudanteAtual = estudante[1].reduce(calcularMedia)/estudante[1].length;
        if(mediaEstudanteAtual > melhorMedia) {
            melhorEstudante = estudante;
            melhorMedia = melhorEstudante[1].reduce(calcularMedia)/melhorEstudante[1].length;
        }
    })

    return {nome: melhorEstudante[0],
    media: melhorMedia};
}

console.log(obterMelhorEstudante({"João": [8, 7.6, 8.9, 6], 
"Mariana": [9, 6.6, 7.9, 8], 
"Carla": [7, 7, 8, 9]}));