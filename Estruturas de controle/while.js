function getInteiroAleatorioEntre(min = 0, max = 100) {
  if (max < min) {
    [min, max] = [max, min];
  }
  const valor = Math.floor(Math.random() * (max-min) + min);
  return valor;
}

let opcao = 0;
let qtdTentativas = 0;

while (opcao != -1) {
  opcao = getInteiroAleatorioEntre(-1, 10);
  qtdTentativas++;
  console.log(`A opção escolhida foi: ${opcao}`);
}

console.log(`A quantidade de tentativas até a opção certa ser escolhida foi: ${qtdTentativas}`);

console.log("Fim.")