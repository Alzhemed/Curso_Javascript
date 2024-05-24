//Versão mais otimizada do código para encontrar a mulher chinesa com menor salário

const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";

const axios = require("axios");

const chineses = f => f.pais === "China";
const mulheres = f => f.genero === "F";
const menorSalario = (funcAcum, funcAtual) => funcAcum.salario < funcAtual.salario ? funcAcum : funcAtual

const resultadoRequisicao = axios.get(url).then(response => {
    const funcionarios = response.data;

    const mCMS = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario);

    console.log(mCMS);
});

