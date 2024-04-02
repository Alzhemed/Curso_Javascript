function conceituaNotas(notas = []) {
    let conceito = "";

    for(let c = 0; c < notas.length; c++) {
        console.log(`Nota ${c+1}`);
        console.log(`Valor: ${notas[c]}`);
        if(notas[c] >= 0 && notas[c] <= 4.9) {
            conceito = "D"
        } else if (notas[c] >= 5 && notas[c] <= 6.9) {
            conceito = "C"
        } else if (notas[c] >= 7 && notas[c] <= 8.9) {
            conceito = "B"
        } else if (notas[c] >= 9 && notas[c] <= 10) {
            conceito = "A"
        } else {
            conceito = "Valor inválido para a nota informada."
        }
        console.log(`Conceito: ${conceito}`);
        console.log("");
    }
}

conceituaNotas([3.3, 5.6, 9.5, 8.2, "C"])