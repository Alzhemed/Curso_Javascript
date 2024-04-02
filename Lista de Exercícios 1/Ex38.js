function imprimeImpar(inicio = 0, fim = 100) {
    if(fim < inicio) {
        [inicio, fim] = [fim, inicio];
    }

    for(let n = inicio; n <= fim; n++) {
        if(n % 2 != 0) {
            console.log(n);
        }
    }
}

imprimeImpar();
console.log("");
imprimeImpar(100, 0);
console.log("")
imprimeImpar(10, 20);
