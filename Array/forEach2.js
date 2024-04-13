Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

const produtos = ["Vassoura", "Chinelo", "Rodo", "Água Sanitária"];

/*Outra forma de simular, definindo uma nova propriedade, assim como em um objeto,
já que um array é um objeto:

Object.defineProperty(produtos, "forEach2", {
    value: function(callback) {
        for(let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    },
    enumerable: false
})*/

produtos.forEach2((nome, indice) => console.log(`${indice + 1}) ${nome}`));