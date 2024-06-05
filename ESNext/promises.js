//A promise é um objeto que ajuda a separar quando algum código é bem ou mal sucedido e como tratar esses resultados.
//Ela é muito útil para códigos assíncronos, cujo retorno pode demorar mais.
function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //O resolve passará o parâmetro para a função que for passada para o then.
            //O resolve aceita apenas um parâmetro.
            resolve(frase);
        }, segundos * 1000)
    })
}

falarDepoisDe(3, "Olá!")
    //Para o caso de aceitação/resolução da promise, deve ser chamado o método .then().
    //O resultado de um then é passado para o próximo then sempre que ele é finalizado.
    .then(frase => frase.concat("!!"))
    .then(outraFrase => console.log(outraFrase))
    //Para o de rejeição deve ser chamado o método .catch().
    //Deve ser chamado apenas uma vez para tratar a rejeição.
    .catch(e => console.log(e));