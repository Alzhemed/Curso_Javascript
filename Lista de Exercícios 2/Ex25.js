function buscarPalavrasSemelhantes(palavraChave, palavras) {
    return palavras.filter(palavra => palavra.includes(palavraChave));
}

console.log(buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]));
console.log(buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]));