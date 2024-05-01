function contarPalavras(texto) {
    let qtdPalavras = 0;
    while(texto.includes(" ")) {
        qtdPalavras += 1;
        texto = texto.replace(" ", "");
    }

    return qtdPalavras + 1;
}

console.log(contarPalavras("Sou uma frase."));
console.log(contarPalavras("Me divirto aprendendo a programar."));