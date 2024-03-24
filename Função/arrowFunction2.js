function Pessoa() {
    this.idade = 0;

    /*A função arrow foi criada dentro do parâmetro de setInterval,
    * dessa forma o this vai apontar para a instância da função Pessoa
    * que está chamando a função setInterval e passando como parâmetro
    * a função arrow.
    */
    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000)
}

new Pessoa();