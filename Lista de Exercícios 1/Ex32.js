function calculaMedia(conjunto = []) {
    let somaConjunto = 0;

    conjunto.forEach(num => somaConjunto += num);

    const media = somaConjunto/conjunto.length

    console.log(`A média dos números do conjunto informado é: ${media}`)
}

calculaMedia([1, 2, 3]);