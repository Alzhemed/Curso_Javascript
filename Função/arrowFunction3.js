let comparaComThis = function(param) {
    console.log(param === this);
}

comparaComThis(global);

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

//Essa função foi definida dentro de um módulo do node, e cada módulo representa um arquivo.
let comparaComThisArrow = param => console.log(param === this);

comparaComThisArrow(global);
comparaComThisArrow(module.exports);
comparaComThisArrow(this); //A palavra chave this neste caso se refere ao módulo e não ao objeto global.

comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj); //O this de uma função arrow não pode ser alterado, nem mesmo com a função bind.
comparaComThisArrow(module.exports);
