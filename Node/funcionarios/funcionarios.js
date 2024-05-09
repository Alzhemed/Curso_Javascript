const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";

const axios = require("axios");

const resultadoRequisicao = axios.get(url).then(response => response.data);

async function buscarMCMS() {

    const listaFuncionarios = await resultadoRequisicao;

    console.log(listaFuncionarios.reduce((mCMS, funcionarioAtual) => {
        if(mCMS.genero == "M" || mCMS.pais != "China") {
            if(funcionarioAtual.genero == "F" && funcionarioAtual.pais == "China") {
                return funcionarioAtual;
            }
        } else if(funcionarioAtual.genero == "F" && funcionarioAtual.pais == "China" && funcionarioAtual.salario < mCMS.salario) {
            return funcionarioAtual;
        }
       
        return mCMS;

    }))

}

console.log(buscarMCMS());

/*Forma menos otimizada de resolver
// var mCMS = axios.get(url).then(response => {
//     return response.data.reduce((mCMS, funcionarioAtual) => {
//         if(mCMS.genero == "M" || mCMS.pais != "China") {
//             if(funcionarioAtual.genero == "F" && funcionarioAtual.pais == "China") {
//                 return funcionarioAtual;
//             }
//         } else if(funcionarioAtual.genero == "F" && funcionarioAtual.pais == "China" && funcionarioAtual.salario < mCMS.salario) {
//             return funcionarioAtual;
//         }
       
//         return mCMS;

//     })
// })

// function escreverMCMS() {
//     console.log(mCMS);
// }

// setTimeout(escreverMCMS, 1500);
*/