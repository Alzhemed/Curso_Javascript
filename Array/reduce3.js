Array.prototype.reduce2 = function(callback, initialValue) {
    acumulator = initialValue || this[0];
    initialPosition = initialValue ? 0 : 1;

    for(let i = initialPosition; i < this.length; i++) {
        acumulator = callback(acumulator, this[i], i, this);
    }

    return acumulator;
}

const alunos = [
    {nome: "João", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true}
]

const todosBolsistas = alunos.map(aluno => aluno.bolsista).reduce2((resultado, bolsista) => resultado && bolsista);

if(todosBolsistas) {
    console.log("Todos os alunos são bolsistas.");
} else {
    console.log("Nem todos os alunos são bolsistas.");
}

console.log("");

const algumBolsista = alunos.map(aluno => aluno.bolsista).reduce2((resultado, bolsista) => resultado || bolsista);

if(algumBolsista) {
    console.log("Pelo menos um dos alunos é bolsista.");
} else {
    console.log("Nenhum aluno é bolsista.");
}

console.log("");

const nums = [1, 2, 3, 4, 5, 6];

console.log(nums.reduce2((soma, num) => soma + num));
