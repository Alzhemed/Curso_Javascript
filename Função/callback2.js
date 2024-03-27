const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

//Sem callback
const notasBaixas1 = [];

for (let n in notas) {
    if (notas[n] < 7) {
        notasBaixas1.push(notas[n]);
    }
}

console.log(notasBaixas1);

//Com callback
const notasBaixas2 = notas.filter(n => n < 7);

console.log(notasBaixas2);