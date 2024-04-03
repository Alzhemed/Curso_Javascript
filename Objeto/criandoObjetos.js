//Usando a notação literal
const obj1 = {}
console.log(obj1);

//Object em JS
console.log(typeof Object);
console.log(typeof new Object);
const obj2 = new Object;
console.log(obj2);

//Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => preco * (1 - desc);
}
const p1 = new Produto("Vassoura", 10, 0.1);
const p2 = new Produto("MOP", 30, 0.15);
console.log(p1.getPrecoComDesconto());
console.log(p2.getPrecoComDesconto());

//Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas);
        }
    }
}

const f1 = criarFuncionario("João", 7980, 5);
const f2 = criarFuncionario("Maria", 11400, 1);

console.log(f1.getSalario());
console.log(f2.getSalario());

//Object.create
const filha = Object.create(null);
filha.nome = "Ana";
console.log(filha);

//Uma função famosa que retorna objeto...
const fromJSON = JSON.parse('{"info":"Sou um JSON"}');
console.log(fromJSON.info);
