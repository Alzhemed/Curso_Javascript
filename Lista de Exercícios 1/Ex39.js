function trocaConjunto(conj1 = [1, 2, 3, 4], conj2 = [5, 6, 7, 8]) {
    console.log("Antes troca:");
    console.log(`Conjunto 1: ${conj1}`);
    console.log(`Conjunto 2: ${conj2}`);

    console.log("");
    [conj1, conj2] = [conj2, conj1];

    console.log("Depois da troca:");
    console.log(`Conjunto 1: ${conj1}`);
    console.log(`Conjunto 2: ${conj2}`);
}

trocaConjunto()