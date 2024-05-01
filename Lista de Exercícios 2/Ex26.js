function removerVogais(texto) {
    texto = texto.replace(/a/g, "");
    texto = texto.replace(/e/g, "");
    texto = texto.replace(/i/g, "");
    texto = texto.replace(/o/g, "");
    texto = texto.replace(/u/g, "");

    return texto;
}

console.log(removerVogais("Banana"));
console.log(removerVogais("Fundamentos"));
console.log(removerVogais("Cod3r"));