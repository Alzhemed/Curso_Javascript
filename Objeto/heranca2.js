//Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = "0"; //Evitar ao máximo adicionar atributos e comportamentos no prototype de Object.
const avo = {attr1: "A"};
//Para definir que um objeto está herdando outro, deve ser feito conforme a linha abaixo
const pai = {__proto__: avo, attr2: "B", attr3: "3"};
//Neste caso a preferência de busca do atributo é do objeto que é chamado.
//Ao chamar filho, vai buscar dentro dele primeiro, e somente caso não encontre,
//é que vai buscar na cadeia de protótipos.
const filho = {__proto__: pai, attr3: "C"};

console.log(filho.attr0);
console.log(filho.attr1, filho.attr2, filho.attr3);
console.log("");

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual} Km/h de ${this.velMax} Km/h`
    }
}

const ferrari = {
    modelo: "F40",
    velMax: 324 //Sombreamento do atributo do objeto carro ao herdar (shadowing)
}

const volvo = {
    modelo: "V40",
    //A palavra super serve para referenciar o protótipo.
    status () {
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerar(100);
console.log(volvo.status());

ferrari.acelerar(300);
console.log(ferrari.status());

