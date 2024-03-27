//A função construtora funciona como um classe
function Carro(velocidadeMaxima = 200, delta = 5) {
    //Atributo privado
    let velocidadeAtual = 0;

    //Método público
    this.acelelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    //Método público
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}

const uno = new Carro;
uno.acelelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelelerar();
ferrari.acelelerar();
ferrari.acelelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof ferrari);
