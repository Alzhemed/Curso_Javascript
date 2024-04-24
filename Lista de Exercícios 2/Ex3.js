function calculaSalario(horasTrabalhadas, salarioHora) {
    return `Salário igual a R$ ${(horasTrabalhadas*salarioHora).toFixed(2)}`;
}

console.log(calculaSalario(160, 15));