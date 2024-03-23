function getInteiroAleatorioEntre(min = 0, max = 100) {
  if (max < min) {
    [min, max] = [max, min];
  }
  const valor = Math.floor(Math.random() * (max-min) + min);
  return valor;
}

let opcao = -1;
let qtdTentativas = 0;

 do {
  opcao = getInteiroAleatorioEntre(-1, 10);
  qtdTentativas++;
  console.log(`A opção escolhida foi: ${opcao}`);
} while (opcao != -1)

console.log(`A quantidade de tentativas até a opção certa ser escolhida foi: ${qtdTentativas}`);

console.log("Fim.")