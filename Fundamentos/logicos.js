function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTV50 = trabalho1 && trabalho2;
    //const comprarTV32 = !!(trabalho1 ^ trabalho2); //bitwise xor
    const comprarTV32 = trabalho1 != trabalho2;
    manterSaudavel = !comprarSorvete; //Operador unário

    return {comprarSorvete, 
        comprarTV50, 
        comprarTV32, 
        manterSaudavel}; 
        //Ao não informar a chave para um valor no objeto, o JavaScript entende e usa o nome da variável como nome da chave do objeto, e o valor
        //será o que estiver contido na variável.
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
