function calculaFatorial(num) {
    let fatorial = 1;
    
    for(i = 1; i <= num; i++) {
        fatorial *= i;
    }

    return fatorial;
}

console.log(calculaFatorial(5));