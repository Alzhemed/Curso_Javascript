const verificaNegativos = (conjunto = []) => {
    let qtdNegativos = 0;
    conjunto.forEach(num => {
        if(num < 0) {
            qtdNegativos += 1
        }
    })

    console.log(`Quantidade números negativos no conjunto informado: ${qtdNegativos}`);
}

verificaNegativos([-1, -2, 3]);