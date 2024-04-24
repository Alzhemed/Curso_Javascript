function verificarIntervalo(numero, minimo, maximo, inclusivo = false) {
    let resultado = "";

    if(maximo < minimo) {
        [minimo, maximo] = [maximo, minimo];
    }

    if(inclusivo) {
        if(numero >= minimo && numero <= maximo) {
            resultado = `O número ${numero} está no intervalo(inclusivo) de ${minimo} a ${maximo}.`;
        } else {
            resultado = `O número ${numero} não está no intervalo(inclusivo) de ${minimo} a ${maximo}.`;
        }
    } else {
        if(numero > minimo && numero < maximo) {
            resultado = `O número ${numero} está no intervalo(exclusivo) de ${minimo} a ${maximo}.`;
        } else {
            resultado = `O número ${numero} não está no intervalo(exclusivo) de ${minimo} a ${maximo}.`;
        }
    }

    return resultado;
}

console.log(verificarIntervalo(10, 0, 50, true));
console.log(verificarIntervalo(10, 50, 0, false));
console.log(verificarIntervalo(100, 0, 100, false));