const soma = function (x, y) {
  return x + y;
}

//A operação padrão vai ser a soma, caso não seja passada uma outra função.
const imprimirResultado = function (a,b, operacao = soma) {
  console.log(operacao(a, b));
}

imprimirResultado(5, 10);
imprimirResultado(3, 4, soma);
imprimirResultado(6, 7, function (x, y) {
  return x-y;
});
imprimirResultado(3, 4, (x, y) => x * y);

const pessoa = {
  falar: function () {
    console.log("Olá!")
  }
}

pessoa.falar();
