function converterParaReal(strings, ...variaveis) {
    const resultado = [];

    variaveis.forEach((valor, indice) => {
        let valorConvetido = isNaN(valor) ? valor : `R$${valor.toFixed(2).toString().replace(".", ",")}`
        resultado.push(strings[indice], valorConvetido);
    })

    return resultado.join("");
}

let preco = 29.9
let precoParcela = 11

console.log(converterParaReal `1x de ${preco} ou 3x de ${precoParcela}`);