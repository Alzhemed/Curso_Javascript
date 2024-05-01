function contarCaractere(caractere, texto) {
    qtdCaractere = 0;
    while(texto.includes(caractere)) {
        qtdCaractere += 1;
        texto = texto.replace(caractere, "");
    }

    return qtdCaractere;
}

console.log(contarCaractere("r", "A sorte favorece os audazes."));
console.log(contarCaractere("c", "Conhece-te a ti mesmo"));
console.log(contarCaractere("a", "Banana"));