//As tagged templates são usada para processar templates string dentro de uma função.

function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return "Outra string.";
}

const aluno = "João";
const situacao = "Aprovado";

console.log(tag `${aluno} está ${situacao}.`);