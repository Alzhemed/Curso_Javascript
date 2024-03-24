const pessoa = {
    saudacao: "Bom dia!",
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar();

const falar = pessoa.falar;
falar(); //Conflito entre paradigmas Funcional e Orientado a objetos

pessoa2 = {
    saudacao: "Boa noite!",
    falar: falar
}

pessoa2.falar();

/*A função bind retorna uma nova função que possui o mesmo corpo da original, mas que permite vincular
* um objeto para que o this dessa nova função sempre aponte para ele.
*/
const falarDePessoa = pessoa.falar.bind(pessoa); 

falarDePessoa();