let raio;
const pi = Math.PI;

raio = prompt("Digite o valor do raio: ");

area = pi*(raio**2);

alert(`O valor da área de uma circunferência que possui raio de ${raio} m é de aproximadamente: ${area.toFixed(2)} m2`);