function Aula(nome, videoID) {
    this.nome = nome;
    this.videoID = videoID;
}

const aula1 = new Aula("Introdução", 123);
const aula2 = new Aula("Finalizando", 456);

console.log(aula1);
console.log(aula2);

//Simulando o operador "new"
function novo(f, ...params) {
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    return obj;
}

const aula3 = novo(Aula, "Continuação", 789);

console.log(aula3);
