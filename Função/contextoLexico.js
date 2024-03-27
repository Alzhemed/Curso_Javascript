const valor = "Global";

function minhaFuncao() {
  console.log(valor);
}

/*Como a minhaFuncao não encontrou a variável dentro dela mesma,
* ela vai procurar a variável dentro do escopo mais abrangente de onde ela
* foi definida. Dessa forma, como ela foi definida dentro do escopo global,
* ela vai achar o valor como "Global".
*/
function exec() {
  const valor = "Local";
  minhaFuncao();
}

exec();