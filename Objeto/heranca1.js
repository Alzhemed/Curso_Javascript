const ferrari = {
    modelo: "F40",
    velMax: 324
}

const volvo = {
    modelo: "V40",
    velMax: 200
}

//__proto__ serve para acessar o objeto pai, ou procurar algum atributo e/ou comportamento
//na cadeia de herança do objeto filho
console.log(ferrari.__proto__);
//Object.prototype é o protótipo de mais alto nível, depois dele não tem mais nenhum
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);

function MeuObjeto() {};

console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);