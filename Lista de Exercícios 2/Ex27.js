function inverterObjeto(obj) {
    const novoObj = {};
    //Object.entries(obj).forEach(chave => novoObj[chave[1]] = chave[0]); -> Versão mais eficiente
    const chavesInvertidas = Object.entries(obj).map(chaves => chaves.reverse());
    chavesInvertidas.forEach(chaveInvertida => novoObj[chaveInvertida[0]] = chaveInvertida[1]);
    return novoObj;
}

console.log(inverterObjeto({a: 1, b: 2, c: 3}));

