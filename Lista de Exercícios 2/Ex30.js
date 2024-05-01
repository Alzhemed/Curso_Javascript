function obterMelhorEstudante(objEstudantes) {
    arrayEstudantes = Object.entries(objEstudantes);
    melhorEstudante = arrayEstudantes[0];
    melhorMedia = melhorEstudante[1].reduce((notaAcumulada, notaAtual) => notaAcumulada + notaAtual)/melhorEstudante[1].length;
    arrayEstudantes.forEach(estudante => {
        mediaEstudanteAtual = estudante[1].reduce((notaAcumulada, notaAtual) => notaAcumulada + notaAtual)/estudante[1].length;
        if(mediaEstudanteAtual > melhorMedia) {
            melhorEstudante = estudante;
            melhorMedia = melhorEstudante[1].reduce((notaAcumulada, notaAtual) => notaAcumulada + notaAtual)/melhorEstudante[1].length;
        }
    })

    return {nome: melhorEstudante[0],
    media: melhorMedia};
}

console.log(obterMelhorEstudante({"João": [8, 7.6, 8.9, 6], 
"Mariana": [9, 6.6, 7.9, 8], 
"Carla": [7, 7, 8, 9]}));