//Operador ... rest(juntar)/spread(espalhar)

//Usando spread com objeto
const funcionario = {nome: "Maria", salario: 12348.88};
//No caso, o spread vai pegar todos os atributos de um objeto e espalhar em outro.
const clone = {ativo: true, ...funcionario};

console.log(clone);

//Usando spread com array
const grupoA = ["João", "Glória", "Pedro"];
const grupoFinal = ["Maria", "Letícia", ...grupoA];

console.log(grupoFinal);
