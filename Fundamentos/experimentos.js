let a = 3;

global.b = 3;

this.c = 5;
this.d = 7;
this.e = 10;

console.log(a);
console.log(global.b);
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports === this);
console.log(module.exports);

//Criando uma variável maluca: sem var e let!!!
abc = 3; //Não faça isso em casa!
console.log(global.abc);

//module.exports = {e: 456, f: false, g: "Teste"}


