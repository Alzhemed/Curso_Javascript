//Com promise...
const http = require("http");

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`;

    return new Promise((resolve, reject) => { 
        http.get(url, res => {
            let resultado = "";

            res.on("data", dados => resultado += dados);

            res.on("end", () => {
                try{
                    resolve(JSON.parse(resultado));
                } catch(e) {
                    reject(e);
                }
            })
        })
    })
}

let nomes = [];

/* getTurma("A").then(alunos => {
    nomes = nomes.concat(alunos.map((aluno) => `A: ${aluno.nome}`));
    getTurma("B").then(alunos => {
        nomes = nomes.concat(alunos.map((aluno) => `B: ${aluno.nome}`));
        getTurma("C").then(alunos => {
            nomes = nomes.concat(alunos.map((aluno) => `C: ${aluno.nome}`));
            console.log(nomes);
        })
    })
}) */

//Esse método chama todas as promises de uma vez e aguarda elas serem respondidas ou rejeitadas.
Promise.all([getTurma("A"), getTurma("B"), getTurma("C")])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes));

getTurma("D").catch(e => console.log(e));