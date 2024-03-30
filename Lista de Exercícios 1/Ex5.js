function formatarParaReal(x) {
    return ("R$" + x.toFixed(2)).replace(".", ","); 
}

console.log(formatarParaReal(1.5 + 0.3));