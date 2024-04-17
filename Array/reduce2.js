const alunos = [
    {nome: "João", nota: 7.3, bolsista: false},
    {nome: "Maria", nota: 9.2, bolsista: true},
    {nome: "Pedro", nota: 9.8, bolsista: false},
    {nome: "Ana", nota: 8.7, bolsista: true}
]

//Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = alunos.map(aluno => aluno.bolsista).reduce((resultado, bolsista) => resultado && bolsista);

if(todosBolsistas) {
    console.log("Todos os alunos são bolsistas.");
} else {
    console.log("Nem todos os alunos são bolsistas.");
}

//Desafio 2: Algum aluno é bolsista?
const algumBolsista = alunos.map(aluno => aluno.bolsista).reduce((resultado, bolsista) => resultado || bolsista);

if(algumBolsista) {
    console.log("Pelo menos um dos alunos é bolsista.");
} else {
    console.log("Nenhum aluno é bolsista.");
}
